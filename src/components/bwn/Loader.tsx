import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] bg-[var(--charcoal)] grid place-items-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative h-24 w-24 mx-auto mb-6"
            >
              <div className="absolute inset-0 border border-[var(--gold)]/40 rotate-45 spin-slow" style={{ animationDuration: "4s" }} />
              <div className="absolute inset-3 border border-[var(--gold)]/30 rotate-45 spin-slow" style={{ animationDuration: "6s", animationDirection: "reverse" }} />
              <div className="absolute inset-0 grid place-items-center font-display text-3xl text-gradient-gold">
                B
              </div>
            </motion.div>
            <div className="font-display tracking-[0.6em] text-foreground text-sm">B W N</div>
            <div className="mt-2 text-[10px] tracking-[0.4em] uppercase text-gold">Decoration Design</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}