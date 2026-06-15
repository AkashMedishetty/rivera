"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { unsplash } from "@/data/media";

const EASE = [0.16, 1, 0.3, 1] as const;

export function UnwrapHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 pb-24 md:pb-32">
      {/* Wrap layers split open on load — desktop only; mobile gets a clean paper field */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <motion.div
          aria-hidden="true"
          initial={{ x: 0 }}
          animate={reduced ? undefined : { x: "-110%" }}
          transition={{ duration: 1.8, delay: 0.4, ease: EASE }}
          className="absolute left-0 top-0 h-full w-1/2 bg-[var(--color-kraft-soft)]"
          style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
        />
        <motion.div
          aria-hidden="true"
          initial={{ x: 0 }}
          animate={reduced ? undefined : { x: "110%" }}
          transition={{ duration: 1.8, delay: 0.4, ease: EASE }}
          className="absolute right-0 top-0 h-full w-1/2 bg-[var(--color-teal-800)]"
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 md:px-10">
        {/* Kicker */}
        <div className="col-span-12 mb-12 md:mb-16 flex items-center gap-4">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="block h-px w-20 origin-left bg-[var(--color-teal-600)]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="kicker text-[var(--color-ink-soft)]"
          >
            Rivera Gifting · The Layers of a Gift
          </motion.p>
        </div>

        {/* Headline — echoes the brand tagline, with one clean italic accent */}
        <h1 className="col-span-12 md:col-span-9 font-display text-[3rem] sm:text-[4.4rem] md:text-[6.4rem] lg:text-[7.8rem] leading-[1.08] md:leading-[1.02] tracking-[-0.026em] text-[var(--color-ink)]">
          <Line delay={0.15}>A gift,</Line>
          <Line delay={0.3} className="md:pl-[12%]">
            for every
          </Line>
          <Line delay={0.45}>moment that</Line>
          <Line delay={0.6} className="md:pl-[22%]">
            <span className="display-italic text-[var(--color-teal-700)]">matters.</span>
          </Line>
        </h1>

        {/* Stacked image card — primary + accent — gives the hero depth */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 1.15, ease: EASE }}
          className="col-span-12 md:col-span-3 md:col-start-10 mt-10 md:mt-0 md:row-start-2 md:self-end relative"
        >
          {/* Accent block behind */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full bg-[var(--color-teal-700)] rounded-sm"
          />
          {/* Primary photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(8,66,63,0.4)]">
            <Image
              src={unsplash("heroGift", 1000)}
              alt="A delicate gift composition with a brown satin ribbon"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[color:color-mix(in_oklab,var(--color-ink)_8%,transparent)]" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="kicker text-[var(--color-ink-soft)]">Hand-tied</p>
            <p className="text-[0.74rem] text-[var(--color-ink-faint)]">
              wrapped · ribboned · ready
            </p>
          </div>
        </motion.div>

        {/* Sub copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.35, ease: EASE }}
          className="col-span-12 md:col-span-6 mt-16 md:mt-24"
        >
          <p className="max-w-xl text-[1.05rem] md:text-[1.2rem] leading-[1.55] text-[var(--color-ink-soft)]">
            We design, source and hand-deliver corporate hampers, branded merchandise and
            eco-conscious essentials — for real estate, hotels, convention centres and the kind of
            brands that notice the details.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-7 py-4 text-[0.76rem] tracking-[0.22em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)]"
            >
              Browse the catalogue
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="transition-transform duration-500 group-hover:translate-x-[3px]"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="link-ribbon text-[0.92rem] text-[var(--color-ink-soft)]"
            >
              or request a custom hamper →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom ribbon curve */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-20 md:h-28 w-full text-[var(--color-teal-600)] opacity-30"
      >
        <motion.path
          d="M -40 60 C 220 -10, 480 130, 720 70 S 1180 -20, 1480 80"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 1.45, ease: EASE }}
        />
      </svg>
    </section>
  );
}

function Line({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    // pt + pb give ascenders (f, h, l) and descenders (g, y, p) room to render
    // inside the overflow-hidden clip used for the slide-up reveal.
    <span className={`block overflow-hidden pt-[0.16em] pb-[0.16em] ${className}`}>
      <motion.span
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.15, delay, ease: EASE }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
