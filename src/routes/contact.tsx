import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/bwn/Navbar";
import { Footer } from "@/components/bwn/Footer";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BWN Decoration Design — Dubai Studio" },
      { name: "description", content: "Visit our Al Quoz studio or get in touch to discuss your interior design, joinery or fit-out project." },
      { property: "og:title", content: "Contact BWN Decoration Design" },
      { property: "og:description", content: "Dubai studio. +971 50 626 7685 · info@bwnuae.com" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you — a designer will be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-gradient-dark min-h-screen hero-mesh noise relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Contact</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-foreground mb-6">
              Let's start a <em className="not-italic text-gradient-gold">conversation</em>.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mb-10">
              Tell us about your space. A senior designer will respond within one business day.
            </p>
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Studio</div>
                <div className="text-foreground">WH17, Al Mulla Warehouse,<br />Al Quoz Industrial 3, Dubai, UAE</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Phone</div>
                <a href="tel:+971506267685" className="text-foreground hover:text-gold">+971 50 626 7685</a>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Email</div>
                <a href="mailto:info@bwnuae.com" className="text-foreground hover:text-gold">info@bwnuae.com</a>
              </div>
            </div>
            <div className="mt-10 aspect-[16/10] rounded-sm overflow-hidden border border-[var(--gold)]/20">
              <iframe
                title="BWN Studio Map"
                src="https://www.google.com/maps?q=Al+Quoz+Industrial+3,+Dubai&output=embed"
                className="w-full h-full grayscale-[0.4] contrast-110"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-strong p-8 md:p-10 rounded-sm space-y-5"
          >
            {[
              { n: "name", l: "Your Name", t: "text" },
              { n: "email", l: "Email", t: "email" },
              { n: "phone", l: "Phone", t: "tel" },
              { n: "project", l: "Project Type", t: "text" },
            ].map((f) => (
              <div key={f.n}>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{f.l}</label>
                <input
                  required
                  name={f.n}
                  type={f.t}
                  className="w-full bg-transparent border-b border-[var(--gold)]/30 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Tell Us About Your Space</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-[var(--gold)]/30 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
              />
            </div>
            <button
              disabled={sending}
              className="mt-4 w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--gold)] to-[var(--bronze)] text-[var(--charcoal)] text-xs tracking-[0.3em] uppercase font-medium hover:shadow-gold transition-shadow disabled:opacity-60"
            >
              {sending ? "Sending…" : <>Send Inquiry <span>→</span></>}
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </>
  );
}