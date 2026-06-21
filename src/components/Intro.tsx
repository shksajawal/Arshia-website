"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PRELOADER — an F1 grid start.
 * Rendered in the initial HTML (no flash of the page behind it), then:
 * "Arshia." appears, five red lights ignite one-by-one, a rev line fills,
 * then LIGHTS OUT → the curtain wipes up to reveal the site.
 * Click to skip; reduced-motion dismisses instantly.
 */
const ease = [0.76, 0, 0.24, 1] as const;

export default function Intro() {
  const [done, setDone] = useState(false);
  const [lit, setLit] = useState(0); // how many lights are on
  const [out, setOut] = useState(false); // "lights out" moment

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const timers: number[] = [];
    // ignite lights one by one (deliberate pacing)
    for (let i = 1; i <= 5; i++) {
      timers.push(window.setTimeout(() => setLit(i), 500 + i * 320));
    }
    // hold on full grid, then lights out, then lift the curtain
    timers.push(window.setTimeout(() => setOut(true), 2700));
    timers.push(window.setTimeout(() => setDone(true), 3100));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-carbon"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease }}
        >
          {/* red ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 40% at 50% 45%, var(--accent-glow), transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center px-6">
            <span className="eyebrow mb-5">First Pakistani woman · FIA</span>
            <h1 className="font-display text-6xl leading-none sm:text-8xl">
              Arshia<span className="text-accent">.</span>
            </h1>

            {/* F1 start lights */}
            <div className="mt-8 flex items-center gap-3">
              {Array.from({ length: 5 }).map((_, i) => {
                const on = !out && lit > i;
                return (
                  <span
                    key={i}
                    className="h-4 w-4 rounded-full transition-all duration-200"
                    style={{
                      background: on ? "var(--accent)" : "rgba(255,255,255,0.08)",
                      boxShadow: on ? "0 0 14px var(--accent)" : "none",
                    }}
                  />
                );
              })}
            </div>

            {/* rev line */}
            <div className="mt-7 h-px w-48 overflow-hidden bg-line">
              <motion.div
                className="h-full bg-accent"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: out ? 1 : lit / 5 }}
                transition={{ duration: 0.3, ease }}
              />
            </div>

            <span className="label-mono mt-5 text-muted">
              {out ? "lights out — go" : "on the grid"}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
