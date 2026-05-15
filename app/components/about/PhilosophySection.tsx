import type { AboutPageData } from "@/app/lib/fetchAboutPage";

type Props = { approachSection?: AboutPageData["approachSection"] };

const FALLBACK_PILLARS = [
  { cardTitle: "Patient.", cardDescription: "We ship when it's ready, not when it's loud. No launch theater, no quarterly desperation, no roadmap-as-marketing." },
  { cardTitle: "Careful.", cardDescription: "Every interaction is examined for noise. We remove before we add. The best feature is often the one we didn't ship." },
  { cardTitle: "Strong.", cardDescription: "Small models, large attention. A quiet team doing serious work. The elephant carries a lot — gently." },
];

const ICONS = [<ClockIcon key="clock" />, <SearchIcon key="search" />, <EyeIcon key="eye" />];

export default function PhilosophySection({ approachSection }: Props) {
  const cards =
    approachSection?.approachCards?.length
      ? approachSection.approachCards
      : FALLBACK_PILLARS;

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-white px-7 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f2f7]">
                  {ICONS[i % ICONS.length]}
                </span>
                <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
                  {String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[22px] font-semibold tracking-[-0.01em] text-ink">
                {card.cardTitle}
              </h3>

              <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-soft">
                {card.cardDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
