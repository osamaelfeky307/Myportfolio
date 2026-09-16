"use client";

import Image from "next/image";
import { PERSONAL, STATS } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="w-full min-h-[100vh] flex flex-col items-center relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "64px" }}
    >
      {/* Decorative background — orange glow blobs + dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div
        className="glow-blob animate-glow-pulse pointer-events-none"
        style={{ width: "600px", height: "600px", top: "-100px", right: "-150px", opacity: 0.7 }}
      />
      <div
        className="glow-blob pointer-events-none"
        style={{ width: "400px", height: "400px", bottom: "0", left: "-100px", opacity: 0.4 }}
      />

      <div className="w-[88%] max-w-5xl mx-auto flex flex-col my-auto gap-8 md:gap-12 relative z-10">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — Text */}
          <div className="animate-fade-in-up">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-accent/30 bg-accent/5 rounded-full text-xs font-mono tracking-wider text-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for work
            </div>

            <span className="editorial-label block mb-4 md:mb-6 text-accent">00 — Introduction</span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none text-fg mb-10 md:mb-16">
              Osama Fayez<br/>Abdelkhalik<br/>
              <span className="relative inline-block">
                Attia Othman.
                <span
                  className="absolute -bottom-2 left-0 h-[3px] bg-accent rounded-full"
                  style={{ width: "60%" }}
                />
              </span>
            </h1>

            <p className="text-xl text-fg-2 font-light leading-[1.8] mb-12 max-w-md">
              Software Engineer &amp; Medical Informatics. {PERSONAL.tagline}
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => go("#work")}
                className="group relative text-sm font-medium tracking-wide border-b border-fg pb-1 hover:text-accent hover:border-accent transition-colors uppercase overflow-hidden"
              >
                Selected Work
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
              <button
                onClick={() => go("#contact")}
                className="text-sm font-medium tracking-wide text-fg-3 hover:text-accent transition-colors uppercase"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right — Photo & Stats */}
          <div
            className="flex flex-col gap-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Photo with orange corner accent */}
            <div className="relative">
              {/* Orange corner decoration */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent pointer-events-none z-10"
                style={{ borderRadius: "0 4px 0 0" }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent pointer-events-none z-10"
                style={{ borderRadius: "0 0 0 4px" }}
              />

              <div className="group relative w-full aspect-[4/5] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700" style={{ borderRadius: "50% 50% 8px 8px" }}>
                <Image
                  src="/profile.jpg"
                  alt="Osama Elfeky"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Subtle orange gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-4 border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 rounded-[4px]"
                >
                  <div className="editorial-label mb-2 group-hover:text-accent transition-colors">{stat.label}</div>
                  <div className="font-serif text-2xl font-bold text-fg mb-1">{stat.value}</div>
                  <div className="text-xs text-fg-3">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Bottom bar — socials + scroll */}
      <div className="w-[88%] max-w-5xl mx-auto mt-auto pt-12 flex justify-between items-end animate-fade-in relative z-10">
        <div className="flex gap-5">
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex items-center justify-center w-9 h-9 border border-border hover:border-accent hover:bg-accent/10 rounded-[4px] text-fg-3 hover:text-accent transition-all duration-300"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex items-center justify-center w-9 h-9 border border-border hover:border-accent hover:bg-accent/10 rounded-[4px] text-fg-3 hover:text-accent transition-all duration-300"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={PERSONAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group flex items-center justify-center w-9 h-9 border border-border hover:border-accent hover:bg-accent/10 rounded-[4px] text-fg-3 hover:text-accent transition-all duration-300"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>

        <button
          onClick={() => go("#about")}
          className="flex flex-col items-center gap-2 text-fg-3 hover:text-accent transition-colors group"
        >
          <span className="editorial-label">Scroll</span>
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
