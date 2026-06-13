import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/bwn-assets";

const SLIDES = [
  { img: IMG.living1, label: "Villa Living", place: "Dubai Marina" },
  { img: IMG.kitchen1, label: "Walnut Kitchen", place: "Jumeirah" },
  { img: IMG.exhibition, label: "Prysmian Stand", place: "ADIPEC" },
  { img: IMG.officeTable, label: "Executive Suite", place: "Business Bay" },
  { img: IMG.lazyboy, label: "Lazy Boy Retail", place: "Mall of Emirates" },
];

const CATEGORIES = [
  "Interior Design",
  "Joinery",
  "Fit-Out",
  "Furniture",
  "Flooring",
  "Exhibition",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, []);
  const active = SLIDES[idx];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-dark hero-mesh noise pt-28 pb-16">
      {/* Ambient ornaments */}
      <div className="pointer-events-none absolute -left-40 -bottom-40 w-[640px] h-[640px] rounded-full border border-[var(--gold)]/10 spin-slow" />
      <div className="pointer-events-none absolute right-[-200px] top-[-200px] w-[700px] h-[700px] rounded-full border border-[var(--gold)]/5 spin-slow" style={{ animationDuration: "80s" }} />

      <div className="relative container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center min-h-[78vh]">
        {/* LEFT — type stack */}
        <div className="lg:col-span-6 xl:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="block h-px w-12 bg-gold" />
            <span className="text-[11px] tracking-[0.45em] uppercase text-gold">
              Est. Dubai · UAE
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.8rem,8vw,7.2rem)] leading-[0.92] text-foreground">
            {["Your", "Imagination", "Partner."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, rotateX: -25 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                className="block origin-bottom"
                style={{ perspective: "800px" }}
              >
                {word === "Imagination" ? (
                  <em className="not-italic shimmer-text">{word}</em>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-8 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            BWN Decoration Design crafts luxury interiors, bespoke joinery and
            turnkey fit-outs for villas, flagship retail and corporate suites
            across the Emirates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/portfolio"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] text-[var(--charcoal)] text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 bg-[var(--gold-glow)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--gold)]/50 text-foreground text-[11px] tracking-[0.3em] uppercase hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition-all"
            >
              <span className="relative h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[var(--gold)] pulse-gold" />
              </span>
              Book a Consultation
            </a>
          </motion.div>

          {/* Category rail */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.35em] uppercase text-muted-foreground"
          >
            {CATEGORIES.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="block h-1 w-1 rounded-full bg-gold" />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT — stacked image carousel */}
        <div className="lg:col-span-6 xl:col-span-6 relative z-10">
          <div className="relative mx-auto w-full max-w-[560px] aspect-[4/5]" style={{ perspective: "1400px" }}>
            {/* Back layers (parallax stack) */}
            <div className="absolute -right-6 top-6 w-[88%] h-[88%] border border-[var(--gold)]/15 rounded-sm" />
            <div className="absolute -right-12 top-12 w-[80%] h-[80%] border border-[var(--gold)]/10 rounded-sm" />

            <div className="absolute inset-0 rounded-sm overflow-hidden shadow-deep border border-[var(--gold)]/25 bg-[var(--charcoal)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={active.img}
                  alt={active.label}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-80" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-1">
                    Featured Project
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="font-display text-2xl md:text-3xl text-foreground">
                        {active.label}
                      </div>
                      <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">
                        {active.place}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="font-display text-3xl text-gold/80 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                  <span className="text-muted-foreground/50 text-base"> / {String(SLIDES.length).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[var(--gold)]/10">
                <motion.div
                  key={idx}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.1, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)]"
                />
              </div>
            </div>

            {/* Thumbnail rail */}
            <div className="absolute -bottom-10 left-0 right-0 flex gap-2 justify-center">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-10 bg-gold" : "w-4 bg-[var(--gold)]/25 hover:bg-[var(--gold)]/50"
                  }`}
                  aria-label={`Show ${s.label}`}
                />
              ))}
            </div>
          </div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="hidden md:flex absolute -left-6 lg:left-[-3rem] xl:left-[-5rem] bottom-2 glass-strong px-6 py-5 gap-6 items-center"
          >
            {[
              { k: "12+", l: "Years" },
              { k: "200+", l: "Projects" },
              { k: "30+", l: "Brands" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl text-gradient-gold leading-none">{s.k}</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-1.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <span>Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </div>
    </section>
  );
}