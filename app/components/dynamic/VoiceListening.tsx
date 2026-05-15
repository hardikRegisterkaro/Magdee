import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["voiceListeningSection"]> };

function AccentHeading({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="italic text-brand">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function DynamicVoiceListening({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Demo card / image */}
          <div className="order-2 lg:order-1">
            {data.imageUrl ? (
              <img
                src={data.imageUrl}
                alt="Voice Listening UI"
                className="w-full h-full object-contain rounded-xl"
              />
            ) : (
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
            )}
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            {data.tagText && (
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                {data.tagText}
              </div>
            )}

            {data.heading && (
              <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
                <AccentHeading text={data.heading} />
              </h2>
            )}

            {data.subHeading && (
              <p className="mt-6 max-w-[34rem] text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]">
                {data.subHeading}
              </p>
            )}

            {data.stats?.length > 0 && (
              <ul className="mt-7 grid max-w-[26rem] grid-cols-3 gap-3">
                {data.stats.map((stat, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-line bg-surface px-3.5 py-3"
                  >
                    <p className="font-display text-[20px] font-semibold tracking-[-0.01em] text-ink sm:text-[22px]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {data.ctaText && (
              <a
                href={data.ctaHref || "#"}
                className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand transition-colors hover:text-[#1f3ce8]"
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
