import SiteNav, { type NavLink } from "./SiteNav";

type Locale = "sv" | "en";

export default function SiteHeader({ locale = "sv" }: { locale?: Locale }) {
  const home = locale === "en" ? "/en" : "/";

  const links: NavLink[] =
    locale === "en"
      ? [
          { href: `${home}#tjanster`, label: "Services" },
          { href: `${home}#sama`, label: "Platform" },
          { href: `${home}#arbetssatt`, label: "Approach" },
          { href: "/en/blog", label: "Blog" },
        ]
      : [
          { href: `${home}#tjanster`, label: "Tjänster" },
          { href: `${home}#sama`, label: "Plattform" },
          { href: "/ai-konsult", label: "AI-konsult" },
          { href: "/ai-kundtjanst", label: "Support" },
          { href: "/blog", label: "Blogg" },
        ];

  return (
    <SiteNav
      home={home}
      links={links}
      cta={{ href: `${home}#kontakt`, label: locale === "en" ? "Book a call" : "Boka samtal" }}
      lang={locale === "en" ? { href: "/", label: "SV" } : { href: "/en", label: "EN" }}
      ariaLabel={locale === "en" ? "Main navigation" : "Huvudmeny"}
    />
  );
}
