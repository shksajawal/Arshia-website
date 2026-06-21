"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reusable scroll-into-view reveal. Fades + lifts content as it enters.
 * Used across every section so motion feels consistent, not random.
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      // Keep the element on its own GPU layer permanently (translateZ(0)) so it
      // never re-rasterizes when the reveal ends — kills the end-of-animation
      // text flicker on mobile.
      transformTemplate={(_, t) =>
        t && t !== "none" ? `${t} translateZ(0)` : "translateZ(0)"
      }
      style={{ backfaceVisibility: "hidden" }}
    >
      {children}
    </motion.div>
  );
}
