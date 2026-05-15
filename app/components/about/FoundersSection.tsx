const FOUNDERS = [
  {
    initial: "A",
    color: "#3B4ED8",
    role: ["CO-FOUNDER", "PRODUCT"],
    name: "Arjun Subramanian",
    bio: "Ex-product at a payments unicorn. Cooks better than he codes.",
    location: "COIMBATORE",
    firstName: "Arjun",
  },
  {
    initial: "S",
    color: "#E8852A",
    role: ["CO-FOUNDER", "ENGINEERING"],
    name: "Saanvi Iyer",
    bio: "Linguist-turned-ML engineer. Writes documentation like poetry.",
    location: "MADURAI → COIMBATORE",
    firstName: "Saanvi",
  },
  {
    initial: "V",
    color: "#7B42E8",
    role: ["CO-FOUNDER", "DESIGN"],
    name: "Vikram Pillai",
    bio: "Designed for two well-known apps you've probably used.",
    location: "KOCHI → COIMBATORE",
    firstName: "Vikram",
  },
];

export default function FoundersSection() {
  return (
    <section id="story" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              03 — The Three of Us
            </div>
            <h2 className="mt-4 font-display text-[48px] font-semibold leading-[1.0] tracking-[-0.025em] text-ink sm:text-[60px] lg:text-[72px]">
              A small team.
            </h2>
          </div>
          <p className="max-w-[18ch] font-mono text-[11px] font-medium uppercase leading-[1.7] tracking-[0.14em] text-muted sm:text-right">
            We answer our own email. We take the bus to work.
          </p>
        </div>

        {/* Founder cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FOUNDERS.map((f, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-line bg-white px-6 pb-7 pt-6"
            >
              {/* Avatar */}
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-[22px] font-bold text-white"
                style={{ backgroundColor: f.color }}
              >
                {f.initial}
              </span>

              {/* Role tags */}
              <div className="mt-5 flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.16em]">
                <span className="text-brand">{f.role[0]}</span>
                <span className="text-muted">·</span>
                <span className="text-ink-soft">{f.role[1]}</span>
              </div>

              {/* Name */}
              <h3 className="mt-2 font-display text-[22px] font-semibold tracking-[-0.01em] text-ink">
                {f.name}
              </h3>

              {/* Bio */}
              <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-ink-soft">
                {f.bio}
              </p>

              {/* Location */}
              <div className="mt-4 flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">
                <PinIcon />
                {f.location}
              </div>

              <hr className="mt-4 border-line" />

              {/* First name */}
              <p className="mt-4 font-display text-[18px] font-semibold italic tracking-[-0.01em] text-ink">
                {f.firstName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
