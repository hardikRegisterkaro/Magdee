import type { ServicePageData } from "@/app/lib/fetchServicePage";
import Image from "next/image";

type Props = { data: ServicePageData["heroSection"] };

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
                <AccentHeading text={data.heading} />
              </h2>
            )}

            {data.description && (
              <p className="mt-6 max-w-[34rem] text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]">
                {data.description}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {data.ctaPrimaryText && (
                <a
                  href={data.ctaPrimaryUrl || "#"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-colors hover:bg-black"
                >
                  <AppleIcon />
                  {data.ctaPrimaryText}
                </a>
              )}
              {data.ctaSecondaryText && (
                <a
                  href={data.ctaSecondaryUrl || "#"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-background"
                >
                  <PlayIcon />
                  {data.ctaSecondaryText}
                </a>
              )}
            </div>

            {(data.ratingScore || data.ratingCount) && (
              <div className="mt-7 flex items-center gap-3">
                <Stars rating={Number(data.ratingScore) || 5} />
                {data.ratingScore && (
                  <span className="text-[14px] font-semibold text-ink">{data.ratingScore}</span>
                )}
                {data.ratingCount && (
                  <span className="text-[13.5px] text-ink-soft">· {data.ratingCount}</span>
                )}
              </div>
            )}
          </div>

          {data.phoneMockupImageUrl && (
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <Image
                src={data.phoneMockupImageUrl}
                alt="App screenshot"
                width={420}
                height={840}
                unoptimized
                className="h-auto w-full max-w-[340px] lg:max-w-[420px] object-contain drop-shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fillType = i < full ? "full" : i === full && hasHalf ? "half" : "empty";
        return <Star key={i} fill={fillType} />;
      })}
    </span>
  );
}

function Star({ fill }: { fill: "full" | "half" | "empty" }) {
  const color = fill === "empty" ? "#e6e8ef" : "#f5a524";
  if (fill === "half") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="#f5a524" />
            <stop offset="50%" stopColor="#e6e8ef" />
          </linearGradient>
        </defs>
        <path
          d="M8 1.5 9.9 5.6l4.6.6-3.3 3.2.8 4.5L8 11.8 3.9 14l.8-4.5L1.4 6.2l4.6-.6L8 1.5Z"
          fill="url(#half)"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path
        d="M8 1.5 9.9 5.6l4.6.6-3.3 3.2.8 4.5L8 11.8 3.9 14l.8-4.5L1.4 6.2l4.6-.6L8 1.5Z"
        fill={color}
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden>
      <path d="M11.4 8.5c0-1.9 1.6-2.8 1.6-2.8-.9-1.3-2.3-1.5-2.8-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.5.7-3.1 1.9-1.4 2.3-.4 5.8 1 7.7.7.9 1.5 2 2.5 1.9 1 0 1.4-.6 2.6-.6s1.6.6 2.6.6c1.1 0 1.8-.9 2.4-1.9.8-1.1 1.1-2.2 1.2-2.2-.1 0-2.4-.9-2.6-3.1ZM9.5 2.9c.5-.6.9-1.5.8-2.4-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.8 2.3.8.1 1.6-.4 2.1-1Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 2.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}
