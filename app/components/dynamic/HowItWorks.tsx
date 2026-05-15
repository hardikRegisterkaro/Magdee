import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["howItWorksSection"]> };

export default function DynamicHowItWorks({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {data.subHeading && (
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              {data.subHeading}
            </div>
          )}
          <h2 className="mt-6 max-w-[20ch] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[64px]">
            {data.heading}
          </h2>
        </div>

        {data.steps?.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.label && (
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
                      {step.label}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-[20px] font-semibold leading-[1.2] text-ink sm:text-[22px]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-ink-soft">{step.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
