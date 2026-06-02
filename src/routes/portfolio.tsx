import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/bwn/Navbar";
import { Footer } from "@/components/bwn/Footer";
import { ContactCTA } from "@/components/bwn/ContactCTA";
import { PORTFOLIO } from "@/lib/bwn-assets";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BWN Decoration Design Dubai" },
      { name: "description", content: "Selected works by BWN Decoration Design: kitchens, restaurants, living rooms, flooring, exhibition stands and bespoke reception counters across the UAE." },
      { property: "og:title", content: "BWN Portfolio — Luxury Interiors Dubai" },
      { property: "og:description", content: "A curated gallery of luxury fit-outs, joinery and bespoke furniture by BWN." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-gradient-dark min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Portfolio</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1] text-foreground">
              A gallery of <em className="not-italic text-gradient-gold">crafted</em> spaces.
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {PORTFOLIO.map((p, i) => (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
                className={`group relative overflow-hidden rounded-sm border border-[var(--gold)]/10 ${
                  i % 5 === 0
                    ? "col-span-12 md:col-span-8 aspect-[16/10]"
                    : i % 5 === 1
                    ? "col-span-12 md:col-span-4 aspect-[4/5]"
                    : "col-span-6 md:col-span-4 aspect-square"
                }`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{p.category}</div>
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}