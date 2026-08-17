"use client";

import { EDUCATION } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-[15rem] bg-bg flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">
        
        <div className="flex items-baseline gap-8 mb-16 md:mb-[8rem] border-b border-border pb-8">
          <span className="editorial-label text-accent">03</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-fg tracking-tight">
            Education
          </h2>
        </div>

        <div className="flex flex-col">
          {EDUCATION.map((item, i) => (
            <FadeIn key={item.id} delay={0.1}>
              <div 
                className="py-32 border-b border-border flex flex-col md:flex-row gap-8 md:gap-16 hover:bg-black/[0.02] transition-colors -mx-6 px-6" 
              >
              
              {/* Period & Note */}
              <div className="md:w-1/4 shrink-0 flex flex-col gap-2">
                <span className="editorial-label">{item.period}</span>
                {item.highlight && (
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{item.highlight}</span>
                )}
                {item.note && <span className="text-sm text-fg-3">{item.note}</span>}
              </div>

              {/* Details */}
              <div className="md:w-3/4 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-between max-w-2xl">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 mb-2">
                    {item.logo && (
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border bg-white flex items-center justify-center p-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <h3 className="font-serif text-3xl font-bold text-fg">{item.degree}</h3>
                  </div>
                  <div className="text-xl text-fg-2 font-medium">{item.institution}</div>
                  <div className="text-base text-fg-3">{item.field}</div>
                  {item.grade && <div className="text-base font-semibold text-fg mt-4">{item.grade}</div>}
                </div>

                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-fg hover:text-accent transition-colors whitespace-nowrap mt-4 md:mt-0 shrink-0"
                  >
                    {item.linkLabel}
                    <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
