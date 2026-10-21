import Link from "next/link";
import type { Job } from "@/content/jobs";
import { Icon } from "./Icon";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_24px_50px_-30px_rgba(232,48,42,0.55)] sm:flex-row sm:items-center sm:p-7"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
        <Icon name="briefcase" className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl font-semibold text-ink">{job.title}</h3>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5"><Icon name="pin" className="h-4 w-4" />{job.location}</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4" />{job.experience}</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="globe" className="h-4 w-4" />{job.workMode}</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink">{job.type}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View role <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
