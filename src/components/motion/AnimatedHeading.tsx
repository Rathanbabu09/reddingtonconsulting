"use client";

import { motion } from "motion/react";

// Splits a heading into words and lifts each one into place.
export function AnimatedHeading({
  text,
  className,
  as = "h1",
  highlight,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  highlight?: string;
}) {
  const Tag = motion[as];
  const words = text.split(" ");
  const hl = new Set(highlight?.split(" "));
  return (
    <Tag className={className} initial="hidden" animate="show" transition={{ staggerChildren: 0.06 }} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-top" aria-hidden>
          <motion.span
            className={`inline-block ${hl.has(w) ? "text-gradient" : ""}`}
            variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
