import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/#services", label: "Services" },
  { to: "/#about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass-strong" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 grid place-items-center">
            <div className="absolute inset-0 rounded-sm border border-[var(--gold)]/40 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
            <span className="font-display text-gold text-xl leading-none">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-[0.3em] text-foreground">
              BWN
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Decoration Design
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[var(--gold)]/60 text-gold text-xs tracking-[0.2em] uppercase hover:bg-[var(--gold)] hover:text-[var(--charcoal)] transition-all"
        >
          Request Consultation
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-gold p-2"
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current ml-auto" />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong border-t border-[var(--gold)]/20 mt-3">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-foreground/80 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}