"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StatsStrip() {
  return (
    <section
      aria-label="Key numbers"
      className="relative border-y border-[color:color-mix(in_oklab,var(--color-ink)_10%,transparent)] bg-[var(--color-paper-2)] py-14 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {site.stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
              className="border-l border-[color:color-mix(in_oklab,var(--color-ink)_18%,transparent)] pl-5 md:pl-7"
            >
              <p className="font-display text-[3rem] md:text-[4.6rem] leading-none tracking-[-0.025em] text-[var(--color-teal-700)]">
                {s.value}
              </p>
              <p className="mt-4 text-[0.82rem] leading-snug text-[var(--color-ink-soft)] max-w-[22ch]">
                {s.label}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
