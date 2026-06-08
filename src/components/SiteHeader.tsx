"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { site } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-7 z-[70] transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled
            ? "bg-[color-mix(in_oklab,var(--color-paper)_96%,transparent)] backdrop-blur-md border-b border-[color:color-mix(in_oklab,var(--color-ink)_10%,transparent)]"
            : "bg-[color-mix(in_oklab,var(--color-paper)_96%,transparent)] backdrop-blur-md border-b border-[color:color-mix(in_oklab,var(--color-ink)_8%,transparent)] md:bg-transparent md:backdrop-blur-none md:border-b-0",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
          <Logo />

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-9 text-[0.86rem] tracking-[0.01em]">
              {site.nav.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="group relative inline-flex items-center">
                      <span className="mr-2 font-mono text-[0.6rem] text-[var(--color-ink-faint)]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={[
                          "link-ribbon transition-colors",
                          active
                            ? "text-[var(--color-teal-700)]"
                            : "text-[var(--color-ink)] group-hover:text-[var(--color-teal-700)]",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex group items-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 text-[0.74rem] tracking-[0.2em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)] hover:border-[var(--color-teal-700)]"
          >
            Enquire
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

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-10 w-10 inline-flex items-center justify-center"
          >
            <span
              className={`absolute h-px w-6 bg-[var(--color-ink)] transition-transform duration-500 ease-[var(--ease-unwrap)] ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-[var(--color-ink)] transition-transform duration-500 ease-[var(--ease-unwrap)] ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — sibling of header so it escapes the header's backdrop-filter containing block */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-x-0 bottom-0 top-[calc(1.75rem+4rem)] z-[60] overflow-y-auto"
            style={{ backgroundColor: "var(--color-paper)" }}
          >
            <nav aria-label="Mobile primary" className="flex flex-col px-6 py-10">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-[color:color-mix(in_oklab,var(--color-ink)_10%,transparent)]"
                >
                  <Link href={item.href} className="flex items-baseline justify-between py-5">
                    <span className="font-display text-[2.4rem] leading-none">{item.label}</span>
                    <span className="font-mono text-[0.7rem] text-[var(--color-ink-faint)]">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-4 text-[0.74rem] tracking-[0.2em] uppercase text-[var(--color-paper)]"
              >
                Start an enquiry
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
