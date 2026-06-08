import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, UnwrapText } from "@/components/Reveal";
import { unsplash } from "@/data/media";
import { sectorsServed } from "@/data/products";
import { CTAFooterBlock } from "@/components/CTAFooterBlock";

export const metadata: Metadata = {
  title: "About — the layered story",
  description:
    "From sustainable manufacturing in 2023 to corporate gifting today — the story behind Rivera Gifting, our values, and the sectors we serve.",
};

const chapters = [
  {
    no: "Layer 01",
    title: "We began with the wrap.",
    body: "Rivera was founded in 2023 to solve a quiet problem: the single-use products surrounding every premium experience were ugly, wasteful, or both. We launched as a manufacturer of biodegradable tissues, reusable napery and customisable packaging — sustainable basics, made beautifully.",
    photoKey: "ecoBamboo" as const,
    alt: "Bamboo, natural materials, and a minimal sustainable composition",
  },
  {
    no: "Layer 02",
    title: "We worked with brands who noticed.",
    body: "Restaurants, play arenas, star hotels, convention centres, corporate offices — businesses with high standards and high volumes. We became part of how they showed up to their guests, every day.",
    photoKey: "heroHamper" as const,
    alt: "A composition of ribbon-tied gift boxes",
  },
  {
    no: "Layer 03",
    title: "Then a question kept repeating.",
    body: "Our clients didn't just want better wrap — they wanted to fill it. They were searching for memorable employee gifts, premium client hampers, certification mementos for trainee cohorts. The packaging was solved; the gift inside wasn't.",
    photoKey: "officeStationery" as const,
    alt: "A desk flat lay with notebook, pen and stationery",
  },
  {
    no: "Layer 04",
    title: "So we built Rivera Gifting.",
    body: "Rivera Gifting was born to elevate the art of corporate and bulk gifting — with the same standards of customisation, sustainability and craft. From boardroom hampers to onboarding kits to event swag, we now deliver across real estate, corporate, hospitality and training.",
    photoKey: "heroGift" as const,
    alt: "A delicate gift with a brown satin ribbon",
  },
];

const principles = [
  {
    title: "Quality, uncompromised.",
    body: "Every object we ship is one we'd be happy to receive ourselves. No filler items, no awkward swag.",
  },
  {
    title: "Customisation by default.",
    body: "Branded logos, embossed packaging, hand-tied ribbons — personalisation is the starting point, not an upsell.",
  },
  {
    title: "Sustainability, where it counts.",
    body: "Our manufacturing roots mean we know which eco-claims are real and which are theatre. We choose well.",
  },
  {
    title: "Seamless at scale.",
    body: "From ten kits to ten thousand — same care, same finish, delivered on time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 md:px-10">
          <div className="col-span-12 md:col-span-8">
            <p className="kicker text-[var(--color-teal-700)]">About · Rivera Gifting</p>
            <h1 className="mt-6 font-display text-[2.6rem] sm:text-[4rem] md:text-[6rem] leading-[1.02] md:leading-[0.98] tracking-[-0.025em]">
              <span className="block overflow-hidden">
                <UnwrapText text="The first layer of" />
              </span>
              <span className="block overflow-hidden">
                <UnwrapText text="a great gift is the" delay={0.05} />
              </span>
              <span className="block overflow-hidden">
                <UnwrapText
                  text="thought."
                  delay={0.1}
                  className="display-italic text-[var(--color-teal-700)]"
                />
              </span>
            </h1>
          </div>
          <Reveal as="div" delay={0.5} className="col-span-12 md:col-span-4 md:self-end mt-10 md:mt-0">
            <p className="text-[1.05rem] leading-[1.65] text-[var(--color-ink-soft)]">
              We&apos;re a corporate gifting studio that grew out of a sustainable packaging
              manufacturer. Today we design, source and deliver premium hampers and branded
              merchandise for the brands that notice the details.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Layered story chapters */}
      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 h-full w-px bg-[color:color-mix(in_oklab,var(--color-teal-700)_45%,transparent)] md:left-[8.33%]"
            />

            {chapters.map((c, i) => (
              <li
                key={c.no}
                className="relative grid grid-cols-12 gap-x-6 py-14 md:py-20 first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-16 h-2.5 w-2.5 rotate-45 bg-[var(--color-teal-700)] md:left-[calc(8.33%-5px)]"
                />

                <Reveal as="div" className="col-span-12 md:col-span-3 md:col-start-2">
                  <p className="kicker text-[var(--color-teal-700)]">{c.no}</p>
                  <p className="mt-3 font-mono text-[0.78rem] text-[var(--color-ink-faint)]">
                    {String(i + 1).padStart(2, "0")} / {chapters.length}
                  </p>
                </Reveal>

                <Reveal as="div" delay={0.1} className="col-span-12 md:col-span-5 mt-6 md:mt-0">
                  <h3 className="font-display text-[1.9rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.018em]">
                    {c.title}
                  </h3>
                  <p className="mt-5 max-w-prose text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
                    {c.body}
                  </p>
                </Reveal>

                <Reveal as="div" delay={0.2} className="col-span-12 md:col-span-3 md:col-start-10 mt-8 md:mt-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={unsplash(c.photoKey, 700)}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="relative bg-[var(--color-paper-2)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal as="div" className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-5">
              <p className="kicker text-[var(--color-teal-700)]">How we work</p>
              <h2 className="mt-5 font-display text-[2.2rem] md:text-[3.2rem] leading-[1.04] md:leading-[1] tracking-[-0.02em]">
                Four <span className="display-italic text-[var(--color-teal-700)]">principles</span>{" "}
                we won&apos;t bend on.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} as="div" delay={i * 0.08}>
                <p className="font-mono text-[0.72rem] text-[var(--color-ink-faint)]">
                  P/{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-[1.6rem] leading-tight tracking-[-0.015em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-[1.65] text-[var(--color-ink-soft)]">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal as="div" className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-6">
              <p className="kicker text-[var(--color-teal-700)]">Whom we serve</p>
              <h2 className="mt-5 font-display text-[2.2rem] md:text-[3.2rem] leading-[1.04] md:leading-[1] tracking-[-0.02em]">
                The brands that know{" "}
                <span className="display-italic text-[var(--color-teal-700)]">detail wins.</span>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-10">
            {sectorsServed.map((s, i) => (
              <Reveal
                key={s.sector}
                as="li"
                delay={i * 0.04}
                className="group flex items-start gap-6 border-t border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] py-7 last:border-b md:[&:nth-child(2)]:border-t md:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="font-mono text-[0.72rem] pt-2 text-[var(--color-ink-faint)] shrink-0 w-10">
                  S/{String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[1.6rem] tracking-[-0.015em] group-hover:text-[var(--color-teal-700)] transition-colors">
                    {s.sector}
                  </h3>
                  <p className="mt-1 text-[0.94rem] leading-[1.65] text-[var(--color-ink-soft)]">
                    {s.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal as="div" delay={0.2} className="mt-16">
            <Link
              href="/products"
              className="link-ribbon text-[0.85rem] uppercase tracking-[0.2em] text-[var(--color-ink)]"
            >
              Explore the gift catalogue →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTAFooterBlock />
    </>
  );
}
