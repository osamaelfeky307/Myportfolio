"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionRail() {
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.15, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile scroll progress bar (below the 80px navbar) */}
      <div className="fixed top-20 inset-x-0 h-0.5 bg-border/30 z-40 xl:hidden">
        <div
          className="h-full bg-accent transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Desktop section rail */}
      <nav
        aria-label="Sections"
        className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-5"
      >
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => go(id)}
              className="group flex items-center gap-3 text-left"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-accent"
                    : "w-2 h-2 bg-border group-hover:bg-accent/50"
                }`}
              />
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "text-accent opacity-100"
                    : "text-fg-3 opacity-0 group-hover:opacity-100"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
        <div className="mt-2 h-16 w-px bg-border/50 ml-[5px] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-accent transition-[height] duration-150"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </nav>
    </>
  );
}
