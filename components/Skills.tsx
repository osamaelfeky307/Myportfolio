"use client";

import { SKILLS } from "@/lib/data";
import FadeIn from "./FadeIn";

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

        <div className="flex flex-col gap-24">
          {SKILLS.map((cat, i) => (
            <FadeIn key={cat.heading} delay={0.1}>
              <div className="border-t border-border pt-16">
                <div className="flex items-baseline justify-between pb-8 mb-8 border-b border-border">
                  <h3 className="font-serif text-3xl font-bold text-fg">{cat.heading}</h3>
                  <span className="editorial-label text-accent">{cat.proficiency}</span>
                </div>
                
                <div className="text-fg-2 text-lg leading-[1.8] font-light">
                  {cat.skills.join(", ")}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
