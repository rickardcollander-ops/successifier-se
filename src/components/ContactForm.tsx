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

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{t.nameLabel}</span>
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
              placeholder={t.namePlaceholder}
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{t.companyLabel}</span>
            <input
              value={form.company}
              onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
              className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
              placeholder={t.companyPlaceholder}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{t.emailLabel}</span>
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              required
              className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
              placeholder={t.emailPlaceholder}
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{t.phoneLabel}</span>
            <input
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
              placeholder={t.phonePlaceholder}
            />
          </label>
        </div>

        <label className="grid gap-1.5">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{t.messageLabel}</span>
          <textarea
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            required
            rows={5}
            className="resize-none rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
            placeholder={t.messagePlaceholder}
          />
        </label>

        {success && (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {success}
          </div>
        )}
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-10 w-full items-center justify-center rounded-md px-5 text-sm font-medium text-white shadow-sm transition-colors disabled:opacity-60"
            style={{ backgroundColor: "#0B1F3A" }}
          >
            {submitting ? t.submittingLabel : t.submitLabel}
          </button>
          <p className="text-xs text-zinc-500">
            {t.altHint}{" "}
            <a href={mailtoHref} className="font-medium text-zinc-700 underline hover:text-zinc-900">
              {t.emailFallbackLabel}
            </a>
          </p>
        </div>

        <p className="text-xs text-zinc-400">{t.consentText}</p>
      </div>
    </form>
  );
}
