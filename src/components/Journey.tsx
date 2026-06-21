"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { journey } from "@/lib/content";

/**
 * THE JOURNEY — a race-track timeline.
 * F1 lights-out start → a top-down car races DOWN the track as you scroll,
 * painting the red racing line behind it and lighting each milestone as it
 * passes → crosses the checkered finish. Scroll-driven, premium, no gimmicks.
 */
const ease = [0.16, 1, 0.3, 1] as const;

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.65", "end 0.5"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 70, damping: 26 });
  const carTop = useTransform(fill, [0, 1], ["0%", "100%"]);
  const n = journey.milestones.length;

  return (
    <section
      id="journey"
      className="border-y border-line bg-carbon-2 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <motion.p className="eyebrow mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {journey.eyebrow}
          </motion.p>
          <motion.h2
            className="reveal font-display text-4xl sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {journey.heading}
          </motion.h2>

          {/* F1 start lights */}
          <div className="mt-7 flex items-center gap-2.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                className="h-3.5 w-3.5 rounded-full"
                style={{ background: "var(--accent)" }}
                initial={{ opacity: 0.15, boxShadow: "0 0 0px var(--accent)" }}
                whileInView={{ opacity: 1, boxShadow: "0 0 12px var(--accent)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.2 + i * 0.18 }}
              />
            ))}
            <motion.span
              className="ml-3 label-mono text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
            >
              lights out
            </motion.span>
          </div>
        </div>

        <div ref={trackRef} className="relative">
          {/* ===== THE TRACK (centered desktop / left mobile) ===== */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-7 -translate-x-[10px] md:left-1/2 md:-translate-x-1/2">
            {/* asphalt */}
            <div className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 rounded-full bg-carbon" />
            {/* track edges */}
            <div className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 rounded-full border-x border-line" />
            {/* dashed racing centerline */}
            <div
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, var(--line) 0 8px, transparent 8px 18px)",
              }}
            />
            {/* red racing line painted by the car */}
            <motion.div
              className="absolute left-1/2 top-0 w-[3px] origin-top -translate-x-1/2"
              style={{
                height: "100%",
                scaleY: fill,
                background: "var(--accent)",
                filter: "drop-shadow(0 0 6px var(--accent))",
              }}
            />
            {/* the car at the tip of the racing line */}
            <motion.div
              className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ top: carTop }}
            >
              <TopCar />
            </motion.div>
          </div>

          {/* ===== MILESTONES ===== */}
          <div className="space-y-10 sm:space-y-14">
            {journey.milestones.map((m, i) => (
              <Milestone key={m.title} m={m} i={i} n={n} fill={fill} />
            ))}
          </div>

          {/* ===== FINISH LINE ===== */}
          <div className="relative mt-12 flex flex-col items-center gap-2 md:mt-16">
            <div
              className="h-6 w-36 rounded-sm"
              style={{
                backgroundImage:
                  "repeating-conic-gradient(#f4f2ed 0% 25%, #0a0a0c 0% 50%)",
                backgroundSize: "12px 12px",
              }}
            />
            <span className="label-mono text-muted">finish</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* A single milestone — its node ignites red as the car passes it. */
function Milestone({
  m,
  i,
  n,
  fill,
}: {
  m: { year: string; title: string; body: string };
  i: number;
  n: number;
  fill: MotionValue<number>;
}) {
  const frac = (i + 0.7) / n;
  const lit = useTransform(fill, [frac - 0.04, frac], [0, 1]);
  const nodeBg = useTransform(lit, (v) =>
    v > 0.5 ? "var(--accent)" : "var(--carbon-2)"
  );
  const nodeGlow = useTransform(lit, [0, 1], ["0 0 0px var(--accent)", "0 0 12px var(--accent)"]);

  return (
    <motion.div
      className={`reveal relative pl-10 md:w-1/2 md:pl-0 ${
        i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
      }`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
    >
      {/* node */}
      <motion.span
        className={`absolute top-2 z-10 h-3.5 w-3.5 rounded-full border-2 border-accent left-[-1px] ${
          i % 2 === 0 ? "md:left-auto md:-right-[7px]" : "md:-left-[7px]"
        }`}
        style={{ backgroundColor: nodeBg, boxShadow: nodeGlow }}
      />
      <div className="group rounded-2xl border border-line bg-carbon p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-6">
        <div className="font-display text-3xl text-accent sm:text-4xl">{m.year}</div>
        <h3 className="mt-1 text-xl font-semibold text-bone">{m.title}</h3>
        <p className="mt-2 text-muted">{m.body}</p>
      </div>
    </motion.div>
  );
}

/* Sleek top-down F1 car, nose pointing down (direction of travel). */
function TopCar() {
  return (
    <svg width="30" height="50" viewBox="0 0 40 64" fill="none" aria-hidden
      style={{ filter: "drop-shadow(0 0 6px var(--accent-glow))" }}>
      <defs>
        <linearGradient id="tcbody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#16161a" />
          <stop offset="0.5" stopColor="#2c2c33" />
          <stop offset="1" stopColor="#16161a" />
        </linearGradient>
      </defs>
      {/* rear wing (back/top) */}
      <rect x="6" y="3" width="28" height="6" rx="2" fill="var(--accent)" />
      {/* rear wheels */}
      <rect x="3" y="12" width="7" height="14" rx="2" fill="#0a0a0c" />
      <rect x="30" y="12" width="7" height="14" rx="2" fill="#0a0a0c" />
      {/* front wheels */}
      <rect x="5" y="40" width="6" height="12" rx="2" fill="#0a0a0c" />
      <rect x="29" y="40" width="6" height="12" rx="2" fill="#0a0a0c" />
      {/* body: wide at back, tapering to nose at bottom */}
      <path d="M14 10 L26 10 L28 40 L20 60 L12 40 Z" fill="url(#tcbody)" stroke="#3a3a42" strokeWidth="1" />
      {/* cockpit + halo */}
      <ellipse cx="20" cy="30" rx="4" ry="6" fill="#070708" />
      <circle cx="20" cy="24" r="2.4" fill="#0a0a0c" stroke="var(--bone)" strokeWidth="0.6" />
      {/* nose tip accent */}
      <path d="M16 50 L24 50 L20 60 Z" fill="var(--accent)" />
    </svg>
  );
}
