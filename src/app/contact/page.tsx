import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type AnyIcon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { addressLines, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Reddington Consulting in Sachse, TX. Call ${site.phone} or email ${site.email}.`,
  alternates: { canonical: "/contact" },
};

const cards: { icon: AnyIcon; title: string; lines: string[]; href?: string }[] = [
  { icon: "pin", title: "Company location", lines: addressLines, href: `https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}` },
  { icon: "phone", title: "Telephone number", lines: [site.phone], href: site.phoneHref },
  { icon: "mail", title: "Email address", lines: [site.email], href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start a conversation."
        highlight="conversation."
        icon="mail"
        badge={{ title: "Quick response", body: "Within one business day" }}
        intro="Whether you’re hiring or looking for your next opportunity, our team is ready to help. Reach out and we’ll respond within one business day."
      />

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 sm:px-8">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <a
                href={c.href}
                target={c.icon === "pin" ? "_blank" : undefined}
                rel={c.icon === "pin" ? "noopener noreferrer" : undefined}
                className="group flex h-full gap-5 rounded-3xl border border-line bg-white p-7 shadow-[0_30px_60px_-40px_rgba(12,20,39,0.5)] transition hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-[0_12px_28px_-12px_rgba(232,48,42,0.9)] transition group-hover:scale-110">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold text-ink">{c.title}</h2>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 break-words text-muted">{l}</p>
                  ))}
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_30px_80px_-50px_rgba(12,20,39,0.5)] sm:p-10">
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-3 mb-8 font-display text-3xl font-bold text-ink">We’d love to hear from you</h2>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[2rem] border border-line bg-surface">
              <iframe
                title="Map showing Reddington Consulting office in Sachse, Texas"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
                className="absolute inset-0 h-full w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-[2rem] bg-ink p-8 text-white">
              <div className="flex items-center gap-3">
                <Icon name="clock" className="h-5 w-5 text-brand" />
                <h3 className="font-display text-lg font-semibold">Business hours</h3>
              </div>
              <p className="mt-3 text-white/70">{site.hours}</p>
              <p className="mt-1 text-white/50 text-sm">Email us any time — we monitor the inbox daily.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
