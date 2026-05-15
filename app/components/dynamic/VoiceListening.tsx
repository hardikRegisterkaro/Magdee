import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["voiceListeningSection"]> };

export default function DynamicVoiceListening({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Demo card */}
          <div className="order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, #0A192F 14.29%, #1E3A8A 50%, #3B5BDB 85.71%)",
              }}
            >
              {data.languageTag && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#3bd28a] opacity-60" />
                    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#3bd28a]" />
                  </span>
                  Listening · {data.languageTag}
                </span>
              )}
              {data.sampleQuote && (
                <p className="mt-7 font-display text-[20px] font-semibold italic leading-[1.35] text-white sm:text-[22px]">
                  &ldquo;{data.sampleQuote}&rdquo;
                </p>
              )}
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            {data.tagText && (
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {data.tagText}
              </div>
            )}
            <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
              {data.heading}
            </h2>
            {data.subHeading && (
              <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.65] text-ink-soft">
                {data.subHeading}
              </p>
            )}
            {data.stats?.length > 0 && (
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {data.stats.map((stat, i) => (
                  <div key={i}>
                    <dt className="text-[28px] font-semibold tracking-[-0.02em] text-ink">
                      {stat.value}
                    </dt>
                    <dd className="mt-0.5 text-[13px] text-ink-soft">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            )}
            {data.ctaText && (
              <a
                href={data.ctaHref || "#"}
                className="mt-7 inline-flex items-center text-[14px] font-medium text-accent hover:underline"
              >
                {data.ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
