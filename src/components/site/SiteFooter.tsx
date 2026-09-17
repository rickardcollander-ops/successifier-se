import Link from "next/link";
import { ORG, SUPPORTIFIER } from "@/lib/site";

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
          ["/tjanster", "Tjänster"],
          ["/ai-agenter", "AI-agenter"],
          ["/seo-geo", "GEO & SEO"],
          ["/customer-success", "Customer Success"],
          ["/contact-center-automation", "Contact center"],
          ["/ai-kundtjanst", "Supportifier"],
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
            href={ORG.linkedInCompany}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]"
            style={{ color: "var(--faint)" }}
          >
            LinkedIn
          </a>
          <a
            href={SUPPORTIFIER.url}
            className="text-[14px] no-underline transition-colors hover:text-[color:var(--ink)]"
            style={{ color: "var(--faint)" }}
          >
            supportifier.se
          </a>
          <span className="text-[13.5px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
            © {new Date().getFullYear()} successifier.se
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pb-8 sm:px-10">
        <p className="text-[12.5px] leading-[1.6]" style={{ color: "var(--faint-2)" }}>
          {ORG.legalName} · Org.nr {ORG.orgNr} · {ORG.address.streetAddress}, {ORG.address.postalCode} {ORG.address.addressLocality} · {ORG.email} · {ORG.phoneDisplay}
        </p>
      </div>
    </footer>
  );
}
