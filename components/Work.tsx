"use client";

import { PROJECTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-[15rem] bg-bg flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">

        <div className="flex items-baseline gap-8 mb-16 md:mb-[8rem] border-b border-border pb-8">
          <span className="editorial-label text-accent">04</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-fg tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <div className="group relative py-12 md:py-16 border-b border-border flex flex-col md:flex-row md:items-start gap-6 md:gap-16 transition-all duration-300 -mx-6 px-6 hover:bg-surface">

                {/* Project number — decorative */}
                <span
                  className="absolute top-8 right-6 font-serif text-7xl font-bold text-border group-hover:text-accent/10 transition-colors duration-500 select-none leading-none pointer-events-none hidden md:block"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Left: Meta */}
                <div className="md:w-1/4 flex flex-col gap-2 shrink-0 pt-1">
                  <span className="editorial-label">{project.categoryLabel}</span>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      project.statusVariant === "award"
                        ? "text-accent"
                        : project.statusVariant === "deployed"
                        ? "text-emerald-600"
                        : "text-fg-3"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="md:w-3/4 flex flex-col gap-6 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-fg group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <a
                      href={project.evidenceUrl}
                      target={project.evidenceUrl !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium shrink-0 mt-1 transition-all duration-200 ${
                        project.evidenceUrl === "#"
                          ? "text-fg-3/30 cursor-not-allowed"
                          : "text-fg hover:text-accent"
                      }`}
                    >
                      {project.evidenceLabel}
                      <ArrowUpRight
                        size={16}
                        className={
                          project.evidenceUrl === "#"
                            ? "opacity-30"
                            : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                        }
                      />
                    </a>
                  </div>

                  <p className="text-fg-2 text-lg leading-[1.8] max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="skill-pill text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
