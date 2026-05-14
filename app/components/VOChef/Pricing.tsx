const FEATURES = [
  "Unlimited recipes, hands-free cooking",
  "Pantry scanner with Indian ingredient library",
  "Tamil + English + Hindi voice",
  "Offline mode for saved recipes",
  "All future updates, free forever",
  "30-day full refund — no questions",
];

export default function Pricing() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            Access
          </div>

          <h2 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
            One tier, <span className="italic text-brand">paid once</span>.
            <br />
            No subscriptions.
          </h2>

          <p className="mt-6 max-w-[36rem] text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]">
            You get VOChef forever. Updates and new languages roll in
            automatically — no upsells.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-[520px] rounded-3xl border border-line bg-surface p-7 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted">
                  VOChef
                </p>
                <h3 className="mt-1.5 font-display text-[26px] font-semibold tracking-[-0.01em] text-ink sm:text-[28px]">
                  Lifetime
                </h3>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#dfe2ff] bg-[#eef1ff] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-brand">
                <StarIcon />
                Most people
              </span>
            </div>

            <div className="mt-7 flex items-end gap-3">
              <span className="font-display text-[64px] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[76px]">
                <span className="mr-1 align-[0.12em] text-[42px] font-medium text-ink-soft sm:text-[52px]">
                  ₹
                </span>
                1,499
              </span>
              <span className="pb-2 text-[12px] leading-[1.35] text-ink-soft">
                <span className="block">one-time</span>
                <span className="block text-muted">no subscription</span>
              </span>
            </div>

            <hr className="mt-7 border-line" />

            <ul className="mt-6 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14.5px] text-ink">
                  <span className="mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckIcon />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#ios"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-colors hover:bg-black"
            >
              <AppleIcon />
              Download VOChef on iOS
            </a>

            <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Android version coming Q2 2026.
              <span className="mx-2">·</span>
              30-day refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="m2.5 6.2 2.3 2.3L9.5 3.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 1l1.5 3.2L11 4.7 8.3 7.1 9 10.5 6 8.8 3 10.5l.7-3.4L1 4.7l3.5-.5L6 1z" />
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
