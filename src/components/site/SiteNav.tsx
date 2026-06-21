"use client";

import Link from "next/link";
import { useState } from "react";

export type NavLink = { href: string; label: string };

export default function SiteNav({
  home,
  links,
  cta,
  lang,
  ariaLabel = "Huvudmeny",
}: {
  home: string;
  links: NavLink[];
  cta: NavLink;
  lang?: NavLink | null;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass =
    "text-[14.5px] no-underline transition-colors hover:text-[color:var(--ink)]";
  const langStyle = { border: "1px solid var(--hairline)", color: "var(--faint)" } as const;
  const ctaStyle = { background: "var(--accent)", color: "var(--on-accent)" } as const;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(242,238,230,.82)", borderBottom: "1px solid var(--hairline)" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 sm:px-10">
        <Link href={home} onClick={close} className="flex items-baseline gap-[9px] no-underline" style={{ color: "var(--ink)" }}>
          <span className="text-[20px] font-semibold tracking-[-0.02em]">Successifier</span>
          <span className="h-[6px] w-[6px] rounded-full" style={{ background: "var(--accent)" }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label={ariaLabel}>
          {links.map((l) => (
            <Link key={l.href + l.label} href={l.href} className={linkClass} style={{ color: "var(--faint)" }}>
              {l.label}
            </Link>
          ))}
          {lang && (
            <Link href={lang.href} className="rounded-[3px] px-2 py-0.5 text-[12px] font-medium no-underline" style={langStyle}>
              {lang.label}
            </Link>
          )}
          <Link
            href={cta.href}
            className="rounded-[3px] px-5 py-[11px] text-[14.5px] font-medium whitespace-nowrap no-underline transition-opacity hover:opacity-90"
            style={ctaStyle}
          >
            {cta.label}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {lang && (
            <Link href={lang.href} onClick={close} className="rounded-[3px] px-2 py-0.5 text-[12px] font-medium no-underline" style={langStyle}>
              {lang.label}
            </Link>
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-mobile-menu"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[3px]"
            style={{ border: "1px solid var(--hairline)", color: "var(--ink)" }}
          >
            <span className="relative block h-[10px] w-[16px]" aria-hidden="true">
              <span
                className="absolute left-0 block h-[1.5px] w-full transition-all duration-200"
                style={{ background: "var(--ink)", top: open ? "4px" : "0", transform: open ? "rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 top-[4px] block h-[1.5px] w-full transition-opacity duration-200"
                style={{ background: "var(--ink)", opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-[1.5px] w-full transition-all duration-200"
                style={{ background: "var(--ink)", top: open ? "4px" : "8px", transform: open ? "rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          id="site-mobile-menu"
          className="lg:hidden"
          aria-label={ariaLabel}
          style={{ borderTop: "1px solid var(--hairline)", background: "var(--paper)" }}
        >
          <div className="mx-auto max-w-[1200px] px-6 py-4 sm:px-10">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href + l.label} style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <Link href={l.href} onClick={close} className="block py-[14px] text-[16px] no-underline" style={{ color: "var(--ink-soft)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={cta.href}
              onClick={close}
              className="mt-5 inline-flex w-full items-center justify-center rounded-[3px] px-5 py-[14px] text-[15px] font-medium no-underline transition-opacity hover:opacity-90"
              style={ctaStyle}
            >
              {cta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
