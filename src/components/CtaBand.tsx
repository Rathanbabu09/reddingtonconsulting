import Link from "next/link";
import { site } from "@/content/site";
import { DotArc } from "./DotArc";
import { Icon } from "./Icon";
import { Reveal } from "./motion/Reveal";

export function CtaBand({
  title = "Ready to build your dream team?",
  body = "Tell us about the role. We’ll send a shortlist of pre-vetted candidates within 72 hours.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-linear-to-br from-brand via-[#d9261f] to-[#b81a15] px-7 py-14 text-white sm:px-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[20px_20px] opacity-60" aria-hidden />
        <DotArc className="pointer-events-none absolute -right-10 -bottom-16 w-[460px] opacity-25 mix-blend-screen [&_ellipse]:fill-white" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Request Talent
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
