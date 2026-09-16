"use client";

import { SKILLS } from "@/lib/data";
import FadeIn from "./FadeIn";

const PROFICIENCY_COLOR: Record<string, string> = {
  Advanced:     "bg-accent",
  Comfortable:  "bg-amber-400",
  Practicing:   "bg-sky-400",
  Methodology:  "bg-violet-400",
  Leadership:   "bg-emerald-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-[15rem] bg-white flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">

        <div className="flex items-baseline gap-8 mb-16 md:mb-[8rem] border-b border-border pb-8">
          <span className="editorial-label text-accent">05</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-fg tracking-tight">
            Expertise
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {SKILLS.map((cat) => (
            <FadeIn key={cat.heading} delay={0.1}>
              <div className="border-t border-border pt-12">
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-fg">{cat.heading}</h3>
                  <span className="flex items-center gap-2 editorial-label">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${PROFICIENCY_COLOR[cat.proficiency] ?? "bg-fg-3"}`}
                    />
                    {cat.proficiency}
                  </span>
                </div>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
