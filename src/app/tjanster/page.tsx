import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { ORG, SERVICE_PAGES, SITE_URL, SUPPORTIFIER } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/tjanster`;

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

export const metadata: Metadata = {
  title: "Tjänster: AI-agenter, GEO/SEO, Customer Success, contact center",
  description:
    "Successifiers tjänster för svenska B2B-bolag: AI-agenter och agentic AI, GEO och SEO med SAMA, Customer Success, contact center-automation och AI-kundtjänstplattformen Supportifier.",
  alternates: { canonical: "/tjanster" },
  openGraph: {
    type: "website",
    title: "Tjänster · Successifier",
    description: "AI-agenter, GEO/SEO med SAMA, Customer Success, contact center-automation och Supportifier.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
};

const overview = [
  {
    heading: "Vad gör Successifier?",
    text: `Successifier AB (org.nr ${ORG.orgNr}) är en svensk konsult inom AI, automation och Customer Success med säte i Stockholmsområdet. Vi bygger och driftsätter AI-agenter och automationsflöden, etablerar Customer Success- och supportfunktioner och driver SEO och GEO med den egna plattformen SAMA. Vi utvecklar också AI-kundtjänstplattformen Supportifier.`,
  },
  {
    heading: "Hur arbetar vi?",
    text: "Alla uppdrag följer samma princip: vi bygger och driftsätter, och lämnar efter oss ett system ert team driver vidare. Fast pris för analys- och designfasen (2–4 veckor), därefter löpande stöd per månad eller programbaserat upplägg.",
  },
  {
    heading: "Hur snabbt går det?",
    text: "Första workshop inom 1–2 veckor. AI-agenter går från start till produktion på 3–6 veckor. Contact center-automation når granskad automatik inom fyra veckor. Customer Success-program följer en 30/60/90-dagarsplan.",
  },
];

export default function TjansterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Tjänster",
        description: metadata.description,
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORG.id },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: SERVICE_PAGES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.label,
            url: `${SITE_URL}${s.href}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Tjänster", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="sv" />

      <main aria-label="Huvudinnehåll">
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Introduktion">
          <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-14 sm:px-10 md:pt-24">
            <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" style={{ color: "var(--ink-soft)" }}>Tjänster</li>
              </ol>
            </nav>
            <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Tjänster</div>
            <h1 className="max-w-[18ch] text-[clamp(38px,5vw,66px)] font-medium leading-[1.04] tracking-[-0.018em]" style={serif}>
              Sex ingångar, samma princip: vi bygger och driftsätter.
            </h1>
            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
              Välj det erbjudande som ligger närmast er fråga. Varje sida beskriver vad som ingår,
              hur lång tid det tar, vad det kostar och vilka resultat vi levererat.
            </p>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Alla tjänster">
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE_PAGES.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex flex-col rounded-[6px] p-6 no-underline transition-colors hover:bg-[color:var(--paper)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  <div className="text-[12px]" style={{ ...mono, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="mt-2 text-[22px] font-medium leading-[1.2] tracking-[-0.01em]" style={serif}>{s.label}</h2>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{s.short}</p>
                  <span className="mt-5 text-[13px] font-medium" style={{ color: "var(--accent)" }}>Läs mer →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-[14px]" style={{ color: "var(--faint)" }}>
              Supportifier är vår produkt och har en egen webbplats:{" "}
              <a href={SUPPORTIFIER.url} className="no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline-strong)" }}>supportifier.se</a>.
            </p>
          </div>
        </section>

        <section id="fakta" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Fakta i korthet">
          <div className="mx-auto max-w-[1000px] px-6 py-[100px] sm:px-10">
            <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Fakta i korthet</div>
            <dl style={{ borderTop: "1px solid var(--hairline)" }}>
              {overview.map((o) => (
                <div key={o.heading} className="grid grid-cols-1 gap-x-10 gap-y-2 py-[26px] md:grid-cols-[.9fr_1.4fr]" style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <dt className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>{o.heading}</dt>
                  <dd className="text-[15.5px] leading-[1.62]" style={{ color: "var(--muted)" }}>{o.text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Link
                href="/#kontakt"
                className="inline-flex items-center rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
                style={{ background: "var(--accent)", color: "var(--on-accent)" }}
              >
                Boka strategisamtal (30 min)
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
