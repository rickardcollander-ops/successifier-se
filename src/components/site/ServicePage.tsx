import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import BookingEmbed from "@/components/site/BookingEmbed";
import { getPostsByCategory, type Category } from "@/lib/blog";
import { ORG, SERVICE_PAGES, SITE_URL } from "@/lib/site";

// Gemensam mall för tjänstesidorna (/ai-agenter, /seo-geo, /customer-success,
// /contact-center-automation). Varje sida beskriver ett erbjudande med
// citerbara fakta: ett "Kort svar" högst upp, siffror, tidsramar och
// självständiga stycken som en AI-sökmotor kan lyfta ut ordagrant.

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

export interface ServiceFact {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  text: string;
}

export interface ServiceStep {
  tag: string;
  title: string;
  text: string;
}

export interface CitableFact {
  id: string;
  heading: string;
  text: string;
}

export interface ServiceCase {
  title: string;
  result: string;
  detail: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageData {
  href: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  shortAnswer: string;
  serviceName: string;
  serviceType: string;
  facts: ServiceFact[];
  deliverablesHeading: string;
  deliverablesIntro: string;
  deliverables: ServiceItem[];
  processHeading: string;
  processIntro: string;
  process: ServiceStep[];
  citable: CitableFact[];
  cases?: ServiceCase[];
  casesNote?: string;
  faqs: ServiceFaq[];
  category: Category;
  guidesHeading: string;
  ctaHeading: string;
  ctaText: string;
}

function Overline({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`mb-[18px] uppercase ${center ? "text-center" : ""}`}
      style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", color: "var(--accent)" }}
    >
      {children}
    </div>
  );
}

export function buildServiceJsonLd(d: ServicePageData) {
  const pageUrl = `${SITE_URL}${d.href}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: d.serviceName,
        serviceType: d.serviceType,
        url: pageUrl,
        description: d.shortAnswer,
        provider: { "@id": ORG.id },
        areaServed: [{ "@type": "Country", name: "Sweden" }, "Nordics", "Europe"],
        availableLanguage: ["sv", "en"],
        audience: { "@type": "BusinessAudience", audienceType: "B2B- och SaaS-bolag i Sverige" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.deliverablesHeading,
          itemListElement: d.deliverables.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: d.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: d.title,
        description: d.shortAnswer,
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${pageUrl}#service` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#kort-svar", ...d.citable.map((c) => `#${c.id}`)],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE_URL}/tjanster` },
          { "@type": "ListItem", position: 3, name: d.breadcrumb, item: pageUrl },
        ],
      },
    ],
  };
}

export default function ServicePage({ data: d }: { data: ServicePageData }) {
  const guidePosts = getPostsByCategory(d.category).slice(0, 3);
  const otherServices = SERVICE_PAGES.filter((s) => s.href !== d.href);
  const jsonLd = buildServiceJsonLd(d);

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="sv" />

      <main aria-label="Huvudinnehåll">
        {/* Hero + Kort svar */}
        <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Introduktion">
          <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 sm:px-10 md:pt-24 md:pb-20">
            <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/tjanster" className="no-underline" style={{ color: "var(--faint)" }}>Tjänster</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{d.breadcrumb}</li>
              </ol>
            </nav>
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_.9fr]">
              <div>
                <Overline>{d.eyebrow}</Overline>
                <h1 className="max-w-[18ch] text-[clamp(38px,5vw,66px)] font-medium leading-[1.04] tracking-[-0.018em]" style={serif}>
                  {d.title}
                </h1>
                <p className="mt-6 max-w-[600px] text-[18px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>
                  {d.lead}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-7">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-medium no-underline transition-opacity hover:opacity-90"
                    style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                  >
                    Boka strategisamtal (30 min)
                  </a>
                  <a
                    href="#fakta"
                    className="inline-flex items-center gap-2 pb-[3px] text-[15.5px] font-medium no-underline"
                    style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}
                  >
                    Fakta i korthet →
                  </a>
                </div>
              </div>

              <aside
                id="kort-svar"
                className="rounded-[6px] p-6"
                style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}
                aria-label="Kort svar"
              >
                <div className="mb-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                  Kort svar
                </div>
                <p className="text-[15.5px] leading-[1.62]" style={{ color: "var(--ink-soft)" }}>{d.shortAnswer}</p>
              </aside>
            </div>
          </div>
        </section>

        {/* Nyckeltal */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Nyckeltal">
          <div className="mx-auto max-w-[1200px] px-6 py-[72px] sm:px-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {d.facts.map((f) => (
                <div key={f.label} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[clamp(40px,4.6vw,56px)] font-medium leading-none tracking-[-0.02em]" style={serif}>{f.value}</div>
                  <p className="mt-3 text-[14.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leverans */}
        <section id="leverans" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label={d.deliverablesHeading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[.8fr_1.2fr]">
              <div>
                <Overline>Leverans</Overline>
                <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{d.deliverablesHeading}</h2>
              </div>
              <p className="max-w-[460px] pt-1 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{d.deliverablesIntro}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {d.deliverables.map((item, i) => (
                <div key={item.title} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                  <div className="text-[12px]" style={{ ...mono, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 text-[20px] font-medium leading-[1.2] tracking-[-0.01em]" style={serif}>{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label={d.processHeading}>
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="max-w-2xl">
              <Overline>Så går det till</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{d.processHeading}</h2>
              <p className="mt-4 text-[17px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{d.processIntro}</p>
            </div>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {d.process.map((s) => (
                <div key={s.tag} className="relative pt-[22px]" style={{ borderTop: "1px solid var(--hairline-strong)" }}>
                  <div className="absolute left-0 top-[-5px] h-[9px] w-[9px] rounded-full" style={{ background: "var(--accent)" }} />
                  <div className="mb-3 text-[11.5px]" style={{ ...mono, letterSpacing: "0.14em", color: "var(--faint-2)" }}>{s.tag}</div>
                  <h3 className="text-[21px] font-medium tracking-[-0.01em]" style={serif}>{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-pretty" style={{ color: "var(--muted)" }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citerbara fakta */}
        <section id="fakta" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Fakta i korthet">
          <div className="mx-auto max-w-[1000px] px-6 py-[100px] sm:px-10">
            <Overline>Fakta i korthet</Overline>
            <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>
              Det här kan ni citera
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.62]" style={{ color: "var(--muted)" }}>
              Varje stycke nedan är skrivet för att stå för sig självt. Siffror, tidsramar och villkor
              är desamma som vi använder i offerter och avtal.
            </p>
            <dl className="mt-10" style={{ borderTop: "1px solid var(--hairline)" }}>
              {d.citable.map((c) => (
                <div key={c.id} id={c.id} className="grid grid-cols-1 gap-x-10 gap-y-2 py-[26px] md:grid-cols-[.9fr_1.4fr]" style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <dt className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>{c.heading}</dt>
                  <dd className="text-[15.5px] leading-[1.62]" style={{ color: "var(--muted)" }}>{c.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Kundresultat */}
        {d.cases && d.cases.length > 0 && (
          <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Kundresultat">
            <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
              <Overline>Kundresultat</Overline>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>Vad vi levererat</h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {d.cases.map((c) => (
                  <div key={c.title} className="rounded-[6px] p-6" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
                    <div className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>{c.title}</div>
                    <div className="mt-3 text-[30px] font-medium leading-[1.1]" style={serif}>{c.result}</div>
                    <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{c.detail}</p>
                  </div>
                ))}
              </div>
              {d.casesNote && <p className="mt-5 text-[12px]" style={{ color: "var(--faint-2)" }}>{d.casesNote}</p>}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Vanliga frågor">
          <div className="mx-auto max-w-[1000px] px-6 py-[100px] sm:px-10">
            <div className="mb-10 text-center">
              <Overline center>Vanliga frågor</Overline>
              <h2 className="text-[clamp(28px,3.4vw,42px)] font-medium tracking-[-0.015em]" style={serif}>Frågor och svar</h2>
            </div>
            <div style={{ borderBottom: "1px solid var(--hairline)" }}>
              {d.faqs.map((f) => (
                <div key={f.q} className="grid grid-cols-1 gap-x-10 gap-y-3 py-[28px] md:grid-cols-[1fr_1.3fr]" style={{ borderTop: "1px solid var(--hairline)" }}>
                  <h3 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>{f.q}</h3>
                  <p className="text-[15.5px] leading-[1.62] text-pretty" style={{ color: "var(--muted)" }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Andra tjänster */}
        <section style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }} aria-label="Fler tjänster">
          <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Overline>Fler tjänster</Overline>
                <h2 className="text-[clamp(26px,3vw,36px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>Övriga erbjudanden från Successifier</h2>
              </div>
              <Link href="/tjanster" className="text-[14.5px] no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,24,21,.3)" }}>
                Alla tjänster →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-[6px] p-5 no-underline transition-colors hover:bg-[color:var(--paper)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  <div className="text-[17px] font-medium" style={serif}>{s.label} →</div>
                  <p className="mt-1 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Fördjupning */}
        {guidePosts.length > 0 && (
          <section style={{ borderBottom: "1px solid var(--hairline)" }} aria-label="Fördjupning">
            <div className="mx-auto max-w-[1200px] px-6 py-[88px] sm:px-10">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-[560px]">
                  <Overline>Fördjupning</Overline>
                  <h2 className="text-[clamp(26px,3vw,36px)] font-medium leading-[1.1] tracking-[-0.015em]" style={serif}>{d.guidesHeading}</h2>
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
                    className="group flex flex-col rounded-[6px] p-6 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
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

        {/* CTA */}
        <section id="kontakt" aria-label="Boka strategisamtal">
          <div className="mx-auto max-w-[1200px] px-6 py-[100px] sm:px-10">
            <div className="rounded-[6px] p-8 sm:p-14" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-[-0.015em]" style={serif}>{d.ctaHeading}</h2>
                <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-pretty" style={{ color: "rgba(242,238,230,.72)" }}>{d.ctaText}</p>
                <p className="mt-3 text-[14px]" style={{ color: "rgba(242,238,230,.6)" }}>
                  Eller mejla <a href={`mailto:${ORG.email}`} className="no-underline" style={{ color: "var(--on-accent)", borderBottom: "1px solid rgba(242,238,230,.4)" }}>{ORG.email}</a> · {ORG.phoneDisplay}
                </p>
              </div>
              <div className="mx-auto mt-9 max-w-[760px] text-left">
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
