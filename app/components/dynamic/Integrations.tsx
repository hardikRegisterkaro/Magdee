"use client";

import { useState, useEffect } from "react";
import { useReveal } from "@/app/hooks/useReveal";
import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Integration = NonNullable<ServicePageData["integrationsSection"]>["integrations"][number];
type Props = { data: NonNullable<ServicePageData["integrationsSection"]> };

const STATUS_STYLES: Record<string, string> = {
  live:            "bg-green-100 text-green-700 border-green-200",
  coming:          "bg-amber-100 text-amber-700 border-amber-200",
  "coming soon":   "bg-amber-100 text-amber-700 border-amber-200",
  beta:            "bg-blue-100 text-blue-700 border-blue-200",
  planned:         "bg-slate-100 text-slate-500 border-slate-200",
};

function statusStyle(status: string) {
  const key = status?.toLowerCase() ?? "";
  return STATUS_STYLES[key] ?? "bg-slate-100 text-slate-500 border-slate-200";
}

function IntegrationCard({
  item,
  onReadMore,
}: {
  item: Integration;
  onReadMore: () => void;
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-surface border border-line p-5 shadow-[0_4px_20px_-4px_rgba(11,16,32,0.07)] hover:shadow-[0_8px_32px_-8px_rgba(11,16,32,0.13)] transition-shadow">
      {/* Logo + status row */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="h-10 w-10 shrink-0 rounded-xl overflow-hidden bg-white border border-line flex items-center justify-center">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.platformName}
              className="h-8 w-8 object-contain"
            />
          ) : (
            <span className="text-[18px] font-bold text-ink-soft">
              {item.platformName?.[0]?.toUpperCase() ?? "?"}
            </span>
          )}
        </div>
        {item.status && (
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${statusStyle(item.status)}`}
          >
            {item.status}
          </span>
        )}
      </div>

      {/* Name */}
      <p className="font-display text-[15px] font-semibold leading-snug text-ink mb-2">
        {item.platformName}
      </p>

      {/* What it does — clamped to 2 lines, read more expands via modal */}
      {item.whatItDoes && (
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-[13px] leading-[1.6] text-ink-soft line-clamp-2">
            {item.whatItDoes}
          </p>
          <button
            onClick={onReadMore}
            className="mt-2 self-start text-[12px] font-medium text-brand hover:underline focus:outline-none cursor-pointer"
          >
            Read more
          </button>
        </div>
      )}
    </div>
  );
}

function DetailModal({
  item,
  onClose,
}: {
  item: Integration;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 220);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative z-10 w-full max-w-md rounded-2xl bg-surface border border-line p-6 shadow-[0_32px_80px_-16px_rgba(11,16,32,0.3)] transition-all duration-220 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-line text-ink-soft hover:bg-ink hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo + status */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 shrink-0 rounded-xl overflow-hidden bg-white border border-line flex items-center justify-center">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.platformName} className="h-9 w-9 object-contain" />
            ) : (
              <span className="text-[20px] font-bold text-ink-soft">
                {item.platformName?.[0]?.toUpperCase() ?? "?"}
              </span>
            )}
          </div>
          <div>
            <p className="font-display text-[17px] font-semibold text-ink">{item.platformName}</p>
            {item.status && (
              <span
                className={`mt-1 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${statusStyle(item.status)}`}
              >
                {item.status}
              </span>
            )}
          </div>
        </div>

        <hr className="mb-4 border-line" />

        <p className="text-[14px] leading-[1.7] text-ink-soft">{item.whatItDoes}</p>
      </div>
    </div>
  );
}

export default function DynamicIntegrations({ data }: Props) {
  const { ref, visible } = useReveal(0.08);
  const items = (data.integrations ?? []) as Integration[];
  const [activeItem, setActiveItem] = useState<Integration | null>(null);

  if (items.length === 0) return null;

  return (
    <>
      <section className="relative" ref={ref}>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div
              className={`reveal-up flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: "50ms" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              Integrations
            </div>
            {data.heading && (
              <h2
                className={`reveal-up mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]${visible ? " is-visible" : ""}`}
                style={{ transitionDelay: "130ms" }}
              >
                {data.heading}
              </h2>
            )}
            {data.subHeading && (
              <p
                className={`reveal-up mt-5 max-w-xl text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]${visible ? " is-visible" : ""}`}
                style={{ transitionDelay: "210ms" }}
              >
                {data.subHeading}
              </p>
            )}
          </div>

          {/* Grid — items-stretch so all cards are equal height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
            {items.map((item, i) => (
              <div
                key={i}
                className={`reveal-up h-full${visible ? " is-visible" : ""}`}
                style={{ transitionDelay: `${280 + i * 60}ms` }}
              >
                <IntegrationCard item={item} onReadMore={() => setActiveItem(item)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeItem && (
        <DetailModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  );
}
