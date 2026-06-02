import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const steps = [
  { n: "01", t: "Discover", d: "We listen, walk the space, and understand how you live or work." },
  { n: "02", t: "Design", d: "Mood boards, 3D visualisations and material samples translate vision into form." },
  { n: "03", t: "Manufacture", d: "Our in-house workshop crafts every piece with precision tooling and care." },
  { n: "04", t: "Install", d: "Meticulous on-site assembly with white-glove protection of your space." },
  { n: "05", t: "Deliver", d: "Final walkthrough, snag-free handover and aftercare that lasts." },
];

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Our Process"
          title={<>From <em className="not-italic text-gradient-gold">concept</em> to keys.</>}
          align="center"
        />

        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-5 gap-10 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto h-24 w-24 mb-6">
                  <div className="absolute inset-0 border border-[var(--gold)]/30 rotate-45 group-hover:rotate-90 transition-transform" />
                  <div className="absolute inset-2 border border-[var(--gold)]/20 rotate-45" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-2xl text-gradient-gold">{s.n}</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                  {s.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}