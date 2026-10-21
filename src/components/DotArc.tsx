"use client";

import { motion } from "motion/react";

const round = (n: number) => Math.round(n * 100) / 100;

// Brand motif lifted from the logo: a sweep of red dots that grow along an arc.
const dots = Array.from({ length: 22 }, (_, i) => {
  const t = i / 21;
  const angle = Math.PI * (0.95 + t * 0.75);
  const r = 230;
  // Rounded so the server-rendered and client-rendered attributes match exactly.
  return {
    cx: round(260 + Math.cos(angle) * r * (1 - t * 0.15)),
    cy: round(250 + Math.sin(angle) * r * 0.55 + t * 40),
    rx: round(4 + t * 16),
    ry: round(3 + t * 12),
    rot: round(-40 + t * 30),
  };
}).reverse();

export function DotArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 340" className={className} aria-hidden>
      {dots.map((d, i) => (
        <motion.ellipse
          key={i}
          cx={d.cx}
          cy={d.cy}
          rx={d.rx}
          ry={d.ry}
          transform={`rotate(${d.rot} ${d.cx} ${d.cy})`}
          fill="#e8302a"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 - i * 0.02, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.045, type: "spring", stiffness: 260, damping: 18 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </svg>
  );
}
