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
          { href: "/tjanster", label: "Tjänster" },
          { href: "/ai-agenter", label: "AI-agenter" },
          { href: "/seo-geo", label: "GEO & SEO" },
          { href: "/ai-kundtjanst", label: "Supportifier" },
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
