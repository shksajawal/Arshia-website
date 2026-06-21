"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor — a soft accent ring that trails the pointer and grows over
 * interactive elements. Desktop/fine-pointer only; never shown on touch.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  // softer, laggier spring → a light trail behind the ring
  const tx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 });
  const ty = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 });

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setActive(!!el.closest('a, button, [role="button"], input, textarea, select'));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* trailing glow dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[69] hidden h-2 w-2 rounded-full bg-accent md:block"
        style={{
          x: tx,
          y: ty,
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(2px)",
          opacity: 0.6,
        }}
      />
      {/* main ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border border-accent md:block"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: active ? 48 : 22,
          height: active ? 48 : 22,
          backgroundColor: active ? "rgba(225,6,0,0.15)" : "rgba(225,6,0,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
