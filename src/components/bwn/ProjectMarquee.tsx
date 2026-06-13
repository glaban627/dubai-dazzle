import { PORTFOLIO } from "@/lib/bwn-assets";

export function ProjectMarquee() {
  const list = [...PORTFOLIO, ...PORTFOLIO];
  return (
    <section className="relative py-10 border-y border-[var(--gold)]/15 bg-[var(--charcoal)] overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-5 animate-marquee">
          {list.map((p, i) => (
            <figure
              key={i}
              className="relative w-[260px] md:w-[320px] aspect-[4/3] overflow-hidden rounded-sm border border-[var(--gold)]/15 shrink-0 group"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-80" />
              <figcaption className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{p.category}</span>
                <span className="font-display text-lg text-foreground truncate ml-3">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--charcoal)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--charcoal)] to-transparent" />
      </div>
    </section>
  );
}