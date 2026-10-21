"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// Cycles through words in place, e.g. "Hire the right [engineers]".
export function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid overflow-hidden pb-[0.12em] align-top">
      {/* Invisible longest word reserves the width so the line never jumps. */}
      <span className="invisible col-start-1 row-start-1">{words.reduce((a, b) => (b.length > a.length ? b : a))}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          className="text-gradient col-start-1 row-start-1"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
