import { motion } from "framer-motion";
import { IMG } from "@/lib/bwn-assets";
import { SectionTitle } from "./SectionTitle";

const timeline = [
  { year: "Vision", title: "Redefining Interior Design", text: "Born from a passion to make bespoke design personal, accessible and uncompromising in craft." },
  { year: "Mission", title: "Spaces That Tell Stories", text: "We translate your vision into interiors where form and function move as one." },
  { year: "Craft", title: "Joinery as Art", text: "Traditional techniques meet modern tooling — every joint, edge and finish is deliberate." },
  { year: "Future", title: "Sustainable Innovation", text: "Eco-conscious materials and timeless detailing ensure interiors that outlive trends." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionTitle
              eyebrow="About BWN"
              title={<>Interiors that <em className="not-italic text-gradient-gold">inspire</em>, captivate and harmonise.</>}
              subtitle="At BWN Decoration Design L.L.C., we believe living and working spaces should reflect your unique personality. With a commitment to creativity and excellence, we are your trusted partner in transforming interiors."
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[var(--gold)]/20 shadow-deep"
            >
              <img src={IMG.sofa} alt="BWN custom wooden sofa with woven detailing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl text-foreground">"We don't just build spaces — we create experiences."</p>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mt-3">Akram Khan · Founder</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-1.5 h-10 w-10 grid place-items-center">
                    <div className="absolute inset-0 border border-[var(--gold)]/40 rotate-45" />
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">{t.year}</div>
                  <h3 className="font-display text-3xl text-foreground mb-3">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}