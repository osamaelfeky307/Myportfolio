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
            <FadeIn key={project.id} delay={i * 0.1}>
              <div 
                className="group py-32 border-b border-border flex flex-col md:flex-row md:items-start gap-8 md:gap-16 hover:bg-black/[0.02] transition-colors -mx-6 px-6"
              >
                
                {/* Left: Meta */}
                <div className="md:w-1/4 flex flex-col gap-2 shrink-0">
                  <span className="editorial-label">{project.categoryLabel}</span>
                  <span className="text-sm font-semibold text-accent">{project.status}</span>
                </div>

                {/* Center & Right: Content */}
                <div className="md:w-3/4 flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <h3 className="font-serif text-4xl font-bold text-fg group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <a 
                      href={project.evidenceUrl}
                      target={project.evidenceUrl !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm uppercase tracking-widest font-medium shrink-0 ${
                        project.evidenceUrl === "#" ? "text-fg-3/30 cursor-not-allowed" : "text-fg hover:text-accent transition-colors"
                      }`}
                    >
                      {project.evidenceLabel}
                      <ArrowUpRight size={18} className={project.evidenceUrl === "#" ? "opacity-30" : "group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"} />
                    </a>
                  </div>
                  
                  <p className="text-fg-2 text-lg leading-[1.8] max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-4 mt-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-sm text-fg-3 uppercase tracking-widest">{tech}</span>
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
