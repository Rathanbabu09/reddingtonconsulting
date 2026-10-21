import Image from "next/image";
import { clients } from "@/content/clients";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

function Logo({ c, fit = false }: { c: (typeof clients)[number]; fit?: boolean }) {
  return (
    <Image
      src={c.src}
      alt={c.name}
      width={c.w}
      height={c.h}
      style={{ height: c.display, width: "auto", objectFit: "contain", maxWidth: fit ? "100%" : "none" }}
    />
  );
}

// Infinite scrolling strip of client logos; muted until hovered.
export function ClientMarquee() {
  const items = [...clients, ...clients];
  return (
    <section className="border-b border-line bg-white py-12" aria-label="Our clients">
      <Reveal>
        <p className="text-center text-sm font-semibold tracking-[0.18em] text-muted uppercase">
          Trusted by <span className="text-brand">industry leaders</span>
        </p>
      </Reveal>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-20 hover:[animation-play-state:paused]">
          {items.map((c, i) => (
            <li
              key={i}
              aria-hidden={i >= clients.length}
              className="opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Logo c={c} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Card grid of client logos for the Clients page.
export function ClientGrid() {
  return (
    <Stagger as="ul" className="flex flex-wrap justify-center gap-5">
      {clients.map((c) => (
        <StaggerItem
          as="li"
          key={c.name}
          className="group grid h-32 w-[calc(50%-0.625rem)] place-items-center rounded-3xl border border-line bg-white px-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-30px_rgba(12,20,39,0.45)] sm:w-[calc(33.333%-0.84rem)] lg:w-[calc(25%-0.94rem)]"
        >
          <div className="flex max-w-full justify-center transition duration-300 group-hover:scale-105">
            <Logo c={c} fit />
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
