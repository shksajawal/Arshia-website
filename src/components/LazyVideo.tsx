"use client";

import { useEffect, useRef } from "react";

/**
 * Performance-first autoplay video. `preload="none"` means the file is NOT
 * downloaded until the clip scrolls into view — so reels never touch the
 * initial page load. Plays muted in-view, pauses out-of-view to save CPU/data.
 */
export default function LazyVideo({
  src,
  className = "",
  poster,
}: {
  src: string;
  className?: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // load + play only when visible
            if (!v.src) v.src = src;
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      // src is set lazily by the observer; keep data-src for clarity
      data-src={src}
    />
  );
}
