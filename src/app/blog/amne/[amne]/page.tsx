import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLUSTERS, CLUSTER_ORDER, SITE_URL, clusterHref, getClusterPosts, isCluster, relatedServices } from "@/lib/blog";
import { dict } from "@/lib/i18n";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PostCard from "@/components/blog/PostCard";

const t = dict.sv;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;
const serif = { fontFamily: "var(--font-spectral)" } as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return CLUSTER_ORDER.filter((c) => getClusterPosts(c).length > 0).map((amne) => ({ amne }));
}

export async function generateMetadata({ params }: { params: Promise<{ amne: string }> }): Promise<Metadata> {
  const { amne } = await params;
  if (!isCluster(amne)) return {};
  const c = CLUSTERS[amne];
  return {
    title: `${c.label}: guider`,
    description: c.description,
    alternates: { canonical: clusterHref(amne), languages: { "sv-SE": clusterHref(amne), "x-default": clusterHref(amne) } },
    openGraph: { type: "website", title: c.label, description: c.description, url: `${SITE_URL}${clusterHref(amne)}`, siteName: "Successifier.se", locale: "sv_SE" },
  };
}

// Ämnessida i kunskapsbasen: huvudguiden först, sedan alla artiklar i ämnet.
export default async function TopicPage({ params }: { params: Promise<{ amne: string }> }) {
  const { amne } = await params;
  if (!isCluster(amne)) notFound();
  const posts = getClusterPosts(amne);
  if (posts.length === 0) notFound();
  const c = CLUSTERS[amne];
  const url = `${SITE_URL}${clusterHref(amne)}`;
  const pillar = posts.find((p) => p.pillar);
  const rest = posts.filter((p) => p !== pillar);
  const services = relatedServices(posts[0].slug);
  const others = CLUSTER_ORDER.filter((o) => o !== amne && getClusterPosts(o).length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: c.label,
        description: c.description,
        url,
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
        about: c.label,
        publisher: { "@id": `${SITE_URL}/#organization` },
        dateModified: posts.reduce((acc, p) => (p.updated > acc ? p.updated : acc), ""),
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: t.blog.heading, item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: c.label, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="sv" />

      <main className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10" aria-label={c.label}>
        <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="no-underline" style={{ color: "var(--faint)" }}>{t.blog.heading}</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{c.short}</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <div className="mb-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
            {t.blog.heading} · {posts.length} {t.blog.guidesCount}
          </div>
          <h1 className="text-[clamp(32px,4.2vw,48px)] font-medium leading-[1.1] tracking-[-0.018em]" style={serif}>{c.label}</h1>
          <p className="mt-4 text-[17px] leading-[1.6]" style={{ color: "var(--muted)" }}>{c.description}</p>
        </div>

        {pillar && (
          <section className="mt-12" aria-labelledby="huvudguide">
            <h2 id="huvudguide" className="mb-4 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
              {t.blog.startHereLabel}
            </h2>
            <div className="max-w-3xl">
              <PostCard post={pillar} showImage showTopic={false} />
            </div>
          </section>
        )}

        <section className="mt-14" aria-labelledby="alla-guider">
          <h2 id="alla-guider" className="mb-6 text-[26px] font-medium tracking-[-0.012em]" style={serif}>
            {pillar ? "Fördjupningar" : "Alla guider"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} showTopic={false} />
            ))}
          </div>
        </section>

        {services.length > 0 && (
          <aside className="mt-16" aria-label={t.blog.relatedServicesHeading}>
            <div className="mb-4 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
              {t.blog.relatedServicesHeading}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-[6px] p-5 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  <div className="text-[16px] font-medium" style={serif}>{s.label} →</div>
                  <p className="mt-1 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>{s.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}

        <nav className="mt-16" aria-label={t.blog.topicsLabel} style={{ borderTop: "1px solid var(--hairline)", paddingTop: "28px" }}>
          <div className="mb-4 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
            Fler ämnen
          </div>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o}
                href={clusterHref(o)}
                className="rounded-full px-4 py-2 text-[13.5px] no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                style={{ border: "1px solid var(--hairline)", color: "var(--ink-soft)" }}
              >
                {CLUSTERS[o].label}
              </Link>
            ))}
          </div>
        </nav>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
