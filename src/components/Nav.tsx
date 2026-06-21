"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Story", href: "#why" },
  { label: "Journey", href: "#journey" },
  { label: "Racing", href: "#arenas" },
  { label: "Gallery", href: "#gallery" },
  { label: "Press", href: "#recognition" },
  { label: "Partner", href: "#partner" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy — highlight the nav link for the section in view.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-carbon/95 md:bg-carbon/80 md:backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-xl tracking-wide">
          Arshia<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-underline text-sm transition-colors hover:text-bone ${
                active === l.href ? "text-accent" : "text-muted"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            className="btn-ignite rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Work with me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-bone transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-bone transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-bone transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-carbon px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted hover:text-bone"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#connect"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Work with me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
