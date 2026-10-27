"use client";

import { useState } from "react";

const mono = { fontFamily: "var(--font-plex-mono)" } as const;

// Kopiera länk och dela på LinkedIn. Delningen går via LinkedIns vanliga
// delnings-URL, så inga tredjepartsskript laddas.
export default function ShareLinks({ url, labels }: { url: string; labels: { copy: string; copied: string; linkedin: string } }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(labels.copy, url);
    }
  };

  const style = { ...mono, fontSize: "12px", color: "var(--faint)", borderBottom: "1px solid var(--hairline)" } as const;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <button type="button" onClick={copy} className="cursor-pointer bg-transparent p-0" style={style} aria-live="polite">
        {copied ? labels.copied : labels.copy}
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
        style={style}
      >
        {labels.linkedin} ↗
      </a>
    </div>
  );
}
