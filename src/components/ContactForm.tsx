"use client";

import { Field, inputClass, SubmitButton, SuccessPanel, useSubmit } from "./forms";

const inquiries = ["I’m hiring talent", "I’m looking for a job", "Partnership", "Other"];

export function ContactForm() {
  const { status, setStatus, err, onSubmit } = useSubmit("/api/contact", true);

  if (status.state === "sent") {
    return (
      <SuccessPanel
        title="Thank you!"
        body="We’ve received your message and will get back to you within one business day."
        onReset={() => setStatus({ state: "idle" })}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink">How can we help?</legend>
        <div className="flex flex-wrap gap-2">
          {inquiries.map((q, i) => (
            <label key={q} className="cursor-pointer">
              <input type="radio" name="inquiry" value={q} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand/20 hover:border-brand/50">
                {q}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" error={err("name")}>
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
        </Field>
        <Field label="Email *" error={err("email")}>
          <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@company.com" />
        </Field>
        <Field label="Phone" error={err("phone")}>
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="(469) 000-0000" />
        </Field>
        <Field label="Company" error={err("company")}>
          <input name="company" autoComplete="organization" className={inputClass} placeholder="Company name" />
        </Field>
      </div>
      <Field label="Message *" error={err("message")}>
        <textarea name="message" required rows={5} className={inputClass} placeholder="Tell us about the role or opportunity you have in mind…" />
      </Field>
      {/* Honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {status.state === "error" && <p className="text-sm text-brand-dark" role="alert">{status.message}</p>}
      <SubmitButton sending={status.state === "sending"} label="Send message" />
    </form>
  );
}
