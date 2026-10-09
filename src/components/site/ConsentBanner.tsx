"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

// Samtycke till statistikcookies (Google Analytics 4 med Consent Mode v2).
// Layouten sätter analytics_storage till "denied" som standard; här uppdateras
// det när besökaren väljer. Valet sparas i localStorage under STORAGE_KEY.
const STORAGE_KEY = "successifier-consent";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(choice: Choice) {
  window.gtag?.("consent", "update", { analytics_storage: choice });
}

// Valet läses från localStorage via useSyncExternalStore, så att servern och
// första klientrenderingen är överens (ingen ruta) och rutan visas först när
// det är klart att inget val finns.
const CHANGE_EVENT = "successifier:consent-changed";
const REOPEN_EVENT = "successifier:consent";
let reopened = false;

function readChoice(): string {
  if (reopened) return "reopen";
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "none";
  } catch {
    return "none";
  }
}

function subscribe(callback: () => void) {
  const onReopen = () => {
    reopened = true;
    callback();
  };
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener(REOPEN_EVENT, onReopen);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener(REOPEN_EVENT, onReopen);
    window.removeEventListener("storage", callback);
  };
}

export default function ConsentBanner() {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "server");
  const open = choice === "none" || choice === "reopen";

  useEffect(() => {
    if (choice === "granted" || choice === "denied") applyConsent(choice);
  }, [choice]);

  const choose = (next: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Privat läge eller blockerad lagring: valet gäller bara den här sidvisningen.
    }
    applyConsent(next);
    reopened = false;
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookieinställningar"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-[560px] rounded-[6px] p-5 shadow-lg"
      style={{ background: "var(--paper)", border: "1px solid var(--hairline-strong)", color: "var(--ink)" }}
    >
      <p className="text-[14px] leading-[1.55]" style={{ color: "var(--ink-soft)" }}>
        Vi vill använda statistikcookies (Google Analytics) för att se vilka sidor som är till nytta. Inga cookies
        sätts utan ditt samtycke. <Link href="/integritetspolicy">Läs integritetspolicyn</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-[3px] px-4 py-2 text-[14px] font-medium"
          style={{ background: "var(--accent)", color: "var(--on-accent)" }}
        >
          Godkänn statistik
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-[3px] px-4 py-2 text-[14px] font-medium"
          style={{ border: "1px solid var(--hairline-strong)", color: "var(--ink)" }}
        >
          Bara nödvändiga
        </button>
      </div>
    </div>
  );
}

// Länk i sidfoten som öppnar rutan igen.
export function ConsentSettingsLink({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
      className={className}
      style={style}
    >
      Cookieinställningar
    </button>
  );
}
