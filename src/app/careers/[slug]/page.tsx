import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/ApplyForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { getJob, jobs } from "@/content/jobs";
import { formatDate } from "@/content/posts";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).slug);
  if (!job) return {};
  return {
    title: `${job.title} · ${job.location}`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

export default async function JobPage({ params }: Props) {
  const job = getJob((await params).slug);
  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<p>${job.summary}</p><ul>${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
    datePosted: job.posted,
    employmentType: job.type === "Full-time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url },
    ...(job.workMode === "Remote"
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "USA" } }
      : {
          jobLocation: {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressLocality: job.location.split(",")[0], addressRegion: "TX", addressCountry: "US" },
          },
        }),
  };

  const meta = [
    { icon: "pin" as const, label: "Location", value: job.location },
    { icon: "briefcase" as const, label: "Type", value: job.type },
    { icon: "globe" as const, label: "Work mode", value: job.workMode },
    { icon: "clock" as const, label: "Experience", value: job.experience },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={job.title} title={job.title} intro={job.summary} crumbs={[{ href: "/careers", label: "Careers" }]} visual={false}>
        <Reveal delay={0.35} className="mt-8 flex flex-wrap gap-2">
          {job.skills.map((s) => (
            <span key={s} className="rounded-full border border-line bg-white px-3 py-1 text-sm font-medium text-ink">{s}</span>
          ))}
        </Reveal>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label} className="rounded-2xl border border-line p-4">
                  <Icon name={m.icon} className="h-5 w-5 text-brand" />
                  <p className="mt-3 text-xs font-semibold tracking-wide text-muted uppercase">{m.label}</p>
                  <p className="mt-1 font-semibold text-ink">{m.value}</p>
                </div>
              ))}
            </Reveal>
            {[
              ["Responsibilities", job.responsibilities],
              ["Requirements", job.requirements],
            ].map(([h, items]) => (
              <Reveal key={h as string} className="mt-12">
                <h2 className="font-display text-2xl font-bold text-ink">{h as string}</h2>
                <ul className="mt-5 space-y-3">
                  {(items as string[]).map((r) => (
                    <li key={r} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="check" className="h-3 w-3" /></span>
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <p className="mt-12 text-sm text-muted">Posted {formatDate(job.posted)} · Reddington Consulting is an Equal Opportunity Employer.</p>
            <Link href="/careers#openings" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
              <Icon name="arrow" className="h-4 w-4 rotate-180" /> All open positions
            </Link>
          </div>
          <div>
            <Reveal className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_30px_80px_-50px_rgba(12,20,39,0.5)] sm:p-9 lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold text-ink">Apply for this role</h2>
              <p className="mt-2 mb-7 text-muted">It takes less than two minutes.</p>
              <ApplyForm roles={jobs.map((j) => j.title)} defaultRole={job.title} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
