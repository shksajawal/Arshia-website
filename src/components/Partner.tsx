import Reveal from "@/components/Reveal";
import { partner } from "@/lib/content";

/**
 * SPONSORSHIP — "Trust & Authority + Conversion" pattern (UI/UX Pro Max).
 * Her #1 stated goal ("DM for Sponsorships" in her bio). Value-stacked
 * (Hormozi): make partnering feel like the obvious, time-sensitive move.
 */
export default function Partner() {
  return (
    <section id="partner" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 10%, var(--accent-glow), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">{partner.eyebrow}</p>
            <h2 className="font-display text-5xl sm:text-7xl">{partner.heading}</h2>
            <p className="mt-5 text-lg text-muted">{partner.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {partner.value.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full bg-carbon p-8 sm:p-10">
                <div className="font-display text-2xl text-accent">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-bone">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <a
              href={partner.cta.href}
              className="btn-ignite glow-accent inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              {partner.cta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
