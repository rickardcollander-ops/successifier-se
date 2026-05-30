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

  return (
    <div className="min-h-screen text-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Successifier" width={32} height={32} className="h-8 w-8" priority />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Successifier.se</div>
              <div className="text-xs text-zinc-400">Customer Success · AI · Automation</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-500 md:flex">
            <a href="#tjanster" className="hover:text-zinc-900 transition-colors">{t.nav.services}</a>
            <a href="#sama" className="hover:text-zinc-900 transition-colors">{t.nav.platform}</a>
            <a href="#arbetssatt" className="hover:text-zinc-900 transition-colors">{t.nav.approach}</a>
            <a href="#resultat" className="hover:text-zinc-900 transition-colors">{t.nav.results}</a>
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
          <div className="flex items-center gap-2">
            <Link
              href={t.langSwitcher.href}
              className="rounded border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-500 hover:border-zinc-400 transition-colors md:hidden"
            >
              {t.langSwitcher.label}
            </Link>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors"
              style={{ backgroundColor: BRAND }}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-zinc-100">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs text-zinc-400 mb-5">
                <span className="font-medium text-zinc-600">{t.hero.badge1}</span>
                <span className="text-zinc-200">|</span>
                <span>{t.hero.badge2}</span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl leading-tight">
                {t.hero.heading}
              </h1>
              <p className="mt-5 text-[15px] leading-7 text-zinc-600">
                {t.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors"
                  style={{ backgroundColor: BRAND }}
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#arbetssatt"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
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
                    <span className="mt-0.5 text-zinc-300 select-none">—</span>
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

        {/* Why — dark section */}
        <section className="border-b border-zinc-900" style={{ backgroundColor: BRAND }}>
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
        <section id="tjanster" className="border-b border-zinc-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <Overline>{t.services.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.services.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">{t.services.description}</p>
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
                        <span className="text-zinc-300 shrink-0 mt-0.5">—</span>
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

        {/* SAMA */}
        <section id="sama" className="border-b border-zinc-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <Overline>{t.sama.overline}</Overline>
                <h2 className="text-2xl font-light tracking-tight sm:text-3xl">{t.sama.heading}</h2>
                <p className="mt-4 text-[15px] leading-7 text-zinc-600">{t.sama.description}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: t.sama.f1Title, text: t.sama.f1Text },
                    { title: t.sama.f2Title, text: t.sama.f2Text },
                    { title: t.sama.f3Title, text: t.sama.f3Text },
                    { title: t.sama.f4Title, text: t.sama.f4Text },
                  ].map((f) => (
                    <div key={f.title} className="rounded-lg border border-zinc-200 bg-slate-50 p-4">
                      <div className="text-xs font-medium text-zinc-900">{f.title}</div>
                      <p className="mt-1.5 text-sm leading-6 text-zinc-500">{f.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white transition-colors"
                    style={{ backgroundColor: BRAND }}
                  >
                    {t.sama.cta1}
                  </a>
                  <a
                    href="#sama-mockup"
                    className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
                  >
                    {t.sama.cta2}
                  </a>
                </div>
              </div>

              <div id="sama-mockup" className="space-y-4">
                <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-md">
                  <Image
                    src="/sama-dashboard.png"
                    alt="SAMA dashboard"
                    width={1600}
                    height={1000}
                    className="h-auto w-full"
                  />
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
                <div className="rounded-lg border border-zinc-200 bg-white p-5">
                  <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">{t.sama.healthLabel}</div>
                  <div className="grid grid-cols-5 gap-3">
                    {healthScores.map((d) => (
                      <div key={d.label} className="flex flex-col items-center text-center">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-medium text-zinc-900"
                          style={{ borderColor: BRAND }}
                        >
                          {d.score}
                        </div>
                        <div className="mt-2 text-[10px] leading-tight text-zinc-400">{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="arbetssatt" className="border-b border-zinc-100 bg-slate-50">
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
        <section id="resultat" className="border-b border-zinc-100 bg-white">
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

        {/* FAQ */}
        <section id="faq" className="border-b border-zinc-100 bg-slate-50">
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
        <section id="om-oss" className="border-b border-zinc-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <Overline>{t.about.overline}</Overline>
                <h2 className="text-2xl font-light tracking-tight">{t.about.heading}</h2>
                <p className="mt-4 text-[15px] leading-7 text-zinc-600">{t.about.p1}</p>
                <p className="mt-4 text-[15px] leading-7 text-zinc-600">{t.about.p2}</p>
                <div className="mt-6">
                  <a
                    className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
                    href="https://www.linkedin.com/in/rickard-collander/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <div className="text-xs text-zinc-400 mt-0.5">Customer Success & Support Leadership</div>
                  </div>
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">{t.about.quoteHeading}</div>
                <p className="text-sm leading-6 text-zinc-600 italic">{t.about.quote}</p>
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
        <section id="kontakt" className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
            <div>
              <Overline>{t.contact.overline}</Overline>
              <h2 className="text-2xl font-light tracking-tight">{t.contact.heading}</h2>
              <p className="mt-3 text-[15px] leading-7 text-zinc-600">
                {t.contact.description}{" "}
                <span className="font-medium text-zinc-900">rc@successifier.com</span>.
              </p>
              <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-5">
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

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-zinc-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {t.footer.rights}</div>
          <div className="flex gap-5">
            <a className="hover:text-zinc-700 transition-colors" href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="hover:text-zinc-700 transition-colors" href="tel:+46722136422">+46 72 213 64 22</a>
            <a className="hover:text-zinc-700 transition-colors" href="https://www.linkedin.com/in/rickard-collander/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
