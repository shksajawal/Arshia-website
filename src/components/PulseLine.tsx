"use client";

import { motion } from "framer-motion";

/**
 * SIGNATURE MOTIF (quiet). A trace that reads as motorsport telemetry AND a
 * medical ECG pulse — "racing is science, so is medicine." Draws on scroll.
 * Used as a subtle, static section accent. No gimmicks.
 */
const PATH =
  "M0 30 L120 30 L150 30 L165 12 L180 48 L195 30 L260 30 L280 30 L295 4 L308 56 L320 30 L520 30 L545 30 L560 18 L575 42 L590 30 L1000 30";

export default function PulseLine({
  className = "",
  height = 60,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1000 60"
        width="100%"
        height={height}
        preserveAspectRatio="none"
        fill="none"
      >
        <path d={PATH} stroke="var(--line)" strokeWidth="1" />
        <motion.path
          d={PATH}
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ filter: "drop-shadow(0 0 6px var(--accent-glow))" }}
        />
      </svg>
    </div>
  );
}
