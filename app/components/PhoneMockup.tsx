export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] select-none sm:max-w-[360px]">
      <div className="relative aspect-[9/16] rounded-[44px] border border-[#0b1020] bg-[#0b1020] p-[8px] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] sm:aspect-[9/17] lg:aspect-[9/18.5]">
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white">
          <div className="flex items-center justify-between px-6 pt-3 text-[12px] font-medium text-ink">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-[#0b1020]" />
            <span className="flex items-center gap-1 opacity-70">
              <span className="block h-[6px] w-[18px] rounded-sm bg-ink" />
              <span className="block h-[6px] w-[6px] rounded-full border border-ink" />
            </span>
          </div>

          <div className="px-5 pt-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  Cooking now
                </p>
                <h3 className="mt-0.5 text-[18px] font-semibold leading-tight text-ink">
                  Paneer Bhurji
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-warm px-2.5 py-1 text-[11px] font-medium text-[#9b5d20]">
                <span aria-hidden>🔥</span> Medium
              </span>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff2d6] via-[#ffe2cc] to-[#fde2e0] p-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2 py-1 text-[11px] font-medium text-ink">
                <span aria-hidden>⏱</span> 12:04
              </span>

              <div className="relative mx-auto mt-3 flex h-[150px] w-[150px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white/70 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]" />
                <span aria-hidden className="relative text-[34px] text-accent">
                  <ChefIcon />
                </span>

                <Pill className="absolute -top-1 right-2">paneer</Pill>
                <Pill className="absolute left-0 top-1/2 -translate-y-1/2">chilli</Pill>
                <Pill className="absolute right-0 top-1/2 -translate-y-1/2">tomato</Pill>
                <Pill className="absolute -bottom-1 left-1/2 -translate-x-1/2">cumin</Pill>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-line bg-surface p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                <span className="text-brand">Step 3</span> / 5 · 2 min
              </p>
              <p className="mt-1.5 text-[14px] leading-snug text-ink">
                Add crumbled paneer. Stir gently — don&apos;t let it brown.
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full w-[60%] rounded-full bg-accent" />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2.5 rounded-full bg-[#eef1ff] px-3 py-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                <MicIcon />
              </span>
              <span className="text-[13px] text-ink-soft">
                &ldquo;Hey MagDee, next step&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-ink shadow-[0_1px_4px_rgba(15,23,42,0.06)] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

function ChefIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <path
        d="M14 28h16v4a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2v-4Z"
        fill="#ff6a3d"
        opacity="0.85"
      />
      <path
        d="M11 21a6 6 0 0 1 6-6 6 6 0 0 1 5-2.7A6 6 0 0 1 27 15a6 6 0 0 1 6 6c0 3.4-2.7 6.1-6 6.1H17c-3.3 0-6-2.7-6-6.1Z"
        fill="#ff8a5b"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="5" y="2" width="4" height="7" rx="2" fill="currentColor" />
      <path
        d="M3.5 7a3.5 3.5 0 0 0 7 0M7 10.5V12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
