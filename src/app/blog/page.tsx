import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Hiring insights, career advice and IT industry trends from the Reddington Consulting team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights for smarter hiring and stronger careers."
        highlight="stronger careers."
        icon="quote"
        badge={{ title: "Fresh insights", body: "Hiring & career advice" }}
        intro="Practical advice for hiring managers and technology professionals, from the recruiters who work the market every day."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <BlogList posts={sorted} />
      </section>
      <CtaBand />
    </>
  );
}
