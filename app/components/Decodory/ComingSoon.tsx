import {
  BookOpen,
  Brain,
  Calendar,
  Database,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  MoveDown,
  Puzzle,
  Settings,
  Target,
  Wrench,
} from "lucide-react";
import EarlyAccessForm from "../EarlyAccessForm";

export default function DecodoryComingSoon() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Pillars />
      <WhyDecodory />
      <FeaturedPuzzle />
      <FinalCTA />
    </main>
  );
}

/* ─────────────────────────── 1. HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(124,92,255,0.18), transparent 60%), radial-gradient(700px 420px at 0% 10%, rgba(212,175,55,0.07), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#7c5cff] opacity-60" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#7c5cff]" />
              </span>
              Coming late 2026
            </span>

            <h1 className="mt-6 font-display text-[48px] font-bold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-[72px]">
              Decodory
            </h1>

            <h2 className="mt-6 max-w-2xl font-display text-[24px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[30px] lg:text-[34px]">
              Decode the tech behind{" "}
              <span className="italic text-brand">everyday life</span>.
            </h2>

            <p className="mt-6 max-w-[36rem] text-[15.5px] leading-[1.6] text-ink-soft sm:text-[16.5px]">
              Solve real-world puzzles — a tea stall during evening rush, a hospital
              ER, a busy bank — and discover the IT concepts hidden inside them. No
              code. No jargon. Just decode.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="cta-magnetic inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(30,64,175,0.55)]"
              >
                Join the waitlist
              </a>
              <a
                href="#how-it-works"
                className="cta-magnetic inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink hover:bg-background"
              >
                See how it works
                <MoveDown size={14} />
              </a>
            </div>
          </div>

          <ConceptStack />
        </div>
      </div>
    </section>
  );
}

function ConceptStack() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[480px] select-none sm:h-[460px] lg:h-[500px]">
      {/* Back card (top-right offset) — Hospital ER */}
      <article
        className="absolute right-0 top-2 w-[78%] rotate-[3deg] rounded-2xl border border-line bg-surface p-5 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.30)]"
        style={{ transform: "rotate(3deg)" }}
      >
        <div className="flex items-center gap-2">
          <ConceptIcon kind="er" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Hospital ER
          </span>
        </div>
        <p className="mt-4 text-[13px] leading-snug text-ink">
          Three patients walk in. A heart attack, a sprained ankle, a fever.
          Which do you treat first?
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Decoded ·
          </span>
          <span className="font-display text-[14px] font-semibold tracking-[-0.01em] text-brand">
            Priority Queue
          </span>
        </div>
      </article>

      {/* Back card (bottom-left offset) — Busy Bank */}
      <article
        className="absolute bottom-0 left-0 w-[78%] -rotate-[3deg] rounded-2xl border border-line bg-surface p-5 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.30)]"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="flex items-center gap-2">
          <ConceptIcon kind="bank" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Busy Bank
          </span>
        </div>
        <p className="mt-4 text-[13px] leading-snug text-ink">
          Two ATMs. One account. Both customers withdraw at the same second. Who
          gets the money?
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Decoded ·
          </span>
          <span className="font-display text-[14px] font-semibold tracking-[-0.01em] text-brand">
            Race Condition
          </span>
        </div>
      </article>

      {/* Front card — Tea Stall (featured puzzle) */}
      <article
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-line bg-surface p-6 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45),0_15px_30px_-15px_rgba(15,23,42,0.15)] sm:p-7"
        style={{ transform: "translate(-50%, -50%) rotate(-1deg)" }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ConceptIcon kind="chai" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
              Tea Stall · 6 PM
            </span>
          </div>
          <span className="rounded-full bg-gold-bg px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-gold">
            Puzzle 001
          </span>
        </div>

        <p className="mt-5 text-[14px] leading-[1.55] text-ink">
          <strong>60 customers / hour.</strong> Aunty is the only one taking
          orders, making chai, and handing them out. Customers wait{" "}
          <strong>8 minutes</strong>. Yesterday, <strong>38 walked away</strong>.
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-dashed border-line bg-background/60 px-3 py-2.5">
          <span className="text-[11px] text-ink-soft">What would you do?</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2 py-0.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-brand">
            <span className="h-1 w-1 rounded-full bg-brand" />6 options
          </span>
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Hidden concept ·
            </span>
            <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-brand">
              Queue Theory + Load Balancing
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

function ConceptIcon({ kind }: { kind: "chai" | "er" | "bank" }) {
  const stroke = "currentColor";
  if (kind === "chai") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 10h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6Z" />
          <path d="M16 12h2a2 2 0 0 1 0 4h-2" />
          <path d="M8 6c0-1 1-1 1-2M11 6c0-1 1-1 1-2" />
        </svg>
      </span>
    );
  }
  if (kind === "er") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#e0524e]/10 text-[#e0524e]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#0f9d6e]/10 text-[#0f9d6e]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 10h18M5 10v9M19 10v9M9 10v9M15 10v9M3 21h18M3 10l9-6 9 6" />
      </svg>
    </span>
  );
}

/* ─────────────────────────── 2. HOW IT WORKS ─────────────────────────── */

const STEPS = [
  {
    n: "01",
    icon: BookOpen,
    title: "Read a real story",
    body: "A delivery hub during Diwali rush. A library with a missing book. A bank with two ATMs and one account. Everyday situations — with a hidden engineering problem inside.",
  },
  {
    n: "02",
    icon: Target,
    title: "Solve it your way",
    body: "Pick the right mix of options. Drag steps in order. Balance the constraints. Use common sense, not jargon.",
  },
  {
    n: "03",
    icon: Lightbulb,
    title: "Discover what you built",
    body: "Turns out you just designed a load balancer. Or prevented a race condition. Or chose the right database for the job. Now you know the name.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-surface/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <Puzzle size={12} />
          How it works
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
          Every app you build, you&apos;ve{" "}
          <span className="italic text-brand">already built without code</span>.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.n}
                className="relative flex flex-col rounded-3xl border border-line bg-surface p-7"
              >
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
                  Step {s.n}
                </span>
                <span className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark/5 text-brand-dark">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-[20px] font-semibold tracking-[-0.01em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 3. PILLARS ─────────────────────────── */

const PILLARS = [
  {
    icon: Brain,
    name: "Programming Logic",
    body: "Deadlocks, recursion, race conditions — and the bugs they cause.",
  },
  {
    icon: Globe,
    name: "Networking",
    body: "DNS, load balancing, packet loss — the invisible plumbing of the web.",
  },
  {
    icon: Lock,
    name: "Security",
    body: "Phishing, encryption, SQL injection — why attackers think the way they do.",
  },
  {
    icon: Database,
    name: "Database",
    body: "Indexing, caching, ACID — the choices that make a system fast or fatal.",
  },
  {
    icon: Settings,
    name: "DevOps",
    body: "CI/CD, rollback, scaling — how production stays alive at 3 AM.",
  },
  {
    icon: Layers,
    name: "System Design",
    body: "Queues, pub-sub, microservices — building things that don't fall over.",
  },
];

function Pillars() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          What you&apos;ll learn
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
          Six pillars.{" "}
          <span className="italic text-brand">One puzzle a day</span> across all of them.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.name}
                className="flex flex-col rounded-3xl border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_10px_24px_-12px_rgba(30,64,175,0.55)]">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-[18px] font-semibold tracking-[-0.01em] text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-soft">
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 4. WHY DECODORY ─────────────────────────── */

const DIFFERENTIATORS = [
  {
    icon: Puzzle,
    title: "It's a puzzle, not a quiz",
    body: "We don't ask “which of these is load balancing?” We hand you a tea stall during rush hour and a ₹5,000 budget. You figure it out. Then we reveal the concept.",
  },
  {
    icon: Wrench,
    title: "Built for working engineers",
    body: "Easy isn't easy. Medium isn't medium. We calibrated difficulty against a 10-year Google engineer, not a CS freshman. Every wrong answer is a real IT concept — close, but not quite right.",
  },
  {
    icon: Calendar,
    title: "One concept a day",
    body: "A new daily puzzle every morning. Solve it on your commute, share your result, build a streak. Then come back tomorrow.",
  },
];

function WhyDecodory() {
  return (
    <section className="relative bg-surface/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Why Decodory
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
          Real-world stories.{" "}
          <span className="italic text-brand">Hidden tech.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {DIFFERENTIATORS.map((d) => {
            const Icon = d.icon;
            return (
              <article
                key={d.title}
                className="flex flex-col rounded-3xl border border-line bg-surface p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-bg text-gold">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  {d.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
                  {d.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 5. FEATURED PUZZLE ─────────────────────────── */

const PUZZLE_OPTIONS = [
  { letter: "A", text: "Hire 2 helpers", cost: "₹4,000" },
  { letter: "B", text: "Add a mobile pre-order lane", cost: "₹1,500" },
  { letter: "C", text: "Express counter (chai only)", cost: "₹1,200" },
  { letter: "D", text: "Self-service kiosk", cost: "₹800" },
  { letter: "E", text: "Buy a bigger counter", cost: "₹2,500" },
  { letter: "F", text: "Raise prices to reduce demand", cost: "₹0" },
];

function FeaturedPuzzle() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <Puzzle size={12} />
          Today&apos;s preview
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[42px]">
          A real puzzle —{" "}
          <span className="italic text-brand">try it before launch</span>.
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]">
          <div className="border-b border-line bg-gold-bg/40 px-7 py-5 sm:px-9">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Puzzle · 001 · the tea stall problem
            </p>
          </div>

          <div className="px-7 py-7 sm:px-9 sm:py-9">
            <p className="max-w-3xl text-[15.5px] leading-[1.7] text-ink">
              It&apos;s 6&nbsp;PM at Trichy Junction. Aunty&apos;s tea stall sees{" "}
              <strong>60 customers an hour</strong> during evening rush, but
              she&apos;s the only one taking orders, making chai, and handing
              them out. Customers wait <strong>8 minutes</strong> for a ₹15 cup.
              Yesterday <strong>38 of them walked away</strong>. She has{" "}
              <strong>₹5,000 saved up</strong> to fix the problem before next
              Monday&apos;s rush.
            </p>

            <p className="mt-6 font-display text-[18px] font-semibold text-ink sm:text-[20px]">
              What would you do?
            </p>

            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:gap-3">
              {PUZZLE_OPTIONS.map((opt) => (
                <li
                  key={opt.letter}
                  className="flex items-start gap-3 rounded-xl border border-line bg-background/40 px-4 py-3 transition-colors hover:border-brand/30 hover:bg-background"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 font-mono text-[12px] font-semibold text-brand">
                    {opt.letter}
                  </span>
                  <span className="flex flex-1 items-center justify-between gap-3">
                    <span className="text-[14px] text-ink">{opt.text}</span>
                    <span className="shrink-0 font-mono text-[11.5px] font-medium text-ink-soft">
                      {opt.cost}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-dashed border-line bg-background/60 px-5 py-4">
              <p className="text-[13.5px] leading-[1.6] text-ink-soft">
                There are right answers. There are tempting wrong ones. And
                there&apos;s a concept hiding in the right combination.{" "}
                <a
                  href="#waitlist"
                  className="font-medium text-brand hover:underline"
                >
                  Get notified when we launch
                </a>{" "}
                to find out which one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 6. FINAL CTA / WAITLIST ─────────────────────────── */

function FinalCTA() {
  return (
    <section id="waitlist" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Get on the waitlist
            </div>
            <h2 className="mt-5 font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
              First puzzle drops{" "}
              <span className="italic text-brand">late 2026</span>.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-ink-soft">
              Tick Decodory on the form. We&apos;ll email you on launch day with
              a direct link to Puzzle 001. Then one fresh puzzle every morning,
              right on time for your commute.
            </p>
          </div>

          <div>
            <EarlyAccessForm />
          </div>
        </div>
      </div>
    </section>
  );
}
