"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

// Fixed header: transparent over the dark page heroes, turns into a white glass bar once scrolled.
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line/80 bg-white/85 shadow-[0_8px_30px_-18px_rgba(12,20,39,0.35)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-300 sm:px-8 ${solid ? "h-[76px]" : "h-24"}`}>
        <Logo variant="dark" className={`w-auto transition-all duration-300 ${solid ? "h-11" : "h-14"}`} />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ${solid ? "bg-surface" : "bg-ink/[0.06]"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(232,48,42,0.9)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Hire Talent
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`grid h-11 w-11 place-items-center rounded-full border transition lg:hidden border-line text-ink`}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <ul className="space-y-1 px-5 pt-4 pb-8">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-semibold ${
                      isActive(item.href) ? "bg-brand-soft text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow" className="h-5 w-5 opacity-40" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-line px-9 pt-6 text-muted">
              <a href={site.phoneHref} className="flex items-center gap-3"><Icon name="phone" className="h-4 w-4 text-brand" />{site.phone}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3"><Icon name="mail" className="h-4 w-4 text-brand" />{site.email}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
