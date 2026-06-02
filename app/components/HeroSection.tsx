import MeetoryAppMockup from "./MeetoryAppMockup";
import Reveal from "./Reveal";
import HeroMarquee from "./HeroMarquee";
import { VOCHEF_PLAY_STORE_URL } from "../lib/links";
import ProductCards from "./ProductCards";

const STRIP_ITEMS = [
  "Multilingual by default",
  "On-device AI",
  "Private by default",
  "Tamil · English · Hindi · 10+ more",
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
            "radial-gradient(900px 500px at 80% -10%, rgba(106,115,255,0.18), transparent 60%), radial-gradient(700px 420px at 0% 10%, rgba(212,175,55,0.07), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex justify-center pt-6 sm:pt-10">
            <a
              href="/meetory"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink-soft backdrop-blur"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Meetory beta opens Q2 2026
              <span className="text-line">·</span>
              VOChef live on Android
              <span className="ml-1 inline-flex items-center gap-1 text-brand">
                See all
                <ArrowIcon />
              </span>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="lg:order-1">
            <Reveal delay={80}>
              <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                <span className="h-px w-8 bg-accent" />
                01 <span className="text-muted">/ 3 — Meeting intelligence</span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-5 font-display text-[42px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
                The conversation{" "}
                <span className="italic text-brand animate-headline-accent">finally listens</span>.
                <br />
                In your language.
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-[32rem] text-[15.5px] leading-[1.6] text-ink-soft sm:text-[16.5px]">
                An AI meeting assistant that joins your call, transcribes 10+
                languages, and turns every conversation into summaries you can
                find next Tuesday.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/meetory"
                  className="cta-magnetic inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(30,64,175,0.55)]"
                >
                  Request Meetory beta
                  <ArrowIcon />
                </a>
                <a
                  href={VOCHEF_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener"
                  className="cta-magnetic inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink hover:bg-background"
                >
                  <AndroidIcon /> Try VOChef on Android
                </a>
              </div>
            </Reveal>

            <ProductCards />
          </div>

          <div className="lg:order-2">
            <Reveal delay={100}>
              <div className="animate-float-soft">
                <MeetoryAppMockup />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <ProductStrip />

      <HeroMarquee items={STRIP_ITEMS} />
    </section>
  );
}

const PRODUCTS = [
  { name: "Meetory", href: "/meetory", status: "Private beta · Q2 2026", active: true },
  { name: "VOChef", href: "/vochef", status: "Live on Android", active: false },
  { name: "Ellamly", href: "/ellamly", status: "Coming late 2026", active: false },
];

function ProductStrip() {
  return (
    <div className="border-t border-line bg-surface/50">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-3 sm:gap-3 sm:py-5">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={`group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors ${
                p.active
                  ? "bg-surface ring-1 ring-brand/20 shadow-[0_0_0_3px_rgba(30,64,175,0.06)]"
                  : "hover:bg-surface"
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    p.active ? "bg-brand" : "bg-line"
                  }`}
                />
                <span className="truncate text-[13.5px] font-semibold text-ink">
                  {p.name}
                </span>
                <span className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  · {p.status}
                </span>
              </span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
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

function AndroidIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.523 15.341a1.06 1.06 0 1 1 0-2.118 1.06 1.06 0 0 1 0 2.118m-11.046 0a1.06 1.06 0 1 1 0-2.118 1.06 1.06 0 0 1 0 2.118m11.42-6.05 2.115-3.66a.44.44 0 0 0-.762-.44l-2.142 3.706A13.1 13.1 0 0 0 12 7.81c-1.875 0-3.65.412-5.108 1.087L4.75 5.191a.44.44 0 0 0-.762.44l2.115 3.66C2.474 11.265.241 14.768 0 18.86h24c-.241-4.093-2.474-7.595-6.103-9.569" />
    </svg>
  );
}
