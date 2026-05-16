"use client";

import { useEffect, useRef, useState } from "react";

const INBOXES = [
  {
    icon: <GridIcon />,
    label: "Product",
    email: "product@magdee.in",
    detail: "VOChef, Mee Tory, Ellamly — feedback, bugs, feature requests",
    person: { initial: "A", color: "#3B4ED8", name: "Arjun" },
  },
  {
    icon: <MegaphoneIcon />,
    label: "Press",
    email: "press@magdee.in",
    detail: "Interviews, embargoed news, press kit downloads",
    person: { initial: "S", color: "#3B4ED8", name: "Saanvi" },
  },
  {
    icon: <InfinityIcon />,
    label: "Partnerships",
    email: "partners@magdee.in",
    detail: "Integrations, distribution, enterprise inquiries",
    person: { initial: "A", color: "#3B4ED8", name: "Arjun" },
  },
  {
    icon: <BriefcaseIcon />,
    label: "Careers",
    email: "careers@magdee.in",
    detail: "Job applications, internships, contract work",
    person: { initial: "V", color: "#3B4ED8", name: "Vikram" },
  },
  {
    icon: <LifeBuoyIcon />,
    label: "Support",
    email: "support@magdee.in",
    detail: "Help with the apps, billing questions, account issues",
    person: { initial: "S", color: "#3B4ED8", name: "Saanvi" },
  },
  {
    icon: <SmileIcon />,
    label: "Just Hello",
    email: "hello@magdee.in",
    detail: "Anything else — in Tamil, English, or Hindi",
    person: { initial: "A", color: "#3B4ED8", name: "Arjun" },
  },
];

const GAP_PX = 16;

export default function InboxesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [paused, setPaused] = useState(false);

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
  }, []);

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
  }, [paused]);

  function scrollToCard(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const cardW = getCardWidth(track);
    track.scrollTo({ left: i * cardW, behavior: "smooth" });
  }

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              02 — Pick the right door
            </div>

            <h2 className="mt-6 font-display text-[48px] font-semibold leading-[1.02] tracking-[-0.025em] text-ink sm:text-[60px] lg:text-[72px]">
              Six inboxes.
              <br />
              <em className="italic text-brand">One small team</em>.
            </h2>
          </div>

          <div className="flex items-center lg:justify-end">
            <p className="max-w-[34rem] text-[15px] leading-[1.7] text-ink-soft lg:text-[16px]">
              We split mail by topic, not by tier — there&apos;s no
              &lsquo;premium&rsquo; address. Whichever you write to, a real
              person responds within a working day.
            </p>
          </div>
        </div>

        {/* Cards strip */}
        <div className="relative mt-12 lg:mt-16">
          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...INBOXES, ...INBOXES].map((inbox, i) => (
              <a
                key={i}
                href={`mailto:${inbox.email}`}
                className="group relative flex w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_8px_28px_-12px_rgba(15,23,42,0.12)] sm:w-[48%] lg:w-[calc((100%-2rem)/3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f2f7] text-ink-soft">
                    {inbox.icon}
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
                      style={{ backgroundColor: inbox.person.color }}
                    >
                      {inbox.person.initial}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                      {inbox.person.name} Answers
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
                className={`h-2 rounded-full transition-all ${
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

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z" />
      <path d="M16 8a4 4 0 0 1 0 8" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 12c0-3 2-5 5-5s3 2 5 5 2 5 5 5-5 0-5-5-2-5-5-5-5 2-5 5z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function LifeBuoyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.54M4.93 19.07l4.24-4.24" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa3b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-colors group-hover:stroke-ink">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}
