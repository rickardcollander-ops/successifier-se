import Link from "next/link";

type Locale = "sv" | "en";

export default function SiteFooter({ locale = "sv" }: { locale?: Locale }) {
  const home = locale === "en" ? "/en" : "/";
  const blog = locale === "en" ? "/en/blog" : "/blog";
  const tagline = locale === "en" ? "AI automation for business" : "AI-automatisering för företag";

  const links: [string, string][] =
    locale === "en"
      ? [
          [`${home}#tjanster`, "Services"],
          [`${home}#sama`, "Platform"],
          [blog, "Blog"],
        ]
      : [
          [`${home}#tjanster`, "Tjänster"],
          [`${home}#sama`, "Plattform"],
          [blog, "Blogg"],
        ];

  return (
    <footer style={{ borderTop: "1px solid var(--hairline)", background: "var(--paper)" }}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-[50px] sm:px-10">
        <div className="flex items-baseline gap-[9px]">
          <span className="text-[17px] font-semibold tracking-[-0.02em]">Successifier</span>
          <span className="h-[5px] w-[5px] rounded-full" style={{ background: "var(--accent)" }} />
          <span className="ml-2 text-[14px]" style={{ color: "var(--faint-2)" }}>
            {tagline}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]"
              style={{ color: "var(--faint)" }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/rickard-collander/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]"
            style={{ color: "var(--faint)" }}
          >
            LinkedIn
          </a>
          <span className="text-[13.5px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
            © {new Date().getFullYear()} successifier.se
          </span>
        </div>
      </div>
    </footer>
  );
}
