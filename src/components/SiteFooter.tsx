import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { categories } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-32 overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      {/* Paper-tear edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full text-[var(--color-paper)]"
      >
        <path d="M0,80 Q360,0 720,40 T1440,80 L1440,0 L0,0 Z" fill="currentColor" />
      </svg>

      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-12 md:px-10 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-mark.png"
                alt=""
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 opacity-90"
              />
              <p className="kicker text-[var(--color-teal-200)]">
                Rivera Gifting · est. {site.foundedYear}
              </p>
            </div>
            <p className="mt-7 font-display text-[2.2rem] md:text-[3.2rem] leading-[1.04] md:leading-[1] tracking-[-0.02em] text-[var(--color-paper)]">
              The first layer of a great gift{" "}
              <span className="display-italic text-[var(--color-teal-200)]">is the thought.</span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[color:color-mix(in_oklab,var(--color-paper)_70%,transparent)]">
              Premium corporate hampers, branded merchandise and eco-conscious essentials.
              Curated. Customised. Hand-delivered.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="kicker text-[var(--color-teal-200)]">Navigate</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-ribbon hover:text-[var(--color-teal-200)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="kicker text-[var(--color-teal-200)]">Catalogue</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products#${c.slug}`}
                    className="link-ribbon hover:text-[var(--color-teal-200)]"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="kicker text-[var(--color-teal-200)]">Reach us</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${site.email}`} className="link-ribbon hover:text-[var(--color-teal-200)]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-ribbon hover:text-[var(--color-teal-200)]">
                  {site.phone}
                </a>
              </li>
              <li className="text-[color:color-mix(in_oklab,var(--color-paper)_60%,transparent)] not-italic">
                <address className="not-italic leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </address>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs uppercase tracking-[0.18em] hover:text-[var(--color-teal-200)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[color:color-mix(in_oklab,var(--color-paper)_18%,transparent)] pt-10">
          <p className="font-display text-2xl tracking-[-0.01em]">
            Planning a gifting moment?{" "}
            <Link href="/contact" className="display-italic text-[var(--color-teal-200)] link-ribbon">
              Let&apos;s talk.
            </Link>
          </p>

          <div className="mt-10 grid grid-cols-1 gap-y-6 md:grid-cols-12 md:items-start md:gap-x-6">
            <div className="md:col-span-7">
              <p className="text-[0.74rem] tracking-[0.22em] uppercase text-[var(--color-teal-200)]">
                {site.legalName}
              </p>
              <address className="mt-2 not-italic text-[0.82rem] leading-relaxed text-[color:color-mix(in_oklab,var(--color-paper)_70%,transparent)]">
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
            </div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[color:color-mix(in_oklab,var(--color-paper)_55%,transparent)] md:col-span-5 md:text-right">
              © 2026 Rivera Gifting · All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
