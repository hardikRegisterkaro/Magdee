import { ArrowRight, Brain, Check, Mic } from "lucide-react";

const OUTPUT_ITEMS = [
  { label: "Decision", body: "Ship v0.4 Fri", dot: "#16a34a" },
  { label: "Owner", body: "Priya · auth fix", dot: "#2a4bff" },
  { label: "Reminder", body: "Anjali birthday", dot: "#a78bfa" },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          03 — How it works
        </div>

        <h2 className="mt-5 max-w-4xl font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[64px]">
          From <span className="italic text-brand">noise</span> to a next step,
          in one calm breath.
        </h2>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:mt-16 lg:grid-cols-[1fr_auto_1.05fr_auto_1fr] lg:gap-3">
          <InputCard />
          <Connector />
          <CoreCard />
          <Connector />
          <OutputCard />
        </div>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center lg:px-1">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-[0_1px_0_rgba(15,23,42,0.04)] lg:h-11 lg:w-11">
        <ArrowRight size={16} className="lg:rotate-0 rotate-90" />
      </span>
    </div>
  );
}

function InputCard() {
  return (
    <article className="flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#e0524e]">
        Input
      </p>
      <h3 className="mt-1.5 font-display text-[24px] font-semibold tracking-[-0.01em] text-ink">
        Scattered
      </h3>
      <p className="mt-1.5 text-[13.5px] text-ink-soft">
        Voice notes, screenshots, half-typed lists.
      </p>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-background px-3 py-2.5">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e0524e]/10 text-[#e0524e]">
          <Mic size={12} />
        </span>
        <span className="h-1.5 flex-1 rounded-full bg-line" />
      </div>

      <div className="mt-2.5 rounded-xl border border-line bg-background px-3 py-2.5 text-[12.5px] italic text-ink-soft">
        “uhh, ship by friday, also the ind...”
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <FilePill name="screenshot.png" tone="peach" />
        <FilePill name="notes-2.txt" tone="rose" />
        <FilePill name="whatsapp.jpg" tone="lavender" />
      </div>
    </article>
  );
}

function FilePill({
  name,
  tone,
}: {
  name: string;
  tone: "peach" | "rose" | "lavender";
}) {
  const tones = {
    peach: { bg: "#FFE8C2", color: "#9a6a14" },
    rose: { bg: "#FFD9D4", color: "#a8362e" },
    lavender: { bg: "#E7DEFF", color: "#5b3fb0" },
  } as const;
  const t = tones[tone];
  return (
    <span
      className="rounded-md px-2 py-0.5 font-mono text-[11px]"
      style={{ background: t.bg, color: t.color }}
    >
      {name}
    </span>
  );
}

function CoreCard() {
  return (
    <article
      className="relative flex aspect-square flex-col items-center justify-between overflow-hidden rounded-3xl p-7 text-white sm:p-8"
      style={{
        background:
          "linear-gradient(135deg, #0053D0 14.29%, #1651A9 50%, #0A3465 85.71%)",
        boxShadow:
          "0 30px 60px -25px rgba(10, 52, 101, 0.55), 0 10px 30px -15px rgba(0, 83, 208, 0.4)",
      }}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
        MagDee Core
      </p>

      <div className="relative flex h-36 w-36 items-center justify-center">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border border-white/30"
        />

        <span className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
          <Brain size={34} className="text-brand" strokeWidth={1.75} />
        </span>

        <span
          aria-hidden
          className="absolute h-2.5 w-2.5 rounded-full bg-white"
          style={{ top: "16px", right: "16px" }}
        />
        <span
          aria-hidden
          className="absolute h-2.5 w-2.5 rounded-full bg-[#ffd566]"
          style={{ bottom: "16px", left: "16px" }}
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-center font-display text-[24px] font-semibold tracking-[-0.01em] sm:text-[26px]">
          One quiet model
        </h3>
        <p className="mt-2 max-w-[20rem] text-center text-[13.5px] leading-[1.5] text-white/85">
          Reads everything. Asks one good question back. Forgets when it
          should.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] text-white/85">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#7ce0a3] opacity-70" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#7ce0a3]" />
          </span>
          thinking · 142ms
        </div>
      </div>
    </article>
  );
}

function OutputCard() {
  return (
    <article className="flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0f9d6e]">
        Output
      </p>
      <h3 className="mt-1.5 font-display text-[24px] font-semibold tracking-[-0.01em] text-ink">
        Structured
      </h3>
      <p className="mt-1.5 text-[13.5px] text-ink-soft">
        A plan, a meal, a meeting summary.
      </p>

      <ul className="mt-5 space-y-2.5">
        {OUTPUT_ITEMS.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-3 rounded-xl border border-line bg-background px-3 py-2.5"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: row.dot }}
            />
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-ink-soft">
              {row.label}
            </span>
            <span className="flex-1 truncate text-[13px] text-ink">
              {row.body}
            </span>
            <Check size={14} className="text-[#0f9d6e]" strokeWidth={2.5} />
          </li>
        ))}
      </ul>
    </article>
  );
}
