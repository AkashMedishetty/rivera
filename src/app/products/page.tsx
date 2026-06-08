import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { unsplash } from "@/data/media";
import { Reveal } from "@/components/Reveal";
import { CTAFooterBlock } from "@/components/CTAFooterBlock";

export const metadata: Metadata = {
  title: "Products — the catalogue, in layers",
  description:
    "Browse Rivera Gifting's full corporate gifting catalogue — apparel, drinkware, luggage, office, tech, eco gifts, festive hampers, homeware, awards and wellness.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 md:px-10">
          <div className="col-span-12 md:col-span-8">
            <p className="kicker text-[var(--color-teal-700)]">Catalogue · 10 layers</p>
            <h1 className="mt-5 font-display text-[2.6rem] sm:text-[4rem] md:text-[5.6rem] leading-[1.02] md:leading-[0.98] tracking-[-0.025em]">
              The gift, <span className="display-italic text-[var(--color-teal-700)]">opened up.</span>
            </h1>
          </div>
          <Reveal as="div" delay={0.2} className="col-span-12 md:col-span-4 md:self-end mt-8 md:mt-0">
            <p className="text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
              Everything we make and source — organised the way we think about gifting. No carts,
              no checkout. Pick a layer, then talk to us about quantities, customisation and
              timelines.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1440px] mt-12 md:mt-16 px-5 md:px-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] pt-6">
            {categories.map((c, i) => (
              <li key={c.slug}>
                <a href={`#${c.slug}`} className="group inline-flex items-baseline gap-2 text-[0.86rem]">
                  <span className="font-mono text-[0.66rem] text-[var(--color-ink-faint)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="link-ribbon">{c.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          {categories.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={c.slug}
                id={c.slug}
                className="relative scroll-mt-32 border-t border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] py-16 md:py-24"
              >
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                  <Reveal
                    as="div"
                    className={`col-span-12 md:col-span-6 ${
                      isEven ? "" : "md:order-2 md:col-start-7"
                    }`}
                  >
                    <div className="relative aspect-[5/6] overflow-hidden rounded-sm bg-[var(--color-paper-2)]">
                      <Image
                        src={unsplash(c.photo, 1200)}
                        alt={c.photoAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
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
                    </div>
                  </Reveal>

                  <Reveal
                    delay={0.1}
                    as="div"
                    className={`col-span-12 md:col-span-5 ${
                      isEven ? "md:col-start-8" : "md:order-1 md:col-start-2"
                    } md:self-center`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[0.72rem] text-[var(--color-ink-faint)]">
                        {String(i + 1).padStart(2, "0")} / {categories.length}
                      </span>
                      <span className="block h-px w-10 bg-[var(--color-teal-600)]" />
                    </div>
                    <h2 className="mt-4 font-display text-[2.4rem] md:text-[3.4rem] leading-[1] tracking-[-0.02em]">
                      {c.title}
                    </h2>
                    <p className="mt-5 max-w-prose text-[1.02rem] leading-[1.65] text-[var(--color-ink-soft)]">
                      {c.intro}
                    </p>

                    <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.94rem] text-[var(--color-ink)]">
                      {c.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-baseline gap-2 border-b border-[color:color-mix(in_oklab,var(--color-ink)_8%,transparent)] py-2"
                        >
                          <span className="text-[var(--color-teal-600)]">·</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?category=${encodeURIComponent(c.title)}`}
                        className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)]"
                      >
                        Enquire about {c.title.split(" ")[0]}
                        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                          <path
                            d="M1 6h10M7 2l4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:translate-x-[2px]"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="/contact"
                        className="link-ribbon text-[0.85rem] text-[var(--color-ink-soft)]"
                      >
                        or request a custom hamper →
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTAFooterBlock />
    </>
  );
}
