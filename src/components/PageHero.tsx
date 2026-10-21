import Link from "next/link";
import { OrbitMotif } from "./OrbitMotif";
import { Icon, type AnyIcon } from "./Icon";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { Reveal } from "./motion/Reveal";

// Light intro banner for inner pages: copy on the left, logo-inspired composition on the right.
export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  icon = "spark",
  badge,
  crumbs = [],
  visual = true,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Word(s) in the title to paint with the brand gradient. */
  highlight?: string;
  intro?: string;
  icon?: AnyIcon;
  badge?: { title: string; body: string };
  crumbs?: { href: string; label: string }[];
  visual?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-[#fbfbfd] to-surface pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(12,20,39,0.07)_1px,transparent_1px)] bg-size-[22px_22px] [mask-image:radial-gradient(ellipse_75%_70%_at_70%_30%,#000_20%,transparent_100%)]"
        aria-hidden
      />
      <div className="absolute -top-40 right-[-8%] h-[520px] w-[520px] rounded-full bg-brand/15 blur-[130px]" aria-hidden />
      <div className="absolute top-40 left-[-12%] h-[380px] w-[380px] rounded-full bg-[#3b5bdb]/10 blur-[120px]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-line to-transparent" aria-hidden />

      <div className={`relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 ${visual ? "lg:grid-cols-[1.25fr_1fr]" : ""}`}>
        <div className={visual ? "" : "max-w-4xl"}>
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-white/80 py-1.5 pr-4 pl-1.5 text-sm text-muted shadow-[0_8px_24px_-16px_rgba(12,20,39,0.4)] backdrop-blur"
            >
              <Link href="/" className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white" aria-label="Home">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                </svg>
              </Link>
              {crumbs.map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="font-medium hover:text-ink">{c.label}</Link>
                  <span className="text-line">/</span>
                </span>
              ))}
              <span className="max-w-[16rem] truncate font-semibold text-ink">{eyebrow}</span>
            </nav>
          </Reveal>

          <AnimatedHeading
            text={title}
            highlight={highlight}
            className="mt-7 font-display text-4xl font-bold leading-[1.08] text-ink sm:text-[3.4rem]"
          />
          {intro && (
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
            </Reveal>
          )}
          {children}
        </div>

        {visual && (
          <Reveal delay={0.2} className="hidden lg:block">
            <div className="relative h-[380px]" aria-hidden>
            {/* Concentric rings */}
            <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
            <OrbitMotif className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-brand/30">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_0_6px_rgba(232,48,42,0.15)]" />
            </div>
            <div className="absolute top-1/2 left-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_30px_80px_-30px_rgba(12,20,39,0.35)]" />


            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.75rem] bg-linear-to-br from-[#ff5a4f] to-brand-dark text-white shadow-[0_24px_50px_-18px_rgba(232,48,42,0.9)]">
              <Icon name={icon} className="h-10 w-10" />
            </div>

            {/* Floating badge */}
            {badge && (
              <div className="absolute right-0 bottom-10 flex animate-float items-center gap-3 rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-[0_20px_50px_-25px_rgba(12,20,39,0.45)] backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{badge.title}</p>
                  <p className="text-xs text-muted">{badge.body}</p>
                </div>
              </div>
            )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
