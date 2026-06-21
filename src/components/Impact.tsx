import Reveal from "@/components/Reveal";
import { impact } from "@/lib/content";

/** The mission — the emotional + PR payoff. Big, declarative, centered. */
export default function Impact() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(225,6,0,0.12), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">{impact.eyebrow}</p>
          <h2 className="font-display text-5xl leading-[0.95] sm:text-7xl">
            {impact.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {impact.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-12 font-display text-2xl text-accent sm:text-3xl">
            &ldquo;{impact.quote}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
