"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/blog";

const mono = { fontFamily: "var(--font-plex-mono)" } as const;

// Innehållsförteckning. På mobil en fällbar lista överst i artikeln, på
// desktop en klistrig sidokolumn som markerar avsnittet läsaren är i.
export default function TocNav({ items, label, variant }: { items: TocItem[]; label: string; variant: "inline" | "sidebar" }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (variant !== "sidebar") return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;
    const onScroll = () => {
      let current: string | null = null;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= 120) current = h.id;
        else break;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items, variant]);

  if (items.length === 0) return null;

  const list = (
    <ol className="space-y-2">
      {items.map((item) => {
        const isActive = variant === "sidebar" && active === item.id;
        return (
          <li key={item.id} className="text-[14px] leading-[1.45]">
            <a
              href={`#${item.id}`}
              className="block no-underline transition-colors"
              aria-current={isActive ? "location" : undefined}
              style={{
                color: isActive ? "var(--ink)" : "var(--muted)",
                borderLeft: variant === "sidebar" ? `2px solid ${isActive ? "var(--accent)" : "transparent"}` : undefined,
                paddingLeft: variant === "sidebar" ? "10px" : undefined,
                fontWeight: isActive ? 500 : 400,
              }}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === "sidebar") {
    return (
      <nav aria-label={label}>
        <div className="mb-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
          {label}
        </div>
        {list}
      </nav>
    );
  }

  return (
    <nav aria-label={label}>
      <details className="toc-details rounded-[6px] p-5" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
        <summary className="cursor-pointer uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
          {label} · {items.length}
        </summary>
        <div className="mt-4">{list}</div>
      </details>
    </nav>
  );
}
