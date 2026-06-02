import { motion } from "framer-motion";
import { IMG } from "@/lib/bwn-assets";

export function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.contactBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-[var(--background)]" />
      </div>
      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1] text-foreground max-w-4xl mx-auto"
        >
          Let's craft something <em className="not-italic shimmer-text">unforgettable</em>.
        </motion.h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Tell us about your space. A senior designer will respond within one business day.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] text-[var(--charcoal)] text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-shadow"
          >
            Start Your Project <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="tel:+971506267685"
            className="inline-flex items-center gap-3 px-10 py-5 border border-[var(--gold)]/50 text-foreground text-xs tracking-[0.3em] uppercase hover:bg-[var(--gold)]/5"
          >
            +971 50 626 7685
          </a>
        </div>
      </div>
    </section>
  );
}