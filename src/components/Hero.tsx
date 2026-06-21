"use client";

import { motion } from "framer-motion";
import CinematicFX from "@/components/CinematicFX";
import MagneticButton from "@/components/MagneticButton";
import { hero } from "@/lib/content";

/**
 * Video-First Hero (UI/UX Pro Max: 86% higher engagement).
 * Full-bleed reel behind a cinematic scrim; oversized condensed type overlaid.
 * Drop /public/hero.mp4 (or hero.jpg) and set HERO_SRC to go live.
 */
const HERO_SRC = "/hero.mp4"; // her in-car i2v clip
const HERO_IS_VIDEO = HERO_SRC.endsWith(".mp4") || HERO_SRC.endsWith(".webm");
const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const lines = [hero.line1, hero.line2, hero.line3, hero.line4];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* --- Base media layer (only if a real reel/photo is provided) --- */}
      <div className="absolute inset-0 -z-30 bg-carbon">
        {HERO_SRC &&
          (HERO_IS_VIDEO ? (
            <video
              className="h-full w-full object-cover"
              src={HERO_SRC}
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-poster.jpg"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={HERO_SRC} alt="Arshia Akhtar" className="h-full w-full object-cover" />
          ))}
      </div>

      {/* --- Cinematic light-trails atmosphere --- */}
      <div className="absolute inset-0 -z-20">
        <CinematicFX />
      </div>

      {/* --- Scrim: darken bottom for headline legibility --- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(to top, rgba(6,6,7,0.97) 0%, rgba(6,6,7,0.55) 34%, rgba(6,6,7,0.08) 68%, transparent 100%)",
        }}
      />

      {/* --- Content --- */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <motion.p
          className="eyebrow mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {hero.kicker}
        </motion.p>

        <h1 className="font-display text-[clamp(3.25rem,13vw,11rem)]">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 3 ? "text-accent" : "text-bone"}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/80 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {hero.sub}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease }}
        >
          <MagneticButton
            href={hero.ctaPrimary.href}
            className="btn-ignite glow-accent inline-block rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold tracking-wide text-white"
          >
            {hero.ctaPrimary.label}
          </MagneticButton>
          <a
            href={hero.ctaSecondary.href}
            className="rounded-full border border-line px-8 py-4 text-center text-sm font-semibold text-bone backdrop-blur-sm transition-colors hover:border-bone"
          >
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
