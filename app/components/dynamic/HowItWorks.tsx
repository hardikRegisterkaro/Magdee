"use client";

import { useReveal } from "@/app/hooks/useReveal";
import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["howItWorksSection"]> };

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

export default function DynamicHowItWorks({ data }: Props) {
  const { ref, visible } = useReveal(0.08);

  return (
    <section className="relative" ref={ref}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {data.subHeading && (
            <div
              className={`reveal-up flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "50ms" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              {data.subHeading}
            </div>
          )}

          {data.heading && (
            <h2
              className={`reveal-up mt-6 max-w-[20ch] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[64px]${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "140ms" }}
            >
              <AccentHeading text={data.heading} />
            </h2>
          )}
        </div>

        {data.steps?.length > 0 && (
          <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
            {data.steps.map((step, i) => (
              <li
                key={i}
                className={`reveal-up rounded-2xl border border-line bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_8px_24px_-8px_rgba(30,64,175,0.1)] sm:p-8${visible ? " is-visible" : ""}`}
                style={{ transitionDelay: `${260 + i * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[12.5px] font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.label && (
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                      {step.label}
                    </span>
                  )}
                </div>

                <h3 className="mt-7 font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[24px]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
