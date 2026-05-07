import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-950">
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Successifier"
              width={36}
              height={36}
              className="h-9 w-9 drop-shadow-sm"
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Successifier.se</div>
              <div className="text-xs text-zinc-500">Customer Success • AI • Automation • Marknadsföring</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#tjanster" className="hover:text-zinc-950">Tjänster</a>
            <a href="#sama" className="hover:text-zinc-950">Plattform</a>
            <a href="#arbetssatt" className="hover:text-zinc-950">Arbetssätt</a>
            <a href="#resultat" className="hover:text-zinc-950">Resultat</a>
            <a href="#om-oss" className="hover:text-zinc-950">Om oss</a>
            <a href="#kontakt" className="hover:text-zinc-950">Kontakt</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
            >
              Boka strategisamtal
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-indigo-200/50 blur-3xl" />
            <div className="absolute right-[-10%] top-[0%] h-[520px] w-[520px] rounded-full bg-purple-200/50 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                <span className="font-medium text-zinc-900">Sverige</span>
                <span className="text-zinc-300">/</span>
                <span>Customer Success • AI • Automation • Marknadsföring</span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Vi bygger AI-, automations- och kundfunktioner som säkrar intäkter, skalar team och tål ledningsgranskning.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">
                Från strategi till implementation. Vi hjälper bolag att gå från reaktiv drift till ett styrbart, mätbart och affärskritiskt system – med AI, automation och AI-driven marknadsföring på Google, LinkedIn och Meta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                >
                  Boka strategisamtal (30 min)
                </a>
                <Link
                  href="#arbetssatt"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                >
                  Se hur vi jobbar
                </Link>
              </div>

            </div>

            <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.25)]">
              <div className="text-sm font-semibold">Detta etablerar vi</div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                  AI-strategi och AI-verktyg som ger mätbar effekt i drift, sälj och marknad.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                  Automationsflöden som tar bort manuellt arbete och gör verksamheten skalbar.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                  AI-driven SEO och marknadsföring på Google, LinkedIn och Meta – från idé till kampanjstyrning.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                  Egen plattform <span className="font-semibold">SAMA</span> som spårar AI-omnämnanden, Google-synlighet och GEO-readiness – och driver content-publicering.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                  Customer Success- och Supportfunktioner med tydlig KPI-struktur och playbooks.
                </li>
              </ul>

              <div className="mt-6 grid gap-3 rounded-2xl border border-zinc-200/70 bg-white p-4 sm:grid-cols-3">
                <div className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                  <div className="text-sm text-zinc-600">
                    <div className="font-semibold text-zinc-900">SAMA-plattformen</div>
                    <div>AI-synlighet • SEO • Content</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                  <div className="text-sm text-zinc-600">
                    <div className="font-semibold text-zinc-900">SEO & Marknad</div>
                    <div>Google • LinkedIn • Meta</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                  <div className="text-sm text-zinc-600">
                    <div className="font-semibold text-zinc-900">10+ år</div>
                    <div>CS & Support Leadership</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                <div className="font-semibold">Kontakt</div>
                <div className="mt-2">
                  <a className="underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                  <div className="text-zinc-500">+46 72 213 64 22</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Varför bolag tar in oss när kundintäkter och leverans är affärskritiska</h2>
              <p className="mt-3 text-zinc-600">
                När det finns intäktsrisk, kapacitetsbrist eller styrningsproblem bygger vi ett system som går att driva, följa upp och förbättra – med tydligt ansvar.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">Ledningserfarenhet</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Vi har byggt och lett globala Customer Success- och Supportfunktioner med ansvar för NRR, CSAT, SLA och operativ skala – inte bara processdesign.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">Systemtänk</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Vi arbetar inte i silos. Customer Success, Support, Revenue Operations och AI-styrning etableras som ett sammanhängande affärssystem.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">Implementation-first</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Inga powerpoints utan leverans. Vi lämnar efter oss playbooks, dashboards, verktygskonfiguration och ett team som kan driva vidare utan oss.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tjanster" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Tjänster</h2>
              <p className="mt-3 text-zinc-600">
                Fem program som känns som affärsflöden – inte en konsultmeny. Customer Success, Contact Center, AI, automation och AI-driven marknadsföring.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-indigo-700">🧭 Program 1: Revenue Protection (Customer Success)</div>
                <p className="mt-2 text-sm text-zinc-600">För bolag med återkommande intäkter</p>
                <div className="mt-5 text-sm font-semibold">Fokus</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>Operating model & segmentering</li>
                  <li>Health scoring & churn risk-system</li>
                  <li>Renewal & expansion playbooks</li>
                  <li>QBR-struktur för ledning och kund</li>
                </ul>
                <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-900">Resultat</div>
                  <div className="mt-1 text-sm text-zinc-700">Mindre churn. Förutsägbar NRR. Tydlig ägarmodell i teamet.</div>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-purple-700">⚙️ Program 2: Operational Excellence (Contact Center / Support)</div>
                <p className="mt-2 text-sm text-zinc-600">För bolag med hög volym eller komplex leverans</p>
                <div className="mt-5 text-sm font-semibold">Fokus</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>WFM & bemanningslogik</li>
                  <li>QA & coachingstruktur</li>
                  <li>Ärendeflöden och routing</li>
                  <li>KPI-ramverk: SLA, CSAT, FCR, backlog</li>
                </ul>
                <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-900">Resultat</div>
                  <div className="mt-1 text-sm text-zinc-700">Lägre kostnad per ärende. Högre leveranskvalitet. Mindre brandkårsutryckningar.</div>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">🤖 Program 3: AI-konsulting</div>
                <p className="mt-2 text-sm text-zinc-600">För bolag som vill omsätta AI till mätbar affärsnytta</p>
                <div className="mt-5 text-sm font-semibold">Fokus</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>AI-strategi, use case-portfölj och prioritering</li>
                  <li>Egna AI-verktyg och AI-agenter (LLM, RAG, copilots)</li>
                  <li>AI för Customer Success, support och sälj</li>
                  <li>Governance, datakvalitet och säker användning</li>
                </ul>
                <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-900">Resultat</div>
                  <div className="mt-1 text-sm text-zinc-700">AI som faktiskt används i drift – inte som pilot. Snabbare beslut, lägre kostnad, högre kvalitet.</div>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-emerald-700">🔁 Program 4: Automation</div>
                <p className="mt-2 text-sm text-zinc-600">För bolag som vill ta bort manuellt arbete och skala utan att växa headcount</p>
                <div className="mt-5 text-sm font-semibold">Fokus</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>Processkartläggning & automation roadmap</li>
                  <li>Workflow-automation (n8n, Make, Zapier, Power Automate)</li>
                  <li>Integrationer mellan CRM, CS, Support, BI och marknad</li>
                  <li>AI + automation: triggers, signaler och autonoma flöden</li>
                </ul>
                <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-900">Resultat</div>
                  <div className="mt-1 text-sm text-zinc-700">Lägre operativ kostnad. Färre fel. Skalbar leverans utan att teamet växer linjärt.</div>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-pink-700">📈 Program 5: AI-driven SEO & Marknadsföring</div>
                <p className="mt-2 text-sm text-zinc-600">Google, LinkedIn & Meta – drivet av vår plattform SAMA</p>
                <div className="mt-5 text-sm font-semibold">Fokus</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>AI-synlighet & GEO-optimering – spårar hur ert varumärke nämns i ChatGPT, Perplexity och Google AI-svar</li>
                  <li>AI-verktyg för SEO: keyword, content och teknisk optimering</li>
                  <li>Google Ads & Performance Max med AI-styrd bud- och creative-logik</li>
                  <li>LinkedIn Ads & ABM för B2B – ICP, copy och pipeline</li>
                  <li>Meta (Facebook & Instagram) – kampanjer, kreativ och funnel</li>
                </ul>
                <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-900">Resultat</div>
                  <div className="mt-1 text-sm text-zinc-700">Mer kvalificerad trafik och pipeline – till lägre CAC och med mätbar attribution.</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="sama" className="relative overflow-hidden border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-purple-200/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                  <span className="font-medium text-zinc-900">Vår plattform</span>
                  <span className="text-zinc-300">/</span>
                  <span>SAMA</span>
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  SAMA – AI-synlighet, SEO och content i ett system
                </h2>
                <p className="mt-4 text-zinc-600">
                  SAMA är verktyget vi själva använder för att driva Google-, LinkedIn- och Meta-synlighet åt kunder. Den spårar hur ofta ert varumärke nämns i AI-svar (ChatGPT, Perplexity, Google AI Overviews), mäter SEO-hälsa och GEO-readiness, och publicerar AI-genererat content – med människa i loopen.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-indigo-700">📊 Insikter</div>
                    <p className="mt-2 text-sm text-zinc-600">AI-omnämnandegrad, Google-snittposition, klick & exponeringar från GSC – allt i en vy.</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-emerald-700">🛡️ Tech & On-page</div>
                    <p className="mt-2 text-sm text-zinc-600">Technical SEO, On-page SEO, GEO readiness, Link health och Performance – kontinuerligt.</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-purple-700">✍️ Content-motor</div>
                    <p className="mt-2 text-sm text-zinc-600">AI-genererade utkast, granskningsflöde, schemaläggning och publicering – från idé till live.</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-pink-700">🤝 Konsulting runt SAMA</div>
                    <p className="mt-2 text-sm text-zinc-600">Vi bemannar plattformen åt er – strategi, redaktör och optimering. Ni säljer inte bara licenser, ni får ett team.</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                  >
                    Boka demo av SAMA
                  </a>
                  <a
                    href="#sama-mockup"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                  >
                    Se exempelvy
                  </a>
                </div>
              </div>

              <div id="sama-mockup" className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_60px_-25px_rgba(2,6,23,0.35)]">
                  <Image
                    src="/sama-dashboard.png"
                    alt="SAMA – dashboardvy med trafik och AI-synlighet"
                    width={1600}
                    height={1000}
                    className="h-auto w-full"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">AI-omnämnandegrad</div>
                    <div className="mt-1 text-2xl font-semibold text-zinc-900">0%</div>
                    <div className="text-xs text-zinc-500">Senast kollat 1d sen</div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Google-synlighet</div>
                    <div className="mt-1 text-2xl font-semibold text-zinc-900">29.9</div>
                    <div className="text-xs text-zinc-500">Snittposition – lägre är bättre</div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">Publicerat content</div>
                    <div className="mt-1 text-2xl font-semibold text-zinc-900">7</div>
                    <div className="text-xs text-zinc-500">Artiklar de senaste 90 dagarna</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="text-sm font-semibold text-zinc-900">Site health (exempel)</div>
                  <div className="mt-4 grid grid-cols-5 gap-3">
                    {[
                      { label: "Technical SEO", score: 100 },
                      { label: "On-page SEO", score: 87 },
                      { label: "GEO readiness", score: 96 },
                      { label: "Link health", score: 81 },
                      { label: "Performance", score: 100 },
                    ].map((d) => (
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

        <section id="arbetssatt" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Arbetssätt</h2>
              <p className="mt-3 text-zinc-600">Ledningsvänligt, systematiskt och byggt för att hålla när konsulten är borta.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">1. Diagnose</div>
                <p className="mt-2 text-sm text-zinc-600">Vi kartlägger affärsmodell, kundportfölj, teamstruktur och systemlandskap. Fokus på var intäktsrisk, kapacitetsbrist och styrningsproblem faktiskt uppstår.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">2. Architect</div>
                <p className="mt-2 text-sm text-zinc-600">Vi designar operating model, KPI-struktur, playbooks och systemflöden som hänger ihop – från styrelserapport till daglig CSM-uppgift.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">3. Implement & Enable</div>
                <p className="mt-2 text-sm text-zinc-600">Vi bygger i verktygen, tränar teamet och etablerar uppföljning så lösningen lever vidare utan konsultberoende.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="resultat" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Resultat vi brukar bli inkopplade för att skapa</h2>
              <p className="mt-3 text-zinc-600">Typiska utfall när kundaffären behöver styras, inte hoppas på.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Minskad churn</div>
                <p className="mt-2 text-sm text-zinc-600">Strukturerad risk- och renewalmodell med tydliga triggers, ägare och uppföljning.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Kortare onboarding & time-to-value</div>
                <p className="mt-2 text-sm text-zinc-600">Playbooks, milestones och enablement som gör värde tydligt och repeterbart.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">AI och automation i drift</div>
                <p className="mt-2 text-sm text-zinc-600">Konkreta AI-verktyg och automationsflöden som tar bort manuellt arbete och frigör kapacitet.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Mer pipeline från Google, LinkedIn & Meta</div>
                <p className="mt-2 text-sm text-zinc-600">AI-driven SEO och kampanjstyrning – drivet av vår plattform SAMA, från sökord till publicerat content.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Högre CSAT och leveransprecision</div>
                <p className="mt-2 text-sm text-zinc-600">QA, coaching och operativ styrning som minskar brandkårsutryckningar.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Tydligare ledningsrapportering</div>
                <p className="mt-2 text-sm text-zinc-600">NRR, kundportfölj, kampanj-ROI och intäktsrisk i ett format som håller för ledning och styrelse.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Hur snabbt kan vi komma igång?</div>
                <p className="mt-2 text-sm text-zinc-600">Ofta med en första workshop inom 1–2 veckor. Därefter lägger vi en 30/60/90-dagars plan.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Jobbar du med våra befintliga verktyg?</div>
                <p className="mt-2 text-sm text-zinc-600">Ja. Målet är förbättring med minsta möjliga friktion. Vi kan också rekommendera förändringar vid behov.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Är detta bara strategi?</div>
                <p className="mt-2 text-sm text-zinc-600">Nej. Vi gör strategi + implementation: processer, dashboards, playbooks och enablement.</p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">Hur funkar prissättning?</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Uppdrag formas vanligtvis som: fast pris för analys- och designfas (2–4 veckor), löpande stöd/implementation per månad eller programbaserat upplägg för större transformationer. Alltid tydlig leverans, tydligt ansvar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="om-oss" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Om oss</h2>
                <p className="mt-4 text-zinc-600">
                  Vi leds av Rickard Collander, som har byggt och drivit Customer Success och Support i globala, digitala miljöer med ansvar för både intäktsskydd och operativ leverans. Vår styrka ligger i att bygga system som fungerar för ledning, chefer och team samtidigt – där data, process och teknik arbetar tillsammans.
                </p>
                <p className="mt-4 text-zinc-600">
                  Utanför jobbet laddar vi energi med familjen, fjällen och längdskidor – och när det finns en bana i närheten blir det gärna en padelmatch.
                </p>
                <div className="mt-5">
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
                    href="https://www.linkedin.com/in/rickard-collander/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.25)]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-full border border-zinc-200/70 bg-zinc-50 shadow-sm">
                    <Image
                      src="/rc2.jpg"
                      alt="Rickard Collander"
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">Rickard Collander</div>
                    <div className="text-sm text-zinc-600">Customer Success & Support Leadership</div>
                  </div>
                </div>
                <div className="text-sm font-semibold">När du lämnar sidan ska du tänka</div>
                <p className="mt-2 text-sm text-zinc-600">
                  “Det här teamet kan ta ansvar för hela vår kundaffär, inte bara förbättra delar av den.”
                </p>
                <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                  <div className="font-semibold">Direkt</div>
                  <div className="mt-2">
                    <a className="underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                    <div className="text-zinc-500">+46 72 213 64 22</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Boka strategisamtal med ledning</h2>
              <p className="mt-3 text-zinc-600">
                30 minuter. Ingen pitch. Vi tittar på var er största intäkts- eller leveransrisk finns.
                Allt skickas till <span className="font-medium">rc@successifier.com</span>.
              </p>
              <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="text-sm font-semibold">Direktkontakt</div>
                <div className="mt-3 text-sm text-zinc-700">
                  <div>
                    Email: <a className="underline" href="mailto:rc@successifier.com">rc@successifier.com</a>
                  </div>
                  <div>
                    Telefon: <a className="underline" href="tel:+46722136422">+46 72 213 64 22</a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Successifier.se</div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="hover:text-zinc-900" href="tel:+46722136422">+46 72 213 64 22</a>
            <a
              className="hover:text-zinc-900"
              href="https://www.linkedin.com/in/rickard-collander/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
