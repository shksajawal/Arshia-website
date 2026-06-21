"use client";

import { motion } from "framer-motion";

/**
 * KINETIC MARQUEE — giant condensed credentials scrolling edge to edge.
 * A hallmark of award-winning sport/editorial sites: high energy, always
 * visible, unmistakably premium. Alternating filled/outline words for depth.
 */
const ITEMS = [
  "First Pakistani Woman",
  "FIA Licensed",
  "Formula 3",
  "Road America Podium",
  "Cancer Researcher",
  "Box Motorsports",
];

export default function Marquee() {
  // Duplicate the track so the loop is seamless.
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-line bg-carbon py-5 sm:py-7">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap sm:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8 sm:gap-12">
            <span
              className={`font-display text-4xl sm:text-6xl ${
                i % 2 === 0 ? "text-bone" : "marquee-outline"
              }`}
            >
              {item}
            </span>
            <span className="text-accent text-2xl sm:text-4xl">✦</span>
          </span>
        ))}
      </motion.div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-carbon to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-carbon to-transparent sm:w-32" />
    </div>
  );
}
