import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { CLUSTERS, getAllPosts, getClusterPosts } from "@/lib/blog";
import { FOUNDER, ORG, PAGE_UPDATED, SITE_URL, founderPersonSchema } from "@/lib/site";

const PAGE_URL = FOUNDER.url;

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

export const metadata: Metadata = {
  title: "Rickard Collander – 20+ år inom kundservice och kontaktcenter",
  description:
    "Rickard Collander grundade Successifier AB och har över 20 års erfarenhet av kundservice och kontaktcenter från bland annat Scania, Releasy och Telia.",
  alternates: { canonical: FOUNDER.path },
  openGraph: {
    type: "profile",
    title: "Rickard Collander · Successifier",
    description: "Över 20 års erfarenhet av kundservice och kontaktcenter. Grundare av Successifier AB.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
    firstName: FOUNDER.givenName,
    lastName: FOUNDER.familyName,
  },
};

export default function RickardCollanderPage() {
  const posts = getAllPosts();
  const clusterPosts = getClusterPosts("kontaktcenter");
  const otherPosts = posts.filter((p) => !clusterPosts.some((c) => c.slug === p.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "sv-SE",
        dateModified: PAGE_UPDATED[FOUNDER.path],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": FOUNDER.id },
      },
      founderPersonSchema(),
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: FOUNDER.name, item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="sv" />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10" aria-label="Om Rickard Collander">
        <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{FOUNDER.name}</li>
          </ol>
        </nav>

        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
            <Image src="/rc2.jpg" alt={FOUNDER.name} width={240} height={240} className="h-full w-full object-cover" priority />
          </div>
          <div>
            <div className="uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
              Författare och grundare
            </div>
            <h1 className="mt-1 text-[clamp(32px,4.4vw,48px)] font-medium leading-[1.08] tracking-[-0.018em]" style={serif}>
              {FOUNDER.name}
            </h1>
            <p className="mt-2 text-[15px]" style={{ color: "var(--faint)" }}>{FOUNDER.jobTitle}</p>
          </div>
        </header>

        <section className="mt-10 space-y-4 text-[17px] leading-[1.65]" style={{ color: "var(--ink-soft)" }}>
          <p>
            Rickard Collander har arbetat med kundservice och kontaktcenter i över 20 år, bland annat på Scania,
            Releasy (över 350 medarbetare) och Telia. Han grundade {ORG.legalName} 2026 för att hjälpa svenska
            bolag att införa AI i kundservice och kontaktcenter på ett sätt som håller i drift, inte bara i en pilot.
          </p>
          <p>
            På Successifier leder han uppdrag inom AI-automation i kontaktcenter, AI-agenter och Customer Success,
            och han har tagit fram AI-kundtjänstplattformen Supportifier. Artiklarna på bloggen bygger på den
            erfarenheten: vad som faktiskt fungerar när AI möter ärendeflöden, bemanning, kvalitetsuppföljning och
            svenska kunders förväntningar.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="expertis">
          <h2 id="expertis" className="text-[24px] font-medium tracking-[-0.01em]" style={serif}>Expertområden</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FOUNDER.knowsAbout.map((k) => (
              <li key={k} className="rounded-[3px] px-3 py-1 text-[13.5px]" style={{ border: "1px solid var(--hairline)", color: "var(--ink-soft)" }}>{k}</li>
            ))}
          </ul>
        </section>

        {clusterPosts.length > 0 && (
          <section className="mt-12" aria-labelledby="kontaktcenter">
            <h2 id="kontaktcenter" className="text-[24px] font-medium tracking-[-0.01em]" style={serif}>{CLUSTERS.kontaktcenter.label}</h2>
            <ul className="mt-4 space-y-3">
              {clusterPosts.map((p) => (
                <li key={p.slug} className="text-[15px] leading-[1.55]">
                  <Link href={`/blog/${p.slug}`} className="font-medium no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline-strong)" }}>{p.title}</Link>
                  {p.answers && <span style={{ color: "var(--muted)" }}> – {p.answers}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12" aria-labelledby="artiklar">
          <h2 id="artiklar" className="text-[24px] font-medium tracking-[-0.01em]" style={serif}>Övriga artiklar av Rickard</h2>
          <ul className="mt-4 space-y-2">
            {otherPosts.map((p) => (
              <li key={p.slug} className="text-[15px] leading-[1.55]">
                <Link href={`/blog/${p.slug}`} className="no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline)" }}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[14.5px]">
          <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer me" className="no-underline" style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}>
            Rickard på LinkedIn →
          </a>
          <a href={`mailto:${ORG.email}`} className="no-underline" style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}>
            {ORG.email}
          </a>
          <Link href="/#kontakt" className="no-underline" style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}>
            Boka ett samtal →
          </Link>
        </section>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
