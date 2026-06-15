import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "./ContactForm";
import { site } from "@/data/site";
import { Reveal, UnwrapText } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — start an enquiry",
  description:
    "Talk to Rivera Gifting about your next corporate hamper, branded merchandise drop or eco-conscious gift run. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 px-5 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <p className="kicker text-[var(--color-teal-700)]">Contact · Rivera Gifting</p>
          <h1 className="mt-6 font-display text-[2.4rem] sm:text-[3.6rem] md:text-[4.8rem] leading-[1.04] md:leading-[1] tracking-[-0.025em]">
            <span className="block overflow-hidden">
              <UnwrapText text="Tell us the" />
            </span>
            <span className="block overflow-hidden">
              <UnwrapText text="moment." delay={0.05} />
            </span>
            <span className="block overflow-hidden">
              <UnwrapText text="We'll design" delay={0.1} />
            </span>
            <span className="block overflow-hidden">
              <UnwrapText
                text="the gift."
                delay={0.15}
                className="display-italic text-[var(--color-teal-700)]"
              />
            </span>
          </h1>

          <Reveal as="div" delay={0.4} className="mt-12 space-y-7">
            <Block label="Write to us">
              <Link
                href={`mailto:${site.email}`}
                className="link-ribbon font-display text-[1.6rem] leading-tight"
              >
                {site.email}
              </Link>
            </Block>
            <Block label="Call us">
              <Link
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="link-ribbon font-display text-[1.6rem] leading-tight"
              >
                {site.phone}
              </Link>
            </Block>
            <Block label="Based in">
              <p className="font-display text-[1.6rem] leading-tight">{site.location}</p>
            </Block>
            <Block label="Reply window">
              <p className="text-[1rem] text-[var(--color-ink-soft)]">
                Within one business day. Festive-season turnaround stays the same — we plan our
                calendar around yours.
              </p>
            </Block>
          </Reveal>
        </div>

        <Reveal
          as="div"
          delay={0.2}
          className="col-span-12 md:col-span-6 md:col-start-7 mt-16 md:mt-2 rounded-sm bg-[var(--color-paper-2)] p-7 md:p-12"
        >
          <p className="kicker text-[var(--color-teal-700)]">Enquiry form</p>
          <div className="mt-10">
            <Suspense
              fallback={
                <p className="text-sm text-[var(--color-ink-faint)]">Loading form…</p>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[color:color-mix(in_oklab,var(--color-ink)_12%,transparent)] pt-5">
      <p className="kicker text-[var(--color-ink-faint)]">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
