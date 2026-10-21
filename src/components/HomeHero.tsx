import Image from "next/image";
import Link from "next/link";
import { OrbitMotif } from "./OrbitMotif";
import { Icon, type AnyIcon } from "./Icon";
import { RotatingWord } from "./RotatingWord";
import { Reveal } from "./motion/Reveal";

// Skill chips that orbit the logo on the right-hand graphic.
const orbit: { icon: AnyIcon; label: string }[] = [
  { icon: "code", label: "Engineering" },
  { icon: "cloud", label: "Cloud" },
  { icon: "shield", label: "Security" },
  { icon: "chart", label: "Data" },
  { icon: "cpu", label: "AI / ML" },
  { icon: "database", label: "ERP" },
];

const R = 210; // orbit radius in px

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-[#fbfbfd] to-surface pt-36 pb-20 sm:pt-40 lg:pb-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(12,20,39,0.07)_1px,transparent_1px)] bg-size-[22px_22px] [mask-image:radial-gradient(ellipse_80%_75%_at_65%_35%,#000_20%,transparent_100%)]"
        aria-hidden
      />
      <div className="absolute -top-48 right-[-10%] h-[640px] w-[640px] rounded-full bg-brand/15 blur-[140px]" aria-hidden />
      <div className="absolute top-60 left-[-14%] h-[420px] w-[420px] rounded-full bg-[#3b5bdb]/10 blur-[130px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 px-4 py-1.5 text-sm font-medium text-ink shadow-[0_8px_24px_-16px_rgba(12,20,39,0.4)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              IT Staffing &amp; Consulting · Dallas–Fort Worth
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-7 font-display text-[2.7rem] font-bold leading-[1.05] text-ink sm:text-6xl xl:text-[4.4rem]">
              Hire the right
              <br />
              <RotatingWord words={["engineers.", "architects.", "data experts.", "IT leaders."]} />
              <br />
              faster.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Reddington Consulting connects growing companies with pre-vetted technology talent — on contract,
              contract-to-hire or direct hire — so you can build teams that deliver.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-[0_18px_40px_-14px_rgba(232,48,42,0.9)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Hire Talent
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-8 py-4 font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-ink"
            >
              <Icon name="search" className="h-4 w-4" />
              Find a Job
            </Link>
          </Reveal>
          <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-muted">
            {["Contract", "Contract-to-Hire", "Direct Hire", "Executive Search"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {t}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden lg:block">
          <div className="relative mx-auto h-[540px] w-[540px]" aria-hidden>
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-[60px] rounded-full border border-dashed border-brand/30" />
            <div className="absolute inset-[130px] rounded-full bg-brand/5" />
            <OrbitMotif className="absolute inset-0 h-full w-full" />


            {/* Orbiting skill chips (ring spins, chips counter-spin to stay upright) */}
            <div className="absolute inset-[60px] animate-[spin_60s_linear_infinite]">
              {orbit.map((o, i) => {
                const a = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
                return (
                  <div
                    key={o.label}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: `translate(${Math.round(Math.cos(a) * R)}px, ${Math.round(Math.sin(a) * R)}px)` }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2">
                      <div className="flex animate-[spin_60s_linear_infinite_reverse] items-center gap-2 rounded-full border border-line bg-white py-2 pr-4 pl-2 shadow-[0_14px_34px_-18px_rgba(12,20,39,0.45)]">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-brand">
                          <Icon name={o.icon} className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold whitespace-nowrap text-ink">{o.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 grid h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_40px_90px_-35px_rgba(12,20,39,0.45)] ring-8 ring-white/60">
              <Image src="/brand/reddington-logo.png" alt="" width={800} height={274} className="w-[190px]" priority />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
