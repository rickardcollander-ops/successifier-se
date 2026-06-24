// Styliserade, anonymiserade produktmockups för Successifier Support.
// Ren JSX/Tailwind i sajtens paper-palett – inga riktiga kunduppgifter.

const serif = { fontFamily: "var(--font-spectral)" } as const;
const mono = { fontFamily: "var(--font-plex-mono)" } as const;

function confColor(n: number) {
  if (n >= 90) return "var(--accent)";
  if (n >= 75) return "#7A5A22";
  return "var(--faint-2)";
}

function WindowChrome({ title, right }: { title: string; right?: string }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{ borderBottom: "1px solid var(--hairline)", background: "var(--paper-alt)" }}
    >
      <div className="flex items-center gap-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: "rgba(26,24,21,.18)" }} />
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: "rgba(26,24,21,.18)" }} />
          <span className="h-[9px] w-[9px] rounded-full" style={{ background: "rgba(26,24,21,.18)" }} />
        </span>
        <span className="text-[12px] font-medium" style={{ color: "var(--ink-soft)" }}>{title}</span>
      </div>
      {right && (
        <span className="hidden uppercase sm:block" style={{ ...mono, fontSize: "10.5px", letterSpacing: "0.14em", color: "var(--faint-2)" }}>
          {right}
        </span>
      )}
    </div>
  );
}

function Chip({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "accent" }) {
  const accent = tone === "accent";
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-[2px] text-[10.5px] font-medium"
      style={{
        background: accent ? "rgba(20,67,59,.10)" : "rgba(26,24,21,.05)",
        color: accent ? "var(--accent)" : "var(--faint)",
        border: `1px solid ${accent ? "rgba(20,67,59,.20)" : "var(--hairline)"}`,
      }}
    >
      {children}
    </span>
  );
}

export function InboxMockup() {
  const cats: { label: string; n: number; active?: boolean }[] = [
    { label: "Nya", n: 7, active: true },
    { label: "Öppna", n: 16 },
    { label: "Granskning", n: 0 },
    { label: "Skickade", n: 0 },
    { label: "Stängda", n: 2034 },
  ];

  const tickets = [
    { subject: "Uppsägning", from: "v•••@icloud.com", time: "09:04", ai: 99, active: true },
    { subject: "Mitt konto / Mina sidor", from: "a•••@outlook.com", time: "08:48", ai: 73 },
    { subject: "Vill bli kund", from: "n•••@hotmail.se", time: "08:34", ai: 86 },
    { subject: "Ångerrätt", from: "j•••@gmail.com", time: "07:21", ai: 91 },
    { subject: "Hackskydd", from: "t•••@hotmail.com", time: "22:36", ai: 90 },
  ];

  return (
    <div className="overflow-hidden rounded-[10px]" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
      <WindowChrome title="Doldadress · Ärendesystem" right="Synk 09:32 · 0 nya · 2 konton" />

      {/* Kategoriflikar */}
      <div className="flex items-center gap-5 overflow-x-auto px-4 py-3" style={{ borderBottom: "1px solid var(--hairline)" }}>
        {cats.map((c) => (
          <span key={c.label} className="flex shrink-0 items-center gap-1.5 text-[12.5px]" style={{ color: c.active ? "var(--ink)" : "var(--faint)" }}>
            <span style={c.active ? { borderBottom: "2px solid var(--accent)", paddingBottom: "3px", fontWeight: 600 } : undefined}>{c.label}</span>
            <span
              className="rounded-full px-1.5 py-[1px] text-[10.5px]"
              style={{ background: c.active ? "rgba(20,67,59,.10)" : "rgba(26,24,21,.05)", color: c.active ? "var(--accent)" : "var(--faint-2)" }}
            >
              {c.n}
            </span>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,300px)_1fr]">
        {/* Ärendelista */}
        <ul style={{ borderRight: "1px solid var(--hairline)" }}>
          {tickets.map((t) => (
            <li
              key={t.subject}
              className="flex flex-col gap-1.5 px-4 py-3"
              style={{
                borderBottom: "1px solid var(--hairline)",
                borderLeft: t.active ? "3px solid var(--accent)" : "3px solid transparent",
                background: t.active ? "rgba(20,67,59,.04)" : "transparent",
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[13.5px] font-medium" style={{ color: "var(--ink)" }}>{t.subject}</span>
                <span className="shrink-0 rounded-full px-1.5 py-[1px] text-[10px] font-semibold" style={{ background: "rgba(20,67,59,.10)", color: confColor(t.ai) }}>
                  AI {t.ai}%
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 text-[11.5px]" style={{ color: "var(--faint-2)" }}>
                <span className="truncate">{t.from}</span>
                <span style={mono}>{t.time}</span>
              </div>
              <Chip>Nytt</Chip>
            </li>
          ))}
        </ul>

        {/* Ärendedetalj med AI-svar */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <Chip tone="accent">✦ AI-svar genererat</Chip>
            <span className="text-[11.5px] font-medium" style={{ color: "var(--accent)" }}>Säkerhet 99%</span>
          </div>

          <h3 className="mt-3 text-[20px] font-medium tracking-[-0.01em]" style={serif}>Uppsägning</h3>
          <div className="mt-1 text-[11.5px]" style={{ ...mono, color: "var(--faint-2)" }}>v•••@icloud.com · 24/06/2026 09:04</div>

          {/* Ursprungligt meddelande */}
          <div className="mt-4 rounded-[6px] p-4" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
            <div className="mb-1.5 uppercase" style={{ ...mono, fontSize: "10px", letterSpacing: "0.14em", color: "var(--faint-2)" }}>Ursprungligt meddelande</div>
            <p className="text-[13px] leading-[1.6]" style={{ color: "var(--muted)" }}>
              Hej! Jag har sagt upp mitt abonnemang men fått tre påminnelser om att mitt kort inte
              fungerar vid debitering. Hur löser jag det?
            </p>
          </div>

          {/* AI-förslag */}
          <div className="mt-4 rounded-[6px] p-4" style={{ border: "1px solid rgba(20,67,59,.22)", background: "rgba(20,67,59,.045)" }}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>✦ AI-förslag till svar</span>
              <span className="text-[12px]" style={{ color: "var(--faint-2)" }}>👍 👎</span>
            </div>
            <p className="text-[13px] leading-[1.6]" style={{ color: "var(--ink-soft)" }}>
              Hej! Tack för att du hör av dig. Din uppsägning är registrerad och abonnemanget avslutas
              vid bindningstidens slut. Den utestående fakturan avser perioden fram till dess. Uppdatera
              gärna kortuppgifterna under <strong>Mina sidor → Prenumeration</strong>, så dras den sista
              betalningen automatiskt. Hör av dig om du har fler frågor!
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <span className="rounded-[3px] px-4 py-2 text-[12.5px] font-medium" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>Använd detta svar</span>
              <span className="rounded-[3px] px-4 py-2 text-[12.5px] font-medium" style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}>Generera om</span>
            </div>
          </div>

          {/* Integrationer */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>Stripe · 1 prenumeration · 3 fakturor</Chip>
            <Chip>Billecta</Chip>
            <Chip>Resend</Chip>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KnowledgeBaseMockup() {
  const articles = [
    { title: "Så uppdaterar du kortuppgifter", source: "Manuell" },
    { title: "Vad händer vid uppsägning?", source: "Lärd från konversation" },
    { title: "Ångerrätt och återbetalning", source: "Lärd från konversation" },
    { title: "Hackskydd & dark web-bevakning", source: "Manuell" },
  ];

  return (
    <div className="overflow-hidden rounded-[10px]" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
      <WindowChrome title="Doldadress · Kunskapsbas" right="142 artiklar" />
      <div className="p-5">
        <div className="flex items-center rounded-[3px] px-3 py-2 text-[13px]" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)", color: "var(--faint-2)" }}>
          Sök i kunskapsbasen…
        </div>
        <ul className="mt-4" style={{ borderTop: "1px solid var(--hairline)" }}>
          {articles.map((a) => (
            <li key={a.title} className="flex items-center justify-between gap-3 py-3" style={{ borderBottom: "1px solid var(--hairline)" }}>
              <span className="text-[13.5px] font-medium" style={{ color: "var(--ink)" }}>{a.title}</span>
              <Chip tone={a.source === "Manuell" ? "neutral" : "accent"}>{a.source}</Chip>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-[6px] p-3" style={{ border: "1px solid rgba(20,67,59,.22)", background: "rgba(20,67,59,.045)" }}>
          <span className="text-[12.5px]" style={{ color: "var(--accent)" }}>
            ✦ AI föreslår en ny artikel utifrån återkommande frågor om <strong>kortbyte vid uppsägning</strong>.
          </span>
        </div>
      </div>
    </div>
  );
}
