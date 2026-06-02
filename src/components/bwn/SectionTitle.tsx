import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`max-w-2xl mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
        <span className="block h-px w-10 bg-gold" />
        <span className="text-[11px] tracking-[0.4em] uppercase text-gold">{eyebrow}</span>
      </div>
      <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}