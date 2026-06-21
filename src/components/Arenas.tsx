import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import PulseLine from "@/components/PulseLine";
import { arenas } from "@/lib/content";

/** Driver / Researcher / Owner — the "same discipline, three arenas" thesis. */
// src filled where we have a real photo; researcher stays a labeled placeholder.
const shots = [
  { src: "/photos/track-helmet.jpg", note: "On track, helmet on" },
  { src: undefined, note: "Lab / research setting — photo needed" },
  { src: "/photos/cockpit-look.jpg", note: "Leading at Box Motorsports" },
];

export default function Arenas() {
  return (
    <section id="arenas" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="eyebrow mb-4">{arenas.eyebrow}</p>
        <h2 className="max-w-3xl font-display text-5xl sm:text-7xl">
          {arenas.heading}
        </h2>
      </Reveal>

      {/* Signature motif — quiet telemetry/heartbeat trace */}
      <PulseLine className="mt-6" height={56} />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {arenas.items.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1}>
            <div className="group flex h-full flex-col">
              <Media
                label={a.tag}
                src={shots[i].src}
                note={shots[i].note}
                aspect="4/5"
                className="mb-6"
              />
              <span className="eyebrow">{a.tag}</span>
              <h3 className="mt-3 font-display text-3xl text-bone">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{a.body}</p>
              <div className="mt-5 h-0.5 w-10 bg-accent transition-all duration-300 group-hover:w-20" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
