"use client";

import { useReveal } from "@/app/hooks/useReveal";

export default function FinalCTA() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A192F 14.29%, #1E3A8A 50%, #3B5BDB 85.71%)" }}
      ref={ref}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <span
            className={`reveal-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "50ms" }}
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#3bd28a] opacity-60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#3bd28a]" />
            </span>
            Ready when you are
          </span>

          <h2
            className={`reveal-up mt-7 max-w-[20ch] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[72px]${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "150ms" }}
          >
            Get a <span className="italic text-white/55">patient</span> kitchen
            <br className="hidden sm:block" />{" "}
            in your pocket.
          </h2>

          <p
            className={`reveal-up mt-6 max-w-[40rem] text-[15px] leading-[1.6] text-white/70 sm:text-[16px]${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "240ms" }}
          >
            10 minutes to set up. 30 days to fall in love. 30 days to walk away
            if you don&apos;t.
          </p>

          <div
            className={`reveal-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "320ms" }}
          >
            <a
              href="#ios"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-[15px] font-medium text-ink shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] transition-all hover:bg-white/90 active:scale-[0.97]"
            >
              <AppleIcon />
              Get VOChef for ₹1,499
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/0 px-5 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-white/10 active:scale-[0.97]"
            >
              View full feature list
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden>
      <path d="M11.4 8.5c0-1.9 1.6-2.8 1.6-2.8-.9-1.3-2.3-1.5-2.8-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.7-3.1 1.9-1.4 2.3-.4 5.8 1 7.7.7.9 1.5 2 2.5 1.9 1 0 1.4-.6 2.6-.6s1.6.6 2.6.6c1.1 0 1.8-.9 2.4-1.9.8-1.1 1.1-2.2 1.2-2.2-.1 0-2.4-.9-2.6-3.1ZM9.5 2.9c.5-.6.9-1.5.8-2.4-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.8 2.3.8.1 1.6-.4 2.1-1Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
