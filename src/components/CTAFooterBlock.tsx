"use client";

import Link from "next/link";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CTAFooterBlock() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-teal-800)] text-[var(--color-paper)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <motion.path
          d="M -40 240 C 220 80, 520 380, 760 200 S 1180 60, 1480 220"
          fill="none"
          stroke="var(--color-teal-200)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 2.4, ease: EASE }}
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 py-24 md:px-10 md:py-36">
        <div className="col-span-12 md:col-span-8">
          <p className="kicker text-[var(--color-teal-200)]">Start an enquiry</p>
          <h2 className="mt-5 font-display text-[2.4rem] sm:text-[3.4rem] md:text-[5rem] leading-[1.04] md:leading-[1] tracking-[-0.022em]">
            Tell us the moment.
            <br />
            We&apos;ll{" "}
            <span className="display-italic text-[var(--color-teal-200)]">design the gift.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:self-end mt-10 md:mt-0">
          <p className="text-[1.02rem] leading-relaxed text-[color:color-mix(in_oklab,var(--color-paper)_82%,transparent)]">
            Onboarding, a milestone, a property handover, a festival — share the occasion and
            we&apos;ll come back with a layered proposal within 48 hours.
          </p>
          <Link
            href="/contact"
            className="mt-7 group inline-flex items-center gap-3 rounded-full bg-[var(--color-paper)] px-7 py-4 text-[0.76rem] tracking-[0.22em] uppercase text-[var(--color-ink)] transition-colors hover:bg-[var(--color-teal-200)]"
          >
            Request a proposal
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
        </div>
      </div>
    </section>
  );
}
