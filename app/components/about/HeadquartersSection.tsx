const STATS = [
  { value: "2025", label: "Founded" },
  { value: "03", label: "Languages\nSpoken Daily" },
  { value: "11°N", label: "Latitude" },
  { value: "∞", label: "Coffees\nBrewed" },
];

export default function HeadquartersSection() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              02 — Headquarters · Coimbatore
            </div>

            <h2 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
              Software with a{" "}
              <em className="italic text-brand">sense of place</em>.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-[1.7] text-ink-soft">
              <p>
                We chose Coimbatore — a working city with deep textile and
                engineering roots — because it teaches you to make things that
                hold up.{" "}
                <strong className="font-semibold italic text-ink">
                  Patient AI
                </strong>{" "}
                is what happens when craft culture meets a noisy industry that's
                forgotten how to slow down.
              </p>
              <p>
                Three founders. One floor above a filter coffee shop. Eleven
                degrees north of the equator. A two-minute walk to where one
                co-founder learned to weave a saree, and four minutes from
                where another debugged his first compiler.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex min-w-[80px] flex-col gap-1.5 rounded-xl border border-line bg-white px-4 py-3.5"
                >
                  <span className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-muted whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — placeholder for image */}
          <div className="flex items-center justify-center rounded-3xl border-2 border-dashed border-line bg-surface lg:h-[420px]">
            <div className="flex flex-col items-center gap-3 py-16 text-center lg:py-0">
              <ImagePlaceholderIcon />
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Image placeholder
              </p>
              <p className="text-[13px] text-muted">Postcard card goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c8ccd8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
