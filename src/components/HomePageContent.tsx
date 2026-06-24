import Image from "next/image";
import BookingEmbed from "@/components/site/BookingEmbed";
import SiteNav, { type NavLink } from "@/components/site/SiteNav";
import type { Dict } from "@/lib/i18n";

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

function Overline({
  children,
  onAccent = false,
  center = false,
}: {
  children: React.ReactNode;
  onAccent?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-[18px] uppercase ${center ? "text-center" : ""}`}
      style={{
        ...mono,
        fontSize: "12px",
        letterSpacing: "0.2em",
        color: onAccent ? "rgba(242,238,230,.55)" : "var(--accent)",
      }}
    >
      {children}
    </div>
  );
}

export default function HomePageContent({ t }: { t: Dict }) {
  const services = [
    { num: t.services.p1Num, title: t.services.p1Title, sub: t.services.p1Sub, focusLabel: t.services.p1FocusLabel, focus: t.services.p1Focus, resultLabel: t.services.p1ResultLabel, result: t.services.p1Result },
    { num: t.services.p2Num, title: t.services.p2Title, sub: t.services.p2Sub, focusLabel: t.services.p2FocusLabel, focus: t.services.p2Focus, resultLabel: t.services.p2ResultLabel, result: t.services.p2Result },
    { num: t.services.p3Num, title: t.services.p3Title, sub: t.services.p3Sub, focusLabel: t.services.p3FocusLabel, focus: t.services.p3Focus, resultLabel: t.services.p3ResultLabel, result: t.services.p3Result },
    { num: t.services.p4Num, title: t.services.p4Title, sub: t.services.p4Sub, focusLabel: t.services.p4FocusLabel, focus: t.services.p4Focus, resultLabel: t.services.p4ResultLabel, result: t.services.p4Result },
    { num: t.services.p5Num, title: t.services.p5Title, sub: t.services.p5Sub, focusLabel: t.services.p5FocusLabel, focus: t.services.p5Focus, resultLabel: t.services.p5ResultLabel, result: t.services.p5Result },
  ];

  const pageUrl = t.locale === "sv" ? "https://www.successifier.se/" : "https://www.successifier.se/en";

  const navLinks: NavLink[] =
    t.locale === "sv"
      ? [
          { href: "#tjanster", label: t.nav.services },
          { href: "#sama", label: t.nav.platform },
          { href: "/ai-konsult", label: "AI-konsult" },
          { href: "/ai-kundtjanst", label: "Support" },
          { href: t.nav.blogHref, label: t.nav.blog },
        ]
      : [
          { href: "#tjanster", label: t.nav.services },
          { href: "#sama", label: t.nav.platform },
          { href: "#arbetssatt", label: t.nav.approach },
          { href: t.nav.blogHref, label: t.nav.blog },
        ];

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.successifier.se/#rickard-collander",
        name: "Rickard Collander",
        jobTitle: t.about.founderTitle,
        url: "https://www.successifier.se/",
        image: "https://www.successifier.se/rc2.jpg",
        worksFor: { "@id": "https://www.successifier.se/#service" },
        knowsAbout: [
          "Customer Success",
          "AI-konsulting",
          "Automation",
          "GEO readiness",
          "Generative Engine Optimization",
          "Contact Center",
        ],
        sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.successifier.se/#service",
        name: "Successifier.se",
        url: pageUrl,
        image: "https://www.successifier.se/logo.svg",
        email: "rc@successifier.com",
        telephone: "+46722136422",
        areaServed: "SE",
        description: t.hero.description,
        founder: { "@id": "https://www.successifier.se/#rickard-collander" },
        sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          { q: t.faq.q1, a: t.faq.a1 },
          { q: t.faq.q2, a: t.faq.a2 },
          { q: t.faq.q3, a: t.faq.a3 },
          { q: t.faq.q4, a: t.faq.a4 },
        ].map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Header */}
      <SiteNav
        home="#top"
        links={navLinks}
        cta={{ href: "#kontakt", label: t.nav.cta }}
        lang={{ href: t.langSwitcher.href, label: t.langSwitcher.label }}
        ariaLabel={t.locale === "sv" ? "Huvudmeny" : "Main navigation"}
      />

      <main id="top" aria-label={t.locale === "sv" ? "Huvudinnehåll" : "Main content"}>
        {/* Hero */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.locale === "sv" ? "Introduktion" : "Introduction"}>
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-end gap-12 px-6 pt-20 pb-16 sm:px-10 md:grid-cols-[1.5fr_.8fr] md:pt-24 md:pb-20">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-2 text-[12px]" style={{ ...mono, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>
                <span>{t.hero.badge1}</span>
                <span style={{ color: "var(--faint-2)" }}>·</span>
                <span style={{ color: "var(--faint-2)" }}>{t.hero.badge2}</span>
              </div>
              <h1 className="max-w-[16ch] text-[clamp(40px,5.4vw,72px)] font-medium leading-[1.03] tracking-[-0.018em]" style={serif}>
                {t.hero.heading}
              </h1>
              <p className="mt-7 max-w-[560px] text-[19px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
                {t.hero.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-7">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#arbetssatt"
                  className="inline-flex items-center gap-2 pb-[3px] text-[15.5px] font-medium no-underline"
                  style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}
                >
                  {t.hero.cta2} →
                </a>
              </div>
            </div>

            <div>
              <Overline>{t.locale === "sv" ? "Detta etablerar vi" : "What we establish"}</Overline>
              <ul>
                {t.hero.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 py-[13px] text-[15px]" style={{ borderBottom: "1px solid rgba(26,24,21,.1)", color: "var(--ink-soft)" }}>
                    <span style={{ ...mono, fontSize: "12px", color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: t.hero.stat1Title, sub: t.hero.stat1Sub },
                  { title: t.hero.stat2Title, sub: t.hero.stat2Sub },
                  { title: t.hero.stat3Title, sub: t.hero.stat3Sub },
                ].map((s) => (
                  <div key={s.title}>
                    <div className="text-[13px] font-semibold" style={{ color: "var(--ink)" }}>{s.title}</div>
                    <div className="mt-0.5 text-[12px]" style={{ color: "var(--faint-2)" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature image */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.locale === "sv" ? "Successifier i arbete" : "Successifier at work"}>
          <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
            <div
              className="relative h-[260px] w-full overflow-hidden rounded-[6px] sm:h-[400px] md:h-[500px]"
              style={{ border: "1px solid var(--hairline)" }}
            >
              <Image
                src="/tre-skarmar.png"
                alt={t.locale === "sv"
                  ? "Strateg vid tre skärmar med dashboards, med Stockholms skyline i bakgrunden"
                  : "Strategist at three screens with dashboards, Stockholm skyline in the background"}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-6">
              <span className="uppercase" style={{ ...mono, fontSize: "11.5px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>
                {t.locale === "sv" ? "Fig. 01 — Successifier i arbete" : "Fig. 01 — Successifier at work"}
              </span>
              <span className="uppercase" style={{ ...mono, fontSize: "11.5px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>
                Stockholm · 2026
              </span>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section id="passar" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.fit.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="max-w-2xl">
              <Overline>{t.fit.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.fit.heading}</h2>
            </div>
            <ul className="mt-9 grid gap-x-10 sm:grid-cols-2" style={{ borderTop: "1px solid var(--hairline)" }}>
              {t.fit.items.map((item) => (
                <li key={item} className="flex gap-3 py-[18px] text-[15.5px] leading-[1.55]" style={{ borderBottom: "1px solid var(--hairline)", color: "var(--ink-soft)" }}>
                  <span className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <p className="text-[15px] italic" style={{ color: "var(--faint)" }}>{t.fit.closing}</p>
              <a
                href="#kontakt"
                className="inline-flex shrink-0 items-center rounded-[3px] px-5 py-[11px] text-[14.5px] font-medium no-underline transition-opacity hover:opacity-90"
                style={{ background: "var(--accent)", color: "var(--on-accent)" }}
              >
                {t.fit.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Why (dark) */}
        <section style={{ background: "var(--accent)", color: "var(--on-accent)" }} aria-label={t.why.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="max-w-2xl">
              <Overline onAccent>{t.why.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.why.heading}</h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-pretty" style={{ color: "rgba(242,238,230,.7)" }}>{t.why.description}</p>
            </div>
            <div className="mt-12 grid gap-px md:grid-cols-3" style={{ borderTop: "1px solid rgba(242,238,230,.18)" }}>
              {[
                { num: "01", title: t.why.card1Title, text: t.why.card1Text },
                { num: "02", title: t.why.card2Title, text: t.why.card2Text },
                { num: "03", title: t.why.card3Title, text: t.why.card3Text },
              ].map((c) => (
                <div key={c.title} className="pt-7 md:pr-8" >
                  <div style={{ ...mono, fontSize: "12px", color: "rgba(242,238,230,.55)", marginBottom: "12px" }}>{c.num}</div>
                  <div className="text-[20px] font-medium" style={serif}>{c.title}</div>
                  <p className="mt-2 text-[15px] leading-[1.6] text-pretty" style={{ color: "rgba(242,238,230,.65)" }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="tjanster" style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label={t.services.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[.8fr_1.2fr]">
              <div>
                <Overline>{t.services.overline}</Overline>
                <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.services.heading}</h2>
              </div>
              <p className="max-w-[460px] pt-1 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.services.intro}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((p) => (
                <div key={p.num} className="flex flex-col rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[12px]" style={{ ...mono, color: "var(--accent)" }}>{p.num}</div>
                  <div className="mt-2 text-[21px] font-medium leading-[1.2] tracking-[-0.01em]" style={serif}>{p.title}</div>
                  <p className="mt-1 text-[13px]" style={{ color: "var(--faint-2)" }}>{p.sub}</p>
                  <div className="mt-5 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>{p.focusLabel}</div>
                  <ul className="mt-2 flex-1 space-y-1.5 text-[14.5px]" style={{ color: "var(--muted)" }}>
                    {p.focus.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--hairline)" }}>
                    <div className="uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>{p.resultLabel}</div>
                    <div className="mt-1 text-[15px] font-medium" style={{ color: "var(--ink)" }}>{p.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAMA */}
        <section id="sama" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.sama.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <Overline>{t.sama.overline}</Overline>
                <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.08] tracking-[-0.015em]" style={serif}>{t.sama.heading}</h2>
                <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.sama.description}</p>
                <div className="mt-8" style={{ borderTop: "1px solid var(--hairline)" }}>
                  {[
                    { title: t.sama.v1Title, text: t.sama.v1Text },
                    { title: t.sama.v2Title, text: t.sama.v2Text },
                    { title: t.sama.v3Title, text: t.sama.v3Text },
                  ].map((v) => (
                    <div key={v.title} className="flex gap-4 py-[18px]" style={{ borderBottom: "1px solid var(--hairline)" }}>
                      <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                      <div>
                        <div className="text-[16px] font-medium" style={{ color: "var(--ink)" }}>{v.title}</div>
                        <p className="mt-1 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>{v.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[15px] italic" style={{ color: "var(--faint)" }}>
                  <a href="#kontakt" className="no-underline" style={{ borderBottom: "1px solid rgba(26,24,21,.3)" }}>{t.sama.ctaText} →</a>
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: t.sama.stat1Label, value: t.sama.stat1Value, sub: t.sama.stat1Sub },
                    { label: t.sama.stat2Label, value: t.sama.stat2Value, sub: t.sama.stat2Sub },
                    { label: t.sama.stat3Label, value: t.sama.stat3Value, sub: t.sama.stat3Sub },
                  ].map((s) => (
                    <div key={s.label} className="rounded-[6px] p-4" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
                      <div className="uppercase" style={{ ...mono, fontSize: "10px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>{s.label}</div>
                      <div className="mt-1 text-[28px] font-medium leading-none" style={serif}>{s.value}</div>
                      <div className="mt-1 text-[12px]" style={{ color: "var(--faint-2)" }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[6px]" style={{ border: "1px solid var(--hairline)" }}>
                    <Image
                      src="/ai-content.png"
                      alt={t.locale === "sv" ? "SAMA: AI Content Hub med AI-omnämnandepoäng, sökordstrend, SEO-hälsa och content-pipeline" : "SAMA: AI Content Hub with AI mention score, keyword trend, SEO health and content pipeline"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[6px]" style={{ border: "1px solid var(--hairline)" }}>
                    <Image
                      src="/Insights.png"
                      alt={t.locale === "sv" ? "SAMA Insights-dashboard, exempel på siteanalys" : "SAMA Insights dashboard, example site audit"}
                      width={2646}
                      height={1554}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[6px]" style={{ border: "1px solid var(--hairline)" }}>
                    <Image
                      src="/Content.png"
                      alt={t.locale === "sv" ? "SAMA Content-dashboard, AI-driven content-pipeline" : "SAMA Content dashboard, AI-driven content pipeline"}
                      width={2750}
                      height={1752}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="arbetssatt" style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label={t.approach.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <Overline>{t.approach.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.approach.heading}</h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.approach.description}</p>
            </div>
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {[
                { num: "01", title: t.approach.s1Title, text: t.approach.s1Text },
                { num: "02", title: t.approach.s2Title, text: t.approach.s2Text },
                { num: "03", title: t.approach.s3Title, text: t.approach.s3Text },
              ].map((s) => (
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

        {/* Results */}
        <section id="resultat" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.results.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <Overline>{t.results.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.results.heading}</h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.results.description}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                { title: t.results.r1Title, text: t.results.r1Text },
                { title: t.results.r2Title, text: t.results.r2Text },
                { title: t.results.r3Title, text: t.results.r3Text },
                { title: t.results.r4Title, text: t.results.r4Text },
                { title: t.results.r5Title, text: t.results.r5Text },
                { title: t.results.r6Title, text: t.results.r6Text },
              ].map((r) => (
                <div key={r.title} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[17px] font-medium" style={serif}>{r.title}</div>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label={t.cases.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <Overline>{t.cases.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.cases.heading}</h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.cases.description}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                { title: t.cases.case1Title, result: t.cases.case1Result, detail: t.cases.case1Detail },
                { title: t.cases.case2Title, result: t.cases.case2Result, detail: t.cases.case2Detail },
              ].map((c) => (
                <div key={c.title} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>{c.title}</div>
                  <div className="mt-3 text-[32px] font-medium leading-none" style={serif}>{c.result}</div>
                  <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{c.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px]" style={{ color: "var(--faint-2)" }}>{t.cases.note}</p>
          </div>
        </section>

        {/* Testimonial */}
        <section id="referens" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.testimonial.heading}>
          <div className="mx-auto max-w-[1000px] px-6 py-[100px] sm:px-10">
            <div className="text-center">
              <Overline center>{t.testimonial.overline}</Overline>
            </div>
            <figure className="mt-6">
              <blockquote
                className="mx-auto max-w-[820px] text-center text-[clamp(22px,2.8vw,30px)] font-medium leading-[1.32] tracking-[-0.015em] text-balance"
                style={serif}
              >
                <span style={{ color: "var(--accent)" }}>“</span>
                {t.testimonial.quote}
                <span style={{ color: "var(--accent)" }}>”</span>
              </blockquote>
              <figcaption className="mt-9 flex items-center justify-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
                  <Image src="/ida-rosell.png" alt={t.testimonial.name} width={320} height={320} className="h-full w-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>{t.testimonial.name}</div>
                  <div className="mt-0.5 text-[13px]" style={{ color: "var(--faint-2)" }}>{t.testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={t.faq.heading}>
          <div className="mx-auto max-w-[1000px] px-6 py-[100px] sm:px-10">
            <div className="mb-10 text-center">
              <Overline center>{t.faq.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,42px)] font-medium tracking-[-0.015em]" style={serif}>{t.faq.heading}</h2>
            </div>
            <div style={{ borderBottom: "1px solid var(--hairline)" }}>
              {[
                { q: t.faq.q1, a: t.faq.a1 },
                { q: t.faq.q2, a: t.faq.a2 },
                { q: t.faq.q3, a: t.faq.a3 },
                { q: t.faq.q4, a: t.faq.a4 },
              ].map((item) => (
                <div key={item.q} className="grid grid-cols-1 gap-x-10 gap-y-3 py-[28px] md:grid-cols-[1fr_1.3fr]" style={{ borderTop: "1px solid var(--hairline)" }}>
                  <h3 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>{item.q}</h3>
                  <p className="text-[15.5px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="om-oss" style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label={t.about.heading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <Overline>{t.about.overline}</Overline>
                <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.about.heading}</h2>
                <p className="mt-5 text-[16px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.about.p1}</p>
                <p className="mt-4 text-[16px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{t.about.p2}</p>
                <p className="mt-5 pl-4 text-[15px] leading-[1.6] italic" style={{ color: "var(--faint)", borderLeft: "2px solid var(--accent)" }}>{t.about.p3}</p>
                <div className="mt-7">
                  <a
                    className="inline-flex items-center rounded-[3px] px-4 py-[11px] text-[14.5px] font-medium no-underline transition-colors"
                    style={{ border: "1px solid var(--hairline-strong)", color: "var(--ink)" }}
                    href="https://www.linkedin.com/in/rickard-collander/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t.about.linkedIn}
                  </a>
                </div>
                <div
                  className="relative mt-8 h-[200px] w-full overflow-hidden rounded-[6px] sm:h-[260px]"
                  style={{ border: "1px solid var(--hairline)" }}
                >
                  <Image
                    src="/skrivbord.png"
                    alt={t.locale === "sv" ? "Skrivbord med projektplan och bärbar dator som visar en tillväxtkurva" : "Desk with project plan and laptop showing a growth curve"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
                    <Image src="/rc2.jpg" alt="Rickard Collander" width={320} height={320} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>Rickard Collander</div>
                    <div className="mt-0.5 text-[12px]" style={{ color: "var(--faint-2)" }}>{t.about.founderTitle}</div>
                  </div>
                </div>
                {t.about.quote && (
                  <>
                    <div className="mb-2 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>{t.about.quoteHeading}</div>
                    <p className="text-[15px] leading-[1.6] italic" style={{ color: "var(--muted)" }}>{t.about.quote}</p>
                    {t.about.quotePerson && (
                      <div className="mt-2 text-[12px]" style={{ color: "var(--faint-2)" }}>{t.about.quotePerson}</div>
                    )}
                  </>
                )}
                <div className="mt-6 rounded-[6px] p-4" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
                  <div className="mb-2 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>{t.about.contactLabel}</div>
                  <a className="text-[14.5px] no-underline" style={{ color: "var(--ink-soft)", borderBottom: "1px solid var(--hairline)" }} href="mailto:rc@successifier.com">rc@successifier.com</a>
                  <div className="mt-0.5 text-[12px]" style={{ color: "var(--faint-2)" }}>+46 72 213 64 22</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Booking */}
        <section id="kontakt" aria-label={t.contact.heading}>
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-[100px] sm:px-10 md:grid-cols-[.8fr_1.2fr] md:items-start">
            <div>
              <Overline>{t.contact.overline}</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{t.contact.heading}</h2>
              <p className="mt-4 text-[16px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>
                {t.locale === "sv"
                  ? "Välj en tid som passar er direkt i kalendern — 30 minuter, ingen pitch. Vi identifierar er största intäkts- eller leveransrisk. Föredrar du mejl? Skriv till "
                  : "Pick a time that works for you right in the calendar — 30 minutes, no pitch. We pinpoint your biggest revenue or delivery risk. Prefer email? Write to "}
                <span className="font-medium" style={{ color: "var(--ink)" }}>rc@successifier.com</span>.
              </p>
              <div className="mt-6 rounded-[6px] p-5" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
                <div className="mb-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--faint-2)" }}>{t.contact.directLabel}</div>
                <div className="space-y-1 text-[14.5px]" style={{ color: "var(--ink-soft)" }}>
                  <div>{t.contact.emailLabel}: <a className="no-underline" style={{ borderBottom: "1px solid var(--hairline)" }} href="mailto:rc@successifier.com">rc@successifier.com</a></div>
                  <div>{t.contact.phoneLabel}: <a className="no-underline" style={{ borderBottom: "1px solid var(--hairline)" }} href="tel:+46722136422">+46 72 213 64 22</a></div>
                </div>
              </div>
            </div>
            <BookingEmbed locale={t.locale} />
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--hairline)", background: "var(--paper)" }} aria-label={t.locale === "sv" ? "Sidfot" : "Site footer"}>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-[50px] sm:px-10">
          <div className="flex items-baseline gap-[9px]">
            <span className="text-[17px] font-semibold tracking-[-0.02em]">Successifier</span>
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: "var(--accent)" }} />
            <span className="ml-2 text-[14px]" style={{ color: "var(--faint-2)" }}>{t.footer.rights}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <a className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]" style={{ color: "var(--faint)" }} href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]" style={{ color: "var(--faint)" }} href="tel:+46722136422">+46 72 213 64 22</a>
            <a className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]" style={{ color: "var(--faint)" }} href="https://www.linkedin.com/in/rickard-collander/" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
