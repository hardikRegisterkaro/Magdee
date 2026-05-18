"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function BlogFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[730px] mt-14">
      <h2 className="text-[28px] font-bold leading-tight tracking-[-0.6px] text-[#0a192f] mb-6">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`rounded-xl border bg-white transition-colors duration-200 ${
                isOpen ? "border-[#bfdbfe]" : "border-[#e2e8f0] hover:border-[#bfdbfe]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className="font-mono text-[11px] font-bold tracking-[0.08em] text-[#a0aec0]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] font-semibold text-[#0a192f]">
                  {faq.question}
                </span>
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                    isOpen ? "bg-[#0a192f] text-white" : "bg-[#f1f5f9] text-[#4a5568]"
                  }`}
                  aria-hidden
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
              >
                <div className="px-5 pb-5 pl-14">
                  <p className="text-[14.5px] leading-[1.75] text-[#4a5568] whitespace-pre-wrap">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
