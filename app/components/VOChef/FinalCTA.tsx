import { VOCHEF_PLAY_STORE_URL } from "../../lib/links";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A192F 14.29%, #1E3A8A 50%, #3B5BDB 85.71%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#3bd28a] opacity-60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#3bd28a]" />
            </span>
            Ready when you are
          </span>

          <h2 className="mt-7 max-w-[20ch] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[72px]">
            Get a <span className="italic text-[#8AB1FF]">patient</span> kitchen
            <br className="hidden sm:block" />{" "}
            in your pocket.
          </h2>

          <p className="mt-6 max-w-[40rem] text-[15px] leading-[1.6] text-white/70 sm:text-[16px]">
            10 minutes to set up. 30 days to fall in love. 30 days to walk away
            if you don&apos;t.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={VOCHEF_PLAY_STORE_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-[15px] font-medium text-ink shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] transition-colors hover:bg-white/90"
            >
              <AndroidIcon />
              Get VOChef for ₹1,499
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/0 px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              View full feature list
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AndroidIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.523 15.341a1.06 1.06 0 1 1 0-2.118 1.06 1.06 0 0 1 0 2.118m-11.046 0a1.06 1.06 0 1 1 0-2.118 1.06 1.06 0 0 1 0 2.118m11.42-6.05 2.115-3.66a.44.44 0 0 0-.762-.44l-2.142 3.706A13.1 13.1 0 0 0 12 7.81c-1.875 0-3.65.412-5.108 1.087L4.75 5.191a.44.44 0 0 0-.762.44l2.115 3.66C2.474 11.265.241 14.768 0 18.86h24c-.241-4.093-2.474-7.595-6.103-9.569" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
