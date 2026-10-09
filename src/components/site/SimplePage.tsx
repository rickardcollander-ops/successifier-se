import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const serif = { fontFamily: "var(--font-spectral)" } as const;
export const mono = { fontFamily: "var(--font-plex-mono)" } as const;

// Gemensam ram för enklare innehållssidor (om oss, kontakt, kundcase,
// integritetspolicy): sidhuvud, brödsmulor, rubrik, valfritt kort svar och sidfot.
export default function SimplePage({
  jsonLd,
  breadcrumb,
  eyebrow,
  title,
  lead,
  shortAnswer,
  updated,
  children,
}: {
  jsonLd: Record<string, unknown>;
  breadcrumb: { href?: string; label: string }[];
  eyebrow: string;
  title: string;
  lead?: string;
  shortAnswer?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale="sv" />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10" aria-label={title}>
        <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
            {breadcrumb.map((b) => (
              <li key={b.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {b.href ? (
                  <Link href={b.href} className="no-underline" style={{ color: "var(--faint)" }}>{b.label}</Link>
                ) : (
                  <span aria-current="page" style={{ color: "var(--ink-soft)" }}>{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <header>
          <div className="uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>{eyebrow}</div>
          <h1 className="mt-2 text-[clamp(32px,4.4vw,48px)] font-medium leading-[1.08] tracking-[-0.018em]" style={serif}>{title}</h1>
          {lead && <p className="mt-5 text-[18px] leading-[1.6]" style={{ color: "var(--muted)" }}>{lead}</p>}
          {updated && (
            <p className="mt-4 text-[12.5px]" style={{ ...mono, color: "var(--faint-2)" }}>
              Senast uppdaterad{" "}
              <time dateTime={updated}>
                {new Date(updated).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </p>
          )}
        </header>

        {shortAnswer && (
          <section
            id="kort-svar"
            aria-label="Kort svar"
            className="mt-10 rounded-[6px] p-6 sm:p-7"
            style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)", borderLeft: "3px solid var(--accent)" }}
          >
            <div className="mb-2 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>Kort svar</div>
            <p className="text-[17px] leading-[1.6]" style={{ color: "var(--ink-soft)" }}>{shortAnswer}</p>
          </section>
        )}

        <div className="article-prose prose mt-10 max-w-none prose-a:no-underline hover:prose-a:underline">{children}</div>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
