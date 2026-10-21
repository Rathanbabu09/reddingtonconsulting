import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HomeHero } from "@/components/HomeHero";
import { Icon } from "@/components/Icon";
import { JobCard } from "@/components/JobCard";
import { ClientMarquee } from "@/components/ClientLogos";
import { PostCard } from "@/components/PostCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { jobs } from "@/content/jobs";
import { posts } from "@/content/posts";
import { industries, process, services } from "@/content/services";

export default function Home() {
  return (
    <>
      <HomeHero />

      <ClientMarquee />

      {/* Services */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={<>Staffing solutions built around <span className="text-brand">your</span> goals</>}
              intro="From a single specialist to an entire delivery team, we flex to the way you hire."
            />
            <Reveal>
              <Link href="/clients#services" className="group inline-flex items-center gap-2 font-semibold text-ink hover:text-brand">
                Explore all services
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={s.title}>
                <SpotlightCard className="h-full rounded-3xl border border-line bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(12,20,39,0.45)]">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-semibold text-line">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <Icon name="check" className="h-4 w-4 text-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute top-0 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            align="center"
            eyebrow="How it works"
            title="From open role to offer, in four clear steps"
            intro="A proven process that respects your time — and your candidates’."
          />
          <Stagger className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-10 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-transparent via-brand/60 to-transparent lg:block" aria-hidden />
            {process.map((p) => (
              <StaggerItem key={p.step} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-brand/50 hover:bg-white/[0.07]">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand font-display text-lg font-bold shadow-[0_10px_30px_-10px_rgba(232,48,42,0.9)]">
                  {p.step}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Employers / Job seekers */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-[2rem] bg-ink p-10 text-white sm:p-12">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand/40 blur-3xl transition-transform duration-700 group-hover:scale-125" aria-hidden />
            <span className="eyebrow relative">For employers</span>
            <h3 className="relative mt-4 font-display text-3xl font-bold sm:text-4xl">Build a team that ships.</h3>
            <p className="relative mt-4 max-w-md leading-relaxed text-white/65">
              Get a curated shortlist of screened professionals who match your stack, budget and culture — backed by a placement guarantee.
            </p>
            <Link href="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold transition hover:bg-brand-dark">
              Request talent <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="group relative overflow-hidden rounded-[2rem] border border-line bg-brand-soft p-10 sm:p-12">
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full border-[28px] border-brand/10 transition-transform duration-700 group-hover:scale-110" aria-hidden />
            <span className="eyebrow relative">For job seekers</span>
            <h3 className="relative mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">Your next role starts here.</h3>
            <p className="relative mt-4 max-w-md leading-relaxed text-muted">
              Work with recruiters who know technology, advocate for you, and match you with opportunities that grow your career.
            </p>
            <Link href="/careers" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition hover:bg-brand">
              Browse open jobs <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Deep domain expertise where it matters"
            intro="Recruiters who speak your industry’s language find better-fit candidates, faster."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <StaggerItem key={ind.title} className="group flex gap-5 rounded-2xl border border-line bg-white p-6 transition hover:border-brand/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-white transition group-hover:bg-brand">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{ind.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{ind.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Latest jobs */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Now hiring" title="Latest opportunities" />
            <Reveal>
              <Link href="/careers" className="group inline-flex items-center gap-2 font-semibold text-ink hover:text-brand">
                View all jobs <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-12 space-y-4">
            {jobs.slice(0, 3).map((j) => (
              <StaggerItem key={j.slug}>
                <JobCard job={j} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="From the blog" title="Insights on hiring & careers" />
          <Reveal>
            <Link href="/blog" className="group inline-flex items-center gap-2 font-semibold text-ink hover:text-brand">
              All articles <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <StaggerItem key={p.slug}>
              <PostCard post={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand />
    </>
  );
}
