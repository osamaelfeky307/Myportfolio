"use client";

import { PERSONAL } from "@/lib/data";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const NAV = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work",       href: "#work" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-12 bg-bg border-t border-border flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); go("#home"); }}
              className="font-serif text-2xl font-bold tracking-tight text-fg hover:text-accent transition-colors"
            >
              OE.
            </a>
            <p className="text-sm text-fg-3 max-w-xs">
              Software Engineer &amp; Medical Informatics
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {NAV.map(({ label, href }) => (
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
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 border border-border hover:border-accent hover:bg-accent/10 rounded-[4px] text-fg-3 hover:text-accent transition-all duration-300"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 border border-border hover:border-accent hover:bg-accent/10 rounded-[4px] text-fg-3 hover:text-accent transition-all duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={PERSONAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-9 h-9 border border-border hover:border-accent hover:bg-accent/10 rounded-[4px] text-fg-3 hover:text-accent transition-all duration-300"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-fg-3 uppercase tracking-widest">
          <span>&copy; {year} Osama Elfeky.</span>
          <span>Designed &amp; Built with Precision.</span>
        </div>

      </div>
    </footer>
  );
}
