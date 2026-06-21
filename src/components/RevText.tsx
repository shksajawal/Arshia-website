"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Rev-counter text — the value "scrambles" through digits then locks in as it
 * scrolls into view, like a tachometer settling. Works for any string
 * (1st, P4, 31K+, Podium…). Reduced-motion shows the final value instantly.
 */
const POOL = "0123456789KP+ABDEFINORTUV";

export default function RevText({
  text,
  className,
  duration = 850,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(p * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < reveal || ch === " ") s += ch;
        else s += POOL[Math.floor(Math.random() * POOL.length)];
      }
      setOut(s);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration]);

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}
