import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

// ───────────────────────────────────────────────────────────────────
// TODO: Ersätt platshållarvärdena nedan med riktiga siffror.
// Demon visar 1 773 hanterade ärenden, övriga värden är exempel.
// ───────────────────────────────────────────────────────────────────
const metrics = [
  { value: "70 %", label: "Andel AI-besvarade", sub: "av inkommande mail får ett färdigt svarsförslag" },
  { value: "< 2 min", label: "Svarstid", sub: "från inkommet mail till föreslaget svar" },
  { value: "1 700+", label: "Hanterade ärenden", sub: "kategoriserade och besvarade i systemet" },
  { value: "95 %", label: "Träffsäkerhet", sub: "av AI-svaren godkänns utan omskrivning" },
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

export const metadata = {
  title: "Successifier Support · AI som besvarar kundmailen",
  description:
    "Successifier Support är en AI-kundtjänst som läser, kategoriserar och besvarar kundmail, med svarsförslag, säkerhetspoäng och en kunskapsbas som lär sig.",
  alternates: {
    canonical: "/ai-kundtjanst",
  },
  openGraph: {
    title: "Successifier Support · AI som besvarar kundmailen",
    description:
      "AI-kundtjänst som läser, kategoriserar och besvarar kundmail, med svarsförslag, säkerhetspoäng och en kunskapsbas som lär sig av era konversationer.",
    url: "https://successifier.se/ai-kundtjanst",
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
};

export default function AiKundtjanstPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Successifier Support",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://successifier.se/ai-kundtjanst",
        description:
          "AI-kundtjänst som läser, kategoriserar och besvarar inkommande kundmail med svarsförslag, säkerhetspoäng och en självlärande kunskapsbas.",
        inLanguage: "sv-SE",
        publisher: { "@id": "https://successifier.se/#organization" },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://successifier.se/" },
          { "@type": "ListItem", position: 2, name: "Successifier Support", item: "https://successifier.se/ai-kundtjanst" },
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
                varje konversation. Ni behåller kontrollen och godkänner innan något skickas.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-7">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                >
                  Boka demo
                </Link>
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

        {/* Feature image: före/efter */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Från manuellt till AI-drivet">
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
            <div
              className="relative h-[260px] w-full overflow-hidden rounded-[6px] sm:h-[380px] md:h-[460px]"
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
                Fig. 01 — Från manuellt till AI-drivet
              </span>
              <span className="uppercase" style={{ ...mono, fontSize: "11.5px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>
                Successifier Support
              </span>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Nyckeltal">
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="mb-10 uppercase" style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}>
              Resultat i siffror
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[40px] font-medium leading-none tracking-[-0.02em]" style={serif}>{m.value}</div>
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

        {/* How it works */}
        <section id="sa-fungerar-det" style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Så fungerar det">
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

        {/* CTA */}
        <section aria-label="Boka demo">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="rounded-[6px] p-8 text-center sm:p-14" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>
              <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-[-0.015em]" style={serif}>Vill du se Successifier Support live?</h2>
              <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-pretty" style={{ color: "rgba(242,238,230,.72)" }}>
                Boka en demo på en timme så visar vi hur AI:n hanterar era riktiga ärenden, och
                vad det skulle spara i tid.
              </p>
              <Link
                href="/#kontakt"
                className="mt-7 inline-flex items-center justify-center rounded-[3px] px-6 py-[15px] text-[15.5px] font-semibold no-underline transition-opacity hover:opacity-90"
                style={{ background: "var(--on-accent)", color: "var(--ink)" }}
              >
                Boka demo →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
