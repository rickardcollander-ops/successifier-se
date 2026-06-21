import type { Metadata } from "next";
import Image from "next/image";
import { Spectral, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import AgentLeadForm from "@/components/AgentLeadForm";
import { publicAssetExists } from "@/lib/publicAsset";

// Drop the real files here and they are picked up automatically on the
// next build; until then a placeholder renders in their place.
const FEATURE_IMG = "/ai-konsult/feature.jpg";
const PORTRAIT_IMG = "/ai-konsult/portrait.jpg";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const PAGE_URL = "https://successifier.se/ai-konsult";

export function generateMetadata(): Metadata {
  const ogImages = publicAssetExists(FEATURE_IMG)
    ? [{ url: FEATURE_IMG, alt: "Successifier — agentic AI i arbete" }]
    : undefined;

  return {
    title: "AI-konsult för agentic AI · Successifier.se",
    description:
      "Successifier är specialistbyrån som kartlägger, bygger och driftsätter autonoma AI-agenter — från idé till produktion på veckor, med mätbar effekt och människan i loopen.",
    keywords: [
      "AI-konsult",
      "agentic AI",
      "AI-agenter",
      "AI-automatisering",
      "autonoma agenter",
      "AI-implementation",
      "AI-konsult Sverige",
      "agentic AI konsult",
    ],
    alternates: { canonical: "/ai-konsult" },
    openGraph: {
      type: "website",
      title: "AI-konsult för agentic AI · Successifier.se",
      description:
        "Specialistbyrå för AI-automatisering. Vi kartlägger, bygger och driftsätter autonoma AI-agenter i er verksamhet — med mätbar effekt och människan i loopen.",
      url: PAGE_URL,
      siteName: "Successifier.se",
      locale: "sv_SE",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI-konsult för agentic AI · Successifier.se",
      description:
        "Vi kartlägger, bygger och driftsätter autonoma AI-agenter i er verksamhet — från idé till produktion på veckor.",
      images: ogImages?.map((i) => i.url),
    },
  };
}

const indexItems = [
  { num: "01", label: "Verksamhetskartläggning" },
  { num: "02", label: "Agentdesign & utveckling" },
  { num: "03", label: "Integration & drift" },
  { num: "04", label: "Governance & förändring" },
];

const sectors = ["Finans", "Industri", "SaaS", "Retail", "Offentlig sektor"];

const services = [
  {
    num: "01",
    title: "Verksamhetskartläggning",
    body: "Vi identifierar var autonoma agenter ger störst effekt och bygger en prioriterad färdplan förankrad i affären.",
  },
  {
    num: "02",
    title: "Agentdesign & utveckling",
    body: "Skräddarsydda agenter som resonerar, planerar och agerar mot tydliga mål i era egna system och data.",
  },
  {
    num: "03",
    title: "Integration & drift",
    body: "Vi kopplar agenterna till CRM, ERP och interna API:er — och tar ansvar för stabil drift i produktion.",
  },
  {
    num: "04",
    title: "Governance & förändring",
    body: "Säkerhet, kontroll och kompetenslyft så att organisationen äger och vidareutvecklar lösningen långsiktigt.",
  },
];

const phases = [
  {
    tag: "STEG 01 · 2 V",
    title: "Kartläggning",
    body: "Vi kartlägger processer och prioriterar de mest värdeskapande användningsfallen.",
  },
  {
    tag: "STEG 02 · 3–4 V",
    title: "Pilot",
    body: "En agent i skarp miljö, med mätbara mål och människan i loopen.",
  },
  {
    tag: "STEG 03",
    title: "Integration",
    body: "Vi driftsätter i era system med full loggning, behörighet och kontroll.",
  },
  {
    tag: "STEG 04",
    title: "Skalning",
    body: "Fler agenter, fler processer — och ett team som kan förvalta och bygga vidare.",
  },
];

const stats = [
  { value: "85%", label: "lägre handläggningstid i genomförda piloter" },
  { value: "3–6v", label: "från start till agent i produktion" },
  { value: "100%", label: "drift i er egen miljö och kontroll" },
];

const principles = [
  {
    num: "01",
    title: "Affär före teknik",
    body: "Vi börjar i verksamhetsnyttan, inte i modellen. Varje agent har ett tydligt och mätbart affärsmål.",
  },
  {
    num: "02",
    title: "Människan i loopen",
    body: "Ni avgör var agenter agerar fritt och var de väntar på godkännande. Kontroll hela vägen.",
  },
  {
    num: "03",
    title: "Ansvar hela vägen",
    body: "Vi lämnar er inte vid demon. Vi tar ansvar ända till produktion och löpande förvaltning.",
  },
];

const faqs = [
  {
    q: "Vad är agentic AI egentligen?",
    a: "Till skillnad från en vanlig chatbot kan en agent planera, använda verktyg och agera självständigt mot ett mål — med människan i loopen där det behövs.",
  },
  {
    q: "Hur lång tid tar ett projekt?",
    a: "De flesta går från start till produktion på 3–6 veckor, beroende på systemkomplexitet och integrationsbehov.",
  },
  {
    q: "Hur hanterar ni säkerhet och data?",
    a: "Vi arbetar i er miljö med tydlig governance, loggning och behörighetsstyrning. Era data lämnar aldrig er kontroll i onödan.",
  },
  {
    q: "Vilka system kan ni integrera mot?",
    a: "De flesta — CRM, ERP, ärendesystem, databaser och interna API:er via stabila standardkopplingar.",
  },
];

function Mono({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`uppercase ${className}`}
      style={{ fontFamily: "var(--font-plex-mono)", letterSpacing: "0.2em", ...style }}
    >
      {children}
    </div>
  );
}

function ImageSlot({
  src,
  alt,
  heightClass,
  sizes,
  placeholder,
  className = "",
}: {
  src: string;
  alt: string;
  heightClass: string;
  sizes: string;
  placeholder: string;
  className?: string;
}) {
  const exists = publicAssetExists(src);
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[6px] ${heightClass} ${className}`}
      style={{ border: "1px solid rgba(26,24,21,.14)" }}
    >
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(20,67,59,.06), rgba(26,24,21,.04))",
          }}
        >
          <Mono className="text-[11.5px]" style={{ color: "var(--faint-2)", letterSpacing: "0.16em" }}>
            {placeholder}
          </Mono>
        </div>
      )}
    </div>
  );
}

export default function AiKonsultPage() {
  const serif = { fontFamily: "var(--font-spectral)" };
  const tokenStyle = {
    "--paper": "#F2EEE6",
    "--paper-alt": "#EDE8DE",
    "--ink": "#1A1815",
    "--ink-soft": "#3A352D",
    "--muted": "#564E43",
    "--faint": "#6E665A",
    "--faint-2": "#9A9182",
    "--accent": "#14433B",
    "--on-accent": "#F2EEE6",
  } as React.CSSProperties;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Agentic AI-konsulting",
        serviceType: "AI-konsult / agentic AI-implementation",
        url: PAGE_URL,
        areaServed: "SE",
        description:
          "Kartläggning, design, utveckling, integration och drift av autonoma AI-agenter för svenska företag.",
        provider: { "@id": "https://successifier.se/#organization" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tjänster",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
        },
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
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://successifier.se/" },
          { "@type": "ListItem", position: 2, name: "AI-konsult", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div
      id="top"
      className={`${spectral.variable} ${hanken.variable} ${plexMono.variable} relative min-h-screen overflow-x-hidden antialiased`}
      style={{
        ...tokenStyle,
        background: "var(--paper)",
        color: "var(--ink)",
        fontFamily: "var(--font-hanken)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: "rgba(242,238,230,.82)",
          borderBottom: "1px solid rgba(26,24,21,.12)",
        }}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 sm:px-10">
          <a href="#top" className="flex items-baseline gap-[9px] no-underline" style={{ color: "var(--ink)" }}>
            <span className="text-[20px] font-semibold tracking-[-0.02em]">Successifier</span>
            <span className="h-[6px] w-[6px] rounded-full" style={{ background: "var(--accent)" }} />
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {[
              ["#tjanster", "Tjänster"],
              ["#angreppssatt", "Angreppssätt"],
              ["#effekt", "Effekt"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[14.5px] no-underline transition-colors"
                style={{ color: "var(--faint)" }}
              >
                {label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-[3px] px-5 py-[11px] text-[14.5px] font-medium whitespace-nowrap no-underline transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--on-accent)" }}
            >
              Boka samtal
            </a>
          </div>
          <a
            href="#kontakt"
            className="rounded-[3px] px-4 py-2 text-[14px] font-medium whitespace-nowrap no-underline md:hidden"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            Boka samtal
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-end gap-12 px-6 pt-20 pb-16 sm:px-10 md:grid-cols-[1.5fr_.65fr] md:gap-16 md:pt-24">
        <div>
          <Mono className="mb-[30px] text-[12px]" style={{ color: "var(--accent)" }}>
            Specialistbyrå för AI-automatisering
          </Mono>
          <h1
            className="max-w-[14ch] text-[clamp(42px,5.6vw,78px)] font-medium leading-[1.02] tracking-[-0.018em]"
            style={serif}
          >
            Vi bygger och implementerar{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              agentic AI
            </em>{" "}
            i er verksamhet.
          </h1>
          <p
            className="mt-[30px] max-w-[540px] text-[19px] leading-[1.6] text-pretty"
            style={{ color: "var(--muted)" }}
          >
            Successifier kartlägger, bygger och driftsätter autonoma AI-agenter — arbete som tas från
            idé till produktion på veckor, med mätbar effekt och människan i loopen.
          </p>
          <div className="mt-[38px] flex flex-wrap items-center gap-7">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-[9px] rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--on-accent)" }}
            >
              Boka ett samtal
            </a>
            <a
              href="#angreppssatt"
              className="inline-flex items-center gap-2 pb-[3px] text-[15.5px] font-medium no-underline transition-colors"
              style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}
            >
              Se vårt angreppssätt →
            </a>
          </div>
        </div>

        <div>
          <Mono
            className="mb-1 pb-[14px] text-[11px]"
            style={{
              color: "var(--faint-2)",
              letterSpacing: "0.18em",
              borderBottom: "1px solid rgba(26,24,21,.16)",
            }}
          >
            Tjänster — 2026
          </Mono>
          {indexItems.map((ix) => (
            <div
              key={ix.num}
              className="flex items-baseline gap-[14px] px-[2px] py-[15px]"
              style={{ borderBottom: "1px solid rgba(26,24,21,.1)" }}
            >
              <span
                className="text-[12px]"
                style={{ fontFamily: "var(--font-plex-mono)", color: "var(--accent)" }}
              >
                {ix.num}
              </span>
              <span className="text-[15px]" style={{ color: "var(--ink-soft)" }}>
                {ix.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTOR STRIP */}
      <section style={{ borderTop: "1px solid rgba(26,24,21,.12)", borderBottom: "1px solid rgba(26,24,21,.12)" }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-10 gap-y-4 px-6 py-[26px] sm:px-10">
          <Mono className="text-[11.5px] whitespace-nowrap" style={{ color: "var(--faint-2)", letterSpacing: "0.16em" }}>
            Vi arbetar med team inom
          </Mono>
          <div className="flex flex-wrap items-center gap-x-9 gap-y-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="text-[17px] font-medium tracking-[0.01em]"
                style={{ ...serif, color: "#4A4338" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-2 sm:px-10">
        <ImageSlot
          src={FEATURE_IMG}
          alt="Successifier i arbete med agentic AI"
          heightClass="h-[300px] sm:h-[420px] md:h-[520px]"
          sizes="(max-width: 1280px) 100vw, 1200px"
          placeholder="Bildplats — team, kontor eller teknik"
        />
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-6">
          <Mono className="text-[11.5px]" style={{ color: "var(--faint-2)", letterSpacing: "0.16em" }}>
            Fig. 01 — Successifier i arbete
          </Mono>
          <Mono className="text-[11.5px]" style={{ color: "var(--faint-2)", letterSpacing: "0.16em" }}>
            Stockholm · 2026
          </Mono>
        </div>
      </section>

      {/* POV STATEMENT */}
      <section style={{ background: "var(--accent)", color: "var(--on-accent)" }}>
        <div className="mx-auto max-w-[1080px] px-6 py-24 sm:px-10">
          <Mono className="mb-[34px] text-[12px]" style={{ color: "rgba(242,238,230,.55)" }}>
            Vår övertygelse
          </Mono>
          <p
            className="max-w-[20ch] text-[clamp(26px,3.4vw,42px)] leading-[1.28] tracking-[-0.01em] text-pretty"
            style={serif}
          >
            De flesta AI-initiativ fastnar i pilot. Vi bygger för <em className="italic">produktion</em> —
            med mänsklig kontroll och mätbar effekt från första veckan.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="tjanster" className="mx-auto max-w-[1200px] px-6 py-[108px] sm:px-10">
        <div className="mb-[18px] grid grid-cols-1 items-start gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <Mono className="mb-[18px] text-[12px]" style={{ color: "var(--accent)" }}>
              {"// Tjänster"}
            </Mono>
            <h2
              className="text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.08] tracking-[-0.015em]"
              style={serif}
            >
              Vad vi gör
            </h2>
          </div>
          <p
            className="max-w-[440px] pt-2 text-[17px] leading-[1.62] text-pretty"
            style={{ color: "var(--muted)" }}
          >
            Fyra sammanhängande förmågor — från första kartläggningen till agenter som lever och
            förvaltas i er drift.
          </p>
        </div>
        <div style={{ borderBottom: "1px solid rgba(26,24,21,.14)" }}>
          {services.map((svc) => (
            <div
              key={svc.num}
              className="grid grid-cols-1 items-start gap-x-8 gap-y-3 px-2 py-[34px] transition-colors hover:bg-[rgba(26,24,21,.025)] md:grid-cols-[64px_1fr_1.3fr]"
              style={{ borderTop: "1px solid rgba(26,24,21,.14)" }}
            >
              <span
                className="pt-[6px] text-[13px]"
                style={{ fontFamily: "var(--font-plex-mono)", color: "var(--accent)" }}
              >
                {svc.num}
              </span>
              <h3
                className="text-[24px] font-medium leading-[1.18] tracking-[-0.01em]"
                style={serif}
              >
                {svc.title}
              </h3>
              <p className="text-[15.5px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                {svc.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="angreppssatt"
        style={{ borderTop: "1px solid rgba(26,24,21,.12)", background: "var(--paper-alt)" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-[108px] sm:px-10">
          <div className="mb-[60px] max-w-[560px]">
            <Mono className="mb-[18px] text-[12px]" style={{ color: "var(--accent)" }}>
              {"// Angreppssätt"}
            </Mono>
            <h2
              className="text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.08] tracking-[-0.015em]"
              style={serif}
            >
              Så arbetar vi
            </h2>
            <p className="mt-5 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
              Ett strukturerat upplägg som tar er från osäkerhet till driftsatt agent — utan att fastna
              i evig pilot.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((p) => (
              <div key={p.tag} className="relative pt-[22px]" style={{ borderTop: "1px solid rgba(26,24,21,.28)" }}>
                <div
                  className="absolute left-0 top-[-5px] h-[9px] w-[9px] rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <Mono
                  className="mb-[14px] text-[11.5px] normal-case"
                  style={{ color: "var(--faint-2)", letterSpacing: "0.14em" }}
                >
                  {p.tag}
                </Mono>
                <h3 className="mb-3 text-[23px] font-medium tracking-[-0.01em]" style={serif}>
                  {p.title}
                </h3>
                <p className="text-[14.8px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="effekt" className="mx-auto max-w-[1200px] px-6 py-[108px] sm:px-10">
        <Mono className="mb-12 text-center text-[12px]" style={{ color: "var(--accent)" }}>
          {"// Effekt"}
        </Mono>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="px-6 py-3 text-center sm:border-l"
              style={{ borderColor: "rgba(26,24,21,.14)" }}
            >
              <div
                className="text-[clamp(48px,6vw,76px)] font-medium leading-none tracking-[-0.02em]"
                style={serif}
              >
                {stat.value}
              </div>
              <div
                className="mx-auto mt-4 max-w-[200px] text-[15px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="varfor" style={{ borderTop: "1px solid rgba(26,24,21,.12)" }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 py-[108px] sm:px-10 md:grid-cols-[.85fr_1.15fr] md:gap-16">
          <div>
            <Mono className="mb-[18px] text-[12px]" style={{ color: "var(--accent)" }}>
              {"// Varför Successifier"}
            </Mono>
            <h2
              className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]"
              style={serif}
            >
              Strategibyråns disciplin, ingenjörens leverans.
            </h2>
            <ImageSlot
              src={PORTRAIT_IMG}
              alt="Teamet bakom Successifier"
              heightClass="h-[280px] md:h-[380px]"
              sizes="(max-width: 768px) 100vw, 40vw"
              placeholder="Porträtt / teambild"
              className="mt-8"
            />
          </div>
          <div style={{ borderBottom: "1px solid rgba(26,24,21,.14)" }}>
            {principles.map((pr) => (
              <div
                key={pr.num}
                className="grid grid-cols-[42px_1fr] gap-[22px] px-1 py-7"
                style={{ borderTop: "1px solid rgba(26,24,21,.14)" }}
              >
                <span
                  className="pt-1 text-[13px]"
                  style={{ fontFamily: "var(--font-plex-mono)", color: "var(--accent)" }}
                >
                  {pr.num}
                </span>
                <div>
                  <h3 className="mb-[9px] text-[21px] font-medium tracking-[-0.01em]" style={serif}>
                    {pr.title}
                  </h3>
                  <p className="text-[15.5px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
                    {pr.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ borderTop: "1px solid rgba(26,24,21,.12)", background: "var(--paper-alt)" }}>
        <div className="mx-auto max-w-[900px] px-6 py-[108px] sm:px-10">
          <h2
            className="mb-[54px] text-center text-[clamp(28px,3.4vw,42px)] font-medium tracking-[-0.015em]"
            style={serif}
          >
            Vanliga frågor
          </h2>
          <div style={{ borderBottom: "1px solid rgba(26,24,21,.16)" }}>
            {faqs.map((f) => (
              <div
                key={f.q}
                className="grid grid-cols-1 gap-x-10 gap-y-3 px-1 py-[30px] md:grid-cols-[1fr_1.3fr]"
                style={{ borderTop: "1px solid rgba(26,24,21,.16)" }}
              >
                <h3 className="text-[20px] font-medium leading-[1.22] tracking-[-0.01em]" style={serif}>
                  {f.q}
                </h3>
                <p className="text-[15.5px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>
        <div className="mx-auto max-w-[900px] px-6 py-[104px] text-center sm:px-10">
          <h2
            className="mx-auto mb-[22px] max-w-[18ch] text-[clamp(32px,4.2vw,52px)] font-medium leading-[1.06] tracking-[-0.02em]"
            style={serif}
          >
            Låt oss kartlägga er första agent.
          </h2>
          <p
            className="mx-auto mb-[38px] max-w-[480px] text-[18px] leading-[1.6] text-pretty"
            style={{ color: "rgba(242,238,230,.72)" }}
          >
            Boka en kostnadsfri genomgång — vi tittar på en process och visar konkret vad agentic AI
            kan göra för er.
          </p>
          <AgentLeadForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--paper)" }}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-[50px] sm:px-10">
          <div className="flex items-baseline gap-[9px]">
            <span className="text-[17px] font-semibold tracking-[-0.02em]">Successifier</span>
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: "var(--accent)" }} />
            <span className="ml-2 text-[14px]" style={{ color: "var(--faint-2)" }}>
              AI-automatisering för företag
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {[
              ["#tjanster", "Tjänster"],
              ["#angreppssatt", "Angreppssätt"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[14px] no-underline transition-colors"
                style={{ color: "var(--faint)" }}
              >
                {label}
              </a>
            ))}
            <span className="text-[13.5px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
              © 2026 successifier.se
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
