import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Dict } from "@/lib/i18n";

const BRAND = "#0B1F3A";

const healthScores = [
  { label: "Technical SEO", score: 100 },
  { label: "On-page SEO", score: 87 },
  { label: "GEO readiness", score: 96 },
  { label: "Link health", score: 81 },
  { label: "Performance", score: 100 },
];

function Overline({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
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

  const pageUrl = t.locale === "sv" ? "https://successifier.se/" : "https://successifier.se/en";

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://successifier.se/#service",
        name: "Successifier.se",
        url: pageUrl,
        image: "https://successifier.se/logo.svg",
        email: "rc@successifier.com",
        telephone: "+46722136422",
        areaServed: "SE",
        description: t.hero.description,
        founder: { "@type": "Person", name: "Rickard Collander" },
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
    <div className="min-h-screen text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur" aria-label={t.locale === "sv" ? "Sidhuvud" : "Site header"}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Successifier" width={32} height={32} className="h-8 w-8" priority />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Successifier.se</div>
              <div className="hidden whitespace-nowrap text-xs text-zinc-400 sm:block">{t.hero.badge2}</div>
            </div>
          </div>
          <nav className="hidden items-center gap-5 whitespace-nowrap text-sm text-zinc-500 lg:flex" aria-label={t.locale === "sv" ? "Huvudmeny" : "Main navigation"}>
            <a href="#passar" className="hover:text-zinc-900 transition-colors">{t.locale === "sv" ? "Passar det er?" : "Is this a fit?"}</a>
            <a href="#tjanster" className="hover:text-zinc-900 transition-colors">{t.nav.services}</a>
            <a href="#sama" className="hover:text-zinc-900 transition-colors">{t.nav.platform}</a>
            {t.locale === "sv" && (
              <Link href="/ai-kundtjanst" className="hover:text-zinc-900 transition-colors">Support</Link>
            )}
            <a href="#arbetssatt" className="hover:text-zinc-900 transition-colors">{t.nav.approach}</a>
            <a href="#om-oss" className="hover:text-zinc-900 transition-colors">{t.nav.about}</a>
            <Link href={t.nav.blogHref} className="hover:text-zinc-900 transition-colors">{t.nav.blog}</Link>
            <a href="#kontakt" className="hover:text-zinc-900 transition-colors">{t.nav.contact}</a>
            <Link
              href={t.langSwitcher.href}
              className="rounded border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
            >
              {t.langSwitcher.label}
            </Link>
          </nav>
          <div className="flex items-center gap-3 lg:ml-4">
            <Link
              href={t.langSwitcher.href}
              className="rounded border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-500 hover:border-zinc-400 transition-colors lg:hidden"
            >
              {t.langSwitcher.label}
            </Link>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors"
              style={{ backgroundColor: BRAND }}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main aria-label={t.locale === "sv" ? "Huvudinnehåll" : "Main content"}>
        {/* Hero */}
        <section className="border-b border-zinc-100" aria-label={t.locale === "sv" ? "Introduktion" : "Introduction"}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-5">
                <span className="font-medium text-zinc-600">{t.hero.badge1}</span>
                <span className="text-zinc-200">|</span>
                <span>{t.hero.badge2}</span>
              </div>
              {/* Primär H1: "AI-konsulting som bygger och driftsätter, inte PowerPoint." */}
              {/* Variant: "Vi bygger AI:n. Vi driftsätter den. Sen driver ni vidare." */}
              <h1 className="text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl leading-tight">
                {t.hero.heading}
              </h1>
              <p className="mt-5 text-[15px] leading-7 text-zinc-600">
                {t.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors"
                  style={{ backgroundColor: BRAND }}
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#arbetssatt"
                  className="text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-zinc-900 transition-colors"
                >
                  {t.hero.cta2}
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
                {t.locale === "sv" ? "Detta etablerar vi" : "What we establish"}
              </div>
              <ul className="space-y-3 text-sm text-zinc-700">
                {t.hero.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 text-zinc-300 select-none">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 border-t border-zinc-100 pt-5 sm:grid-cols-3">
                {[
                  { title: t.hero.stat1Title, sub: t.hero.stat1Sub },
                  { title: t.hero.stat2Title, sub: t.hero.stat2Sub },
                  { title: t.hero.stat3Title, sub: t.hero.stat3Sub },
                ].map((s) => (
                  <div key={s.title}>
                    <div className="text-xs font-semibold text-zinc-900">{s.title}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded border border-zinc-100 bg-zinc-50 p-4 text-sm">
                <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">{t.hero.contactLabel}</div>
                <a className="text-zinc-700 hover:text-zinc-900 underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                <div className="text-zinc-400 text-xs mt-0.5">+46 72 213 64 22</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fit, "Det här passar er om…" */}
        <section id="passar" className="border-b border-zinc-100 bg-white" aria-label={t.fit.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.fit.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.fit.heading}</h2>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.fit.items.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-5">
                  <span className="mt-0.5 text-zinc-300 select-none shrink-0">·</span>
                  <span className="text-sm leading-6 text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <p className="text-sm text-zinc-500 italic">{t.fit.closing}</p>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shrink-0 transition-colors"
                style={{ backgroundColor: BRAND }}
              >
                {t.fit.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Why, dark section */}
        <section className="border-b border-zinc-900" style={{ backgroundColor: BRAND }} aria-label={t.why.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline><span className="text-white/40">{t.why.overline}</span></Overline>
              <h2 className="text-2xl font-light tracking-tight text-white">{t.why.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/60">{t.why.description}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { title: t.why.card1Title, text: t.why.card1Text },
                { title: t.why.card2Title, text: t.why.card2Text },
                { title: t.why.card3Title, text: t.why.card3Text },
              ].map((c) => (
                <div key={c.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="text-sm font-medium text-white">{c.title}</div>
                  <p className="mt-2 text-sm leading-6 text-white/60">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="tjanster" className="border-b border-zinc-100 bg-slate-50" aria-label={t.services.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.services.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.services.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">{t.services.intro}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((p) => (
                <div key={p.num} className="rounded-lg border border-zinc-200 bg-white p-6 flex flex-col">
                  <div className="text-xs font-medium tabular-nums text-zinc-300">{p.num}</div>
                  <div className="mt-2 text-base font-medium text-zinc-900">{p.title}</div>
                  <p className="mt-1 text-xs text-zinc-400">{p.sub}</p>
                  <div className="mt-5 text-[11px] font-medium uppercase tracking-widest text-zinc-400">{p.focusLabel}</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 flex-1">
                    {p.focus.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-zinc-300 shrink-0 mt-0.5">·</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-zinc-100 pt-4">
                    <div className="text-[11px] font-medium uppercase tracking-widest text-zinc-400">{p.resultLabel}</div>
                    <div className="mt-1 text-sm font-medium text-zinc-900">{p.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAMA, reframed as proof + engine */}
        <section id="sama" className="border-b border-zinc-100 bg-white" aria-label={t.sama.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <Overline>{t.sama.overline}</Overline>
                <h2 className="text-2xl font-light tracking-tight sm:text-3xl">{t.sama.heading}</h2>
                <p className="mt-4 text-[15px] leading-7 text-zinc-600">{t.sama.description}</p>
                <div className="mt-8 space-y-4">
                  {[
                    { title: t.sama.v1Title, text: t.sama.v1Text },
                    { title: t.sama.v2Title, text: t.sama.v2Text },
                    { title: t.sama.v3Title, text: t.sama.v3Text },
                  ].map((v) => (
                    <div key={v.title} className="flex gap-4 rounded-lg border border-zinc-200 bg-slate-50 p-4">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 mt-2" />
                      <div>
                        <div className="text-sm font-medium text-zinc-900">{v.title}</div>
                        <p className="mt-1 text-sm leading-6 text-zinc-500">{v.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Nedtonad CTA, text-länk, pekar mot strategisamtal */}
                <p className="mt-6 text-sm text-zinc-400 italic">
                  <a href="#kontakt" className="underline underline-offset-4 hover:text-zinc-700 transition-colors">
                    {t.sama.ctaText}
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-zinc-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium uppercase tracking-widest text-zinc-400">{t.sama.healthLabel}</div>
                    <span className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-400">
                      {t.sama.exampleBadge}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {healthScores.map((d) => (
                      <div key={d.label} className="flex flex-col items-center text-center">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-medium text-zinc-900"
                          style={{ borderColor: BRAND }}
                        >
                          {d.score}
                        </div>
                        <div className="mt-1.5 text-[10px] leading-tight text-zinc-400">{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: t.sama.stat1Label, value: t.sama.stat1Value, sub: t.sama.stat1Sub },
                    { label: t.sama.stat2Label, value: t.sama.stat2Value, sub: t.sama.stat2Sub },
                    { label: t.sama.stat3Label, value: t.sama.stat3Value, sub: t.sama.stat3Sub },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-zinc-200 bg-white p-4">
                      <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">{s.label}</div>
                      <div className="mt-1 text-2xl font-light text-zinc-900">{s.value}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>
                {/* SAMA dashboards, skärmdumpar av Insights- och Content-vyerna */}
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
                    <Image
                      src="/Insights.png"
                      alt={t.locale === "sv" ? "SAMA Insights-dashboard, exempel på siteanalys" : "SAMA Insights dashboard, example site audit"}
                      width={2646}
                      height={1554}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
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
        <section id="arbetssatt" className="border-b border-zinc-100 bg-slate-50" aria-label={t.approach.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.approach.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.approach.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">{t.approach.description}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { num: "01", title: t.approach.s1Title, text: t.approach.s1Text },
                { num: "02", title: t.approach.s2Title, text: t.approach.s2Text },
                { num: "03", title: t.approach.s3Title, text: t.approach.s3Text },
              ].map((s) => (
                <div key={s.num} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-xs font-medium tabular-nums text-zinc-300">{s.num}</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">{s.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="resultat" className="border-b border-zinc-100 bg-white" aria-label={t.results.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.results.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.results.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">{t.results.description}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { title: t.results.r1Title, text: t.results.r1Text },
                { title: t.results.r2Title, text: t.results.r2Text },
                { title: t.results.r3Title, text: t.results.r3Text },
                { title: t.results.r4Title, text: t.results.r4Text },
                { title: t.results.r5Title, text: t.results.r5Text },
                { title: t.results.r6Title, text: t.results.r6Text },
              ].map((r) => (
                <div key={r.title} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-medium text-zinc-900">{r.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini-cases / Social proof */}
        <section className="border-b border-zinc-100 bg-slate-50" aria-label={t.cases.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.cases.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.cases.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">{t.cases.description}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { title: t.cases.case1Title, result: t.cases.case1Result, detail: t.cases.case1Detail },
                { title: t.cases.case2Title, result: t.cases.case2Result, detail: t.cases.case2Detail },
              ].map((c) => (
                <div key={c.title} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-medium text-zinc-900">{c.title}</div>
                  <div className="mt-3 text-xl font-light text-zinc-900">{c.result}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{c.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-zinc-400">{t.cases.note}</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-zinc-100 bg-white" aria-label={t.faq.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.faq.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.faq.heading}</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { q: t.faq.q1, a: t.faq.a1 },
                { q: t.faq.q2, a: t.faq.a2 },
                { q: t.faq.q3, a: t.faq.a3 },
                { q: t.faq.q4, a: t.faq.a4 },
              ].map((item) => (
                <div key={item.q} className="rounded-lg border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-medium text-zinc-900">{item.q}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="om-oss" className="border-b border-zinc-100 bg-slate-50" aria-label={t.about.heading}>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <Overline>{t.about.overline}</Overline>
                <h2 className="text-2xl font-light tracking-tight">{t.about.heading}</h2>
                <p className="mt-4 text-[15px] leading-7 text-zinc-600">{t.about.p1}</p>
                <p className="mt-4 text-[15px] leading-7 text-zinc-600">{t.about.p2}</p>
                {/* Partnermodell */}
                <p className="mt-4 text-[15px] leading-7 text-zinc-500 border-l-2 border-zinc-200 pl-4">{t.about.p3}</p>
                <div className="mt-6">
                  <a
                    className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
                    href="https://www.linkedin.com/in/rickard-collander/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t.about.linkedIn}
                  </a>
                </div>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full border border-zinc-200 bg-zinc-50">
                    <Image src="/rc2.jpg" alt="Rickard Collander" width={320} height={320} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-900">Rickard Collander</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{t.about.founderTitle}</div>
                  </div>
                </div>
                {/* Kundcitat, renderas bara när ett godkänt citat finns (t.about.quote) */}
                {t.about.quote && (
                  <>
                    <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">{t.about.quoteHeading}</div>
                    <p className="text-sm leading-6 text-zinc-600 italic">{t.about.quote}</p>
                    {t.about.quotePerson && (
                      <div className="mt-2 text-xs text-zinc-400">{t.about.quotePerson}</div>
                    )}
                  </>
                )}
                <div className="mt-6 rounded border border-zinc-100 bg-slate-50 p-4">
                  <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">{t.about.contactLabel}</div>
                  <a className="text-sm text-zinc-700 hover:text-zinc-900 underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                  <div className="text-xs text-zinc-400 mt-0.5">+46 72 213 64 22</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="bg-white" aria-label={t.contact.heading}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
            <div>
              <Overline>{t.contact.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.contact.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">
                {t.contact.description}{" "}
                <span className="font-medium text-zinc-900">rc@successifier.com</span>.
              </p>
              <div className="mt-6 rounded-lg border border-zinc-200 bg-slate-50 p-5">
                <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">{t.contact.directLabel}</div>
                <div className="text-sm text-zinc-700 space-y-1">
                  <div>{t.contact.emailLabel}: <a className="underline hover:text-zinc-900" href="mailto:rc@successifier.com">rc@successifier.com</a></div>
                  <div>{t.contact.phoneLabel}: <a className="underline hover:text-zinc-900" href="tel:+46722136422">+46 72 213 64 22</a></div>
                </div>
              </div>
            </div>
            <ContactForm t={t.form} />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white" aria-label={t.locale === "sv" ? "Sidfot" : "Site footer"}>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-zinc-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {t.footer.rights}</div>
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
