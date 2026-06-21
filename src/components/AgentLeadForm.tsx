"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const MAILTO = "mailto:hej@successifier.se";

export default function AgentLeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      setError("Ange en giltig e-postadress.");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value,
          email: value,
          message:
            "Förfrågan via /ai-konsult: vill boka en kostnadsfri genomgång av agentic AI.",
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setStatus("success");
        setEmail("");
        return;
      }

      // Fallback: open the user's mail client with a prefilled message.
      if (data?.fallbackToMailto || res.status === 503) {
        window.location.href = `${MAILTO}?subject=${encodeURIComponent(
          "Bokningsförfrågan, agentic AI"
        )}&body=${encodeURIComponent(`Min e-post: ${value}`)}`;
        setStatus("idle");
        return;
      }

      setStatus("error");
      setError("Något gick fel. Försök igen eller maila hej@successifier.se.");
    } catch {
      setStatus("error");
      setError("Något gick fel. Försök igen eller maila hej@successifier.se.");
    }
  }

  if (status === "success") {
    return (
      <p
        className="mx-auto max-w-[460px] text-[15px]"
        style={{ color: "rgba(242,238,230,.85)", fontFamily: "var(--font-hanken)" }}
        role="status"
      >
        Tack — vi hör av oss inom kort för att boka in genomgången.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto flex max-w-[460px] flex-wrap justify-center gap-3"
    >
      <label htmlFor="agent-email" className="sr-only">
        E-postadress
      </label>
      <input
        id="agent-email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="din@epost.se"
        autoComplete="email"
        aria-invalid={status === "error"}
        className="min-w-[220px] flex-1 rounded-[3px] px-[18px] py-[15px] text-[15px] outline-none"
        style={{
          background: "rgba(242,238,230,.07)",
          border: "1px solid rgba(242,238,230,.24)",
          color: "var(--on-accent)",
          fontFamily: "var(--font-hanken)",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-[3px] px-[26px] py-[15px] text-[15.5px] font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{
          background: "var(--on-accent)",
          color: "var(--ink)",
          fontFamily: "var(--font-hanken)",
        }}
      >
        {status === "loading" ? "Skickar…" : "Boka samtal →"}
      </button>
      {status === "error" && error && (
        <p
          className="w-full text-center text-[13px]"
          style={{ color: "rgba(242,238,230,.85)", fontFamily: "var(--font-hanken)" }}
          role="alert"
        >
          {error}
        </p>
      )}
    </form>
  );
}
