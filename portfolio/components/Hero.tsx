"use client";

import Image from "next/image";
import { PERSONAL, STATS } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="w-full min-h-[100vh] flex flex-col items-center" style={{ paddingTop: '120px', paddingBottom: '64px' }}>
      <div className="w-[88%] max-w-5xl mx-auto flex flex-col my-auto gap-8 md:gap-12">
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Main Title Area */}
          <div className="animate-fade-in-up">
            <span className="editorial-label block mb-4 md:mb-6 text-accent">00 — Introduction</span>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none text-fg mb-10 md:mb-16">
              Osama Fayez<br/>Abdelkhalik<br/>Attia Othman.
            </h1>
            
            <p className="text-xl text-fg-2 font-light leading-[1.8] mb-12">
              Software Engineer & Medical Informatics. {PERSONAL.tagline}
            </p>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => go("#work")}
                className="text-sm font-medium tracking-wide border-b border-fg pb-1 hover:text-accent hover:border-accent transition-colors uppercase"
              >
                Selected Work
              </button>
              <button 
                onClick={() => go("#contact")}
                className="text-sm font-medium tracking-wide text-fg-3 hover:text-accent transition-colors uppercase"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column (Photo & Stats) */}
          <div className="flex flex-col gap-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            
            <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl shadow-xl hover:shadow-2xl transition-all duration-700">
              <Image
                src="/profile.jpg"
                alt="Osama Elfeky"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              {STATS.map((stat, i) => (
                <div key={stat.label}>
                  <div className="editorial-label mb-2">{stat.label}</div>
                  <div className="font-serif text-2xl font-bold text-fg mb-1">{stat.value}</div>
                  <div className="text-xs text-fg-3">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <div className="w-[88%] max-w-5xl mx-auto mt-auto pt-12 flex justify-between items-end animate-fade-in">
        <div className="flex gap-4">
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg-3 hover:text-accent transition-colors"><FaLinkedin size={20}/></a>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="text-fg-3 hover:text-accent transition-colors"><FaGithub size={20}/></a>
          <a href={PERSONAL.whatsapp} target="_blank" rel="noopener noreferrer" className="text-fg-3 hover:text-accent transition-colors"><FaWhatsapp size={20}/></a>
        </div>
        
        <button 
          onClick={() => go("#work")}
          className="flex flex-col items-center gap-2 text-fg-3 hover:text-accent transition-colors group"
        >
          <span className="editorial-label">Scroll</span>
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
