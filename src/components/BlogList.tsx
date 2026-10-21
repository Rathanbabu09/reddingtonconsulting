"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Post } from "@/content/posts";
import { PostCard } from "./PostCard";

export function BlogList({ posts }: { posts: Post[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = shown;

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${active === c ? "text-white" : "text-muted hover:text-ink"}`}
          >
            {active === c && <motion.span layoutId="blog-tab" className="absolute inset-0 -z-10 rounded-full bg-ink" />}
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {featured && (
            <motion.div key={featured.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="md:col-span-2 lg:col-span-3">
              <PostCard post={featured} featured />
            </motion.div>
          )}
          {rest.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <PostCard post={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
