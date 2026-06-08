import { site } from "@/data/site";

export function SectorMarquee() {
  const items = [...site.sectors, ...site.sectors];
  return (
    <section
      aria-label="Sectors served"
      className="relative border-y border-[color:color-mix(in_oklab,var(--color-ink)_10%,transparent)] bg-[var(--color-paper-2)] py-7 overflow-hidden"
    >
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="inline-flex items-center gap-12 font-display text-[1.6rem] md:text-[2.4rem] italic display-italic tracking-[-0.01em] text-[var(--color-ink)]"
          >
            {s}
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-teal-500)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
