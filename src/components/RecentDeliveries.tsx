"use client";

import { motion } from "motion/react";
import { recentDeliveries } from "@/data/services";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function RecentDeliveries() {
  return (
    <section className="relative py-28 md:py-40 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-end">
          <Reveal as="div" className="col-span-12 md:col-span-7">
            <p className="kicker text-[var(--color-teal-700)]">Recently delivered</p>
            <h2 className="mt-5 font-display text-[2.4rem] sm:text-[3.2rem] md:text-[4.2rem] leading-[1.04] md:leading-[1] tracking-[-0.022em]">
              The work,
              <br />
              <span className="display-italic text-[var(--color-teal-700)]">
                anonymised.
              </span>
            </h2>
          </Reveal>
          <Reveal as="div" className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
              Discretion is part of the brief. Below are recent jobs by sector and
              scale — names withheld out of habit, not modesty.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-0 md:grid-cols-2">
          {recentDeliveries.map((d, i) => (
            <motion.li
              key={d.client}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: (i % 2) * 0.08, ease: EASE }}
              className="group border-t border-[color:color-mix(in_oklab,var(--color-ink)_14%,transparent)] py-8 md:py-10 last:border-b md:[&:nth-child(2)]:border-t md:[&:nth-last-child(-n+2)]:border-b"
            >
              <h3 className="font-display text-[1.55rem] md:text-[1.85rem] leading-tight tracking-[-0.015em] group-hover:text-[var(--color-teal-700)] transition-colors">
                {d.client}
              </h3>
              <p className="mt-1 text-[0.85rem] tracking-[0.06em] uppercase text-[var(--color-ink-faint)]">
                {d.scope}
              </p>
              <p className="mt-4 text-[0.98rem] leading-[1.6] text-[var(--color-ink-soft)]">
                {d.outcome}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
