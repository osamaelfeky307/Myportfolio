"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PERSONAL } from "@/lib/data";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
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
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); go(href); }}
                  className="text-sm font-medium text-fg-2 hover:text-accent transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PERSONAL.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-fg transition-colors"
          >
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
        className={`md:hidden absolute top-20 left-0 right-0 bg-bg border-b border-border transition-all duration-300 overflow-hidden flex justify-center ${
          open ? "max-h-64 border-b" : "max-h-0 border-transparent"
        }`}
      >
        <div className="w-full max-w-5xl px-8 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); go(href); }}
              className="text-base font-medium text-fg hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={PERSONAL.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-accent transition-colors pt-2 border-t border-border"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
