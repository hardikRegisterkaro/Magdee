"use client";

import { useReveal } from "@/app/hooks/useReveal";
import type { AboutPageData } from "@/app/lib/fetchAboutPage";

type Props = { aboutSection?: AboutPageData["aboutSection"] };

function AccentHeading({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="italic text-brand">{part.slice(1, -1)}</em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const FALLBACK_STATS = [
  { statTitle: "Founded", statValue: "2025" },
  { statTitle: "Languages\nSpoken Daily", statValue: "03" },
  { statTitle: "Time\nZone", statValue: "IST" },
  { statTitle: "Coffees\nBrewed", statValue: "∞" },
];

export default function HeadquartersSection({ aboutSection }: Props) {
  const badgeText = aboutSection?.aboutBadgeTitle || "02 — Headquarters · Trichy";
  const heading = aboutSection?.aboutHeading || "Software with a *sense of place*.";
  const description = aboutSection?.aboutDescription || "";
  const stats = aboutSection?.aboutStats?.length ? aboutSection.aboutStats : FALLBACK_STATS;

  const paragraphs = description
    ? description.split(/\n\n+/).filter(Boolean)
    : [
        "We chose Trichy — a temple city with deep engineering roots from BHEL and the Cauvery delta — because it teaches you to make things that hold up. Patient AI is what happens when craft culture meets a noisy industry that's forgotten how to slow down.",
        "Two founders. A city that takes its time — temple bells in the morning, filter coffee through the day, BHEL engineers walking home at five. The kind of place that teaches you to make things that last.",
      ];

  const { ref, visible } = useReveal(0.08);

  return (
    <section className="relative" ref={ref}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div
            className={`reveal-left${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {badgeText}
            </div>

            <h2 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
              <AccentHeading text={heading} />
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[1.7] text-ink-soft">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex min-w-[80px] flex-col gap-1.5 rounded-xl border border-line bg-white px-4 py-3.5 transition-colors hover:border-brand/20 hover:bg-[#f0f4ff]"
                >
                  <span className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                    {String(stat.statValue)}
                  </span>
                  <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-muted whitespace-pre-line">
                    {stat.statTitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className={`reveal-right${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "240ms" }}
          >
            {aboutSection?.aboutImgUrl ? (
              <div className="overflow-hidden rounded-3xl lg:h-[420px]">
                <img
                  src={aboutSection.aboutImgUrl}
                  alt="Headquarters"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <TrichyPostcard />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrichyPostcard() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-line bg-gold-bg/40 shadow-[0_24px_64px_-20px_rgba(15,23,42,0.18)] lg:h-[420px]"
      role="img"
      aria-label="A postcard from MagDee, Trichy"
    >
      {/* Subtle paper texture — a faint horizontal line repeating like notebook paper */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 28px, #0a1e40 28px, #0a1e40 29px)",
        }}
      />

      {/* Stamp top-right */}
      <div className="absolute right-6 top-6 z-10">
        <div
          className="relative flex h-[88px] w-[68px] flex-col items-center justify-center gap-1.5 bg-white"
          style={{
            // Perforated edge effect via radial-gradient dots around the rectangle
            maskImage:
              "radial-gradient(circle at 6px 6px, transparent 3px, black 3.5px), radial-gradient(circle at calc(100% - 6px) 6px, transparent 3px, black 3.5px), radial-gradient(circle at 6px calc(100% - 6px), transparent 3px, black 3.5px), radial-gradient(circle at calc(100% - 6px) calc(100% - 6px), transparent 3px, black 3.5px)",
            boxShadow: "0 6px 18px -8px rgba(15,23,42,0.25)",
            borderRadius: "2px",
          }}
        >
          <svg viewBox="0 0 32 32" width="32" height="32" className="text-brand-dark" aria-hidden>
            <path
              d="M8 24 L8 8 L16 18 L24 8 L24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-mono text-[7.5px] font-semibold uppercase tracking-[0.16em] text-brand-dark">
            MagDee
          </p>
          <p className="font-mono text-[6.5px] uppercase tracking-[0.12em] text-ink-soft">
            Tamil Nadu
          </p>
        </div>
      </div>

      {/* Postmark overlapping bottom-left of stamp */}
      <div className="absolute right-[88px] top-[68px] z-20 h-[88px] w-[88px]">
        <svg viewBox="0 0 96 96" width="88" height="88" aria-hidden>
          <defs>
            <path id="postmark-circle" d="M 48,48 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
          </defs>
          <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(30,64,175,0.4)" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="48" cy="48" r="30" fill="none" stroke="rgba(30,64,175,0.35)" strokeWidth="0.8" />
          <text fontFamily="monospace" fontSize="7" fontWeight="600" fill="#1E40AF" letterSpacing="1.5" opacity="0.75">
            <textPath href="#postmark-circle" startOffset="0%">
              TRICHY · 2025 · TAMIL NADU ·
            </textPath>
          </text>
          <text
            x="48"
            y="44"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
            fontWeight="700"
            fill="#1E40AF"
            opacity="0.85"
            letterSpacing="0.5"
          >
            PATIENT
          </text>
          <text
            x="48"
            y="55"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="6.5"
            fontWeight="500"
            fill="#1E40AF"
            opacity="0.6"
            letterSpacing="1"
          >
            EST · MMXXV
          </text>
        </svg>
      </div>

      {/* Main message — handwritten-feel quote on the left */}
      <div className="relative flex h-full flex-col justify-between p-9 sm:p-11">
        <div className="max-w-[60%] pt-2">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-brand">
            — A note
          </p>
          <p className="mt-5 font-display text-[20px] font-medium leading-[1.4] text-ink sm:text-[22px]">
            Posted from Trichy.<br />
            Old city. Quiet software.
          </p>
          <p className="mt-4 font-display text-[15px] italic leading-[1.5] text-ink-soft sm:text-[16px]">
            With patience, with craft, and the long view.
          </p>
          <p className="mt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            — Deepa &amp; Vivek
          </p>
        </div>

        {/* Address lines bottom */}
        <div className="mt-8 max-w-[55%] border-t border-dashed border-line pt-4">
          <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-muted">
            To
          </p>
          <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft">
            Anyone who reads carefully
          </p>
          <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
            The internet · everywhere
          </p>
        </div>
      </div>
    </div>
  );
}
