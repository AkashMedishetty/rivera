"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { unsplash } from "@/data/media";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Featured Hamper — an editorial "of the season" moment.
 * Single hero hamper, large photography, light side notes.
 */
export function FeaturedHamper() {
  return (
    <section className="relative bg-[var(--color-paper-2)] py-28 md:py-40 overflow-hidden">
      {/* Soft kraft accent strip */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/3 bg-[var(--color-kraft-soft)] hidden md:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-center">
          <Reveal as="div" className="col-span-12 md:col-span-7">
            <div className="relative aspect-[5/4] md:aspect-[6/5] overflow-hidden rounded-sm shadow-[0_40px_80px_-30px_rgba(8,66,63,0.3)]">
              <Image
                src={unsplash("hamperChocolate", 1600)}
                alt="A featured curated chocolate hamper on a wooden table"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--color-teal-500)] origin-left"
              />
            </div>
          </Reveal>

          <Reveal as="div" delay={0.15} className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="kicker text-[var(--color-teal-700)]">Featured · Autumn Collection</p>
            <h2 className="mt-5 font-display text-[2.4rem] md:text-[3.4rem] leading-[1] tracking-[-0.02em]">
              The Maker&apos;s
              <br />
              <span className="display-italic text-[var(--color-teal-700)]">Hamper.</span>
            </h2>
            <p className="mt-6 text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
              Single-origin chocolate, hand-poured candle, embossed leather notebook and a tied
              kraft card. Built for end-of-year client gifts and milestone celebrations.
            </p>

            <ul className="mt-8 space-y-3 text-[0.94rem]">
              {["Single-origin chocolate · 200g", "Hand-poured soy candle", "Embossed leather notebook", "Hand-tied ribbon & card"].map((line) => (
                <li key={line} className="flex items-baseline gap-3 border-b border-[color:color-mix(in_oklab,var(--color-ink)_10%,transparent)] pb-3">
                  <span className="text-[var(--color-teal-600)]">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact?category=Festive%20%26%20Hampers"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)]"
            >
              Enquire about this hamper
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
