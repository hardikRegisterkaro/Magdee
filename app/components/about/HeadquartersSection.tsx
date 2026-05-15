import type { AboutPageData } from "@/app/lib/fetchAboutPage";

type Props = { aboutSection?: AboutPageData["aboutSection"] };

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

const FALLBACK_STATS = [
  { statTitle: "Founded", statValue: "2025" },
  { statTitle: "Languages\nSpoken Daily", statValue: "03" },
  { statTitle: "Latitude", statValue: "11°N" },
  { statTitle: "Coffees\nBrewed", statValue: "∞" },
];

export default function HeadquartersSection({ aboutSection }: Props) {
  const badgeText = aboutSection?.aboutBadgeTitle || "02 — Headquarters · Coimbatore";
  const heading = aboutSection?.aboutHeading || "Software with a *sense of place*.";
  const description = aboutSection?.aboutDescription || "";
  const stats = aboutSection?.aboutStats?.length ? aboutSection.aboutStats : FALLBACK_STATS;

  const paragraphs = description
    ? description.split(/\n\n+/).filter(Boolean)
    : [
        "We chose Coimbatore — a working city with deep textile and engineering roots — because it teaches you to make things that hold up. Patient AI is what happens when craft culture meets a noisy industry that's forgotten how to slow down.",
        "Three founders. One floor above a filter coffee shop. Eleven degrees north of the equator. A two-minute walk to where one co-founder learned to weave a saree, and four minutes from where another debugged his first compiler.",
      ];

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {badgeText}
            </div>

            <h2 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
              <AccentHeading text={heading} />
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[1.7] text-ink-soft">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex min-w-[80px] flex-col gap-1.5 rounded-xl border border-line bg-white px-4 py-3.5"
                >
                  <span className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                    {String(stat.statValue)}
                  </span>
                  <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-muted whitespace-pre-line">
                    {stat.statTitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image or placeholder */}
          {aboutSection?.aboutImgUrl ? (
            <div className="overflow-hidden rounded-3xl lg:h-[420px]">
              <img
                src={aboutSection.aboutImgUrl}
                alt="Headquarters"
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-3xl border-2 border-dashed border-line bg-surface lg:h-[420px]">
              <div className="flex flex-col items-center gap-3 py-16 text-center lg:py-0">
                <ImagePlaceholderIcon />
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Image placeholder
                </p>
                <p className="text-[13px] text-muted">Postcard card goes here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8ccd8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
