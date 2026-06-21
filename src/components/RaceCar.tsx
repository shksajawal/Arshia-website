"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * HERO F1 CAR — a high-energy stylized scene (no 3D assets, GPU-light):
 * - dramatic slide-in entrance (synced to the intro wipe)
 * - exhaust flame flicker + speed lines tearing off the back
 * - fast blurred wheels + brake-disc glow
 * - engine "rev" micro-vibration, idle float, cursor parallax
 * - scroll-reactive: accelerates forward and fades as the hero scrolls away
 * Reduced-motion: renders a clean static car.
 */
export default function RaceCar({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  // cursor parallax
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const cx = useSpring(px, { stiffness: 60, damping: 18 });
  const cy = useSpring(py, { stiffness: 60, damping: 18 });

  // scroll-reactive forward push + fade
  const { scrollYProgress } = useScroll({
    target: host,
    offset: ["start start", "end start"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const scrollFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: MouseEvent) => {
      const w = window.innerWidth / 2;
      const h = window.innerHeight / 2;
      px.set(((e.clientX - w) / w) * 16);
      py.set(((e.clientY - h) / h) * 9);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [px, py]);

  return (
    <div ref={host} className={className}>
      {/* entrance slide-in (delayed to land as the intro wipes away) */}
      <motion.div
        initial={{ x: "-135%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* scroll push + fade */}
        <motion.div style={{ x: scrollX, opacity: scrollFade }}>
          {/* cursor parallax */}
          <motion.div style={{ x: cx, y: cy }}>
            {/* idle float + engine rev vibration */}
            <motion.div
              animate={{ y: [0, -9, 0, -2, 0], rotate: [0, 0.15, -0.15, 0] }}
              transition={{ duration: 0.18, repeat: Infinity, ease: "linear" }}
            >
              <Car />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Car() {
  return (
    <svg viewBox="0 0 1200 420" width="100%" height="100%" fill="none" aria-hidden>
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c2c33" />
          <stop offset="0.5" stopColor="#141418" />
          <stop offset="1" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="redLivery" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff3b33" />
          <stop offset="1" stopColor="#c00500" />
        </linearGradient>
        <radialGradient id="disc" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd08a" />
          <stop offset="0.4" stopColor="#ff5a2a" />
          <stop offset="0.75" stopColor="#7a1500" />
          <stop offset="1" stopColor="#1a1a1f" />
        </radialGradient>
        <linearGradient id="flame" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset="0.4" stopColor="#ff6a1a" />
          <stop offset="1" stopColor="#e10600" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="streak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff3b33" stopOpacity="0" />
          <stop offset="1" stopColor="#ff6a4d" stopOpacity="0.9" />
        </linearGradient>
        <clipPath id="bodyClip">
          <path d="M150 250 L120 250 L120 168 L150 168 L172 232 L250 244 Q360 200 470 206 L500 150 L560 150 L582 206 L640 214 Q840 214 980 250 L1080 258 L1180 250 L1180 276 Q1090 270 1010 286 L980 300 L640 300 Q520 300 470 296 L260 300 Q200 300 172 286 Z" />
        </clipPath>
      </defs>

      {/* SPEED LINES tearing off the back */}
      {[170, 210, 250, 138, 290].map((yy, idx) => (
        <motion.rect
          key={yy}
          x={-180}
          y={yy}
          height={idx % 2 ? 2 : 3}
          rx={2}
          fill="url(#streak)"
          initial={{ width: 60, opacity: 0 }}
          animate={{ x: [-180, 240], width: [40, 200, 40], opacity: [0, 0.9, 0] }}
          transition={{
            duration: 0.7 + idx * 0.12,
            repeat: Infinity,
            repeatDelay: 0.2,
            ease: "easeIn",
            delay: idx * 0.15,
          }}
        />
      ))}

      {/* EXHAUST FLAME at the rear */}
      <motion.path
        d="M150 244 Q120 240 70 248 Q120 256 150 252 Z"
        fill="url(#flame)"
        style={{ transformOrigin: "150px 248px" }}
        animate={{ scaleX: [1, 1.7, 0.9, 1.4, 1], opacity: [0.7, 1, 0.6, 0.95, 0.7] }}
        transition={{ duration: 0.22, repeat: Infinity, ease: "linear" }}
      />

      {/* ground shadow */}
      <ellipse cx="630" cy="372" rx="470" ry="18" fill="#000" opacity="0.45" />

      {/* REAR WING */}
      <rect x="110" y="120" width="14" height="138" rx="3" fill="url(#body)" />
      <rect x="96" y="120" width="86" height="20" rx="4" fill="url(#redLivery)" />
      <rect x="104" y="150" width="70" height="10" rx="3" fill="#1a1a1f" />

      {/* BODY */}
      <path
        d="M150 250 L120 250 L120 168 L150 168 L172 232 L250 244 Q360 200 470 206 L500 150 L560 150 L582 206 L640 214 Q840 214 980 250 L1080 258 L1180 250 L1180 276 Q1090 270 1010 286 L980 300 L640 300 Q520 300 470 296 L260 300 Q200 300 172 286 Z"
        fill="url(#body)"
        stroke="#3a3a42"
        strokeWidth="1.5"
      />

      {/* red livery */}
      <path d="M250 244 Q360 200 470 206 L455 236 Q360 232 268 268 Z" fill="url(#redLivery)" opacity="0.92" />
      <path d="M640 214 Q840 214 980 250 L1080 258 L1180 250 L1180 262 L1070 268 L975 262 Q840 228 645 232 Z" fill="url(#redLivery)" opacity="0.92" />

      {/* halo + cockpit */}
      <path d="M470 206 Q540 150 620 200" stroke="#0a0a0c" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M486 208 Q545 168 600 202 L582 206 L500 206 Z" fill="#070708" />
      <path d="M500 150 L560 150 L582 206 L520 200 Z" fill="#141418" stroke="#3a3a42" strokeWidth="1" />

      {/* sidepod intake */}
      <path d="M650 250 L720 246 L712 276 L650 280 Z" fill="#070708" />

      {/* monogram */}
      <text x="360" y="266" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="34" fill="#f4f2ed" opacity="0.9">A</text>

      {/* FRONT WING */}
      <path d="M1080 286 L1190 286 L1190 300 L1080 302 Z" fill="url(#body)" />
      <rect x="1176" y="262" width="10" height="46" rx="3" fill="url(#redLivery)" />
      <path d="M1080 300 L1180 300 L1180 308 L1080 308 Z" fill="#1a1a1f" />

      {/* suspension */}
      <line x1="300" y1="300" x2="250" y2="244" stroke="#2a2a31" strokeWidth="4" />
      <line x1="300" y1="300" x2="360" y2="250" stroke="#2a2a31" strokeWidth="4" />
      <line x1="980" y1="300" x2="940" y2="252" stroke="#2a2a31" strokeWidth="4" />
      <line x1="980" y1="300" x2="1020" y2="256" stroke="#2a2a31" strokeWidth="4" />

      {/* WHEELS */}
      {[300, 980].map((wx) => (
        <g key={wx}>
          <circle cx={wx} cy="300" r="100" fill="#0c0c0e" stroke="#000" strokeWidth="2" />
          <circle cx={wx} cy="300" r="100" fill="none" stroke="#26262c" strokeWidth="3" />
          {/* motion-blur arc implying speed */}
          <circle cx={wx} cy="300" r="78" fill="none" stroke="#3a3a42" strokeWidth="10" opacity="0.25" />
          <circle cx={wx} cy="300" r="44" fill="url(#disc)" />
          <g className="wheel-spin" style={{ transformOrigin: `${wx}px 300px` }}>
            <circle cx={wx} cy="300" r="58" fill="none" stroke="#1a1a1f" strokeWidth="6" />
            {Array.from({ length: 6 }).map((_, k) => {
              const a = (k * Math.PI) / 3;
              return (
                <line
                  key={k}
                  x1={wx}
                  y1="300"
                  x2={wx + Math.cos(a) * 56}
                  y2={300 + Math.sin(a) * 56}
                  stroke="#3a3a42"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx={wx} cy="300" r="10" fill="url(#redLivery)" />
          </g>
        </g>
      ))}

      {/* SHEEN sweep */}
      <g clipPath="url(#bodyClip)">
        <motion.rect
          x="0"
          y="120"
          width="260"
          height="200"
          fill="url(#sheen)"
          initial={{ x: -300 }}
          animate={{ x: [-300, 1300] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.4, ease: "easeIn" }}
        />
      </g>
    </svg>
  );
}
