"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cinematic intro — a brief name reveal that wipes up to expose the hero.
 * Runs once per load, click-to-skip, and is disabled for reduced-motion.
 */
const ease = [0.76, 0, 0.24, 1] as const;

export default function Intro() {
  const [show, setShow] = useState(true);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    setArmed(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  if (!armed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon"
          onClick={() => setShow(false)}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="overflow-hidden px-6 text-center">
            <motion.div
              className="eyebrow mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              First Pakistani woman · FIA
            </motion.div>
            <motion.h1
              className="font-display text-6xl leading-[0.9] sm:text-8xl"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              Arshia<span className="text-accent">.</span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
