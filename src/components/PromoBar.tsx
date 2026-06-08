import { site } from "@/data/site";

export function PromoBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[55] flex h-7 items-center justify-center gap-2 overflow-hidden whitespace-nowrap bg-[var(--color-teal-800)] px-4 text-[0.62rem] sm:text-[0.7rem] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[var(--color-paper)]">
      <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-teal-200)]" />
      <span>{site.promo.text}</span>
      <span className="opacity-50 hidden sm:inline" aria-hidden="true">·</span>
      <span className="text-[var(--color-teal-200)] hidden sm:inline">{site.promo.cta}</span>
    </div>
  );
}
