import Reveal from "@/components/Reveal";
import LazyVideo from "@/components/LazyVideo";
import { reels } from "@/lib/content";

/**
 * REELS — vertical clips that autoplay (muted) as they scroll into view.
 * Lazy-loaded so they never affect initial page load.
 */
export default function Reels() {
  return (
    <section
      id="reels"
      className="border-y border-line bg-carbon-2 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">{reels.eyebrow}</p>
          <h2 className="max-w-2xl font-display text-5xl sm:text-7xl">
            {reels.heading}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{reels.sub}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {reels.items.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-carbon">
                <LazyVideo
                  src={src}
                  className="aspect-[9/16] h-full w-full object-cover"
                />
                {/* on-brand red hover ring */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-2 group-hover:ring-accent"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
