"use client";

import { motion } from "motion/react";

// The logo's swoosh and dot sweep, laid exactly along a circle so they hug the banner rings.
// Drawn in a 200×200 viewBox centred on (100,100); the SVG fills its (square) parent.
const C = 100;
const R = 95;
const rad = (deg: number) => (deg * Math.PI) / 180;
// Rounded so the server-rendered and client-rendered attributes match exactly.
const round = (n: number) => Math.round(n * 100) / 100;
const pt = (deg: number, r: number) => [round(C + Math.cos(rad(deg)) * r), round(C + Math.sin(rad(deg)) * r)] as const;

// Swoosh: tapered band from thin (upper-left) to thick (right), like the logo's red arc.
function swooshPath(from: number, to: number, maxW: number) {
  const steps = 48;
  const outer: string[] = [];
  const inner: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = from + (to - from) * t;
    const w = maxW * Math.pow(t, 1.6);
    const [ox, oy] = pt(a, R + w / 2);
    const [ix, iy] = pt(a, R - w / 2);
    outer.push(`${ox} ${oy}`);
    inner.unshift(`${ix} ${iy}`);
  }
  return `M${outer.join(" L")} L${inner.join(" L")} Z`;
}

// Dots: small at the lower right, growing into a cluster on the left, like the logo.
const DOTS = 15;
const dots = Array.from({ length: DOTS }, (_, i) => {
  const t = i / (DOTS - 1);
  const a = 55 + t * 135; // degrees, clockwise from 3 o'clock
  const [x, y] = pt(a, R);
  return { x, y, rx: round(0.9 + t * 3.6), ry: round(0.7 + t * 2.7), rot: round(a + 90) };
});

export function OrbitMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`overflow-visible ${className}`} aria-hidden>
      <defs>
        <linearGradient id="orbit-swoosh" x1="20" y1="60" x2="195" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8302a" stopOpacity="0.15" />
          <stop offset="0.55" stopColor="#e8302a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e8302a" />
        </linearGradient>
      </defs>
      <motion.path
        d={swooshPath(-160, -5, 7)}
        fill="url(#orbit-swoosh)"
        initial={{ opacity: 0, rotate: -25 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "100px 100px" }}
      />
      {dots.map((d, i) => (
        <motion.ellipse
          key={i}
          cx={d.x}
          cy={d.y}
          rx={d.rx}
          ry={d.ry}
          transform={`rotate(${d.rot} ${d.x} ${d.y})`}
          fill="#e8302a"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.35 + (i / DOTS) * 0.65, scale: 1 }}
          transition={{ delay: 0.5 + (DOTS - i) * 0.04, type: "spring", stiffness: 260, damping: 18 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </svg>
  );
}
