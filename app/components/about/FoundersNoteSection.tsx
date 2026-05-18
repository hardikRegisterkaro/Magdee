"use client";

import { useReveal } from "@/app/hooks/useReveal";
import type { AboutPageData } from "@/app/lib/fetchAboutPage";

type Props = { data?: AboutPageData["foundersNoteSection"] };

function QuoteText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="italic text-brand">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const DEFAULTS = {
  founderName:        "Vivek",
  founderDesignation: "Co-Founder, Product",
  founderLocation:    "Coimbatore, Tamil Nadu",
  founderEmail:       "vivek@magdee.in",
  founderCoordinates: "11.0168° N · 76.9558° E",
  quote:              "We named the company after the elephant — patient, careful with what it carries, and quietly stronger than it looks.",
  documentNote:       "Founders' Note · MagDee Technologies · 2025",
  documentNo:         "Document No. MD-2026-001",
};

export default function FoundersNoteSection({ data }: Props) {
  const { ref, visible } = useReveal(0.08);

  const founderName = data?.founderName || DEFAULTS.founderName;
  const d = {
    founderName,
    founderInitial:     founderName[0]?.toUpperCase() ?? "V",
    founderDesignation: data?.founderDesignation || DEFAULTS.founderDesignation,
    founderLocation:    data?.founderLocation    || DEFAULTS.founderLocation,
    founderEmail:       data?.founderEmail       || DEFAULTS.founderEmail,
    founderCoordinates: data?.founderCoordinates || DEFAULTS.founderCoordinates,
    quote:              data?.quote              || DEFAULTS.quote,
    documentNote:       data?.documentNote       || DEFAULTS.documentNote,
    documentNo:         data?.documentNo         || DEFAULTS.documentNo,
  };

  return (
    <section id="founders" className="relative bg-background" ref={ref}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div
          className={`reveal-up overflow-hidden rounded-3xl border border-line bg-white shadow-[0_4px_40px_-16px_rgba(15,23,42,0.1)]${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "60ms" }}
        >
          {/* Top accent line */}
          <div className="h-[3px] w-full bg-brand" />

          <div className="grid grid-cols-1 divide-y divide-line lg:grid-cols-[280px_1fr] lg:divide-x lg:divide-y-0">
            {/* Left — founder card */}
            <div
              className={`reveal-left px-8 py-10${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "140ms" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                — Founder&apos;s Note
              </p>

              <span
                className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-[20px] font-bold text-white"
                style={{ backgroundColor: "#3B4ED8" }}
              >
                {d.founderInitial}
              </span>

              <h3 className="mt-5 font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink">
                {d.founderName}
              </h3>

              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                — {d.founderDesignation}
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-[11.5px] text-ink-soft">
                  <PinIcon />
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{d.founderLocation}</span>
                </div>
                <div className="flex items-center gap-2 text-[11.5px] text-ink-soft">
                  <MailIcon />
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{d.founderEmail}</span>
                </div>
                <div className="flex items-center gap-2 text-[11.5px] text-ink-soft">
                  <GlobeIcon />
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{d.founderCoordinates}</span>
                </div>
              </div>

              <hr className="mt-7 border-line" />

              <div className="mt-6">
                <p className="font-display text-[28px] font-semibold italic tracking-[-0.01em] text-ink">
                  {d.founderName}
                </p>
                <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted">
                  — Signature · Co-Founder
                </p>
              </div>
            </div>

            {/* Right — quote */}
            <div
              className={`reveal-right flex flex-col justify-between px-8 py-10 lg:px-12 lg:py-12${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "260ms" }}
            >
              <div>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden>
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.2 6.8 6.4 12H12V24H0ZM20 24V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.2 6.8 26.4 12H32V24H20Z" fill="#3B4ED8" />
                </svg>

                <blockquote className="mt-5 font-display text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[48px]">
                  <QuoteText text={d.quote} />
                </blockquote>
              </div>

              <div className="mt-8 space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {d.documentNote}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {d.documentNo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
