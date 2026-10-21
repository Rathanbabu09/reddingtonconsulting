import type { Metadata } from "next";
import { ApplyForm } from "@/components/ApplyForm";
import { Icon, type AnyIcon } from "@/components/Icon";
import { JobList } from "@/components/JobList";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { jobs } from "@/content/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description: "Browse open IT jobs — contract, contract-to-hire and full-time — and apply with Reddington Consulting.",
  alternates: { canonical: "/careers" },
};

const perks: { icon: AnyIcon; title: string; body: string }[] = [
  { icon: "briefcase", title: "Top employers", body: "Access roles at leading enterprises and fast-growing companies." },
  { icon: "users", title: "Dedicated recruiter", body: "One point of contact who advocates for you from first call to first day." },
  { icon: "chart", title: "Career growth", body: "Guidance on skills, certifications and your next move." },
  { icon: "heart", title: "Benefits", body: "Competitive pay and benefits options for W2 consultants." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Find the role that moves your career forward."
        highlight="career forward."
        icon="briefcase"
        badge={{ title: `${jobs.length} open roles`, body: "New positions every week" }}
        intro="Explore technology opportunities with our clients across the United States — or send us your resume and let our recruiters find the right match."
      >
        <Reveal delay={0.35} className="mt-10 flex flex-wrap gap-8 text-ink">
          <div><p className="font-display text-3xl font-bold">{jobs.length}</p><p className="text-sm text-muted">Open roles</p></div>
          <div><p className="font-display text-3xl font-bold">3</p><p className="text-sm text-muted">Engagement types</p></div>
          <div><p className="font-display text-3xl font-bold">48h</p><p className="text-sm text-muted">Recruiter response</p></div>
        </Reveal>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <StaggerItem key={p.title} className="rounded-3xl border border-line bg-white p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand"><Icon name={p.icon} className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="openings" className="scroll-mt-24 bg-surface py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Open positions" title="Current opportunities" />
          <Reveal className="mt-10">
            <JobList jobs={jobs} />
          </Reveal>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Apply now"
              title="Don’t see the right role? Send us your resume."
              intro="Many of our openings are filled before they’re ever posted. Share your profile and a recruiter will reach out when a matching opportunity opens."
            />
            <Reveal delay={0.1} className="mt-8 space-y-3">
              {["We review every application personally", "Your information stays confidential", "No fees — ever — for job seekers"].map((t) => (
                <p key={t} className="flex items-center gap-3 text-ink">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white"><Icon name="check" className="h-3.5 w-3.5" /></span>
                  {t}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1} className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_30px_80px_-50px_rgba(12,20,39,0.5)] sm:p-10">
            <ApplyForm roles={jobs.map((j) => j.title)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
