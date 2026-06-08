"use client";

import { motion } from "motion/react";
import { process } from "@/data/services";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProcessSection() {
  return (
    <section className="relative py-28 md:py-40 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden">
      {/* Decorative ribbon curve */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-32 w-full text-[var(--color-teal-700)] opacity-25"
      >
        <motion.path
          d="M -40 120 C 220 30, 480 180, 720 100 S 1180 20, 1480 140"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 2.2, ease: EASE }}
        />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-end">
          <Reveal as="div" className="col-span-12 md:col-span-7">
            <p className="kicker text-[var(--color-teal-200)]">How we work</p>
            <h2 className="mt-5 font-display text-[2.4rem] sm:text-[3.2rem] md:text-[4.4rem] leading-[1.04] md:leading-[1] tracking-[-0.022em]">
              Four steps from
              <br />
              <span className="display-italic text-[var(--color-teal-200)]">
                brief to bow.
              </span>
            </h2>
          </Reveal>
          <Reveal as="div" className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[1.02rem] leading-[1.65] text-[color:color-mix(in_oklab,var(--color-paper)_80%,transparent)]">
              One point of contact through the entire process. No agency telephone,
              no untraceable hand-offs — just a tighter, calmer way to gift.
            </p>
          </Reveal>
        </div>

        <ol className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              className="relative border-t border-[color:color-mix(in_oklab,var(--color-paper)_25%,transparent)] pt-6"
            >
              <span className="absolute -top-3 left-0 inline-flex items-center gap-2 bg-[var(--color-ink)] pr-3 font-mono text-[0.72rem] tracking-[0.2em] text-[var(--color-teal-200)]">
                STEP {step.number}
              </span>
              <h3 className="font-display text-[1.8rem] md:text-[2rem] leading-tight tracking-[-0.015em] text-[var(--color-paper)]">
                {step.title}
              </h3>
              <p className="mt-4 text-[0.96rem] leading-[1.6] text-[color:color-mix(in_oklab,var(--color-paper)_75%,transparent)]">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
