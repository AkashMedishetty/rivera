"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { categories } from "@/data/products";
import { site } from "@/data/site";

const occasions = [
  "Employee onboarding",
  "Festive / Diwali",
  "Client appreciation",
  "Real-estate handover",
  "Conference / event",
  "Training cohort",
  "Recognition awards",
  "Other",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactForm() {
  const search = useSearchParams();
  const presetCategory = search.get("category") ?? "";

  const [category, setCategory] = useState(presetCategory);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetCategory) setCategory(presetCategory);
  }, [presetCategory]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Rivera enquiry · ${data.get("occasion") ?? "General"} · ${data.get("name") ?? ""}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nOccasion: ${data.get("occasion")}\nCategory: ${data.get("category")}\nQuantity: ${data.get("quantity")}\nNeed-by: ${data.get("date")}\n\nBrief:\n${data.get("brief")}\n`
    );
    setSubmitted(true);
    // open mail client with prefilled enquiry
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-6"
    >
      <Field label="Your name" name="name" required autoComplete="name" />
      <Field
        label="Company / Org"
        name="company"
        required
        autoComplete="organization"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

      <Select
        label="Occasion"
        name="occasion"
        options={occasions}
        defaultValue={occasions[0]}
      />
      <Select
        label="Category of interest"
        name="category"
        value={category}
        onChange={(v) => setCategory(v)}
        options={["No preference", ...categories.map((c) => c.title)]}
        defaultValue={category || "No preference"}
      />

      <Field
        label="Approx. quantity"
        name="quantity"
        placeholder="e.g. 250 hampers"
      />
      <Field label="Need-by date" name="date" type="date" />

      <div className="md:col-span-2">
        <FieldArea
          label="Tell us about the gift"
          name="brief"
          placeholder="Audience, brand notes, budget per gift if you have one, anything we should know…"
          rows={5}
        />
      </div>

      <div className="md:col-span-2 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.78rem] text-[var(--color-ink-faint)] max-w-md">
          Pressing send opens your mail client with a pre-filled enquiry to{" "}
          <span className="text-[var(--color-ink)]">{site.email}</span>. We reply within
          one business day.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-ink)] px-7 py-4 text-[0.78rem] tracking-[0.22em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)]"
        >
          Send enquiry
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              className="transition-transform duration-500 group-hover:translate-x-[3px]"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="md:col-span-2 rounded-sm bg-[var(--color-teal-50)] border border-[var(--color-teal-200)] px-5 py-4 text-[0.92rem] text-[var(--color-teal-900)]"
          >
            Your mail client should have opened with the enquiry ready to send.
            If not, please write directly to {site.email}.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function FieldShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group block">
      <span className="kicker text-[var(--color-ink-soft)] block">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <FieldShell label={label}>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full border-b border-[color:color-mix(in_oklab,var(--color-ink)_22%,transparent)] bg-transparent py-3 text-[1rem] outline-none transition-colors focus:border-[var(--color-teal-600)] placeholder:text-[var(--color-ink-faint)]"
      />
    </FieldShell>
  );
}

function FieldArea({
  label,
  name,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <FieldShell label={label}>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none border-b border-[color:color-mix(in_oklab,var(--color-ink)_22%,transparent)] bg-transparent py-3 text-[1rem] outline-none transition-colors focus:border-[var(--color-teal-600)] placeholder:text-[var(--color-ink-faint)]"
      />
    </FieldShell>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  const controlled = value !== undefined;
  return (
    <FieldShell label={label}>
      <div className="relative">
        <select
          name={name}
          {...(controlled
            ? { value, onChange: (e) => onChange?.(e.target.value) }
            : { defaultValue })}
          className="w-full appearance-none border-b border-[color:color-mix(in_oklab,var(--color-ink)_22%,transparent)] bg-transparent py-3 pr-7 text-[1rem] outline-none transition-colors focus:border-[var(--color-teal-600)]"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)]"
        >
          <path
            d="M1 3l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </FieldShell>
  );
}
