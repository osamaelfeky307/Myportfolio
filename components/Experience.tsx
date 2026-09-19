"use client";

import { EXPERIENCE, ExperienceEntry } from "@/lib/data";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";
import Carousel from "./Carousel";
import { useState } from "react";

// Component to automatically highlight numbers in text
const HighlightNumbers = ({ text }: { text: string }) => {
  const parts = text.split(/(\d+)/);
  return (
    <>
      {parts.map((part, i) =>
        /\d+/.test(part) ? (
          <strong key={i} className="text-accent font-bold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
};

const ExperienceAccordion = ({ entry, isLast }: { entry: ExperienceEntry; isLast: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-6 md:py-4 ${!isLast ? "border-b-2 border-border/60" : ""} group`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 hover:bg-fg/5 transition-colors px-2 -mx-2 md:px-6 md:-mx-6 rounded-2xl group relative"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16 w-full pr-20 md:pr-0">
          {/* Period - Acts as the bullet/indicator */}
          <div className="flex items-center gap-3 md:gap-5 md:w-64 shrink-0 md:pt-3">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isOpen ? "bg-accent scale-125" : "bg-border group-hover:bg-accent/50"
              }`}
            />
            <span
              className={`text-xs md:text-sm tracking-[0.2em] font-semibold uppercase transition-colors duration-300 ${
                isOpen ? "text-accent" : "text-fg-3"
              }`}
            >
              {entry.period}
            </span>
          </div>

          {/* Role & Org */}
          <div className="flex-1 flex flex-col gap-2 md:gap-4 mt-2 md:mt-0">
            <h4 className="font-serif text-2xl md:text-5xl font-bold text-fg group-hover:text-accent transition-colors leading-snug md:leading-[1.15]">
              {entry.role}
            </h4>
            
            <div className="flex flex-row items-center flex-wrap gap-3 md:gap-4 mt-1 md:mt-2">
              {/* Logos */}
              {(entry.logo || entry.secondaryLogo) && (
                <div className="flex items-center -space-x-3">
                  {entry.logo && (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border-2 border-bg bg-white flex items-center justify-center relative z-10 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={entry.logo}
                        alt={`${entry.org} logo`}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                  )}
                  {entry.secondaryLogo && (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border-2 border-bg bg-white flex items-center justify-center relative z-0 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={entry.secondaryLogo}
                        alt={`Secondary logo`}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="text-base md:text-xl text-fg-2 font-medium">{entry.org}</div>
            </div>
          </div>
        </div>

        {/* Toggle Icon */}
        <div
          className={`absolute top-6 right-2 md:static shrink-0 p-3 md:p-4 rounded-full border-2 border-border/40 group-hover:border-accent/60 bg-bg group-hover:bg-accent/10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:shadow-md ${
            isOpen ? "rotate-180 bg-accent/10 border-accent/60 text-accent shadow-sm scale-105" : "text-fg-3 group-hover:text-accent scale-100"
          }`}
        >
          <ChevronDown 
            size={28} 
            strokeWidth={2.5} 
            className={`md:w-9 md:h-9 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isOpen ? "group-hover:translate-y-1" : "group-hover:translate-y-1"
            }`} 
          />
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* Indented Text Content */}
          <div className="px-2 md:px-0 md:pl-[19rem] pb-6 md:pb-8 pt-2">
            {/* View Evidence Link */}
            {entry.link && (
              <div className="mb-6 md:mb-8">
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-medium transition-colors bg-accent/10 px-4 py-1.5 rounded-full text-sm w-fit"
                >
                  View Evidence <ArrowUpRight size={14} />
                </a>
              </div>
            )}

            <ul className="flex flex-col gap-5">
              {entry.bullets.map((bullet, bi) => (
                <li key={bi} className="text-fg-2 leading-relaxed flex gap-4 text-lg">
                  <span className="text-accent mt-1.5 text-xl leading-none">•</span>
                  <span>
                    <HighlightNumbers text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Centered Carousel */}
          {entry.photos && entry.photos.length > 0 && (
            <div className="pb-8 px-2 md:px-0">
              <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/30 shadow-lg">
                <Carousel photos={entry.photos} autoplay autoplayInterval={4000} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-40 pb-24 md:pt-[20rem] md:pb-[15rem] bg-bg flex justify-center w-full"
    >
      <div className="w-[90%] md:w-[88%] max-w-5xl mx-auto">
        <div className="flex items-center md:items-baseline gap-6 md:gap-8 mb-12 md:mb-[10rem] border-b-2 border-border/60 pb-6 md:pb-8">
          <span className="text-accent font-mono text-2xl font-bold">02</span>
          <h2 className="font-serif text-4xl md:text-7xl font-bold text-fg tracking-tight">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          {EXPERIENCE.map((block) => (
            <div key={block.id}>
              <FadeIn delay={0.1}>
                <h3 className="text-lg md:text-2xl font-bold text-fg uppercase tracking-[0.2em] mb-6 md:mb-12 border-b-2 border-border/60 pb-4 md:pb-6">
                  {block.heading}
                </h3>
              </FadeIn>

              <div className="flex flex-col">
                {block.entries.map((entry, ei) => (
                  <FadeIn key={ei} delay={0.1 + ei * 0.1}>
                    <ExperienceAccordion 
                      entry={entry} 
                      isLast={ei === block.entries.length - 1} 
                    />
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
