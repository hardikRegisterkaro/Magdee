import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["pricingSection"]> };

export default function DynamicPricing({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {data.tagText && (
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              {data.tagText}
            </div>
          )}
          <h2 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
            {data.heading}
          </h2>
          {data.subHeading && (
            <p className="mt-6 max-w-[36rem] text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]">
              {data.subHeading}
            </p>
          )}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-[520px] rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                {data.planLabel && (
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">
                    {data.planLabel}
                  </p>
                )}
                <h3 className="mt-1.5 font-display text-[26px] font-semibold tracking-[-0.01em] text-ink sm:text-[28px]">
                  {data.planName}
                </h3>
              </div>
              {data.badge && (
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                  {data.badge}
                </span>
              )}
            </div>

            <div className="mt-6 flex items-end gap-1.5">
              <span className="font-display text-[48px] font-semibold leading-none tracking-[-0.02em] text-ink">
                {data.currency}{data.price}
              </span>
            </div>
            {data.billingNote && (
              <p className="mt-1 text-[13px] text-muted">{data.billingNote}</p>
            )}

            {data.features?.length > 0 && (
              <ul className="mt-8 space-y-3">
                {data.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[14.5px] text-ink-soft">
                    <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            )}

            {data.ctaText && (
              <a
                href={data.ctaUrl || "#"}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-[15px] font-medium text-surface shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] transition-colors hover:bg-ink/90"
              >
                {data.ctaText}
              </a>
            )}

            {(data.launchDate || data.refundNote) && (
              <div className="mt-5 flex items-center justify-center gap-3 text-[12px] text-muted">
                {data.launchDate && <span>{data.launchDate}</span>}
                {data.launchDate && data.refundNote && <span>·</span>}
                {data.refundNote && <span>{data.refundNote}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
