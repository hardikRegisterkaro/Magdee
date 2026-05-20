"use client";

import { useReveal } from "@/app/hooks/useReveal";
import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Plan = NonNullable<ServicePageData["pricingSection"]>["plans"][number];
type Props = { data: NonNullable<ServicePageData["pricingSection"]> };

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

function PlanCard({ plan, featured }: { plan: Plan; featured: boolean }) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
        featured
          ? "bg-ink text-white shadow-[0_32px_80px_-20px_rgba(11,16,32,0.45)] scale-[1.03] z-10"
          : "bg-surface border border-line shadow-[0_4px_24px_-4px_rgba(11,16,32,0.08)]"
      }`}
    >
      {/* Plan identity row — label left, badge right (inside card) */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          {plan.planLabel && (
            <p className={`text-[10px] font-medium uppercase tracking-[0.18em] mb-1 ${featured ? "text-white/50" : "text-muted"}`}>
              {plan.planLabel}
            </p>
          )}
          {plan.planName && (
            <h3 className={`font-display text-[18px] font-semibold tracking-[-0.01em] ${featured ? "text-white" : "text-ink"}`}>
              {plan.planName}
            </h3>
          )}
        </div>
        {plan.badge && (
          <span
            className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] ${
              featured
                ? "bg-white/15 text-white border border-white/20"
                : "bg-[#eef1ff] border border-[#dfe2ff] text-brand"
            }`}
          >
            <StarIcon featured={featured} />
            {plan.badge}
          </span>
        )}
      </div>

      {/* Price block — big number, billing note below */}
      <div className="mb-5">
        <div className="flex items-baseline gap-1">
          {plan.currency && (
            <span className={`text-[20px] font-medium ${featured ? "text-white/70" : "text-ink-soft"}`}>
              {plan.currency}
            </span>
          )}
          <span className={`font-display text-[38px] font-semibold leading-none tracking-[-0.03em] ${featured ? "text-white" : "text-ink"}`}>
            {plan.price}
          </span>
        </div>
        {plan.billingNote && (
          <p className={`mt-1 text-[11px] leading-normal ${featured ? "text-white/50" : "text-ink-soft"}`}>
            {plan.billingNote}
          </p>
        )}
      </div>

      {/* CTA */}
      {plan.ctaText && (
        <a
          href={plan.ctaUrl || "#"}
          className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-[15px] font-medium transition-all active:scale-[0.97] mb-6 ${
            featured
              ? "bg-white text-ink shadow-[0_8px_20px_-8px_rgba(255,255,255,0.4)] hover:bg-white/90"
              : "bg-ink text-white shadow-[0_8px_20px_-8px_rgba(11,16,32,0.5)] hover:bg-black"
          }`}
        >
          {plan.ctaText}
        </a>
      )}

      <hr className={`mb-6 ${featured ? "border-white/10" : "border-line"}`} />

      {/* Features */}
      {plan.features?.length > 0 && (
        <ul className="space-y-2.5 flex-1 min-h-0">
          {plan.features.map((feat, i) => (
            <li key={i} className={`flex items-start gap-2.5 text-[12.5px] ${featured ? "text-white/85" : "text-ink"}`}>
              <span className={`mt-0.75 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${featured ? "bg-white/15 text-white" : "bg-brand/10 text-brand"}`}>
                <CheckIcon />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer note */}
      {(plan.launchDate || plan.refundNote) && (
        <p className={`mt-6 text-center font-mono text-[10.5px] uppercase tracking-[0.14em] ${featured ? "text-white/40" : "text-muted"}`}>
          {plan.launchDate && <span>{plan.launchDate}</span>}
          {plan.launchDate && plan.refundNote && <span className="mx-2">·</span>}
          {plan.refundNote && <span>{plan.refundNote}</span>}
        </p>
      )}
    </div>
  );
}

export default function DynamicPricing({ data }: Props) {
  const { ref, visible } = useReveal(0.08);
  const plans = data.plans ?? [];

  if (plans.length === 0) return null;

  // Mark a plan as featured if it has a badge (first one found)
  const featuredIndex = plans.findIndex((p) => p.badge);

  const gridClass =
    plans.length === 1
      ? "max-w-sm mx-auto"
      : plans.length === 2
      ? "grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
      : plans.length === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="relative" ref={ref}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          {data.tagText && (
            <div
              className={`reveal-up flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "50ms" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              {data.tagText}
            </div>
          )}
          {data.heading && (
            <h2
              className={`reveal-up mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "140ms" }}
            >
              <AccentHeading text={data.heading} />
            </h2>
          )}
          {data.subHeading && (
            <p
              className={`reveal-up mt-6 max-w-xl text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "220ms" }}
            >
              {data.subHeading}
            </p>
          )}
        </div>

        {/* Cards grid */}
        <div className={`${gridClass} gap-5 items-stretch`}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal-up h-full${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${300 + i * 70}ms` }}
            >
              <PlanCard plan={plan} featured={i === featuredIndex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="m2.5 6.2 2.3 2.3L9.5 3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ featured }: { featured: boolean }) {
  return (
    <svg width="9" height="9" viewBox="0 0 12 12" fill={featured ? "white" : "currentColor"} aria-hidden>
      <path d="M6 1l1.5 3.2L11 4.7 8.3 7.1 9 10.5 6 8.8 3 10.5l.7-3.4L1 4.7l3.5-.5L6 1z" />
    </svg>
  );
}
