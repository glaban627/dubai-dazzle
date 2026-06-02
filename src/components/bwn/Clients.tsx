const clients = [
  "Huawei", "Lazy Boy", "King Koil", "Joe & The Juice",
  "Yas Island", "Arifco Group", "Sunrise Transcon", "OST Constructional",
  "Orbis Interiors", "OP3",
];

export function Clients() {
  const list = [...clients, ...clients];
  return (
    <section className="relative py-24 border-y border-[var(--gold)]/15 overflow-hidden bg-[var(--background)]">
      <div className="container mx-auto px-6 mb-10">
        <div className="flex items-center gap-3 justify-center">
          <span className="block h-px w-10 bg-gold" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">We Worked With</span>
          <span className="block h-px w-10 bg-gold" />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {list.map((c, i) => (
            <div
              key={i}
              className="font-display text-4xl md:text-5xl text-muted-foreground/40 hover:text-gold transition-colors whitespace-nowrap"
            >
              {c}
              <span className="inline-block mx-8 text-gold/30">◆</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--background)] to-transparent" />
      </div>
    </section>
  );
}