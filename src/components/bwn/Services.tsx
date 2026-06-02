import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { IMG } from "@/lib/bwn-assets";

const services = [
  { n: "01", t: "Interior Design", d: "Concept-to-completion design tailored to your personality and lifestyle.", img: IMG.living2 },
  { n: "02", t: "Joinery Work", d: "Custom carpentry and intricate wooden installations crafted in-house.", img: IMG.workshop },
  { n: "03", t: "Furniture", d: "Bespoke pieces designed and built for your exact space and use.", img: IMG.sofa },
  { n: "04", t: "Fit-Out", d: "Turnkey fit-outs for villas, restaurants, retail and corporate spaces.", img: IMG.restaurant },
  { n: "05", t: "Flooring", d: "Premium hardwood, engineered and parquet flooring with flawless installation.", img: IMG.flooring },
  { n: "06", t: "Exhibition Stands", d: "Show-stopping stands and showrooms that command the floor.", img: IMG.exhibition },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-[var(--charcoal)] overflow-hidden">
      <div className="absolute inset-0 hero-mesh noise" />
      <div className="relative container mx-auto px-6">
        <SectionTitle
          eyebrow="What We Do"
          title={<>Six disciplines, <em className="not-italic text-gradient-gold">one</em> standard.</>}
          subtitle="From the first sketch to the final polish, every service is delivered by craftspeople who treat your space as their own."
          align="center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden glass cursor-pointer"
            >
              <img
                src={s.img}
                alt={s.t}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-[var(--charcoal)]/60 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-gradient-gold">{s.n}</span>
                  <span className="h-px w-12 bg-[var(--gold)]/40 mt-6 group-hover:w-20 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-foreground mb-3 group-hover:text-gold transition-colors">
                    {s.t}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {s.d}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    Explore <span>→</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-[var(--gold)]/40 transition-colors duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}