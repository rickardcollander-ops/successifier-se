import Image from "next/image";
import Link from "next/link";

const BRAND = "#0B1F3A";

// ───────────────────────────────────────────────────────────────────
// TODO: Ersätt platshållarvärdena nedan med riktiga siffror.
// Demon visar 1 773 hanterade ärenden — övriga värden är exempel.
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
    text: "Varje ärende får ett färdigt svarsförslag baserat på kundens historik och er kunskapsbas — med en säkerhetspoäng som visar hur trygg AI:n är i svaret.",
  },
  {
    title: "Automatisk kategorisering",
    text: "Inkorgen sorteras automatiskt i Nya, Öppna, Granskning, Skickade och Stängda — med dublettrensning och hantering av studsade mail.",
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
    text: "Koppla mot era befintliga verktyg som Billecta för fakturor och Resend för e-post — kunddata och utskick samlas på ett ställe.",
  },
  {
    title: "Granskning innan utskick",
    text: "Inget skickas utan att ni vill det. AI:n föreslår, ni granskar och godkänner — full mänsklig kontroll i varje steg.",
  },
];

const steps = [
  { num: "01", title: "Koppla inkorgen", text: "Anslut era supportadresser. Successifier Support börjar läsa, kategorisera och samla ärenden automatiskt." },
  { num: "02", title: "AI föreslår svar", text: "För varje ärende genereras ett svarsförslag med säkerhetspoäng, baserat på kunskapsbas och kundhistorik." },
  { num: "03", title: "Ni granskar & skickar", text: "Godkänn, justera eller skriv om. Varje godkänt svar gör AI:n vassare till nästa gång." },
];

export const metadata = {
  title: "Successifier Support — AI som besvarar kundmailen",
  description:
    "Successifier Support är en AI-kundtjänst som läser, kategoriserar och besvarar kundmail – med svarsförslag, säkerhetspoäng och en kunskapsbas som lär sig.",
  alternates: {
    canonical: "/ai-kundtjanst",
  },
  openGraph: {
    title: "Successifier Support — AI som besvarar kundmailen",
    description:
      "AI-kundtjänst som läser, kategoriserar och besvarar kundmail – med svarsförslag, säkerhetspoäng och en kunskapsbas som lär sig av era konversationer.",
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
    <div className="min-h-screen text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur" aria-label="Sidhuvud">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Successifier" width={32} height={32} className="h-8 w-8" priority />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Successifier.se</div>
              <div className="text-xs text-zinc-400">AI-konsulting · Bygg & implementering</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-500 md:flex" aria-label="Huvudmeny">
            <Link href="/#tjanster" className="hover:text-zinc-900 transition-colors">Tjänster</Link>
            <Link href="/#sama" className="hover:text-zinc-900 transition-colors">Plattform</Link>
            <Link href="/ai-kundtjanst" className="font-medium text-zinc-900">Support</Link>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blogg</Link>
            <Link href="/#kontakt" className="hover:text-zinc-900 transition-colors">Kontakt</Link>
          </nav>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors"
            style={{ backgroundColor: BRAND }}
          >
            Boka demo
          </Link>
        </div>
      </header>

      <main aria-label="Huvudinnehåll">
        {/* Hero */}
        <section className="border-b border-zinc-100" aria-label="Introduktion">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <nav aria-label="Brödsmulor" className="mb-8 text-sm text-zinc-500">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:text-zinc-900">Hem</Link></li>
                <li aria-hidden="true" className="text-zinc-300">/</li>
                <li className="text-zinc-700" aria-current="page">Successifier Support</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-5">
                <span className="font-medium text-zinc-600">Successifier Support</span>
                <span className="text-zinc-200">|</span>
                <span>AI-kundtjänst för mail</span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl leading-tight">
                AI som läser, sorterar och besvarar kundmailen åt er.
              </h1>
              <p className="mt-5 text-[15px] leading-7 text-zinc-600">
                Successifier Support tar emot era supportmail, kategoriserar dem automatiskt och
                föreslår färdiga svar med säkerhetspoäng — byggt på en kunskapsbas som lär sig av
                varje konversation. Ni behåller kontrollen och godkänner innan något skickas.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors"
                  style={{ backgroundColor: BRAND }}
                >
                  Boka demo
                </Link>
                <a
                  href="#sa-fungerar-det"
                  className="text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-zinc-900 transition-colors"
                >
                  Se hur det fungerar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-b border-zinc-100 bg-slate-50" aria-label="Nyckeltal">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
              Resultat i siffror
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-3xl font-light text-zinc-900">{m.value}</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">{m.label}</div>
                  <p className="mt-1 text-xs leading-5 text-zinc-400">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-zinc-100 bg-white" aria-label="Funktioner">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">Funktioner</div>
              <h2 className="text-2xl font-light tracking-tight">Allt teamet behöver i en vy</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">
                Från inkommet mail till godkänt svar — Successifier Support samlar ärenden, kunddata
                och AI-förslag på ett ställe.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-medium text-zinc-900">{f.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="sa-fungerar-det" className="border-b border-zinc-100 bg-slate-50" aria-label="Så fungerar det">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">Så fungerar det</div>
              <h2 className="text-2xl font-light tracking-tight">Tre steg till svar</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.num} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-xs font-medium tabular-nums text-zinc-300">{s.num}</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white" aria-label="Boka demo">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="rounded-lg border border-zinc-200 bg-slate-50 p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-light tracking-tight">Vill du se Successifier Support live?</h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-zinc-600">
                Boka en demo på en timme så visar vi hur AI:n hanterar era riktiga ärenden — och
                vad det skulle spara i tid.
              </p>
              <Link
                href="/#kontakt"
                className="mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors"
                style={{ backgroundColor: BRAND }}
              >
                Boka demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white" aria-label="Sidfot">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-zinc-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Successifier.se</div>
          <div className="flex gap-5">
            <a className="hover:text-zinc-700 transition-colors" href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="hover:text-zinc-700 transition-colors" href="tel:+46722136422">+46 72 213 64 22</a>
            <a className="hover:text-zinc-700 transition-colors" href="https://www.linkedin.com/in/rickard-collander/" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
