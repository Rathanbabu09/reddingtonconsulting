"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Field, inputClass, SubmitButton, SuccessPanel, useSubmit } from "./forms";

export function ApplyForm({ roles, defaultRole }: { roles: string[]; defaultRole?: string }) {
  const { status, setStatus, err, onSubmit } = useSubmit("/api/careers", false);
  const [fileName, setFileName] = useState("");

  if (status.state === "sent") {
    return (
      <SuccessPanel
        title="Application received!"
        body="Thanks for applying. A recruiter will review your resume and reach out if there’s a match."
        onReset={() => {
          setFileName("");
          setStatus({ state: "idle" });
        }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field label="Position *" error={err("role")}>
        <select name="role" defaultValue={defaultRole ?? "General Application"} className={inputClass}>
          {[...roles, "General Application"].map((r) => <option key={r}>{r}</option>)}
        </select>
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" error={err("name")}>
          <input name="name" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Email *" error={err("email")}>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Phone *" error={err("phone")}>
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="LinkedIn profile" error={err("linkedin")}>
          <input name="linkedin" type="url" className={inputClass} placeholder="https://linkedin.com/in/…" />
        </Field>
      </div>
      <Field label="Resume * (PDF, DOC, DOCX · max 5 MB)" error={err("resume")}>
        <span className="relative flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-line bg-surface px-5 py-5 transition hover:border-brand/60 focus-within:border-brand">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm">
            <Icon name="upload" className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-semibold text-ink">{fileName || "Click to upload your resume"}</span>
            <span className="block text-sm text-muted">{fileName ? "Click to replace" : "or drag and drop it here"}</span>
          </span>
          <input
            name="resume"
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </span>
      </Field>
      <Field label="Anything else we should know?" error={err("message")}>
        <textarea name="message" rows={4} className={inputClass} placeholder="Availability, work authorization, preferred location…" />
      </Field>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {status.state === "error" && <p className="text-sm text-brand-dark" role="alert">{status.message}</p>}
      <SubmitButton sending={status.state === "sending"} label="Submit application" />
    </form>
  );
}
