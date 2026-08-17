"use client";

import { PERSONAL } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-[20rem] my-24 md:my-[15rem] bg-accent text-white flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto text-center">
        
        <div className="mb-12">
          <span className="editorial-label text-white/70">06 — Get in Touch</span>
        </div>

        <a 
          href={`mailto:${PERSONAL.email}`}
          className="inline-block font-serif text-5xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-none hover:opacity-80 transition-opacity mb-24"
        >
          Say Hello.
        </a>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <a 
            href={PERSONAL.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-white/70 transition-colors"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a 
            href={PERSONAL.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-white/70 transition-colors"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a 
            href={PERSONAL.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-white/70 transition-colors"
          >
            WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
