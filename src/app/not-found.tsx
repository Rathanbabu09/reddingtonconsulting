import Link from "next/link";
import { DotArc } from "@/components/DotArc";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-linear-to-b from-white to-surface pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(12,20,39,0.07)_1px,transparent_1px)] bg-size-[22px_22px]" aria-hidden />
      <div className="absolute -top-40 right-[-8%] h-[520px] w-[520px] rounded-full bg-brand/15 blur-[130px]" aria-hidden />
      <DotArc className="pointer-events-none absolute -right-20 bottom-0 w-[520px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-display text-8xl font-bold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-ink">This page took another opportunity.</h1>
        <p className="mt-4 max-w-lg text-lg text-muted">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">Back to home</Link>
          <Link href="/careers" className="rounded-full border border-line bg-white px-7 py-3.5 font-semibold text-ink transition hover:border-ink">Browse jobs</Link>
        </div>
      </div>
    </section>
  );
}
