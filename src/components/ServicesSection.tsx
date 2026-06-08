"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/data/services";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ServicesSection() {
  return (
    <section className="relative py-28 md:py-40 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 items-end gap-y-8 gap-x-6">
          <Reveal as="div" className="col-span-12 md:col-span-7">
            <p className="kicker text-[var(--color-teal-700)]">What we do</p>
            <h2 className="mt-5 font-display text-[2.4rem] sm:text-[3.2rem] md:text-[4.4rem] leading-[1.04] md:leading-[1] tracking-[-0.022em]">
              Not just gifts.
              <br />
              <span className="display-italic text-[var(--color-teal-700)]">
                A gifting partner.
              </span>
            </h2>
          </Reveal>
          <Reveal as="div" className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[1.04rem] leading-[1.65] text-[var(--color-ink-soft)]">
              Six services that wrap around our catalogue. From the first brief to the
              last hand-delivered hamper, you talk to one team.
            </p>
            <Link
              href="/services"
              className="link-ribbon mt-6 inline-block text-[0.84rem] uppercase tracking-[0.2em] text-[var(--color-ink)]"
            >
              See all services →
            </Link>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: EASE }}
              className="group relative border border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] bg-[var(--color-paper)] p-8 md:p-10 transition-colors hover:bg-[var(--color-paper-2)]"
            >
              {/* Accent corner */}
              <span
                aria-hidden="true"
                className={[
                  "absolute right-0 top-0 h-12 w-12 transition-all duration-500 group-hover:h-14 group-hover:w-14",
                  s.accent === "teal"
                    ? "bg-[var(--color-teal-700)]"
                    : s.accent === "kraft"
                    ? "bg-[var(--color-kraft)]"
                    : "bg-[var(--color-ink)]",
                ].join(" ")}
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />
              <p className="font-mono text-[0.74rem] tracking-[0.18em] text-[var(--color-ink-faint)]">
                {s.number} · Service
              </p>
              <h3 className="mt-4 font-display text-[1.8rem] md:text-[2rem] leading-tight tracking-[-0.018em] group-hover:text-[var(--color-teal-700)] transition-colors">
                {s.title}
              </h3>
              <p className="mt-4 text-[0.96rem] leading-[1.6] text-[var(--color-ink-soft)]">
                {s.intro}
              </p>
              <ul className="mt-6 space-y-1.5 text-[0.88rem] text-[var(--color-ink-soft)]">
                {s.bullets.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-baseline gap-2">
                    <span className="text-[var(--color-teal-600)]">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
