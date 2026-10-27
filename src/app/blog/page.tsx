import Link from "next/link";
import { CLUSTERS, CLUSTER_ORDER, SITE_URL, clusterHref, getAllPosts, getClusterPosts } from "@/lib/blog";
import { dict } from "@/lib/i18n";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PostCard from "@/components/blog/PostCard";

const t = dict.sv;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;
const serif = { fontFamily: "var(--font-spectral)" } as const;

// Antal artiklar per ämne på översikten; resten finns på ämnessidan.
const PER_TOPIC = 3;

export const metadata = {
  title: t.blog.metaTitle,
  description: t.blog.metaDescription,
  alternates: {
    canonical: "/blog",
    languages: {
      "sv-SE": "/blog",
      "x-default": "/blog",
    },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const pillars = CLUSTER_ORDER.flatMap((c) => getClusterPosts(c).filter((p) => p.pillar));
  const topics = CLUSTER_ORDER.map((c) => ({ cluster: c, posts: getClusterPosts(c) })).filter((x) => x.posts.length > 0);
  const latest = posts.slice(0, 6);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: t.blog.heading, item: `${SITE_URL}/blog` },
        ],
      },
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: `${t.blog.heading} · Successifier`,
        description: t.blog.metaDescription,
        inLanguage: "sv-SE",
        url: `${SITE_URL}/blog`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        author: { "@id": `${SITE_URL}/#rickard-collander` },
        hasPart: topics.map(({ cluster }) => ({
          "@type": "CollectionPage",
          "@id": `${SITE_URL}${clusterHref(cluster)}#collection`,
          name: CLUSTERS[cluster].label,
          url: `${SITE_URL}${clusterHref(cluster)}`,
        })),
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${SITE_URL}/blog/${post.slug}#article`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          author: { "@id": `${SITE_URL}/#rickard-collander` },
          url: `${SITE_URL}/blog/${post.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <SiteHeader locale="sv" />

      <main className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10" aria-label={t.blog.heading}>
        <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{t.blog.heading}</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-[clamp(34px,4.4vw,52px)] font-medium tracking-[-0.018em]" style={serif}>{t.blog.heading}</h1>
          <p className="mt-4 text-[17px] leading-[1.6]" style={{ color: "var(--muted)" }}>{t.blog.description}</p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12" style={{ color: "var(--faint)" }}>{t.blog.noPosts}</p>
        ) : (
          <>
            <nav aria-label={t.blog.topicsLabel} className="mt-10 flex flex-wrap gap-2">
              {topics.map(({ cluster, posts: list }) => (
                <a
                  key={cluster}
                  href={`#${cluster}`}
                  className="rounded-full px-4 py-2 text-[13.5px] no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                  style={{ border: "1px solid var(--hairline)", color: "var(--ink-soft)" }}
                >
                  {CLUSTERS[cluster].short} <span style={{ color: "var(--faint-2)" }}>{list.length}</span>
                </a>
              ))}
            </nav>

            {pillars.length > 0 && (
              <section className="mt-14" aria-labelledby="borja-har">
                <div className="mb-6 max-w-2xl">
                  <h2 id="borja-har" className="text-[28px] font-medium tracking-[-0.012em]" style={serif}>{t.blog.startHereLabel}</h2>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{t.blog.startHereDescription}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {pillars.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )}

            {topics.map(({ cluster, posts: list }) => {
              const rest = list.filter((p) => !p.pillar);
              const shown = (rest.length > 0 ? rest : list).slice(0, PER_TOPIC);
              return (
                <section key={cluster} id={cluster} className="mt-16 scroll-mt-24" aria-labelledby={`${cluster}-rubrik`}>
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" style={{ borderTop: "1px solid var(--hairline)", paddingTop: "28px" }}>
                    <div className="max-w-2xl">
                      <h2 id={`${cluster}-rubrik`} className="text-[26px] font-medium tracking-[-0.012em]" style={serif}>
                        <Link href={clusterHref(cluster)} className="no-underline" style={{ color: "var(--ink)" }}>{CLUSTERS[cluster].label}</Link>
                      </h2>
                      <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{CLUSTERS[cluster].description}</p>
                    </div>
                    <Link href={clusterHref(cluster)} className="shrink-0 text-[14px] no-underline" style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}>
                      Alla {list.length} {t.blog.guidesCount} →
                    </Link>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {shown.map((post) => (
                      <PostCard key={post.slug} post={post} showTopic={false} />
                    ))}
                  </div>
                </section>
              );
            })}

            <section className="mt-16" aria-labelledby="senast">
              <h2 id="senast" className="mb-6 text-[26px] font-medium tracking-[-0.012em]" style={{ ...serif, borderTop: "1px solid var(--hairline)", paddingTop: "28px" }}>
                {t.blog.latestLabel}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
