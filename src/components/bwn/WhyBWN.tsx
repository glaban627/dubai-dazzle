import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";

const features = [
  { t: "Innovative Joinery & Design", d: "Traditional craft meets modern tooling for designs that are both contemporary and timeless." },
  { t: "Sustainable Craftsmanship", d: "Eco-friendly materials and processes — beauty that respects the planet." },
  { t: "Precision & Quality Excellence", d: "Meticulous attention to detail. Flawless, durable joinery at every scale." },
  { t: "Collaborative Partnerships", d: "We co-create with you, from first concept to final walkthrough." },
  { t: "Customised Solutions", d: "Tailor-made for cozy apartments and sprawling villas alike." },
  { t: "Timeless Modern Flair", d: "Elegance that stays stylish and functional for decades, not seasons." },
];

const counters = [
  { v: 200, suffix: "+", l: "Projects Delivered" },
  { v: 12, suffix: "yrs", l: "Of Mastery" },
  { v: 45, suffix: "+", l: "Master Craftsmen" },
  { v: 100, suffix: "%", l: "Bespoke" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-gradient-gold tabular-nums">
      {n}
      <span className="text-3xl">{suffix}</span>
    </span>
  );
}

export function WhyBWN() {
  return (
    <section className="relative py-32 bg-[var(--charcoal)] overflow-hidden">
      <div className="absolute inset-0 hero-mesh" />
      <div className="relative container mx-auto px-6">
        <SectionTitle
          eyebrow="Why BWN"
          title={<>Six reasons to <em className="not-italic text-gradient-gold">build</em> with us.</>}
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--gold)]/10 border border-[var(--gold)]/10">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-10 bg-[var(--charcoal)] hover:bg-[var(--background)] transition-colors duration-500"
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gold transition-colors">
                {f.t}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((c) => (
            <div key={c.l}>
              <Counter to={c.v} suffix={c.suffix} />
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-3">
                {c.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}