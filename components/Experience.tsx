"use client";

import { EXPERIENCE, ExperienceEntry } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
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

const PREVIEW_COUNT = 4;

const ExperienceCard = ({
  entry,
  isLast,
}: {
  entry: ExperienceEntry;
  isLast: boolean;
}) => {
  const [photosOpen, setPhotosOpen] = useState(false);
  const photos = entry.photos ?? [];
  const preview = photos.slice(0, PREVIEW_COUNT);
  const extra = photos.length - preview.length;

  return (
    <div
      className={`group ${!isLast ? "border-b-2 border-border/60" : ""}`}
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "2rem",
        marginBottom: !isLast ? "1.5rem" : "0",
      }}
    >
      <div className="py-4 md:py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 px-4 -mx-4 md:px-6 md:-mx-6">
        {/* Period */}
        <div className="flex items-center gap-3 md:gap-5 md:w-64 shrink-0 md:pt-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="text-xs md:text-sm tracking-[0.2em] font-semibold uppercase text-accent">
            {entry.period}
          </span>
        </div>

        {/* Role & Org */}
        <div className="flex-1 flex flex-col gap-2 md:gap-4 mt-2 md:mt-0">
          <h4 className="font-serif text-2xl md:text-4xl font-bold text-fg leading-snug md:leading-[1.15]">
            {entry.role}
          </h4>

          <div className="flex flex-row items-center flex-wrap gap-3 md:gap-4 mt-1 md:mt-2">
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
            <div className="text-base md:text-xl text-fg-2 font-medium">
              {entry.org}
            </div>
          </div>
        </div>
      </div>

      {/* Content - always visible */}
      <div className="px-2 md:px-0 md:pl-[19rem] pb-2 pt-2">
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
            <li
              key={bi}
              className="text-fg-2 leading-relaxed flex gap-4 text-lg"
            >
              <span className="text-accent mt-1.5 text-xl leading-none">•</span>
              <span>
                <HighlightNumbers text={bullet} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Photo preview strip */}
      {photos.length > 0 && (
        <div className="pb-4 px-2 md:px-0 md:pl-[19rem] pt-6">
          <div className="flex items-center gap-3 flex-wrap">
            {preview.map((src, pi) => (
              <button
                key={pi}
                onClick={() => setPhotosOpen((v) => !v)}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-border/40 shadow-sm hover:border-accent/60 hover:scale-[1.03] transition-all"
                aria-label="Toggle photos"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={entry.photoAlts?.[pi] ?? `${entry.role} photo ${pi + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
            <button
              onClick={() => setPhotosOpen((v) => !v)}
              className="text-sm font-medium text-accent hover:text-accent/80 bg-accent/10 px-4 py-2 rounded-full transition-colors"
            >
              {photosOpen
                ? "Hide photos"
                : extra > 0
                  ? `View all ${photos.length} photos`
                  : "View photos"}
            </button>
          </div>

          {photosOpen && (
            <div className="mt-6 max-w-4xl rounded-2xl overflow-hidden border border-border/30 shadow-lg">
              <Carousel photos={photos} alts={entry.photoAlts} autoplay autoplayInterval={4000} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-24 pb-16 md:pt-[7rem] md:pb-[7rem] bg-bg flex justify-center w-full"
    >
      <div className="w-[90%] md:w-[88%] max-w-5xl mx-auto">
        <div className="flex items-center md:items-baseline gap-6 md:gap-8 mb-10 md:mb-[4rem] border-b-2 border-border/60 pb-6 md:pb-8">
          <span className="text-accent font-mono text-2xl font-bold">02</span>
          <h2 className="font-serif text-4xl md:text-7xl font-bold text-fg tracking-tight">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-20">
          {EXPERIENCE.map((block) => (
            <div key={block.id}>
              <FadeIn delay={0.1}>
                <h3
                  className="text-lg md:text-2xl font-bold text-fg uppercase tracking-[0.2em] border-b-2 border-border/60"
                  style={{ paddingBottom: "1.5rem", marginBottom: "1.5rem" }}
                >
                  {block.heading}
                </h3>
              </FadeIn>

              <div className="flex flex-col">
                {block.entries.map((entry, ei) => (
                  <FadeIn key={ei} delay={0.1 + ei * 0.1}>
                    <ExperienceCard
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
