import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import { why } from "@/lib/content";

/** The emotional hook — her passion, in her own voice. Suby: feel it first. */
export default function TheWhy() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:items-center">
        {/* Portrait + heading */}
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-4">{why.eyebrow}</p>
            <h2 className="font-display text-4xl sm:text-5xl">{why.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Media
              label="On her own terms"
              src="/photos/desert-lean.jpg"
              aspect="4/5"
            />
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {why.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <blockquote className="mt-12 border-l-2 border-accent pl-6 font-display text-3xl leading-tight text-bone sm:text-4xl">
              &ldquo;{why.pullQuote}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
