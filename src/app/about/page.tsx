import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type AnyIcon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { expertise } from "@/content/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Reddington Consulting Inc. is a Sachse, Texas IT staffing and consulting firm built on integrity, speed and long-term relationships.",
  alternates: { canonical: "/about" },
};

const values: { icon: AnyIcon; title: string; body: string }[] = [
  { icon: "shield", title: "Integrity first", body: "Honest advice, transparent pricing and no surprises — for clients and candidates." },
  { icon: "bolt", title: "Speed with quality", body: "Fast shortlists without cutting corners on screening, references or fit." },
  { icon: "handshake", title: "Partnership", body: "We measure success by long-term retention, not one-off placements." },
  { icon: "spark", title: "People-centric", body: "Every consultant is a career we care about — not just a requisition filled." },
];

const reasons = [
  "Dedicated account manager for every client",
  "Multi-stage technical & behavioral screening",
  "Background, education and reference verification",
  "W2, 1099 and C2C engagement flexibility",
  "Nationwide reach with local Texas presence",
  "Placement guarantee on direct-hire roles",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We connect exceptional people with exceptional companies."
        highlight="companies."
        icon="users"
        badge={{ title: "Sachse, Texas", body: "Serving clients nationwide" }}
        intro="Reddington Consulting Inc. is an IT staffing and consulting firm headquartered in Sachse, Texas, helping businesses across the United States hire technology talent with confidence."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            {/* Brand accent peeking out behind the photo */}
            <div className="absolute -top-5 -left-5 h-2/3 w-2/3 rounded-[2rem] bg-brand-soft" aria-hidden />
            <div className="absolute -top-5 -left-5 h-2/3 w-2/3 rounded-[2rem] bg-[radial-gradient(rgba(232,48,42,0.35)_1.5px,transparent_1.5px)] bg-size-[16px_16px]" aria-hidden />
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(12,20,39,0.55)]">
              <Image
                src="/images/about-interview.jpg"
                alt="A Reddington recruiter interviewing a candidate across a desk"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-night/25 via-transparent to-transparent" aria-hidden />
            </div>
            <div className="absolute -right-4 -bottom-8 rounded-2xl bg-white p-5 shadow-[0_24px_60px_-25px_rgba(12,20,39,0.4)] sm:-right-8">
              <p className="text-sm text-muted">Headquartered in</p>
              <p className="font-display text-lg font-semibold text-ink">Sachse, Texas</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our story" title="A staffing partner that actually understands technology" />
            <Reveal delay={0.1} className="prose-body mt-6 space-y-5 text-lg">
              <p>
                Reddington Consulting was founded on a simple belief: hiring great technology talent shouldn’t be slow, opaque or
                stressful. Our team brings hands-on IT experience to every search, so we understand the roles we recruit for — and
                the people who fill them.
              </p>
              <p>
                Today we partner with enterprises, mid-sized companies and fast-growing startups across banking, healthcare,
                retail, telecom and energy. Whether you need one specialist next week or a full project team next quarter, we bring
                the same focus on quality, speed and long-term fit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-ink p-10 text-white sm:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand"><Icon name="target" className="h-6 w-6" /></span>
            <h2 className="mt-8 font-display text-3xl font-bold">Our mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              To help organizations grow by delivering the right technology talent at the right time — while helping professionals
              build careers they’re proud of.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-line bg-white p-10 sm:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand"><Icon name="spark" className="h-6 w-6" /></span>
            <h2 className="mt-8 font-display text-3xl font-bold text-ink">Our vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              To be the most trusted IT staffing partner in the United States — known for integrity, responsiveness and
              relationships that last well beyond a single placement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading align="center" eyebrow="Our values" title="What guides every search we run" />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title} className="group rounded-3xl border border-line bg-white p-8 text-center transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-35px_rgba(232,48,42,0.5)]">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon name={v.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{v.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading dark align="center" eyebrow="Why Reddington" title="The difference is in the details" />
          <Stagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <StaggerItem as="li" key={r} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand"><Icon name="check" className="h-3.5 w-3.5" /></span>
                <span className="text-white/80">{r}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Our expertise" title="Technology roles we recruit for every day" />
        <Stagger className="mt-12 flex flex-wrap gap-3">
          {expertise.map((e) => (
            <StaggerItem key={e.label} className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-3 font-medium text-ink transition hover:border-brand hover:text-brand">
              <Icon name={e.icon} className="h-5 w-5 text-brand" />
              {e.label}
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand />
    </>
  );
}
