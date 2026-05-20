"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/app/hooks/useReveal";
import type { Inbox } from "@/app/lib/fetchContactPage";

const DEFAULT_INBOXES: Inbox[] = [
  { label: "Product", email: "product@magdee.in", detail: "VOChef, Mee Tory, Ellamly — feedback, bugs, feature requests", personName: "Vivek", personInitial: "V" },
  { label: "Press", email: "press@magdee.in", detail: "Interviews, embargoed news, press kit downloads", personName: "Vikram", personInitial: "V" },
  { label: "Partnerships", email: "partners@magdee.in", detail: "Integrations, distribution, enterprise inquiries", personName: "Vivek", personInitial: "V" },
  { label: "Careers", email: "careers@magdee.in", detail: "Job applications, internships, contract work", personName: "Vikram", personInitial: "V" },
  { label: "Support", email: "support@magdee.in", detail: "Help with the apps, billing questions, account issues", personName: "Vikram", personInitial: "V" },
  { label: "Just Hello", email: "hello@magdee.in", detail: "Anything else — in Tamil, English, or Hindi", personName: "Vivek", personInitial: "V" },
];

const GAP_PX = 16;

interface Props {
  data?: {
    badge?: string;
    description?: string;
    inboxes?: Inbox[];
  };
}

export default function InboxesSection({ data }: Props) {
  const badge = data?.badge || "02 — Pick the right door";
  const description = data?.description || "We split mail by topic, not by tier — there's no 'premium' address. Whichever you write to, a real person responds within a working day.";
  const INBOXES = data?.inboxes?.length ? data.inboxes : DEFAULT_INBOXES;

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [paused, setPaused] = useState(false);

  const { ref: sectionRef, visible } = useReveal(0.1);

  function getCardWidth(track: HTMLDivElement) {
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return 0;
    return first.offsetWidth + GAP_PX;
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function recalc() {
      if (!track) return;
      const cardW = getCardWidth(track);
      if (cardW === 0) return;
      const idx = Math.round(track.scrollLeft / cardW) % INBOXES.length;
      setActiveDot(idx);
    }

    recalc();
    track.addEventListener("scroll", recalc, { passive: true });
    window.addEventListener("resize", recalc);
    return () => {
      track.removeEventListener("scroll", recalc);
      window.removeEventListener("resize", recalc);
    };
  }, [INBOXES.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const cardW = getCardWidth(track);
      if (cardW === 0) return;
      const half = cardW * INBOXES.length;
      const nextLeft = track.scrollLeft + cardW;

      track.scrollTo({ left: nextLeft, behavior: "smooth" });

      if (nextLeft >= half) {
        window.setTimeout(() => {
          if (!trackRef.current) return;
          trackRef.current.scrollLeft = nextLeft - half;
        }, 600);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [paused, INBOXES.length]);

  function scrollToCard(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const cardW = getCardWidth(track);
    track.scrollTo({ left: i * cardW, behavior: "smooth" });
  }

  return (
    <section className="relative">
      <div ref={sectionRef} className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div
            className={`reveal-up${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {badge}
            </div>

            <h2 className="mt-6 font-display text-[48px] font-semibold leading-[1.02] tracking-tight text-ink sm:text-[60px] lg:text-[72px]">
              Six inboxes.
              <br />
              <em className="italic text-brand">One small team</em>.
            </h2>
          </div>

          <div
            className={`reveal-up flex items-center lg:justify-end${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="max-w-136 text-[15px] leading-[1.7] text-ink-soft lg:text-[16px]">
              {description}
            </p>
          </div>
        </div>

        {/* Cards strip */}
        <div
          className={`reveal-up relative mt-12 lg:mt-16${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "320ms" }}
        >
          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none"
          >
            {[...INBOXES, ...INBOXES].map((inbox, i) => (
              <a
                key={i}
                href={`mailto:${inbox.email}`}
                className="group relative flex w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_12px_32px_-10px_rgba(30,64,175,0.14)] sm:w-[48%] lg:w-[calc((100%-2rem)/3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f2f7] text-ink-soft transition-colors duration-200 group-hover:bg-brand/8 group-hover:text-brand">
                    <InboxIcon />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
                    {String((i % INBOXES.length) + 1).padStart(2, "0")} / {String(INBOXES.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                  — {inbox.label}
                </p>

                <h3 className="mt-1.5 text-[22px] font-semibold tracking-[-0.01em] text-ink">
                  {inbox.email}
                </h3>

                <p className="mt-2.5 flex-1 text-[13.5px] leading-[1.55] text-ink-soft">
                  {inbox.detail}
                </p>

                <hr className="mt-5 border-line" />

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white"
                      style={{ backgroundColor: "#3B4ED8" }}
                    >
                      {inbox.personInitial}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                      {inbox.personName} Answers
                    </span>
                  </div>
                  <ArrowUpRightIcon />
                </div>
              </a>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="mt-7 flex justify-center gap-2">
            {INBOXES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to inbox ${i + 1}`}
                aria-current={activeDot === i ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeDot === i ? "w-8 bg-brand" : "w-2 bg-line hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InboxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-colors duration-200 group-hover:stroke-brand">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}
