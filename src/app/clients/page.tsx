import type { Metadata } from "next";
import { ClientGrid } from "@/components/ClientLogos";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type AnyIcon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { industries, services } from "@/content/services";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Staffing services, engagement models and industries Reddington Consulting supports — from contract staffing to executive search.",
  alternates: { canonical: "/clients" },
};

const segments = [
  { title: "Enterprises", body: "Fortune 1000 organizations scaling transformation programs and specialized teams." },
  { title: "Mid-market", body: "Growing companies that need senior talent without a large in-house recruiting team." },
  { title: "Startups", body: "Venture-backed teams hiring their first engineers, architects and technical leaders." },
  { title: "System integrators", body: "Consulting partners who need dependable bench strength for client projects." },
];

const commitments: { icon: AnyIcon; title: string; body: string }[] = [
  { icon: "users", title: "Dedicated account manager", body: "One point of contact who learns your teams, priorities and hiring standards." },
  { icon: "search", title: "Rigorous screening", body: "Technical assessments, behavioral interviews and reference checks before you see a resume." },
  { icon: "shield", title: "Compliance handled", body: "Background checks, work-authorization verification and W2, 1099 or C2C paperwork managed for you." },
  { icon: "handshake", title: "Ongoing consultant care", body: "Regular check-ins with you and your consultants keep engagements on track long after day one." },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="A staffing partner invested in your success."
        highlight="success."
        icon="handshake"
        badge={{ title: "Trusted partner", body: "Deloitte, Microsoft, Infosys & more" }}
        intro="We work alongside hiring managers and talent teams to deliver professionals who make an impact from day one."
      >
        <Reveal delay={0.35} className="mt-10 flex flex-wrap gap-3">
          {segments.map((s) => (
            <span key={s.title} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">{s.title}</span>
          ))}
        </Reveal>
      </PageHero>

      {/* Client logos */}
      <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our clients"
          title={<>Trusted by <span className="text-brand">industry leaders</span></>}
          intro="We’re proud to support some of the most respected names in technology and consulting."
        />
        <div className="mt-14">
          <ClientGrid />
        </div>
      </section>

      {/* Who we serve */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Who we work with" title="Organizations of every size, one standard of quality" />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s, i) => (
            <StaggerItem key={s.title} className="relative overflow-hidden rounded-3xl border border-line bg-white p-7">
              <span className="absolute -top-3 -right-1 font-display text-8xl font-bold text-surface select-none">{i + 1}</span>
              <h3 className="relative font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="relative mt-3 leading-relaxed text-muted">{s.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our services" title="Flexible solutions for every hiring need" />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <SpotlightCard className="h-full rounded-3xl border border-line bg-white p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-brand">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand" />{p}</li>
                    ))}
                  </ul>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partnership commitments */}
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute top-0 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            align="center"
            eyebrow="Why clients partner with us"
            title="More than a vendor — an extension of your team"
            intro="Every engagement comes with the same commitments, whether you need one consultant or twenty."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <StaggerItem key={c.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-brand/50 hover:bg-white/[0.07]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand shadow-[0_10px_30px_-10px_rgba(232,48,42,0.9)]">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{c.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Industries" title="Sector knowledge that shortens every search" />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <StaggerItem key={ind.title} className="group flex items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-brand/40 hover:bg-brand-soft/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon name={ind.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display font-semibold text-ink">{ind.title}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand />
    </>
  );
}
