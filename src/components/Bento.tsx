import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import CountUp from "@/components/CountUp";
import { snapshot } from "@/lib/content";

/**
 * BENTO "AT A GLANCE" — modular identity snapshot (UI/UX Pro Max: Bento Grid).
 * Deterministic layout: tall portrait stretches to match the right-hand stack;
 * info cards are content-height with centred content (no dead space).
 */
const card =
  "rounded-3xl border border-line bg-carbon-2 p-6 transition-transform duration-300 hover:scale-[1.02] sm:p-7";

export default function Bento() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="eyebrow mb-4">{snapshot.eyebrow}</p>
        <h2 className="font-display text-5xl sm:text-7xl">{snapshot.heading}</h2>
      </Reveal>

      <div className="mt-12 space-y-3 sm:space-y-4">
        {/* Top region: portrait (stretches) + stat/quote stack */}
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <Media
              label="Arshia"
              src="/photos/portrait-studio.jpg"
              fillHeight
              rounded="rounded-3xl"
              className="min-h-[360px] lg:min-h-full"
            />
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-2">
            <Reveal>
              <div className={`${card} flex h-full flex-col justify-center`}>
                <span className="eyebrow">Now racing</span>
                <div className="mt-3 font-display text-6xl text-accent sm:text-7xl">
                  {snapshot.ladder.value}
                </div>
                <p className="mt-1 text-sm text-muted">{snapshot.ladder.label}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className={`${card} flex h-full flex-col justify-center`}>
                <span className="eyebrow">Reach</span>
                <div className="mt-3 font-display text-6xl text-bone sm:text-7xl">
                  <CountUp to={31} suffix="K+" />
                </div>
                <p className="mt-1 text-sm text-muted">{snapshot.reach.label}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="sm:col-span-2">
              <div className={`${card} flex h-full items-center`}>
                <p className="font-display text-2xl leading-tight text-bone sm:text-3xl">
                  &ldquo;{snapshot.quote}&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Info row: tight, centred content */}
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <Reveal>
            <div className={`${card} flex h-full flex-col justify-center gap-3`}>
              <span className="text-3xl tracking-widest">{snapshot.identity.flags}</span>
              <p className="text-bone">{snapshot.identity.line}</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className={`${card} flex h-full flex-col justify-center gap-2`}>
              <span className="eyebrow">Beyond her own grid</span>
              <p className="text-lg text-bone">{snapshot.trackside}</p>
            </div>
          </Reveal>
        </div>

        {/* Dual-life accent banner */}
        <Reveal delay={0.1}>
          <div className="flex items-center justify-between gap-4 rounded-3xl border border-accent/40 bg-gradient-to-r from-carbon-2 to-carbon-3 p-7 transition-transform duration-300 hover:scale-[1.01]">
            <p className="font-display text-2xl text-bone sm:text-4xl">
              {snapshot.dual}
            </p>
            <span className="hidden h-3 w-3 shrink-0 rounded-full bg-accent sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
