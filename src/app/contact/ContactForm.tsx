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

type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const search = useSearchParams();
  const presetCategory = search.get("category") ?? "";

  const [category, setCategory] = useState(presetCategory);
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  useEffect(() => {
    if (presetCategory) setCategory(presetCategory);
  }, [presetCategory]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "sending" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — if a bot fills this hidden field, silently succeed
    if (fd.get("botcheck")) {
      setState({ status: "success" });
      form.reset();
      return;
    }

    // Compose a clean subject line + body for the email Web3Forms sends
    fd.set(
      "subject",
      `Rivera enquiry · ${fd.get("occasion") ?? "General"} · ${fd.get("name") ?? ""}`
    );
    fd.set("from_name", "Rivera Gifting · Website enquiry");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setState({ status: "success" });
        form.reset();
        setCategory("No preference");
      } else {
        setState({
          status: "error",
          message: json.message || "Something went wrong. Please email us directly.",
        });
      }
    } catch {
      setState({
        status: "error",
        message: "Network error. Please email us directly.",
      });
    }
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const sending = state.status === "sending";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-6">
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value={accessKey ?? ""} />
      <input type="hidden" name="redirect" value="false" />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field label="Your name" name="name" required autoComplete="name" />
      <Field label="Company / Org" name="company" required autoComplete="organization" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
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

      <Field label="Approx. quantity" name="quantity" placeholder="e.g. 250 hampers" />
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
          We&apos;ll get back to you within one business day.
        </p>
        <button
          type="submit"
          disabled={sending || !accessKey}
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-ink)] px-7 py-4 text-[0.78rem] tracking-[0.22em] uppercase text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal-700)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Send enquiry"}
          {!sending && (
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
          )}
        </button>
      </div>

      <AnimatePresence>
        {state.status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="md:col-span-2 rounded-sm bg-[var(--color-teal-50)] border border-[var(--color-teal-200)] px-5 py-4 text-[0.94rem] text-[var(--color-teal-900)]"
          >
            Thank you — your enquiry has reached us. We&apos;ll reply within one
            business day, often sooner.
          </motion.div>
        )}
        {state.status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="md:col-span-2 rounded-sm bg-[#fdecec] border border-[#e7b4b4] px-5 py-4 text-[0.94rem] text-[#7a2020]"
          >
            {state.message} Please write to{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </motion.div>
        )}
        {!accessKey && (
          <motion.div
            key="config"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="md:col-span-2 rounded-sm bg-[var(--color-kraft-soft)] border border-[var(--color-kraft)] px-5 py-4 text-[0.86rem] text-[var(--color-ink-soft)]"
          >
            <strong>Setup needed:</strong> add{" "}
            <code className="font-mono text-[0.85em]">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>{" "}
            to your environment (Vercel → Project → Settings → Environment
            Variables) before the form can send. See README for the one-time
            setup.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function FieldShell({ label, children }: { label: string; children: React.ReactNode }) {
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
