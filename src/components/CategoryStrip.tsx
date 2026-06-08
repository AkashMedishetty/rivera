"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { categories } from "@/data/products";
import { unsplash } from "@/data/media";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CategoryStrip() {
  const featured = categories.slice(0, 6);
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal as="div" className="col-span-12 md:col-span-7">
            <p className="kicker text-[var(--color-teal-700)]">What&apos;s inside</p>
            <h2 className="mt-5 font-display text-[2.4rem] sm:text-[3.2rem] md:text-[4.4rem] leading-[1.04] md:leading-[1] tracking-[-0.022em]">
              Ten layers.
              <br />
              <span className="display-italic text-[var(--color-teal-700)]">One feeling.</span>
            </h2>
          </Reveal>
          <Reveal as="div" className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[1.04rem] leading-relaxed text-[var(--color-ink-soft)]">
              Every Rivera gift is built up in layers — the outer wrap, the ribbon, the message,
              the object inside. Browse the catalogue by layer or by occasion.
            </p>
            <Link
              href="/products"
              className="link-ribbon mt-6 inline-block text-[0.84rem] uppercase tracking-[0.2em] text-[var(--color-ink)]"
            >
              View all 10 categories →
            </Link>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {featured.map((c, i) => (
            <motion.li
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <Link href={`/products#${c.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-paper-2)]">
                  <Image
                    src={unsplash(c.photo, 900)}
                    alt={c.photoAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-[1500ms] ease-[var(--ease-unwrap)] group-hover:scale-[1.05]"
                  />
                  {/* Soft warm overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:color-mix(in_oklab,var(--color-ink)_30%,transparent)] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  {/* Layer tag */}
                  <span
                    className={[
                      "absolute left-0 top-0 inline-flex items-center gap-2 px-3.5 py-2 text-[0.64rem] tracking-[0.22em] uppercase",
                      c.accent === "teal"
                        ? "bg-[var(--color-teal-700)] text-[var(--color-paper)]"
                        : c.accent === "kraft"
                        ? "bg-[var(--color-kraft)] text-[var(--color-ink)]"
                        : "bg-[var(--color-ink)] text-[var(--color-paper)]",
                    ].join(" ")}
                  >
                    {c.layer}
                  </span>
                  {/* Discreet view-more indicator on hover */}
                  <span className="absolute bottom-4 right-4 flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-paper)] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    View
                    <span className="block h-px w-6 bg-current" />
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-[1.6rem] leading-tight tracking-[-0.015em] group-hover:text-[var(--color-teal-700)] transition-colors">
                    {c.title}
                  </h3>
                  <span className="font-mono text-[0.7rem] text-[var(--color-ink-faint)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 max-w-[36ch] text-[0.94rem] leading-snug text-[var(--color-ink-soft)]">
                  {c.intro}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
