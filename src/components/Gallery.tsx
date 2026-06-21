import Reveal from "@/components/Reveal";
import Media from "@/components/Media";
import { gallery } from "@/lib/content";

/**
 * Gallery — an editorial mosaic. Dense CSS grid with intentional spans so
 * landscape shots feature large and portraits stay tall; uniform row height +
 * object-cover keeps it gap-free and responsive (2 cols mobile → 3 desktop).
 */
const spanClass: Record<string, string> = {
  big: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="border-y border-line bg-carbon-2 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">{gallery.eyebrow}</p>
          <h2 className="max-w-2xl font-display text-5xl sm:text-7xl">
            {gallery.heading}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{gallery.sub}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 [grid-auto-flow:dense] auto-rows-[42vw] sm:auto-rows-[230px] sm:gap-4 lg:grid-cols-3 lg:auto-rows-[260px]">
          {gallery.shots.map((shot, i) => (
            <Reveal
              key={shot.label}
              delay={(i % 4) * 0.05}
              className={spanClass[shot.span] ?? "row-span-2"}
            >
              <Media
                label={shot.label}
                src={shot.src}
                index={`0${i + 1}`}
                fillHeight
                type="image"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
