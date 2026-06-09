import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const textColor = variant === "light" ? "var(--color-paper)" : "var(--color-ink)";
  const subColor =
    variant === "light"
      ? "color-mix(in oklab, var(--color-paper) 70%, transparent)"
      : "var(--color-ink-faint)";

  return (
    <Link
      href="/"
      aria-label="Rivera Gifting — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-9 w-9 shrink-0 transition-transform duration-700 ease-[var(--ease-unwrap)] group-hover:-rotate-[6deg]"
      />
      <span className="flex items-baseline gap-1.5">
        <span
          className="font-display text-[1.3rem] leading-none tracking-[-0.01em]"
          style={{ color: textColor }}
        >
          Rivera
        </span>
        <span
          className="font-sans text-[0.65rem] uppercase tracking-[0.32em] pb-[2px]"
          style={{ color: subColor }}
        >
          Gifting
        </span>
      </span>
    </Link>
  );
}
