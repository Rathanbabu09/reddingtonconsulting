"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Job } from "@/content/jobs";
import { Icon } from "./Icon";
import { JobCard } from "./JobCard";
import { inputClass } from "./forms";

const types = ["All", "Contract", "Contract-to-Hire", "Full-time"] as const;

export function JobList({ jobs }: { jobs: Job[] }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof types)[number]>("All");
  const needle = q.trim().toLowerCase();
  const shown = jobs.filter(
    (j) =>
      (type === "All" || j.type === type) &&
      (!needle || [j.title, j.location, ...j.skills].some((s) => s.toLowerCase().includes(needle))),
  );

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search jobs</span>
          <Icon name="search" className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, skill or location" className={`${inputClass} pl-12`} />
        </label>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${type === t ? "bg-ink text-white" : "bg-surface text-muted hover:text-ink"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {shown.length} open {shown.length === 1 ? "position" : "positions"}
      </p>

      <motion.ul layout className="mt-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {shown.map((j) => (
            <motion.li key={j.slug} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}>
              <JobCard job={j} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {shown.length === 0 && (
        <div className="mt-4 rounded-2xl border border-dashed border-line p-10 text-center text-muted">
          No roles match your search. Send us your resume below — new positions open every week.
        </div>
      )}
    </>
  );
}
