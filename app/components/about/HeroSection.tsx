"use client";

import { useReveal } from "@/app/hooks/useReveal";
import type { AboutPageData } from "@/app/lib/fetchAboutPage";

type Props = { heroSection?: AboutPageData["heroSection"] };

export default function AboutHero({ heroSection }: Props) {
  const badge = heroSection?.heroBadgeTitle || "Our Philosophy";
  const imgUrl = heroSection?.heroImgUrl;

  const { ref, visible } = useReveal(0.05);

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 600px at 75% -5%, rgba(30,64,175,0.1), transparent 60%), radial-gradient(600px 400px at 100% 50%, rgba(106,115,255,0.07), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-24">
          {/* Left */}
          <div>
            <div
              className={`reveal-up flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "50ms" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {badge}
            </div>

            <h1
              className={`reveal-up mt-8 font-display text-[64px] font-semibold leading-[0.93] tracking-[-0.025em] text-ink sm:text-[80px] lg:text-[96px]${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "150ms" }}
            >
              Patient.
              <br />
              Careful.
              <br />
              <em className="italic text-brand">Quietly</em>{" "}
              <span>strong.</span>
            </h1>

            <div
              className={`reveal-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "280ms" }}
            >
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-all hover:bg-black active:scale-[0.97]"
              >
                Read our story
                <ArrowIcon />
              </a>
              <a
                href="#founders"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-background active:scale-[0.97]"
              >
                Meet the founders
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            className={`reveal-right flex justify-center lg:justify-end${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="Hero"
                className="w-full max-w-115 rounded-3xl object-cover p-3"
              />
            ) : (
              <div className="relative">
                <div className="relative z-10 w-75 rounded-3xl border border-line bg-white px-10 pb-14 pt-10 shadow-[0_24px_64px_-20px_rgba(15,23,42,0.18)] sm:w-85">
                  <div className="flex flex-col items-center">
                    <svg viewBox="0 0 80 36" width="120" height="56" className="text-ink" aria-hidden>
                      <path
                        d="M4 28 C 12 8, 24 8, 32 24 S 52 32, 60 12 S 76 12, 76 28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="mt-6 flex w-full flex-col gap-2 border-t border-line pt-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                          — The Mark
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                          Est. 2025
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                          No. 001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 z-20 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-brand/30 bg-white shadow-[0_8px_24px_-8px_rgba(30,64,175,0.2)]">
                  <svg viewBox="0 0 96 96" width="96" height="96" className="absolute inset-0" aria-hidden>
                    <defs>
                      <path id="circle-text-path" d="M 48,48 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
                    </defs>
                    <text fontFamily="monospace" fontSize="7.5" fontWeight="500" fill="#1E40AF" letterSpacing="2">
                      <textPath href="#circle-text-path" startOffset="0%">
                        2025 · PATIENT · TAMIL ·
                      </textPath>
                    </text>
                  </svg>
                  <svg viewBox="0 0 80 36" width="32" height="14" className="relative z-10 text-brand" aria-hidden>
                    <path
                      d="M4 28 C 12 8, 24 8, 32 24 S 52 32, 60 12 S 76 12, 76 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
