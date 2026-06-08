"use client";

import Image from "next/image";
import Link from "next/link";
import { unsplash } from "@/data/media";
import { Reveal } from "./Reveal";

export function StorySplit() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 md:px-10">
        <Reveal as="div" className="col-span-12 md:col-span-5 md:sticky md:top-32 md:self-start">
          <p className="kicker text-[var(--color-teal-700)]">Our roots</p>
          <h2 className="mt-5 font-display text-[2.2rem] md:text-[3.2rem] leading-[1.04] md:leading-[1] tracking-[-0.02em]">
            We started with the{" "}
            <span className="display-italic text-[var(--color-teal-700)]">outermost layer.</span>
          </h2>
          <p className="mt-6 max-w-md text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
            Rivera began in 2023 as a manufacturer of biodegradable tissues and customisable
            packaging — supplying hotels, restaurants, convention centres and corporate kitchens
            with materials that don&apos;t cost the planet.
          </p>
          <p className="mt-4 max-w-md text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
            Working that closely with brands, we kept hearing the same ask: the wrap is great —
            what goes inside?
          </p>
          <Link
            href="/about"
            className="link-ribbon mt-8 inline-block text-[0.84rem] uppercase tracking-[0.2em] text-[var(--color-ink)]"
          >
            Read the full story →
          </Link>
        </Reveal>

        <div className="col-span-12 md:col-span-6 md:col-start-7 mt-14 md:mt-0 grid grid-cols-2 gap-4 md:gap-6">
          <Reveal as="div" className="col-span-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src={unsplash("ecoBamboo", 1400)}
                alt="Bamboo and natural materials — eco-friendly origin"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal as="div" delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={unsplash("heroHamper", 800)}
                alt="A composition of ribbon-tied gift boxes"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal as="div" delay={0.18}>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={unsplash("heroPaper", 800)}
                alt="A wrapped gift detail"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
