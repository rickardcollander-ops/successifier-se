"use client";

import { useMemo, useState } from "react";
import type { Dict } from "@/lib/i18n";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm({ t }: { t: Dict["form"] }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Bokningsförfrågan, Successifier.se");
    const body = encodeURIComponent(
      `Namn: ${form.name}\nFöretag: ${form.company}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\nMeddelande:\n${form.message}`
    );
    return `mailto:rc@successifier.com?subject=${subject}&body=${body}`;
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok: boolean; error?: string; fallbackToMailto?: boolean };

      if (!res.ok || !data.ok) {
        if (data.fallbackToMailto) {
          window.location.href = mailtoHref;
          return;
        }
        throw new Error(data.error || "Något gick fel");
      }

      setSuccess(t.successMessage);
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel");
    } finally {
      setSubmitting(false);
    }
  }

  const labelStyle = {
    fontFamily: "var(--font-plex-mono)",
    fontSize: "11px",
    letterSpacing: "0.16em",
    color: "var(--faint-2)",
  } as const;
  const inputClass =
    "h-11 rounded-[3px] px-3 text-[15px] outline-none transition-colors focus:border-[color:var(--accent)]";
  const inputStyle = {
    border: "1px solid var(--hairline)",
    background: "var(--paper)",
    color: "var(--ink)",
  } as const;

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[6px] p-6"
      style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}
    >
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="uppercase" style={labelStyle}>{t.nameLabel}</span>
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className={inputClass}
              style={inputStyle}
              placeholder={t.namePlaceholder}
            />
          </label>
          <label className="grid gap-1.5">
            <span className="uppercase" style={labelStyle}>{t.companyLabel}</span>
            <input
              value={form.company}
              onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
              className={inputClass}
              style={inputStyle}
              placeholder={t.companyPlaceholder}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="uppercase" style={labelStyle}>{t.emailLabel}</span>
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              required
              className={inputClass}
              style={inputStyle}
              placeholder={t.emailPlaceholder}
            />
          </label>
          <label className="grid gap-1.5">
            <span className="uppercase" style={labelStyle}>{t.phoneLabel}</span>
            <input
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className={inputClass}
              style={inputStyle}
              placeholder={t.phonePlaceholder}
            />
          </label>
        </div>

        <label className="grid gap-1.5">
          <span className="uppercase" style={labelStyle}>{t.messageLabel}</span>
          <textarea
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            required
            rows={5}
            className="resize-none rounded-[3px] px-3 py-2 text-[15px] outline-none transition-colors focus:border-[color:var(--accent)]"
            style={inputStyle}
            placeholder={t.messagePlaceholder}
          />
        </label>

        {success && (
          <div className="rounded-[3px] px-4 py-3 text-[14px]" style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--accent)" }}>
            {success}
          </div>
        )}
        {error && (
          <div className="rounded-[3px] px-4 py-3 text-[14px]" style={{ border: "1px solid #6E2A2A", background: "rgba(110,42,42,.06)", color: "#6E2A2A" }}>
            {error}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-11 w-full items-center justify-center rounded-[3px] px-5 text-[15px] font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            {submitting ? t.submittingLabel : t.submitLabel}
          </button>
          <p className="text-[12px]" style={{ color: "var(--faint)" }}>
            {t.altHint}{" "}
            <a href={mailtoHref} className="font-medium no-underline" style={{ color: "var(--ink-soft)", borderBottom: "1px solid var(--hairline)" }}>
              {t.emailFallbackLabel}
            </a>
          </p>
        </div>

        <p className="text-[12px]" style={{ color: "var(--faint-2)" }}>{t.consentText}</p>
      </div>
    </form>
  );
}
