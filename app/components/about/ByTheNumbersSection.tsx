const STATS = [
  {
    icon: <GridIcon />,
    value: "3",
    label: "AI Products",
    detail: "VOChef · Mee Tory · Ellamly",
  },
  {
    icon: <PinIcon />,
    value: "01",
    label: "Coimbatore HQ",
    detail: "One floor, ten desks, three filter coffee machines.",
  },
  {
    icon: <WaveIcon />,
    value: "∞",
    label: "Language-First",
    detail: "Tamil · English · Hindi · more to come",
  },
];

export default function ByTheNumbersSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#060f1e" }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
              04 — By the Numbers
            </div>
            <h2 className="mt-5 font-display text-[48px] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[60px] lg:text-[72px]">
              A small studio,
              <br />
              <em className="italic text-[#8AB1FF]">honestly</em>.
            </h2>
          </div>
          <div className="flex items-center lg:justify-end">
            <p className="max-w-[38rem] text-[15px] leading-[1.7] text-white/55 lg:text-[16px]">
              No &ldquo;founded-by-ex-FAANG&rdquo; page. No fundraising rounds
              dressed up as milestones. Just the actual numbers behind a small,
              patient team in South India.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-white/10 lg:mt-16" />

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:mt-16">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70">
                {stat.icon}
              </span>

              <span className="mt-7 font-display text-[64px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[72px]">
                {stat.value}
              </span>

              <span className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8AB1FF]">
                {stat.label}
              </span>

              <p className="mt-2 text-[14px] leading-[1.65] text-white/50">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 12 C 5 7, 8 7, 11 12 S 17 17, 20 12 S 23 7, 24 12" />
    </svg>
  );
}
