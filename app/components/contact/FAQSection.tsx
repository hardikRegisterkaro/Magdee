"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How fast do you actually reply?",
    answer:
      "Within one working day, usually faster. We don't use auto-responders, ticketing systems, or 'Your call is important to us' anything. A real person reads every email, and the same person writes back.",
  },
  {
    question: "Do you offer enterprise pricing?",
    answer:
      "Yes — for teams above 25 seats. Write to partners@magdee.in with a rough headcount and use case. We'll send a quote within a working day, no demo gauntlet required.",
  },
  {
    question: "Can I visit the Coimbatore office?",
    answer:
      "Absolutely — we love visitors. Mail hello@magdee.in with a date, and we'll either confirm or suggest one that works. Filter coffee on us.",
  },
  {
    question: "Are you hiring?",
    answer:
      "Quietly, always. If you're a builder who values craft over churn, send a note and a portfolio (or a project, or a thing you wrote) to careers@magdee.in. We read every one.",
  },
  {
    question: "Will you ship to my country / language?",
    answer:
      "Today: India + iOS + Tamil/English/Hindi. On the roadmap: more languages first, more platforms second. Tell us where you are — we keep a quiet list and write to people in the order they asked.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              04 — Before You Write
            </div>

            <h2 className="mt-6 font-display text-[48px] font-semibold leading-[1.02] tracking-[-0.025em] text-ink sm:text-[60px] lg:text-[72px]">
              Quick
              <br />
              <em className="italic text-brand">answers</em>.
            </h2>

            <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.7] text-ink-soft">
              Most questions we get are these five. If yours isn&apos;t, write
              anyway — we&apos;d genuinely rather hear from you.
            </p>
          </div>

          {/* Right — accordion */}
          <ul className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={i}
                  className="rounded-2xl border border-line bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-mono text-[12px] tracking-[0.06em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[15.5px] font-semibold tracking-[-0.005em] text-ink">
                      {faq.question}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-ink text-white" : "bg-[#f0f2f7] text-ink-soft"
                      }`}
                      aria-hidden
                    >
                      {isOpen ? <CloseIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="pl-[34px] text-[14.5px] leading-[1.7] text-ink-soft">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
