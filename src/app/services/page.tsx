import type { Metadata } from "next";
import Link from "next/link";
import { services, process } from "@/data/services";
import { Reveal, UnwrapText } from "@/components/Reveal";
import { ProcessSection } from "@/components/ProcessSection";
import { CTAFooterBlock } from "@/components/CTAFooterBlock";

export const metadata: Metadata = {
  title: "Services — what we do beyond the catalogue",
  description:
    "Rivera Gifting's six services: corporate gifting, custom hampers, branding & packaging, eco manufacturing, event gifting and logistics.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 md:px-10">
          <div className="col-span-12 md:col-span-8">
            <p className="kicker text-[var(--color-teal-700)]">
              Services · Six layers of support
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] sm:text-[4rem] md:text-[5.6rem] leading-[1.02] md:leading-[0.98] tracking-[-0.025em]">
              <span className="block overflow-hidden">
                <UnwrapText text="More than" />
              </span>
              <span className="block overflow-hidden">
                <UnwrapText text="a catalogue —" delay={0.05} />
              </span>
              <span className="block overflow-hidden">
                <UnwrapText
                  text="a partner."
                  delay={0.1}
                  className="display-italic text-[var(--color-teal-700)]"
                />
              </span>
            </h1>
          </div>
          <Reveal as="div" delay={0.4} className="col-span-12 md:col-span-4 md:self-end mt-10 md:mt-0">
            <p className="text-[1.05rem] leading-[1.65] text-[var(--color-ink-soft)]">
              From sourcing to embossing to hand-delivery, Rivera handles every layer
              of a gifting brief. One team, one point of contact, end to end.
            </p>
          </Reveal>
        </div>

        {/* In-page index */}
        <div className="mx-auto max-w-[1440px] mt-14 px-5 md:px-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] pt-6">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="group inline-flex items-baseline gap-2 text-[0.86rem]">
                  <span className="font-mono text-[0.66rem] text-[var(--color-ink-faint)]">
                    {s.number}
                  </span>
                  <span className="link-ribbon">{s.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service sections — alternating, large */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="relative scroll-mt-32 border-t border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] py-16 md:py-24"
              >
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                  <Reveal as="div" className={`col-span-12 md:col-span-3 ${isEven ? "" : "md:col-start-10 md:order-2"}`}>
                    <p className="font-mono text-[0.74rem] tracking-[0.22em] text-[var(--color-ink-faint)]">
                      Service {s.number}
                    </p>
                    <span
                      aria-hidden="true"
                      className={[
                        "mt-4 inline-block h-2 w-12",
                        s.accent === "teal"
                          ? "bg-[var(--color-teal-700)]"
                          : s.accent === "kraft"
                          ? "bg-[var(--color-kraft)]"
                          : "bg-[var(--color-ink)]",
                      ].join(" ")}
                    />
                  </Reveal>

                  <Reveal delay={0.1} as="div" className={`col-span-12 md:col-span-8 ${isEven ? "md:col-start-5" : "md:col-start-2 md:order-1"}`}>
                    <h2 className="font-display text-[2.4rem] md:text-[4rem] leading-[1] tracking-[-0.022em]">
                      {s.title}
                    </h2>
                    <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.65] text-[var(--color-ink-soft)]">
                      {s.intro}
                    </p>

                    <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 text-[0.96rem]">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-baseline gap-2 border-b border-[color:color-mix(in_oklab,var(--color-ink)_8%,transparent)] py-2.5"
                        >
                          <span className="text-[var(--color-teal-600)]">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?category=${encodeURIComponent(s.title)}`}
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)]"
                    >
                      Enquire about {s.title.split(" ")[0]}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ProcessSection />
      <CTAFooterBlock />
    </>
  );
}
