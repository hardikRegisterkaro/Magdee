import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: ServicePageData["heroSection"] };

function AccentHeading({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="not-italic text-accent">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function DynamicHero({ data }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(106,115,255,0.18), transparent 60%), radial-gradient(700px 420px at 0% 10%, rgba(255,106,61,0.07), transparent 60%)",
        }}
      />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-20">
          <div className="order-2 lg:order-1">
            {data.versionTag && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe6cd] bg-[#e8f7ee] px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#176c3a]">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#22a55b] opacity-60" />
                  <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#22a55b]" />
                </span>
                {data.versionTag}
              </span>
            )}

            {data.subHeading && (
              <div className="mt-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                <span className="h-px w-8 bg-accent" />
                {data.subHeading}
              </div>
            )}

            {data.title && (
              <h1 className="mt-5 font-display text-[64px] font-semibold leading-[0.95] tracking-[-0.02em] text-ink sm:text-[88px] lg:text-[112px]">
                {data.title}
              </h1>
            )}

            {data.heading && (
              <h2 className="mt-8 font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.015em] text-ink sm:text-[40px] lg:text-[44px]">
                {data.heading}
              </h2>
            )}

            {data.description && (
              <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.65] text-ink-soft sm:text-[17px]">
                {data.description}
              </p>
            )}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {data.ctaPrimaryText && (
                <a
                  href={data.ctaPrimaryUrl || "#"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-[15px] font-medium text-surface shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] transition-colors hover:bg-ink/90"
                >
                  {data.ctaPrimaryText}
                </a>
              )}
              {data.ctaSecondaryText && (
                <a
                  href={data.ctaSecondaryUrl || "#"}
                  className="inline-flex items-center gap-2 px-2 py-3.5 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {data.ctaSecondaryText}
                </a>
              )}
            </div>

            {(data.ratingScore || data.ratingCount) && (
              <div className="mt-8 flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="h-4 w-4 fill-[#f5a623]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {data.ratingScore && (
                  <span className="text-[13.5px] font-semibold text-ink">{data.ratingScore}</span>
                )}
                {data.ratingCount && (
                  <span className="text-[13px] text-ink-soft">{data.ratingCount}</span>
                )}
              </div>
            )}
          </div>

          {data.phoneMockupImageUrl && (
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <img
                src={data.phoneMockupImageUrl}
                alt="App screenshot"
                className="w-full max-w-[340px] lg:max-w-[420px] object-contain drop-shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
