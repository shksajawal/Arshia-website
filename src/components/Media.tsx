import Image from "next/image";

/**
 * MEDIA SLOT — the heart of the media-first redesign.
 *
 * Until real assets exist, this renders a refined, LABELED placeholder that
 * communicates the *direction*: what shot goes here, what energy, what ratio.
 * The moment you pass `src`, it renders the real image/video instead — zero
 * other code changes needed.
 *
 * Usage:
 *   <Media label="HERO REEL" note="On-track, helmet on, low cinematic angle" aspect="16/9" />
 *   <Media src="/hero.jpg" alt="Arshia on track" aspect="16/9" priority />
 *   <Media src="/reel.mp4" type="video" aspect="16/9" />
 */
export default function Media({
  src,
  type = "image",
  alt = "",
  label,
  note,
  spec,
  index,
  aspect = "16/9",
  fillHeight = false,
  priority = false,
  className = "",
  rounded = "rounded-2xl",
}: {
  src?: string;
  type?: "image" | "video";
  alt?: string;
  label?: string;
  note?: string;
  spec?: string;
  index?: string;
  aspect?: string;
  fillHeight?: boolean;
  priority?: boolean;
  className?: string;
  rounded?: string;
}) {
  // fillHeight = stretch to parent height (for bento) instead of fixed aspect.
  const frame = `relative overflow-hidden ${rounded} ${
    fillHeight ? "h-full" : ""
  } ${className}`;
  const style = fillHeight ? undefined : { aspectRatio: aspect };

  // Real video
  if (src && type === "video") {
    return (
      <div className={frame} style={style}>
        <video
          className="h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  }

  // Real image — hover-zoom + red wash + caption reveal (on-brand hover)
  if (src) {
    return (
      <div className={`group ${frame}`} style={style}>
        <Image
          src={src}
          alt={alt || label || "Arshia Akhtar"}
          fill
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* subtle base darkening for any overlaid caption legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-carbon/50 via-transparent to-transparent"
        />
        {/* red wash on hover */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, rgba(225,6,0,0.55), rgba(225,6,0,0.08) 45%, transparent 75%)",
          }}
        />
        {/* red inset ring on hover */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${rounded} ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-2 group-hover:ring-accent`}
        />
        {/* editorial index number */}
        {index && (
          <span className="absolute left-4 top-3 label-mono text-bone/70">
            {index}
          </span>
        )}
        {/* caption + view cue slide up on hover */}
        {label && (
          <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="label-mono text-bone">{label}</span>
            <span className="label-mono text-accent">↗ view</span>
          </div>
        )}
      </div>
    );
  }

  // Labeled placeholder — looks intentional, not broken.
  return (
    <div
      className={`${frame} border border-line bg-carbon-2`}
      style={style}
      role="img"
      aria-label={label ? `Media placeholder: ${label}` : "Media placeholder"}
    >
      {/* diagonal hatch texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 14px)",
        }}
      />
      {/* corner ticks (camera framing) */}
      <Corner className="left-3 top-3 border-l border-t" />
      <Corner className="right-3 top-3 border-r border-t" />
      <Corner className="bottom-3 left-3 border-b border-l" />
      <Corner className="bottom-3 right-3 border-b border-r" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span className="label-mono text-accent">{type === "video" ? "▶ video" : "◳ photo"}</span>
        {label && (
          <span className="mt-3 font-display text-2xl text-bone sm:text-3xl">
            {label}
          </span>
        )}
        {note && (
          <span className="mt-2 max-w-xs text-sm leading-snug text-muted">
            {note}
          </span>
        )}
        <span className="label-mono mt-4 text-muted/70">
          {spec ?? `${aspect.replace("/", ":")} · drop asset to fill`}
        </span>
      </div>
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-5 w-5 border-bone/30 ${className}`}
    />
  );
}
