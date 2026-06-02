import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { IMG } from "@/lib/bwn-assets";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const tx1 = useTransform(sx, (v) => v * -30);
  const ty1 = useTransform(sy, (v) => v * -30);
  const tx2 = useTransform(sx, (v) => v * 20);
  const ty2 = useTransform(sy, (v) => v * 20);
  const tx3 = useTransform(sx, (v) => v * -50);
  const ty3 = useTransform(sy, (v) => v * -50);
  const rotX = useTransform(sy, (v) => v * -4);
  const rotY = useTransform(sx, (v) => v * 4);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-dark hero-mesh noise pt-32 pb-20">
      {/* Parallax 3D stage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ perspective: "1500px" }}
      >
        <motion.div
          style={{ x: tx3, y: ty3, rotateX: rotX, rotateY: rotY }}
          className="absolute right-[-8%] top-[15%] w-[55vw] max-w-[820px] aspect-[4/3] rounded-sm overflow-hidden shadow-deep border border-[var(--gold)]/20"
        >
          <img
            src={IMG.living1}
            alt="Luxury villa interior with bespoke joinery"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--charcoal)]/70" />
        </motion.div>
        <motion.div
          style={{ x: tx1, y: ty1 }}
          className="absolute left-[5%] bottom-[18%] w-[28vw] max-w-[360px] aspect-[3/4] rounded-sm overflow-hidden shadow-deep border border-[var(--gold)]/30 hidden lg:block"
        >
          <img src={IMG.sofa} alt="Wooden lounge with light cushions" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          style={{ x: tx2, y: ty2 }}
          className="absolute right-[12%] bottom-[8%] w-[22vw] max-w-[260px] aspect-square rounded-sm overflow-hidden shadow-gold border border-[var(--gold)]/40 hidden lg:block float-slow"
        >
          <img src={IMG.kitchen2} alt="Modern grey kitchen with wood accents" className="w-full h-full object-cover" />
        </motion.div>
        {/* Spinning ornamental ring */}
        <div className="absolute -left-40 -bottom-40 w-[600px] h-[600px] rounded-full border border-[var(--gold)]/10 spin-slow" />
        <div className="absolute left-1/2 top-1/3 w-[800px] h-[800px] -translate-x-1/2 rounded-full border border-[var(--gold)]/5 spin-slow" style={{ animationDuration: "60s" }} />
      </div>

      {/* Wood dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-[var(--gold)]/40 float-slow"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-7 relative z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-gold">
              BWN Decoration Design · Dubai
            </span>
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-foreground mb-6">
            Your <em className="not-italic shimmer-text">Imagination</em>
            <br />
            Partner.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground mb-10 leading-relaxed">
            Luxury interior design, joinery & fit-out solutions crafted for villas,
            restaurants and flagship spaces across the UAE.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] text-[var(--charcoal)] text-xs tracking-[0.25em] uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="relative z-10">→</span>
              <span className="absolute inset-0 bg-[var(--gold-glow)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--gold)]/50 text-foreground text-xs tracking-[0.25em] uppercase hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition-all"
            >
              <span className="relative h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[var(--gold)] pulse-gold" />
              </span>
              Request Consultation
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              { k: "12+", l: "Years Crafting" },
              { k: "200+", l: "Projects Delivered" },
              { k: "100%", l: "Bespoke" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-gold">{s.k}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <span>Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </div>
    </section>
  );
}