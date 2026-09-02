"use client";

import { EXPERIENCE } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import Carousel from "./Carousel";

export default function Experience() {
  return (
    <section id="experience" className="pt-40 pb-24 md:pt-[20rem] md:pb-[15rem] bg-bg flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">
        
        <div className="flex items-baseline gap-8 mb-16 md:mb-[8rem] border-b border-border pb-8">
          <span className="editorial-label text-accent">02</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-fg tracking-tight">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {EXPERIENCE.map((block, i) => (
            <div key={block.id}>
              <FadeIn delay={0.1}>
                <h3 className="text-xl font-bold text-fg uppercase tracking-widest mb-16 border-b border-border pb-6">
                  {block.heading}
                </h3>
              </FadeIn>

              <div className="flex flex-col">
                {block.entries.map((entry, ei) => (
                  <FadeIn key={ei} delay={0.2} className="flex mb-24 last:mb-0">
                    
                    {/* Timeline Column (Structural, prevents text overlap) */}
                    <div 
                      className="w-6 shrink-0 flex flex-col items-center relative"
                      style={{ marginRight: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                    >
                      
                      {/* Timeline Dot */}
                      <div className="w-6 h-6 shrink-0 bg-bg border-[4px] border-accent rounded-full z-10 ring-[6px] ring-bg mt-1.5" />
                      
                      {/* Timeline Line connecting to the next node */}
                      {ei !== block.entries.length - 1 && (
                        <div className="absolute top-[30px] bottom-[-6rem] w-0.5 bg-border/80 z-0" />
                      )}
                      
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-16">
                      
                      {/* Period */}
                      <div className="md:w-1/4 shrink-0 pt-1">
                        <span className="editorial-label text-fg-3">{entry.period}</span>
                      </div>

                    {/* Details */}
                    <div className="md:w-3/4 max-w-2xl">
                      <h4 className="font-serif text-3xl font-bold text-fg mb-2">{entry.role}</h4>
                      <div className="flex items-center gap-4 mb-10 text-lg">
                        <div className="flex items-center -space-x-2">
                          {entry.logo && (
                            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border bg-white flex items-center justify-center relative z-10">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={entry.logo} alt={`${entry.org} logo`} className="w-full h-full object-contain" />
                            </div>
                          )}
                          {entry.secondaryLogo && (
                            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border bg-white flex items-center justify-center relative z-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={entry.secondaryLogo} alt={`MCIT logo`} className="w-full h-full object-contain" />
                            </div>
                          )}
                        </div>
                        <span className="text-accent font-medium">{entry.org}</span>
                        {entry.link && (
                          <a href={entry.link} target="_blank" rel="noopener noreferrer" className="text-fg-3 hover:text-accent transition-colors">
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>

                      <ul className="flex flex-col gap-6">
                        {entry.bullets.map((bullet, bi) => (
                          <li key={bi} className="text-fg-2 leading-[1.8] flex gap-6 text-lg">
                            <span className="text-accent/50">—</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {entry.photos && entry.photos.length > 0 && (
                        <div className="mt-10">
                          <Carousel photos={entry.photos} autoplay autoplayInterval={3500} />
                        </div>
                      )}
                    </div>
                  </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
