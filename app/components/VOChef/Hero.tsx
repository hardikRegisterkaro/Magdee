import PhoneMockup from "../PhoneMockup";
import { VOCHEF_PLAY_STORE_URL } from "../../lib/links";

export default function VOChefHero() {
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe6cd] bg-[#e8f7ee] px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#176c3a]">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#22a55b] opacity-60" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#22a55b]" />
              </span>
              Live
              <span className="text-[#9bc6ab]">·</span>
              v1.2 on Android
            </span>

            <div className="mt-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              <span className="h-px w-8 bg-accent" />
              01 <span className="text-muted">/ 3 — Your AI chef assistant</span>
            </div>

            <h1 className="mt-5 font-display text-[64px] font-semibold leading-[0.95] tracking-[-0.02em] text-ink sm:text-[88px] lg:text-[112px]">
              VOChef
            </h1>

            <h2 className="mt-8 font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.015em] text-ink sm:text-[40px] lg:text-[44px]">
              The kitchen{" "}
              <span className="italic text-brand">finally</span>
              <br />
              answers back.
            </h2>

            <p className="mt-6 max-w-[34rem] text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]">
              A voice-first cooking companion that adapts to your pantry, your
              pace, and what you actually crave. Hands stay on the spoon. The
              screen stays clean.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={VOCHEF_PLAY_STORE_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center rounded-lg justify-center gap-2 bg-ink px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-colors hover:bg-black"
              >
                <AndroidIcon /> Download on Android
              </a>
              <a
                href="#demo"
                className="inline-flex items-center rounded-lg justify-center gap-2 border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-background"
              >
                <PlayIcon /> Watch 90-sec demo
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <PhoneMockup />
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

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 2.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}
