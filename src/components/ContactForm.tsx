"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
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
    const subject = encodeURIComponent("Bokningsförfrågan — Successifier.se");
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
          setError("Mailutskick är inte konfigurerat på servern ännu. Använd knappen för att skicka via email.");
          return;
        }
        throw new Error(data.error || "Något gick fel");
      }

      setSuccess("Tack! Jag återkommer så snart jag kan.");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-zinc-700">Namn</span>
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-indigo-400"
              placeholder="Ditt namn"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-zinc-700">Företag</span>
            <input
              value={form.company}
              onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-indigo-400"
              placeholder="Företagsnamn"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-zinc-700">Email</span>
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              required
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-indigo-400"
              placeholder="namn@bolag.se"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-zinc-700">Telefon</span>
            <input
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-indigo-400"
              placeholder="+46 ..."
            />
          </label>
        </div>

        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-zinc-700">Vad vill du uppnå?</span>
          <textarea
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            required
            rows={5}
            className="resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-400"
            placeholder="Kort beskrivning av nuläge, mål och tidsram..."
          />
        </label>

        {success && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {success}
          </div>
        )}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
          >
            {submitting ? "Skickar..." : "Boka strategisamtal"}
          </button>
          <a
            href={mailtoHref}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Skicka via email
          </a>
        </div>

        <p className="text-xs text-zinc-500">
          Genom att skicka godkänner du att jag kontaktar dig tillbaka. Inga nyhetsbrev.
        </p>
      </div>
    </form>
  );
}
