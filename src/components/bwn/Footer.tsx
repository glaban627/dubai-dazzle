import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-[var(--charcoal)] border-t border-[var(--gold)]/15 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative h-12 w-12 grid place-items-center">
              <div className="absolute inset-0 border border-[var(--gold)]/50 rotate-45" />
              <span className="font-display text-gold text-2xl">B</span>
            </div>
            <div>
              <div className="font-display text-2xl tracking-[0.3em] text-foreground">BWN</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Decoration Design L.L.C.</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Your imagination partner — luxury interior design, joinery and fit-out solutions, handcrafted in Dubai.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><a href="/#services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="/#about" className="hover:text-gold transition-colors">About</a></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Studio</div>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            WH17, Al Mulla Warehouse,<br />
            Al Quoz Industrial 3,<br />
            Dubai, UAE
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <div><a href="tel:+971506267685" className="hover:text-gold">+971 50 626 7685</a></div>
            <div><a href="mailto:info@bwnuae.com" className="hover:text-gold">info@bwnuae.com</a></div>
            <div><a href="https://bwnuae.com" className="hover:text-gold">bwnuae.com</a></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[var(--gold)]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} BWN Decoration Design L.L.C. All rights reserved.</div>
        <div className="tracking-[0.3em] uppercase text-gold/70">Crafted in Dubai</div>
      </div>
    </footer>
  );
}