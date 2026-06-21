import Link from "next/link";

type Locale = "sv" | "en";

export default function SiteHeader({ locale = "sv" }: { locale?: Locale }) {
  const home = locale === "en" ? "/en" : "/";
  const blog = locale === "en" ? "/en/blog" : "/blog";
  const altHref = locale === "en" ? "/" : "/en";
  const altLabel = locale === "en" ? "SV" : "EN";
  const cta = locale === "en" ? "Book a call" : "Boka samtal";

  const links: [string, string][] =
    locale === "en"
      ? [
          [`${home}#tjanster`, "Services"],
          [`${home}#sama`, "Platform"],
          [blog, "Blog"],
          [`${home}#kontakt`, "Contact"],
        ]
      : [
          [`${home}#tjanster`, "Tjänster"],
          [`${home}#sama`, "Plattform"],
          [blog, "Blogg"],
          [`${home}#kontakt`, "Kontakt"],
        ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(242,238,230,.82)", borderBottom: "1px solid var(--hairline)" }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 sm:px-10">
        <Link href={home} className="flex items-baseline gap-[9px] no-underline" style={{ color: "var(--ink)" }}>
          <span className="text-[20px] font-semibold tracking-[-0.02em]">Successifier</span>
          <span className="h-[6px] w-[6px] rounded-full" style={{ background: "var(--accent)" }} />
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-[14.5px] no-underline transition-colors hover:text-[color:var(--ink)]"
              style={{ color: "var(--faint)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href={altHref}
            className="rounded-[3px] px-2 py-0.5 text-[12px] font-medium no-underline transition-colors"
            style={{ border: "1px solid var(--hairline)", color: "var(--faint)" }}
          >
            {altLabel}
          </Link>
          <Link
            href={`${home}#kontakt`}
            className="rounded-[3px] px-5 py-[11px] text-[14.5px] font-medium whitespace-nowrap no-underline transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            {cta}
          </Link>
        </div>
        <Link
          href={`${home}#kontakt`}
          className="rounded-[3px] px-4 py-2 text-[14px] font-medium whitespace-nowrap no-underline md:hidden"
          style={{ background: "var(--accent)", color: "var(--on-accent)" }}
        >
          {cta}
        </Link>
      </nav>
    </header>
  );
}
