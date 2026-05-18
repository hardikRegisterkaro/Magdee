import {
  ArrowRight,
  Check,
  Mic,
  Plus,
  Shield,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";

const MEETORY_FEATURES = [
  "Voice-first hands-free",
  "Smart pantry inventory",
  "Tamil + English + Hindi",
  "Adaptive meal planning",
];

const CHART_BARS = [40, 55, 50, 80, 65, 90, 70];

export default function SuiteSection() {
  return (
    <section id="suite" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            02 — The suite
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal delay={80}>
            <h2 className="font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
              Three products,{" "}
              <span className="italic text-brand">one quiet</span> mind.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-md text-[15px] leading-[1.6] text-ink-soft lg:justify-self-end">
              Built on a shared foundation — voice, memory, restraint. Each
              product is a complete, opinionated answer to a single question.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          <Reveal delay={80} >
            <MeeToryCard />
          </Reveal>

          <div className="grid grid-cols-1 gap-5 lg:gap-6">
            <Reveal delay={160} >
              <VOChefCard />
            </Reveal>
            <Reveal delay={240} >
              <EllamlyCard />
            </Reveal>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-6 lg:gap-6">
          <Reveal delay={80} >
            <MetricCard />
          </Reveal>
          <Reveal delay={160} >
            <WorkshopCard />
          </Reveal>
          <Reveal delay={240} >
            <PrivacyCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MeeToryCard() {
  return (
    <article
      className="transition-transform duration-300 hover:-translate-y-1 relative flex min-h-[440px] flex-col overflow-hidden rounded-3xl p-7 text-white sm:p-9 lg:min-h-[560px]"
      style={{
        background:
          "linear-gradient(135deg, #1f5cff 0%, #1a3fbf 60%, #15348f 100%)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.22), transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-24 -right-10 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Mic size={18} />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
            The meeting ministry
          </span>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur">
          Beta · Q2 2026
        </span>
      </div>

      <div className="relative mt-auto pt-16">
        <h3 className="font-display text-[48px] font-semibold leading-none tracking-[-0.02em] sm:text-[56px]">
          Mee Tory
        </h3>
        <p className="mt-5 max-w-md text-[15px] leading-[1.55] text-white/85">
          The quiet observer that turns standups, syncs, and 1:1s into
          decisions you can find next Tuesday.
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {MEETORY_FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[13.5px] text-white/90">
              <Check size={14} strokeWidth={2.5} className="text-white/75" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="/mee-tory"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-white/90"
        >
          Request beta access
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

function VOChefCard() {
  return (
    <article
      className="transition-transform duration-300 hover:-translate-y-1 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl p-7 text-white lg:min-h-[270px]"
      style={{
        background:
          "linear-gradient(135deg, #ff6a3d 0%, #ff8a4d 50%, #f5b069 100%)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 70%)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <h3 className="font-display text-[44px] font-semibold leading-none tracking-[-0.02em] sm:text-[52px]">
          VOChef
        </h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0f3b2a]/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7ce0a3]">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#7ce0a3] opacity-60" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#7ce0a3]" />
          </span>
          Live now
        </span>
      </div>

      <div className="relative">
        <p className="max-w-md text-[14.5px] leading-[1.55] text-white/90">
          A voice-first kitchen companion that adapts to your pantry, your
          pace, and what you actually crave.
        </p>
        <a
          href="/vochef"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink transition-colors hover:bg-white/90"
        >
          Try VOChef on iOS
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

function EllamlyCard() {
  return (
    <article
      className="transition-transform duration-300 hover:-translate-y-1 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl p-7 text-white lg:min-h-[270px]"
      style={{
        background:
          "linear-gradient(135deg, #7c5cff 0%, #6a4eea 55%, #4b39c4 100%)",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 70%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <Sparkles size={16} />
          </span>
          <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/85">
            Your everyday AI companion
          </span>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur">
          Q3 2026
        </span>
      </div>

      <div className="relative">
        <h3 className="font-display text-[44px] font-semibold leading-none tracking-[-0.02em] sm:text-[52px]">
          Ellamly
        </h3>
        <p className="mt-3 max-w-md text-[14.5px] leading-[1.55] text-white/90">
          Ambient intelligence for the small, daily decisions — weather,
          errands, EMIs — in your language, on your terms.
        </p>
        <a
          href="/ellamly"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink transition-colors hover:bg-white/90"
        >
          Get notified at launch
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

function MetricCard() {
  return (
    <article className="transition-transform duration-300 hover:-translate-y-1 flex flex-col rounded-3xl border border-line bg-surface p-6">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
        <Sparkles size={12} />
        Today
      </div>
      <p className="mt-5 font-display text-[44px] font-semibold leading-none tracking-[-0.02em] text-ink">
        12.4k
      </p>
      <p className="mt-2 text-[13px] text-ink-soft">
        meals cooked with VOChef this week
      </p>
      <div className="mt-6 flex items-end gap-1.5">
        {CHART_BARS.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-md"
            style={{
              height: `${h * 0.45}px`,
              background:
                "linear-gradient(180deg, #2a4bff 0%, #7aa0ff 100%)",
            }}
          />
        ))}
      </div>
    </article>
  );
}

function WorkshopCard() {
  return (
    <article className="transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-3xl border-[2.5px] border-dashed border-line bg-surface/40 p-6">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
        <Plus size={12} />
        In the workshop
      </div>
      <div className="mt-5">
        <h4 className="font-display text-[20px] font-semibold leading-snug tracking-[-0.01em] text-ink">
          A fourth product, prototyped slowly.
        </h4>
        <p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
          We&apos;ll talk about it when there&apos;s something worth saying.
        </p>
      </div>
    </article>
  );
}

function PrivacyCard() {
  return (
    <article className="transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between rounded-3xl bg-[#0b1020] p-6 text-white">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7ce0a3]">
        <Shield size={12} />
        Privacy
      </div>
      <div className="mt-5">
        <h4 className="font-display text-[18px] font-semibold leading-snug tracking-[-0.01em]">
          Your data never leaves your device unless you say so.
        </h4>
        <a
          href="#security"
          className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium hover:text-white"
          style={{ color: "#8AB1FF" }}
        >
          Read the security model
          <ArrowRight size={13} />
        </a>
      </div>
    </article>
  );
}
