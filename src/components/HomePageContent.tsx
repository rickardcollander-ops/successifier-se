import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Dict } from "@/lib/i18n";

const healthScores = [
  { label: "Technical SEO", score: 100 },
  { label: "On-page SEO", score: 87 },
  { label: "GEO readiness", score: 96 },
  { label: "Link health", score: 81 },
  { label: "Performance", score: 100 },
];

export default function HomePageContent({ t }: { t: Dict }) {
  const contactHref = t.locale === "en" ? "/en#kontakt" : "/#kontakt";
  const approachHref = t.locale === "en" ? "/en#arbetssatt" : "/#arbetssatt";

  return (
    <div className="min-h-screen text-zinc-950">
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Successifier" width={36} height={36} className="h-9 w-9 drop-shadow-sm" priority />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Successifier.se</div>
              <div className="text-xs text-zinc-500">Customer Success • AI • Automation</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#tjanster" className="hover:text-zinc-950">{t.nav.services}</a>
            <a href="#sama" className="hover:text-zinc-950">{t.nav.platform}</a>
            <a href="#arbetssatt" className="hover:text-zinc-950">{t.nav.approach}</a>
            <a href="#resultat" className="hover:text-zinc-950">{t.nav.results}</a>
            <a href="#om-oss" className="hover:text-zinc-950">{t.nav.about}</a>
            <Link href={t.nav.blogHref} className="hover:text-zinc-950">{t.nav.blog}</Link>
            <a href="#kontakt" className="hover:text-zinc-950">{t.nav.contact}</a>
            <Link
              href={t.langSwitcher.href}
              className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50"
            >
              {t.langSwitcher.label}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={t.langSwitcher.href}
              className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 md:hidden"
            >
              {t.langSwitcher.label}
            </Link>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-indigo-200/50 blur-3xl" />
            <div className="absolute right-[-10%] top-[0%] h-[520px] w-[520px] rounded-full bg-purple-200/50 blur-3xl" />
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                <span className="font-medium text-zinc-900">{t.hero.badge1}</span>
                <span className="text-zinc-300">/</span>
                <span>{t.hero.badge2}</span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{t.hero.heading}</h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">{t.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                >
                  {t.hero.cta1}
                </a>
                <a
                  href="#arbetssatt"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                >
                  {t.hero.cta2}
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.25)]">
              <div className="text-sm font-semibold">{t.locale === "sv" ? "Detta etablerar vi" : "What we establish"}</div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {t.hero.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 rounded-2xl border border-zinc-200/70 bg-white p-4 sm:grid-cols-3">
                {[
                  { title: t.hero.stat1Title, sub: t.hero.stat1Sub },
                  { title: t.hero.stat2Title, sub: t.hero.stat2Sub },
                  { title: t.hero.stat3Title, sub: t.hero.stat3Sub },
                ].map((s) => (
                  <div key={s.title} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                    <div className="text-sm text-zinc-600">
                      <div className="font-semibold text-zinc-900">{s.title}</div>
                      <div>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                <div className="font-semibold">{t.hero.contactLabel}</div>
                <div className="mt-2">
                  <a className="underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                  <div className="text-zinc-500">+46 72 213 64 22</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">{t.why.heading}</h2>
              <p className="mt-3 text-zinc-600">{t.why.description}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: t.why.card1Title, text: t.why.card1Text },
                { title: t.why.card2Title, text: t.why.card2Text },
                { title: t.why.card3Title, text: t.why.card3Text },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border border-zinc-200 p-6">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="tjanster" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">{t.services.heading}</h2>
              <p className="mt-3 text-zinc-600">{t.services.description}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: t.services.p1Title, sub: t.services.p1Sub, focusLabel: t.services.p1FocusLabel, focus: t.services.p1Focus, resultLabel: t.services.p1ResultLabel, result: t.services.p1Result, color: "text-indigo-700" },
                { title: t.services.p2Title, sub: t.services.p2Sub, focusLabel: t.services.p2FocusLabel, focus: t.services.p2Focus, resultLabel: t.services.p2ResultLabel, result: t.services.p2Result, color: "text-purple-700" },
                { title: t.services.p3Title, sub: t.services.p3Sub, focusLabel: t.services.p3FocusLabel, focus: t.services.p3Focus, resultLabel: t.services.p3ResultLabel, result: t.services.p3Result, color: "text-zinc-900" },
                { title: t.services.p4Title, sub: t.services.p4Sub, focusLabel: t.services.p4FocusLabel, focus: t.services.p4Focus, resultLabel: t.services.p4ResultLabel, result: t.services.p4Result, color: "text-emerald-700" },
                { title: t.services.p5Title, sub: t.services.p5Sub, focusLabel: t.services.p5FocusLabel, focus: t.services.p5Focus, resultLabel: t.services.p5ResultLabel, result: t.services.p5Result, color: "text-pink-700" },
              ].map((p) => (
                <div key={p.title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                  <div className={`text-sm font-semibold ${p.color}`}>{p.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{p.sub}</p>
                  <div className="mt-5 text-sm font-semibold">{p.focusLabel}</div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    {p.focus.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                    <div className="text-xs font-semibold text-zinc-900">{p.resultLabel}</div>
                    <div className="mt-1 text-sm text-zinc-700">{p.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAMA */}
        <section id="sama" className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-purple-200/40 blur-3xl" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                  <span className="font-medium text-zinc-900">{t.sama.badgeLabel}</span>
                  <span className="text-zinc-300">/</span>
                  <span>{t.sama.badgeSub}</span>
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.sama.heading}</h2>
                <p className="mt-4 text-zinc-600">{t.sama.description}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: t.sama.f1Title, text: t.sama.f1Text, color: "text-indigo-700" },
                    { title: t.sama.f2Title, text: t.sama.f2Text, color: "text-emerald-700" },
                    { title: t.sama.f3Title, text: t.sama.f3Text, color: "text-purple-700" },
                    { title: t.sama.f4Title, text: t.sama.f4Text, color: "text-pink-700" },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
                      <div className={`text-sm font-semibold ${f.color}`}>{f.title}</div>
                      <p className="mt-2 text-sm text-zinc-600">{f.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                  >
                    {t.sama.cta1}
                  </a>
                  <a
                    href="#sama-mockup"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                  >
                    {t.sama.cta2}
                  </a>
                </div>
              </div>

              <div id="sama-mockup" className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_60px_-25px_rgba(2,6,23,0.35)]">
                  <Image
                    src="/sama-dashboard.png"
                    alt="SAMA – dashboard with traffic and AI visibility"
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
                    <div key={s.label} className="rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</div>
                      <div className="mt-1 text-2xl font-semibold text-zinc-900">{s.value}</div>
                      <div className="text-xs text-zinc-500">{s.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="text-sm font-semibold text-zinc-900">{t.sama.healthLabel}</div>
                  <div className="mt-4 grid grid-cols-5 gap-3">
                    {healthScores.map((d) => (
                      <div key={d.label} className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-emerald-500 text-sm font-semibold text-zinc-900">
                          {d.score}
                        </div>
                        <div className="mt-2 text-[11px] leading-tight text-zinc-600">{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="arbetssatt" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">{t.approach.heading}</h2>
              <p className="mt-3 text-zinc-600">{t.approach.description}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: t.approach.s1Title, text: t.approach.s1Text },
                { title: t.approach.s2Title, text: t.approach.s2Text },
                { title: t.approach.s3Title, text: t.approach.s3Text },
              ].map((s) => (
                <div key={s.title} className="rounded-3xl border border-zinc-200 p-6">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="resultat" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">{t.results.heading}</h2>
              <p className="mt-3 text-zinc-600">{t.results.description}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                { title: t.results.r1Title, text: t.results.r1Text },
                { title: t.results.r2Title, text: t.results.r2Text },
                { title: t.results.r3Title, text: t.results.r3Text },
                { title: t.results.r4Title, text: t.results.r4Text },
                { title: t.results.r5Title, text: t.results.r5Text },
                { title: t.results.r6Title, text: t.results.r6Text },
              ].map((r) => (
                <div key={r.title} className="rounded-3xl border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-semibold">{r.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight">{t.faq.heading}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { q: t.faq.q1, a: t.faq.a1 },
                { q: t.faq.q2, a: t.faq.a2 },
                { q: t.faq.q3, a: t.faq.a3 },
                { q: t.faq.q4, a: t.faq.a4 },
              ].map((item) => (
                <div key={item.q} className="rounded-3xl border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-semibold">{item.q}</div>
                  <p className="mt-2 text-sm text-zinc-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="om-oss" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{t.about.heading}</h2>
                <p className="mt-4 text-zinc-600">{t.about.p1}</p>
                <p className="mt-4 text-zinc-600">{t.about.p2}</p>
                <div className="mt-5">
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                    href="https://www.linkedin.com/in/rickard-collander/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.about.linkedIn}
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.25)]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-full border border-zinc-200/70 bg-zinc-50 shadow-sm">
                    <Image src="/rc2.jpg" alt="Rickard Collander" width={320} height={320} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">Rickard Collander</div>
                    <div className="text-sm text-zinc-600">Customer Success & Support Leadership</div>
                  </div>
                </div>
                <div className="text-sm font-semibold">{t.about.quoteHeading}</div>
                <p className="mt-2 text-sm text-zinc-600">{t.about.quote}</p>
                <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                  <div className="font-semibold">{t.about.contactLabel}</div>
                  <div className="mt-2">
                    <a className="underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                    <div className="text-zinc-500">+46 72 213 64 22</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{t.contact.heading}</h2>
              <p className="mt-3 text-zinc-600">
                {t.contact.description}{" "}
                <span className="font-medium">rc@successifier.com</span>.
              </p>
              <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="text-sm font-semibold">{t.contact.directLabel}</div>
                <div className="mt-3 text-sm text-zinc-700">
                  <div>{t.contact.emailLabel}: <a className="underline" href="mailto:rc@successifier.com">rc@successifier.com</a></div>
                  <div>{t.contact.phoneLabel}: <a className="underline" href="tel:+46722136422">+46 72 213 64 22</a></div>
                </div>
              </div>
            </div>
            <ContactForm t={t.form} />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {t.footer.rights}</div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="hover:text-zinc-900" href="tel:+46722136422">+46 72 213 64 22</a>
            <a className="hover:text-zinc-900" href="https://www.linkedin.com/in/rickard-collander/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
