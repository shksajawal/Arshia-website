import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import { box } from "@/lib/content";

/** Box Motorsports — operator credibility. Proof she builds, not just competes. */
export default function BoxSection() {
  return (
    <section id="box" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="overflow-hidden rounded-3xl border border-line bg-carbon-2">
        <Reveal>
          <Media
            label="Behind the wheel"
            src="/photos/driving-wide.jpg"
            aspect="21/9"
            rounded="rounded-none"
          />
        </Reveal>
        <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-2 md:p-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">{box.eyebrow}</p>
              <h2 className="font-display text-5xl text-bone sm:text-6xl">
                {box.heading}
              </h2>
              <p className="mt-3 text-lg font-semibold text-accent">
                {box.tagline}
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted">{box.body}</p>
            </Reveal>
            <ul className="mt-8 space-y-3">
              {box.points.map((p, i) => (
                <Reveal key={p} delay={0.15 + i * 0.06}>
                  <li className="flex items-start gap-3 text-bone">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.3}>
              <a
                href={box.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-bone"
              >
                {box.cta.label}
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
