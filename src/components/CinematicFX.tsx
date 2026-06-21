"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * CINEMATIC ATMOSPHERE for the hero — a calm, premium red glow that breathes.
 * (Speed streaks removed — they read as noise. Energy will come from the hero
 * media: a real/AI car video dropped into Hero's HERO_SRC.)
 */
export default function CinematicFX() {
  // "lite" = reduced-motion OR small/touch screen → skip the animated heavy
  // blur (a major repaint cost on mobile, causes scroll flicker). Keep the
  // static red glow so the hero still has depth.
  const [lite, setLite] = useState(true);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    setLite(reduce || small);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 72% 28%, rgba(225,6,0,0.30), transparent 62%), radial-gradient(50% 50% at 12% 85%, rgba(225,6,0,0.14), transparent 60%)",
        }}
      />
      {!lite && (
        <motion.div
          className="absolute right-[10%] top-[14%] h-[44vh] w-[44vh] rounded-full will-change-transform"
          style={{ background: "rgba(225,6,0,0.42)", filter: "blur(110px)" }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 110% at 50% 25%, transparent 55%, rgba(6,6,7,0.6) 100%)",
        }}
      />
    </div>
  );
}
