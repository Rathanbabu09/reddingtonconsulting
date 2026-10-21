"use client";

import { motion } from "motion/react";
import { useState } from "react";

export type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };
export type FieldErrors = Partial<Record<string, string[]>>;

export const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error && <p className="mt-1.5 text-sm text-brand-dark">{error}</p>}
    </label>
  );
}

// Posts a form and tracks status + per-field validation errors returned by the API.
export function useSubmit(url: string, asJson: boolean) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "sending" });
    setErrors({});
    try {
      const res = await fetch(url, {
        method: "POST",
        ...(asJson
          ? { headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(data)) }
          : { body: data }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrors(json.fields ?? {});
        setStatus({ state: "error", message: json.error ?? "Something went wrong." });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  return { status, setStatus, errors, onSubmit, err: (k: string) => errors[k]?.[0] };
}

export function SubmitButton({ sending, label }: { sending: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={sending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-[0_16px_34px_-14px_rgba(232,48,42,0.9)] transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
    >
      {sending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
        </>
      ) : (
        label
      )}
    </button>
  );
}

export function SuccessPanel({ title, body, onReset }: { title: string; body: string; onReset: () => void }) {
  return (
    <motion.div
      className="rounded-3xl border border-brand/25 bg-brand-soft p-10 text-center"
      role="status"
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      <svg viewBox="0 0 52 52" className="mx-auto h-16 w-16" aria-hidden>
        <motion.circle cx="26" cy="26" r="24" fill="none" stroke="#e8302a" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
        <motion.path d="M15 27l7 7 15-16" fill="none" stroke="#e8302a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 0.5 }} />
      </svg>
      <h3 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-muted">{body}</p>
      <button onClick={onReset} className="mt-6 font-semibold text-brand hover:text-brand-dark">Submit another</button>
    </motion.div>
  );
}
