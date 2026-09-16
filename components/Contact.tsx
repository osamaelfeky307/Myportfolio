"use client";

import { PERSONAL } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-[20rem] my-24 md:my-[15rem] bg-accent text-white flex justify-center w-full relative overflow-hidden"
    >
      {/* Stripe texture overlay */}
      <div className="absolute inset-0 stripe-pattern pointer-events-none" />

      {/* Subtle glow circles */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "-150px",
          left: "-150px",
          background: "rgba(255,255,255,0.06)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-100px",
          right: "-100px",
          background: "rgba(255,255,255,0.06)",
          filter: "blur(60px)",
        }}
      />

      <div className="w-[88%] max-w-5xl mx-auto text-center relative z-10">

        <div className="mb-10">
          <span className="editorial-label text-white/70">06 — Get in Touch</span>
        </div>

        {/* CTA with pulse ring */}
        <div className="mb-8">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-block font-serif text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none hover:opacity-80 transition-opacity"
          >
            Say Hello.
          </a>
        </div>

        {/* Email address — visible */}
        <div className="mb-20">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-2 text-sm md:text-base font-mono text-white/80 hover:text-white border-b border-white/30 hover:border-white pb-0.5 transition-all"
          >
            <Mail size={14} />
            {PERSONAL.email}
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium hover:text-white/70 transition-colors"
          >
            <FaLinkedin size={18} />
            LinkedIn
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium hover:text-white/70 transition-colors"
          >
            <FaGithub size={18} />
            GitHub
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={PERSONAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium hover:text-white/70 transition-colors"
          >
            <FaWhatsapp size={18} />
            WhatsApp
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
