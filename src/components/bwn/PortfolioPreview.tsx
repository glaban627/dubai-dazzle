import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";
import { PORTFOLIO } from "@/lib/bwn-assets";

export function PortfolioPreview() {
  const featured = PORTFOLIO.slice(0, 6);
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Selected Works"
            title={<>A portfolio in <em className="not-italic text-gradient-gold">wood</em>, light & form.</>}
            subtitle="Kitchens, restaurants, lounges and flagship installations across the UAE."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold hover:gap-5 transition-all"
          >
            View Full Portfolio <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {featured.map((p, i) => {
            const spans = [
              "col-span-12 md:col-span-7 aspect-[16/10]",
              "col-span-12 md:col-span-5 aspect-[4/5]",
              "col-span-6 md:col-span-4 aspect-square",
              "col-span-6 md:col-span-4 aspect-square",
              "col-span-12 md:col-span-4 aspect-square",
              "col-span-12 aspect-[16/7]",
            ];
            return (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                className={`relative group overflow-hidden rounded-sm border border-[var(--gold)]/10 ${spans[i]}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{p.category}</div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">{p.title}</h3>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}