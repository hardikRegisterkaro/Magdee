import { Sparkle } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const PRODUCTS = [
  { name: "VOChef", status: "Live now", active: true },
  { name: "Mee Tory", status: "Coming soon", active: false },
  { name: "Ellamly", status: "Coming very soon", active: false },
];

const STRIP_ITEMS = [
  "Voice-first",
  "On-device AI",
  "Private by default",
  "Tamil · English · Hindi",
  "Made in Tamil Nadu",
];

export default function HeroSection() {
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
        <div className="flex justify-center pt-6 sm:pt-10">
          <a
            href="#announcements"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink-soft backdrop-blur"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            VoChef is live
            <span className="text-line">·</span>
            Mee Tory in beta
            <span className="ml-1 inline-flex items-center gap-1 text-brand">
              See all
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 pb-12 pt-8 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-16">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              <span className="h-px w-8 bg-accent" />
              01 <span className="text-muted">/ 3 — Your AI chef assistant</span>
            </div>

            <h1 className="mt-5 font-display text-[44px] font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[58px] lg:text-[72px]">
              The kitchen
              <br />
              <span className="italic text-brand">finally answers</span>
              <br />
              back.
            </h1>

            <p className="mt-6 max-w-[36rem] text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]">
              A voice-first cooking companion that knows your pantry, your pace,
              and your appetite. Hands stay on the spoon — the screen stays clean.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#ios"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(42,75,255,0.7)] transition-colors hover:bg-[#1f3ce8]"
              >
                Try VOChef on iOS
                <ArrowIcon />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-background"
              >
                <PlayIcon /> Watch 90-sec demo
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {PRODUCTS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  className={`flex items-center justify-between rounded-2xl border bg-surface px-4 py-3 text-left transition-colors ${
                    p.active
                      ? "border-brand shadow-[0_0_0_3px_rgba(42,75,255,0.08)]"
                      : "border-line hover:border-ink/20"
                  }`}
                >
                  <span>
                    <span className="block text-[14px] font-semibold text-ink">
                      {p.name}
                    </span>
                    <span className="mt-0.5 block text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">
                      {p.status}
                    </span>
                  </span>
                  <span
                    className={`ml-3 inline-block h-2 w-2 rounded-full ${
                      p.active ? "bg-brand" : "bg-line"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <PhoneMockup />
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line bg-surface/60 py-4">
        <div className="marquee-track flex items-center text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: "#64748B" }}>
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, i) => (
            <span key={i} className="flex shrink-0 items-center">
              <span className="flex items-center gap-3 px-10">
                <Sparkle size={14} color="#0066FF" strokeWidth={2} />
                <span>{item}</span>
              </span>
              <span aria-hidden style={{ color: "#64748B" }}>/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
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

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 2.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}

