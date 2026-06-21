"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { recognition } from "@/lib/content";

/**
 * Press carousel — auto-advancing pull-quotes from outlets. The credibility
 * engine. Pauses on hover; dot + arrow controls; smooth crossfade.
 * (Built bespoke after the 21st.dev builder timed out — no extra deps.)
 */
export default function Recognition() {
  const items = recognition.press;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const go = (n: number) => setI((n + items.length) % items.length);

  return (
    <section
      id="recognition"
      className="border-y border-line bg-carbon-2 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-4">{recognition.eyebrow}</p>
        <h2 className="max-w-2xl font-display text-4xl sm:text-6xl">
          {recognition.heading}
        </h2>

        <div
          className="relative mt-14 min-h-[220px] sm:min-h-[200px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-display text-3xl leading-[1.05] text-bone sm:text-5xl">
                &ldquo;{items[i].quote}&rdquo;
              </blockquote>
              <figcaption className="eyebrow mt-6">{items[i].outlet}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-6">
          <div className="flex gap-2">
            {items.map((_, n) => (
              <button
                key={n}
                aria-label={`Quote ${n + 1}`}
                onClick={() => go(n)}
                className={`h-1.5 rounded-full transition-all ${
                  n === i ? "w-8 bg-accent" : "w-3 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => go(i - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-bone hover:text-bone"
            >
              ←
            </button>
            <button
              aria-label="Next"
              onClick={() => go(i + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-bone hover:text-bone"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
