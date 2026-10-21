import Link from "next/link";
import { addressLines, site } from "@/content/site";
import { services } from "@/content/services";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/70">
      <div className="absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo variant="light" className="h-16 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed">{site.tagline} Connecting great companies with exceptional technology professionals across the United States.</p>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddington Consulting on LinkedIn"
              className="mt-6 inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <Icon name="linkedin" className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-widest text-white uppercase">Company</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-widest text-white uppercase">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href="/clients#services" className="transition hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-widest text-white uppercase">Get in touch</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <address className="not-italic">{addressLines[0]}<br />{addressLines[1]}</address>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 transition hover:text-white">
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-brand" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 break-all transition hover:text-white">
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-brand" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} All rights reserved.</p>
          <p>Equal Opportunity Employer · Sachse, Texas</p>
        </div>
      </div>
    </footer>
  );
}
