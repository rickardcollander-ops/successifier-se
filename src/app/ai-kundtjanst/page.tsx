import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import BookingEmbed from "@/components/site/BookingEmbed";
import { InboxMockup, KnowledgeBaseMockup } from "@/components/site/SupportMockups";
import { getPostsByCategory } from "@/lib/blog";

const PAGE_URL = "https://www.successifier.se/ai-kundtjanst";

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

const metrics = [
  { value: "100 000+", label: "Hanterade mail", sub: "lästa, kategoriserade och besvarade i systemet" },
  { value: "100 %", label: "Får svarsförslag", sub: "av inkommande mail får ett färdigt förslag till kundsvar" },
  { value: "25 %", label: "Kan skickas direkt", sub: "av svaren kan skickas helt utan att ändra en bokstav" },
];

const features = [
  {
    title: "AI-svarsförslag med säkerhetspoäng",
    text: "Varje ärende får ett färdigt svarsförslag baserat på kundens historik och er kunskapsbas, med en säkerhetspoäng som visar hur trygg AI:n är i svaret.",
  },
  {
    title: "Automatisk kategorisering",
    text: "Inkorgen sorteras automatiskt i Nya, Öppna, Granskning, Skickade och Stängda, med dublettrensning och hantering av studsade mail.",
  },
  {
    title: "Kunskapsbas som lär sig",
    text: "Manuella artiklar kompletteras med kunskap som AI:n lär sig direkt från era mailkonversationer, så svaren blir bättre över tid.",
  },
  {
    title: "Kundhistorik & liknande ärenden",
    text: "Se kundens tidigare ärenden och relaterade fall direkt i vyn, så att svaret alltid har rätt sammanhang.",
  },
  {
    title: "Integrationer",
    text: "Koppla mot era befintliga verktyg som Billecta för fakturor och Resend för e-post, kunddata och utskick samlas på ett ställe.",
  },
  {
    title: "Granskning innan utskick",
    text: "Inget skickas utan att ni vill det. AI:n föreslår, ni granskar och godkänner, full mänsklig kontroll i varje steg.",
  },
];

const steps = [
  { num: "01", title: "Koppla inkorgen", text: "Anslut era supportadresser. Successifier Support börjar läsa, kategorisera och samla ärenden automatiskt." },
  { num: "02", title: "AI föreslår svar", text: "För varje ärende genereras ett svarsförslag med säkerhetspoäng, baserat på kunskapsbas och kundhistorik." },
  { num: "03", title: "Ni granskar & skickar", text: "Godkänn, justera eller skriv om. Varje godkänt svar gör AI:n vassare till nästa gång." },
];

const faqs = [
  {
    q: "Vad är en AI-kundtjänst för e-post?",
    a: "Ett system som läser inkommande kundmail, kategoriserar dem och tar fram ett färdigt svarsförslag utifrån er kunskapsbas och kundens historik. Successifier Support gör detta för varje mail och sätter en säkerhetspoäng på förslaget, så att ni vet vilka svar som kan gå direkt och vilka som bör granskas.",
  },
  {
    q: "Skickas svaren automatiskt utan att någon granskar dem?",
    a: "Inte om ni inte vill. Standardläget är att AI:n föreslår och en människa godkänner, justerar eller skriver om innan något skickas. Ni kan sedan välja att låta svar med hög säkerhetspoäng i utvalda kategorier gå ut automatiskt.",
  },
  {
    q: "Hur lång tid tar det att komma igång?",
    a: "Ni kopplar era supportadresser, och systemet börjar läsa och kategorisera direkt. I de flesta införanden får teamet användbara svarsförslag inom de första dagarna, och kvaliteten förbättras i takt med att ni godkänner svar och kunskapsbasen växer.",
  },
  {
    q: "Hur hanteras personuppgifter och GDPR?",
    a: "Kunddata används bara för att besvara det aktuella ärendet och för att bygga er egen kunskapsbas. Vi går igenom dataflöden, lagring och personuppgiftsbiträdesavtal tillsammans med er innan driftsättning, så att lösningen uppfyller era krav.",
  },
  {
    q: "Vilka system kan Successifier Support integreras med?",
    a: "Vanliga e-postplattformar för inkorgen samt verktyg som Billecta för fakturor och Resend för utskick. Andra integrationer, till exempel mot CRM eller ärendesystem, byggs vid behov via API.",
  },
  {
    q: "Vad kostar en AI-kundtjänst för mail?",
    a: "Priset beror på mailvolym och integrationsbehov. Vi visar lösningen på era riktiga ärenden i en demo och ger en uppskattning av tidsbesparing och kostnad utifrån er volym.",
  },
];

export const metadata = {
  title: "AI-kundtjänst för e-post: Successifier Support besvarar kundmailen",
  description:
    "Successifier Support är en AI-kundtjänst för e-post som läser, kategoriserar och besvarar kundmail med svarsförslag, säkerhetspoäng och en kunskapsbas som lär sig. Över 100 000 hanterade mail.",
  keywords: [
    "AI-kundtjänst",
    "AI-kundtjänst e-post",
    "automatisera kundmail",
    "AI-svarsförslag kundtjänst",
    "kunskapsbas AI support",
    "AI i kundservice",
    "Successifier Support",
  ],
  alternates: {
    canonical: "/ai-kundtjanst",
  },
  openGraph: {
    title: "AI-kundtjänst för e-post: Successifier Support besvarar kundmailen · Successifier",
    description:
      "AI-kundtjänst som läser, kategoriserar och besvarar kundmail, med svarsförslag, säkerhetspoäng och en kunskapsbas som lär sig av era konversationer.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-kundtjänst för e-post: Successifier Support · Successifier",
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
        "@id": `${PAGE_URL}#software`,
        name: "Successifier Support",
        alternateName: "AI-kundtjänst för e-post",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Customer service software",
        operatingSystem: "Web",
        url: PAGE_URL,
        description:
          "AI-kundtjänst som läser, kategoriserar och besvarar inkommande kundmail med svarsförslag, säkerhetspoäng och en självlärande kunskapsbas. Människan granskar och godkänner innan utskick.",
        featureList: features.map((f) => f.title),
        inLanguage: "sv-SE",
        publisher: { "@id": "https://www.successifier.se/#organization" },
        provider: { "@id": "https://www.successifier.se/#organization" },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "SEK", description: "Pris efter mailvolym och integrationsbehov. Demo på era riktiga ärenden." },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "AI-kundtjänst för e-post",
        serviceType: "AI-kundtjänst / automatiserad e-postsupport",
        url: PAGE_URL,
        areaServed: "SE",
        provider: { "@id": "https://www.successifier.se/#organization" },
        description: "Införande och drift av AI-driven mailsupport: koppling av inkorg, kunskapsbas, svarsförslag med säkerhetspoäng och granskningsflöde.",
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
        name: "AI-kundtjänst för e-post: Successifier Support",
        inLanguage: "sv-SE",
        isPartOf: { "@id": "https://www.successifier.se/#website" },
        about: { "@id": `${PAGE_URL}#software` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.successifier.se/" },
          { "@type": "ListItem", position: 2, name: "Successifier Support", item: PAGE_URL },
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
                <li aria-current="page" style={{ color: "var(--ink-soft)" }}>Successifier Support</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap items-center gap-2 uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                <span>Successifier Support</span>
                <span style={{ color: "var(--faint-2)" }}>·</span>
                <span style={{ color: "var(--faint-2)" }}>AI-kundtjänst för mail</span>
              </div>
              <h1 className="max-w-[18ch] text-[clamp(38px,5vw,68px)] font-medium leading-[1.04] tracking-[-0.018em]" style={serif}>
                AI som läser, sorterar och besvarar kundmailen åt er.
              </h1>
              <p className="mt-6 max-w-[620px] text-[18px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
                Successifier Support tar emot era supportmail, kategoriserar dem automatiskt och
                föreslår färdiga svar med säkerhetspoäng, byggt på en kunskapsbas som lär sig av
                varje konversation. Över <strong style={{ color: "var(--ink)", fontWeight: 600 }}>100 000 mail</strong> har
                redan hanterats — och ni behåller kontrollen och godkänner innan något skickas.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-7">
                <a
                  href="#boka"
                  className="inline-flex items-center gap-2 rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                >
                  Boka demo
                </a>
                <a
                  href="#sa-fungerar-det"
                  className="inline-flex items-center gap-2 pb-[3px] text-[15.5px] font-medium no-underline"
                  style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}
                >
                  Se hur det fungerar →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Produktmockup: ärendevy + AI-svar */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Så ser ärendevyn ut">
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
            <div className="mb-8 max-w-2xl">
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Så ser det ut</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
                Ärende in, färdigt svar ut
              </h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                Varje inkommande mail kategoriseras, kopplas till kundens historik och får ett färdigt
                svarsförslag med säkerhetspoäng. Ni granskar och skickar — eller låter de självsäkra
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
          </div>
        </section>

        {/* Features */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Funktioner">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Funktioner</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>Allt teamet behöver i en vy</h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                Från inkommet mail till godkänt svar, Successifier Support samlar ärenden, kunddata
                och AI-förslag på ett ställe.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[17px] font-medium" style={serif}>{f.title}</div>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge base */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Kunskapsbas">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-[100px] sm:px-10 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Kunskapsbas</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
                En kunskapsbas som lär sig av varje konversation
              </h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                Manuella artiklar kompletteras med kunskap som AI:n plockar upp direkt från era
                mailkonversationer. Ju fler ärenden ni löser, desto vassare blir svaren — och AI:n
                föreslår själv nya artiklar för återkommande frågor.
              </p>
            </div>
            <KnowledgeBaseMockup />
          </div>
        </section>

        {/* How it works */}
        <section id="sa-fungerar-det" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Så fungerar det">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Så fungerar det</div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>Tre steg till svar</h2>
            </div>
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.num} className="relative pt-[22px]" style={{ borderTop: "1px solid var(--hairline-strong)" }}>
                  <div className="absolute left-0 top-[-5px] h-[9px] w-[9px] rounded-full" style={{ background: "var(--accent)" }} />
                  <div style={{ ...mono, fontSize: "12px", color: "var(--faint-2)", marginBottom: "12px" }}>{s.num}</div>
                  <div className="text-[21px] font-medium tracking-[-0.01em]" style={serif}>{s.title}</div>
                  <p className="mt-2 text-[15px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>{s.text}</p>
                </div>
              ))}
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
                Successifier Support
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Vanliga frågor">
          <div className="mx-auto max-w-[900px] px-6 py-[100px] sm:px-10">
            <div className="mb-[18px] uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>Vanliga frågor</div>
            <h2 className="mb-12 text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
              Frågor och svar om AI-kundtjänst för e-post
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

        {/* CTA / Boka demo */}
        <section id="boka" aria-label="Boka demo">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="rounded-[6px] p-8 sm:p-14" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-[-0.015em]" style={serif}>Vill du se Successifier Support live?</h2>
                <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-pretty" style={{ color: "rgba(242,238,230,.72)" }}>
                  Boka en demo på en timme så visar vi hur AI:n hanterar era riktiga ärenden, och
                  vad det skulle spara i tid. Välj en tid som passar nedan.
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
