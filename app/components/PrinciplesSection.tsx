import { Brain, Compass, Shield, Waves, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Principle = {
  overline: string;
  title: string;
  body: string;
  icon: LucideIcon;
  gradient: string;
};

const PRINCIPLES: Principle[] = [
  {
    overline: "Adaptive intelligence",
    title: "Smart.",
    body: "Models that learn your patterns and accent — not the other way around. Small footprint, large attention.",
    icon: Brain,
    gradient:
      "linear-gradient(180deg, rgba(0,102,255,0.10) 0%, rgba(124,92,255,0.05) 100%)",
  },
  {
    overline: "Designed by subtraction",
    title: "Simple.",
    body: "No prompts to memorize. No settings to bury. Just speak, type, or let it watch — it understands.",
    icon: Waves,
    gradient:
      "linear-gradient(180deg, rgba(16,185,129,0.10) 0%, rgba(0,102,255,0.05) 100%)",
  },
  {
    overline: "Purpose, not features",
    title: "Strategic.",
    body: "Each product solves one job, completely. We refuse to be everything to everyone — that’s how we make better things.",
    icon: Compass,
    gradient:
      "linear-gradient(180deg, rgba(255,120,73,0.10) 0%, rgba(245,158,11,0.05) 100%)",
  },
  {
    overline: "Privacy by construction",
    title: "Secure.",
    body: "Local processing where possible. Your kitchen, meetings, and life stay yours — encrypted, ephemeral, never sold.",
    icon: Shield,
    gradient:
      "linear-gradient(180deg, rgba(124,92,255,0.10) 0%, rgba(0,102,255,0.05) 100%)",
  },
];

export default function PrinciplesSection() {
  return (
    <section id="principles" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            01 — Principles
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-4xl font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[68px]">
            Four words we measure{" "}
            <span className="italic text-brand">everything</span>{" "}
            against.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={150 + i * 90}>
              <PrincipleCard
                principle={p}
                index={i + 1}
                total={PRINCIPLES.length}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({
  principle,
  index,
  total,
}: {
  principle: Principle;
  index: number;
  total: number;
}) {
  const Icon = principle.icon;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <article
      className="group relative flex aspect-square flex-col justify-between rounded-3xl border border-line/70 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
      style={{ background: principle.gradient }}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_10px_24px_-12px_rgba(42,75,255,0.55)]">
          <Icon size={18} strokeWidth={2} />
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.16em] text-ink-soft/70">
          {pad(index)} / {pad(total)}
        </span>
      </div>

      <div>
        <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-brand">
          {principle.overline}
        </p>
        <h3 className="mt-1.5 font-display text-[24px] font-semibold tracking-[-0.01em] text-ink sm:text-[26px]">
          {principle.title}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.5] text-ink-soft">
          {principle.body}
        </p>
      </div>
    </article>
  );
}
