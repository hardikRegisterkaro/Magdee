"use client";

import { useState } from "react";

const CATEGORIES = [
  { label: "Product", email: "product@magdee.in", person: "Arjun" },
  { label: "Press", email: "press@magdee.in", person: "Saanvi" },
  { label: "Partnerships", email: "partners@magdee.in", person: "Arjun" },
  { label: "Careers", email: "careers@magdee.in", person: "Vikram" },
  { label: "Support", email: "support@magdee.in", person: "Saanvi" },
  { label: "Just hello", email: "hello@magdee.in", person: "Arjun" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [category, setCategory] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const active = CATEGORIES[category];

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          companyName: company.trim() || undefined,
          message: message.trim(),
          serviceSelected: active.label,
          phoneNo: "Not provided",
          region: "India",
          leadSource: "Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName(""); setEmail(""); setCompany(""); setMessage(""); setCategory(0);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-140 rounded-3xl border border-line bg-white px-6 py-7 shadow-[0_24px_64px_-20px_rgba(15,23,42,0.18)] sm:px-7 sm:py-7"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          — Send us a note
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          No. 042
        </p>
      </div>

      <h2 className="mt-1.5 font-display text-[24px] font-semibold tracking-[-0.015em] text-ink sm:text-[26px]">
        Tell us what&apos;s up.
      </h2>

      {/* Category */}
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        What&apos;s this about?
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {CATEGORIES.map((cat, i) => {
          const isActive = category === i;
          return (
            <button
              key={cat.label}
              type="button"
              onClick={() => setCategory(i)}
              className={`rounded-md border px-2.5 py-1.5 text-[12px] font-medium transition-colors ${
                isActive
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:bg-background"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Name + Email */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Your Name"
          required
          value={name}
          onChange={setName}
          placeholder="Priya Ramamurthy"
          type="text"
        />
        <Field
          label="Email"
          required
          value={email}
          onChange={setEmail}
          placeholder="you@somewhere.in"
          type="email"
        />
      </div>

      {/* Company */}
      <div className="mt-4">
        <Field
          label="Company / Role"
          optional
          value={company}
          onChange={setCompany}
          placeholder="Where you work — or 'just curious'"
          type="text"
        />
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
            Your Message
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
        </label>
        <div className="relative mt-1.5">
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            rows={3}
            className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 pb-6 text-[13.5px] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
          />
          <span className="pointer-events-none absolute bottom-2 right-3 font-mono text-[10px] text-muted">
            {message.length} chars
          </span>
        </div>
      </div>

      {/* Privacy notice */}
      {status === "error" && errorMsg && (
        <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[12.5px] leading-normal text-red-600">
          {errorMsg}
        </p>
      )}
      {status === "success" && (
        <p className="mt-3 rounded-lg border border-[#bfe6cd] bg-[#e8f7ee] px-3 py-2 text-[12.5px] leading-normal text-[#176c3a]">
          Message sent! {active.person} will reply within one working day.
        </p>
      )}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-[12.5px] leading-normal text-ink-soft">
        <InfoIcon />
        <p>
          Your email goes to{" "}
          <strong className="font-semibold text-brand">{active.person}</strong>{" "}
          and nowhere else. We don&apos;t sell, share, or feed it to a marketing
          tool. Ever.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          — Typically a reply within 24 hours
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[13px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-colors hover:bg-black disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
          {status !== "loading" && <SendIcon />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  optional,
  value,
  onChange,
  placeholder,
  type,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
          {label}
        </span>
        {required && <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />}
        {optional && (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            — Optional
          </span>
        )}
      </div>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-[13.5px] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
      />
    </label>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9aa3b2"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-1">
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  );
}
