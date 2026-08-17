"use client";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-12 bg-bg border-t border-border flex justify-center w-full">
      <div className="w-[88%] max-w-5xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go("#home"); }}
            className="font-serif text-2xl font-bold tracking-tight text-fg hover:text-accent transition-colors"
          >
            OE.
          </a>

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

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-fg-3 uppercase tracking-widest">
          <span>&copy; {year} Osama Elfeky.</span>
          <span>Designed & Built with Precision.</span>
        </div>

      </div>
    </footer>
  );
}
