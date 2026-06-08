import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Rivera Gifting — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      {/* Refined ribbon mark — a single tied loop, more elegant */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <g className="text-[var(--color-teal-700)]">
          <path
            d="M5 18 C 10 8, 18 8, 18 16 C 18 24, 26 24, 31 14"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
            className="transition-transform duration-[800ms] ease-[var(--ease-unwrap)] group-hover:[stroke-dasharray:0] origin-center"
          />
          <path
            d="M18 16 L 14 26"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M18 16 L 22 26"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.55"
          />
        </g>
        <circle cx="18" cy="16" r="1.2" className="fill-[var(--color-ink)]" />
      </svg>
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-[1.3rem] leading-none tracking-[-0.01em] text-[var(--color-ink)]">
          Rivera
        </span>
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.32em] text-[var(--color-ink-faint)] pb-[2px]">
          Gifting
        </span>
      </span>
    </Link>
  );
}
