"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PERSONAL } from "@/lib/data";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work",       href: "#work" },
  { label: "Skills",     href: "#skills" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll → blur navbar
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // IntersectionObserver → active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="w-[88%] max-w-5xl mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); go("#home"); }}
          className="flex items-center group"
        >
          <div className="relative h-16 w-64 md:h-20 md:w-80 transition-transform group-hover:scale-105">
            <Image
              src="/logos/OsamaElfekyLogo.png"
              alt="Osama Elfeky"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); go(href); }}
                    className={`relative text-sm font-medium transition-colors pb-0.5 ${
                      isActive ? "text-accent" : "text-fg-2 hover:text-accent"
                    }`}
                  >
                    {label}
                    {/* Active underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CV button — pill style */}
          <a
            href={PERSONAL.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-fg-2 hover:text-accent transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-bg/97 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden flex justify-center ${
          open ? "max-h-96 border-b" : "max-h-0 border-transparent"
        }`}
      >
        <div className="w-[88%] max-w-5xl mx-auto py-6 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); go(href); }}
                className={`text-base font-medium transition-colors py-3 flex items-center gap-2 ${
                  isActive ? "text-accent" : "text-fg hover:text-accent"
                }`}
              >
                {isActive && <span className="w-2 h-2 rounded-full bg-accent shrink-0" />}
                {label}
              </a>
            );
          })}
          <div className="border-t border-border mt-2 pt-4">
            <a
              href={PERSONAL.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 px-6 py-2.5 rounded-full transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
