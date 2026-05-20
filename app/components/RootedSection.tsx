import { Check, Map } from "lucide-react";
import Reveal from "./Reveal";

const HQ_FACTS = [
  "03 languages spoken daily",
  "∞ filter coffees brewed",
  "01 promise — no loud launches",
];

export default function RootedSection() {
  return (
    <section id="rooted" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <span aria-hidden className="text-[13px] leading-none">
                🇮🇳
              </span>
              Rooted in India · Tamil Nadu
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-8 max-w-4xl text-center font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[72px]">
            Rooted in India.
            <br />
            <span
              className="italic bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #0053D0 14.29%, #1651A9 50%, #0A3465 85.71%)",
                paddingRight: "0.08em",
              }}
            >
              Built for
            </span>{" "}
            the world.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-[1.6] text-ink-soft sm:text-[16px]">
            We&apos;re a small team in Coimbatore writing software that takes its
            time. India taught us to live among many languages, many constraints,
            many ways of doing the same thing — and to make beautiful things
            inside them.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <Reveal delay={120}>
            <HeadquartersCard />
          </Reveal>
          <Reveal delay={200}>
            <FoundersCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeadquartersCard() {
  return (
    <article
      className="transition-transform duration-300 hover:-translate-y-1 relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 text-white sm:p-8"
      style={{
        background:
          "linear-gradient(135deg, #0053D0 14.29%, #1651A9 50%, #0A3465 85.71%)",
        boxShadow:
          "0 30px 60px -25px rgba(10, 52, 101, 0.45), 0 10px 30px -15px rgba(0, 83, 208, 0.3)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.15), transparent 70%)",
        }}
      />

      <div className="relative">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
          <Map size={16} />
        </span>
      </div>

      <div className="relative mt-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
          — Headquarters
        </p>
        <h3 className="mt-1 font-display text-[36px] font-semibold leading-none tracking-[-0.02em] sm:text-[40px]">
          Coimbatore
        </h3>
        <p className="mt-2 text-[13.5px] text-white/80">
          Tamil Nadu, India · 11°N 77°E
        </p>

        <ul className="mt-6 space-y-2">
          {HQ_FACTS.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-[13.5px] text-white/90"
            >
              <Check size={14} strokeWidth={2.5} className="text-white/75" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FoundersCard() {
  return (
    <article className="transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-3xl border border-line bg-surface p-7 sm:p-9">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
          Founders&apos; note · 2025
        </p>
        <blockquote className="mt-4 font-display text-[22px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[24px]">
          “We named the company after the elephant — patient, careful with
          what it carries, and{" "}
          <span className="italic text-brand">
            quietly stronger than it looks.
          </span>
          ”
        </blockquote>
      </div>

      <div className="mt-8 border-t border-line pt-5">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full font-display text-[13px] font-semibold text-white ring-2 ring-surface"
              style={{ background: "#2a4bff" }}
            >
              A
            </span>
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full font-display text-[13px] font-semibold text-white ring-2 ring-surface"
              style={{ background: "#7C5CFF" }}
            >
              S
            </span>
          </div>
          <div>
            <p className="text-[14px] font-medium text-ink">Vivek</p>
            <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Co-founders, MagDee
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
