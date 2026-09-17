import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import BookingEmbed from "@/components/site/BookingEmbed";
import { InboxMockup } from "@/components/site/SupportMockups";
import { getPostsByCategory } from "@/lib/blog";
import { ORG, SUPPORTIFIER } from "@/lib/site";

// /ai-kundtjanst är ingången till vår produkt Supportifier. Sidan presenterar
// Supportifier som Successifiers produkt, beskriver hur vi inför den och
// länkar vidare till supportifier.se för plattformsdetaljer, priser och demo.
// Produktdjupet ligger på supportifier.se så att domänerna inte konkurrerar
// om samma frågor.

const PAGE_URL = "https://www.successifier.se/ai-kundtjanst";

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

const metrics = [
  { value: "100 000+", label: "Hanterade mail", sub: "lästa, kategoriserade och besvarade i Supportifier" },
  { value: "100 %", label: "Får svarsförslag", sub: "av inkommande mail får ett färdigt förslag till kundsvar" },
  { value: "25 %", label: "Kan skickas direkt", sub: "av svaren kan skickas helt utan att ändra en bokstav" },
];

const channels = [
  { title: "Hjälpcenter", text: "Publikt hjälpcenter där kunder hittar svar själva, byggt på samma kunskapsbas som övriga kanaler.", href: "https://supportifier.se/hjalpcenter" },
  { title: "AI-chatt och livechatt", text: "AI svarar direkt och eskalerar till en människa när det behövs.", href: "https://supportifier.se/ai-chatt" },
  { title: "AI-formulär", text: "Formulär som förstår frågan, föreslår svar och skapar ärende med rätt kategori.", href: "https://supportifier.se/ai-formular" },
  { title: "Inkorg med AI-stöd", text: "Supportmail kategoriseras och får svarsförslag med säkerhetspoäng. Teamet granskar och skickar.", href: "https://supportifier.se/inkorg" },
  { title: "Kundportal", text: "Kunden ser sina ärenden, svar och status på ett ställe.", href: "https://supportifier.se/kundportal" },
];

const roles = [
  {
    title: "Supportifier: plattformen",
    text: "En gemensam kunskapsbas byggd på era dokument, er webbplats och tidigare ärenden driver alla kanaler. Kunddata stannar inom EU/EES och används inte för att träna AI-modeller.",
    linkLabel: "Läs om plattformen på supportifier.se",
    href: SUPPORTIFIER.platformUrl,
  },
  {
    title: "Successifier: införandet",
    text: "Vi kartlägger ärendetyper och volymer, bygger kunskapsbasen, kopplar integrationer och inför automationen i tre nivåer med QA och KPI-styrning runt.",
    linkLabel: "Så arbetar vi med contact center-automation",
    href: "/contact-center-automation",
  },
];

const faqs = [
  {
    q: "Vad är Supportifier?",
    a: "Supportifier är en svensk AI-plattform för kundservice, utvecklad av Successifier AB. En gemensam kunskapsbas driver hjälpcenter, AI-chatt, AI-formulär, supportinkorg med AI-svarsförslag och kundportal. Plattformen har en egen webbplats på supportifier.se.",
  },
  {
    q: "Vad är skillnaden mellan Successifier och Supportifier?",
    a: "Successifier är konsultbolaget som kartlägger, bygger och driftsätter AI-lösningar. Supportifier är produkten vi utvecklat för AI-kundtjänst. Ni kan köpa Supportifier med eller utan vårt konsultstöd för införandet.",
  },
  {
    q: "Skickas svaren automatiskt utan att någon granskar dem?",
    a: "Inte om ni inte vill. Standardläget är att AI:n föreslår och en människa godkänner, justerar eller skriver om innan något skickas. Ni kan sedan låta svar med hög säkerhetspoäng i utvalda kategorier gå ut automatiskt.",
  },
  {
    q: "Hur lång tid tar det att komma igång?",
    a: "Ni kopplar era supportadresser och systemet börjar läsa och kategorisera direkt. I de flesta införanden får teamet användbara svarsförslag inom de första dagarna, och granskad automatik i utvalda kategorier nås normalt inom fyra veckor.",
  },
  {
    q: "Hur hanteras personuppgifter och GDPR?",
    a: "Kunddata används bara för att besvara det aktuella ärendet och för att bygga er egen kunskapsbas. Data stannar inom EU/EES och används inte för att träna AI-modeller. Vi går igenom dataflöden, lagring och personuppgiftsbiträdesavtal innan driftsättning.",
  },
  {
    q: "Vad kostar Supportifier?",
    a: "Priset består av tre delar: plattform och drift (efter kanaler, volym och AI-användning), en engångskostnad för införandet och eventuella integrationer. Inget pris per ärende eller per användare. Detaljer finns på supportifier.se/priser.",
  },
];

export const metadata = {
  title: "Supportifier: AI-kundtjänst från Successifier",
  description:
    "Supportifier är Successifiers AI-plattform för kundservice: kunskapsbas, hjälpcenter, AI-chatt, AI-formulär, inkorg med svarsförslag och kundportal. Över 100 000 hanterade mail. Vi inför den hos er.",
  keywords: [
    "Supportifier",
    "AI-kundtjänst",
    "AI-kundtjänst e-post",
    "AI-plattform kundservice",
    "automatisera kundmail",
    "AI-svarsförslag kundtjänst",
    "kunskapsbas AI support",
    "Successifier",
  ],
  alternates: {
    canonical: "/ai-kundtjanst",
  },
  openGraph: {
    title: "Supportifier: AI-kundtjänst från Successifier · Successifier",
    description:
      "Vår produkt för AI-kundtjänst: en kunskapsbas som driver hjälpcenter, AI-chatt, AI-formulär, inkorg med svarsförslag och kundportal. Vi inför den hos er.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supportifier: AI-kundtjänst från Successifier",
    description:
      "AI som läser, sorterar och föreslår svar på kundmail, med säkerhetspoäng och mänsklig granskning innan utskick.",
  },
};

export default function AiKundtjanstPage() {
  const guidePosts = getPostsByCategory("customer-success").slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://supportifier.se/#software",
        name: SUPPORTIFIER.name,
        alternateName: "AI-plattform för kundservice",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Customer service software",
        operatingSystem: "Web",
        url: SUPPORTIFIER.url,
        sameAs: [SUPPORTIFIER.url],
        description: SUPPORTIFIER.description,
        featureList: channels.map((c) => c.title),
        inLanguage: "sv-SE",
        publisher: { "@id": ORG.id },
        provider: { "@id": ORG.id },
        creator: { "@id": ORG.id },
        offers: {
          "@type": "Offer",
          url: SUPPORTIFIER.pricingUrl,
          availability: "https://schema.org/InStock",
          priceCurrency: "SEK",
          description: "Pris efter kanaler, volym och AI-användning, plus engångskostnad för införande. Inget pris per ärende eller användare.",
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Införande av Supportifier (AI-kundtjänst)",
        serviceType: "AI-kundtjänst / införande och integration",
        url: PAGE_URL,
        areaServed: "SE",
        provider: { "@id": ORG.id },
        description: "Kartläggning av ärendetyper, uppbyggnad av kunskapsbas, integrationer och införande av AI-svarsförslag i tre automationsnivåer med QA och KPI-styrning.",
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Supportifier: AI-kundtjänst från Successifier",
        inLanguage: "sv-SE",
        isPartOf: { "@id": "https://www.successifier.se/#website" },
        about: { "@id": "https://supportifier.se/#software" },
        significantLink: SUPPORTIFIER.url,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.successifier.se/" },
          { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.successifier.se/tjanster" },
          { "@type": "ListItem", position: 3, name: "Supportifier", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader locale="sv" />

      <main aria-label="Huvudinnehåll">
        {/* Hero */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Introduktion">
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 md:py-24">
            <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/tjanster" className="no-underline" style={{ color: "var(--faint)" }}>Tjänster</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" style={{ color: "var(--ink-soft)" }}>Supportifier</li>
              </ol>
            </nav>
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_.9fr]">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-2 uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                  <span>Vår produkt</span>
                  <span style={{ color: "var(--faint-2)" }}>·</span>
                  <span style={{ color: "var(--faint-2)" }}>AI-plattform för kundservice</span>
                </div>
                <h1 className="max-w-[18ch] text-[clamp(38px,5vw,68px)] font-medium leading-[1.04] tracking-[-0.018em]" style={serif}>
                  Supportifier: AI-kundtjänsten vi byggt själva.
                </h1>
                <p className="mt-6 max-w-[620px] text-[18px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
                  Supportifier är Successifiers plattform för AI-kundtjänst. En gemensam kunskapsbas
                  driver hjälpcenter, AI-chatt, AI-formulär, supportinkorg med svarsförslag och
                  kundportal. Över <strong style={{ color: "var(--ink)", fontWeight: 600 }}>100 000 mail</strong> har
                  hanterats i plattformen, och ni godkänner innan något skickas.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-7">
                  <a
                    href={SUPPORTIFIER.url}
                    className="inline-flex items-center gap-2 rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
                    style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                  >
                    Till supportifier.se →
                  </a>
                  <a
                    href="#boka"
                    className="inline-flex items-center gap-2 pb-[3px] text-[15.5px] font-medium no-underline"
                    style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}
                  >
                    Boka en genomgång
                  </a>
                </div>
              </div>

              <aside
                id="kort-svar"
                className="rounded-[6px] p-6"
                style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}
                aria-label="Kort svar"
              >
                <div className="mb-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>Kort svar</div>
                <p className="text-[15.5px] leading-[1.62]" style={{ color: "var(--ink-soft)" }}>
                  Supportifier är en svensk AI-plattform för kundservice, utvecklad av Successifier AB
                  (org.nr {ORG.orgNr}) i Stockholm. Plattformen finns på{" "}
                  <a href={SUPPORTIFIER.url} className="no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline-strong)" }}>supportifier.se</a>.
                  Successifier inför den hos svenska B2B-bolag: kartläggning, kunskapsbas,
                  integrationer och automation i tre nivåer med människan i loopen.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Två roller: produkt + införande */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Produkt och införande">
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="mb-10 max-w-2xl">
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Produkt och konsult</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
                Plattformen heter Supportifier. Införandet gör Successifier.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {roles.map((r) => (
                <div key={r.title} className="flex flex-col rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <h3 className="text-[21px] font-medium leading-[1.2] tracking-[-0.01em]" style={serif}>{r.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{r.text}</p>
                  {r.href.startsWith("http") ? (
                    <a href={r.href} className="mt-5 text-[14px] font-medium no-underline" style={{ color: "var(--accent)" }}>{r.linkLabel} →</a>
                  ) : (
                    <Link href={r.href} className="mt-5 text-[14px] font-medium no-underline" style={{ color: "var(--accent)" }}>{r.linkLabel} →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produktmockup: inkorg + AI-svar */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Så ser inkorgen ut">
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
            <div className="mb-8 max-w-2xl">
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Så ser det ut</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
                Ärende in, färdigt svar ut
              </h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                Varje inkommande mail kategoriseras, kopplas till kundens historik och får ett färdigt
                svarsförslag med säkerhetspoäng. Ni granskar och skickar, eller låter de självsäkra
                svaren gå direkt.
              </p>
            </div>
            <InboxMockup />
            <p className="mt-4 text-[12px]" style={{ ...mono, color: "var(--faint-2)" }}>
              Illustration. Kunduppgifter är anonymiserade.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Nyckeltal">
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="mb-10 uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>
              Resultat i siffror
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[clamp(44px,5vw,60px)] font-medium leading-none tracking-[-0.02em]" style={serif}>{m.value}</div>
                  <div className="mt-3 text-[15px] font-medium" style={{ color: "var(--ink)" }}>{m.label}</div>
                  <p className="mt-1 text-[13px] leading-[1.5]" style={{ color: "var(--faint-2)" }}>{m.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>
              I Supportifier har över 100 000 kundmail lästs, kategoriserats och besvarats. 100 procent
              av inkommande mail får ett färdigt svarsförslag och cirka 25 procent av svaren kan skickas
              utan att ändra en bokstav.
            </p>
          </div>
        </section>

        {/* Kanaler */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Kanaler">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Fem kanaler, en kunskapsbas</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>Det Supportifier täcker</h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                Kunskapsbasen byggs en gång, från era dokument, er webbplats och tidigare ärenden, och
                används i alla kanaler. Detaljer per kanal finns på supportifier.se.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="flex flex-col rounded-[6px] p-6 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  <h3 className="text-[17px] font-medium" style={serif}>{c.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{c.text}</p>
                  <span className="mt-4 text-[13px] font-medium" style={{ color: "var(--accent)" }}>Läs mer på supportifier.se →</span>
                </a>
              ))}
              <div className="flex flex-col justify-center rounded-[6px] p-6" style={{ border: "1px dashed var(--hairline-strong)" }}>
                <div className="text-[13px] uppercase" style={{ ...mono, letterSpacing: "0.14em", color: "var(--faint-2)" }}>Mer om plattformen</div>
                <ul className="mt-3 space-y-2 text-[14.5px]">
                  {[
                    [SUPPORTIFIER.onboardingUrl, "Införandet"],
                    [SUPPORTIFIER.integrationsUrl, "Integrationer"],
                    [SUPPORTIFIER.securityUrl, "Säkerhet och data"],
                    [SUPPORTIFIER.pricingUrl, "Priser"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline)" }}>{label} →</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Före/efter */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Från manuellt till AI-drivet">
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
            <div
              className="relative h-[240px] w-full overflow-hidden rounded-[6px] sm:h-[340px] md:h-[420px]"
              style={{ border: "1px solid var(--hairline)" }}
            >
              <Image
                src="/delad.png"
                alt="Före och efter: från manuell ärendehantering med papper och anteckningar till ett samlat AI-drivet dashboard"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-6">
              <span className="uppercase" style={{ ...mono, fontSize: "11.5px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>
                Fig. 02 — Från manuellt till AI-drivet
              </span>
              <span className="uppercase" style={{ ...mono, fontSize: "11.5px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>
                Supportifier
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Vanliga frågor">
          <div className="mx-auto max-w-[900px] px-6 py-[100px] sm:px-10">
            <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Vanliga frågor</div>
            <h2 className="mb-12 text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
              Frågor och svar om Supportifier
            </h2>
            <div style={{ borderBottom: "1px solid var(--hairline-strong)" }}>
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="grid grid-cols-1 gap-x-10 gap-y-3 px-1 py-[28px] md:grid-cols-[1fr_1.3fr]"
                  style={{ borderTop: "1px solid var(--hairline-strong)" }}
                >
                  <h3 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>{f.q}</h3>
                  <p className="text-[15.5px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides / intern länkning */}
        {guidePosts.length > 0 && (
          <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Fördjupning">
            <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-[560px]">
                  <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Fördjupning</div>
                  <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
                    Läs vidare om AI i kundtjänst och Customer Success
                  </h2>
                </div>
                <Link href="/blog" className="text-[14.5px] no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}>
                  Alla artiklar →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {guidePosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-[6px] p-6 no-underline transition-colors hover:bg-[color:var(--paper)]"
                    style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                  >
                    <h3 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>{p.excerpt}</p>
                    <span className="mt-4 text-[13px] font-medium" style={{ color: "var(--accent)" }}>Läs artikeln →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA / Boka */}
        <section id="boka" aria-label="Boka genomgång">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="rounded-[6px] p-8 sm:p-14" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-[-0.015em]" style={serif}>Vill du se Supportifier på era riktiga ärenden?</h2>
                <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-pretty" style={{ color: "rgba(242,238,230,.72)" }}>
                  Boka en genomgång så visar vi hur AI:n hanterar era ärenden och vad det skulle spara
                  i tid. Välj en tid nedan, eller boka direkt på{" "}
                  <a href={SUPPORTIFIER.bookUrl} className="no-underline" style={{ color: "var(--on-accent)", borderBottom: "1px solid rgba(242,238,230,.4)" }}>supportifier.se/boka</a>.
                </p>
              </div>
              <div className="mx-auto mt-9 max-w-[760px]">
                <BookingEmbed onAccent />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
