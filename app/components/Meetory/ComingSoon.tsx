import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe,
  Headphones,
  Languages,
  Lock,
  MessageSquare,
  Mic,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import EarlyAccessForm from "../EarlyAccessForm";

export default function MeetoryComingSoon() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <LanguagesPanel />
      <TrustStrip />
      <UseCases />
      <Integrations />
      <PricingTeaser />
      <FAQ />
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
            "radial-gradient(900px 500px at 80% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(700px 420px at 0% 10%, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#F59E0B] opacity-60" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              </span>
              Beta · Q2 2026
            </span>

            <h1 className="mt-6 font-display text-[48px] font-bold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[64px] lg:text-[80px]">
              Meetory<sup className="ml-1 text-[20px] font-medium text-ink-soft sm:text-[26px] lg:text-[32px]">&trade;</sup>
            </h1>

            <h2 className="mt-6 max-w-2xl font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[34px] lg:text-[40px]">
              Meeting intelligence,{" "}
              <span className="italic text-brand">in your language</span>.
            </h2>

            <p className="mt-6 max-w-[34rem] text-[15.5px] leading-[1.6] text-ink-soft sm:text-[16.5px]">
              An AI meeting assistant for multilingual teams. Joins your call,
              transcribes 10+ languages including code-switching, and turns
              every conversation into summaries and action items.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#early-access"
                className="cta-magnetic inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-[15px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(30,64,175,0.55)]"
              >
                Request beta access
              </a>
              <a
                href="#pricing"
                className="cta-magnetic inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-[15px] font-medium text-ink hover:bg-background"
              >
                See pricing
              </a>
            </div>
          </div>

          <LiveTranscriptDemo />
        </div>
      </div>
    </section>
  );
}

function LiveTranscriptDemo() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45),0_15px_30px_-15px_rgba(15,23,42,0.12)]">
        <div className="flex items-center justify-between border-b border-line bg-background px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#e0524e] opacity-60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-[#e0524e]" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Recording · Q2 Product Review
            </span>
          </div>
          <span className="font-mono text-[10.5px] text-ink-soft">14:32</span>
        </div>

        <div className="space-y-5 px-6 py-6 sm:px-8 sm:py-7">
          <SpeakerLine
            initial="P"
            initialBg="var(--color-brand)"
            name="Priya Sharma"
            time="0:14"
          >
            <span lang="hi-Latn">कल तक deck भेज देना</span>
            <span className="text-ink-soft"> — </span>
            I&apos;ll show it to leadership on Monday.
          </SpeakerLine>

          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-brand">
            <Globe size={12} />
            Auto-detected · English + Hindi
          </div>

          <SpeakerLine
            initial="A"
            initialBg="var(--color-gold)"
            name="Anjali Patel"
            time="0:31"
          >
            Sure, I&apos;ll have the v2 deck in your inbox by{" "}
            <span lang="hi-Latn">शाम तक</span>.
          </SpeakerLine>

          <div className="rounded-xl border border-line bg-background/70 p-4">
            <div className="flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.16em] text-brand">
              <Sparkles size={11} />
              AI · Action item extracted
            </div>
            <p className="mt-2 text-[13.5px] leading-[1.5] text-ink">
              <span className="font-semibold">Send v2 deck</span>
              <span className="text-ink-soft"> — owner </span>
              <span className="font-medium">Anjali</span>
              <span className="text-ink-soft"> · due 15 May 2026</span>
            </p>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-ink-soft">
              <CheckCircle2 size={12} className="text-[#0f9d6e]" />
              Posted to Slack #product-leadership
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-3 hidden items-center gap-2 rounded-full bg-ink/95 px-3 py-1.5 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.5)] backdrop-blur sm:flex">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#7ce0a3] opacity-60" />
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#7ce0a3]" />
        </span>
        <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-white">
          20 insights extracted
        </span>
      </div>
    </div>
  );
}

function SpeakerLine({
  initial,
  initialBg,
  name,
  time,
  children,
}: {
  initial: string;
  initialBg: string;
  name: string;
  time: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-semibold text-white"
        style={{ background: initialBg }}
      >
        {initial}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[12.5px] font-semibold text-ink">{name}</span>
          <span className="font-mono text-[10.5px] text-muted">{time}</span>
        </div>
        <p className="mt-1 text-[13.5px] leading-[1.55] text-ink">{children}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── 2. FEATURES ─────────────────────────── */

const HEADLINE_FEATURES = [
  {
    icon: Mic,
    title: "Joins your meetings automatically",
    body: "A polite bot joins Google Meet, Zoom, Teams or Skype — captures audio, leaves quietly.",
  },
  {
    icon: Languages,
    title: "Multilingual transcription",
    body: "10+ languages including code-switching (English + Hindi, English + Tamil) handled segment by segment.",
  },
  {
    icon: Calendar,
    title: "Auto-join from your calendar",
    body: "Connect Google or Outlook. Meetory shows up to the meetings you tell it to. Set-and-forget.",
  },
  {
    icon: MessageSquare,
    title: "AI summary + action items",
    body: "Every meeting becomes a clean recap — key points, decisions, who-owes-what-by-when.",
  },
  {
    icon: Search,
    title: "Searchable meeting memory",
    body: "Ask “what did we decide about pricing last month?” — get the exact quote with speaker and timestamp.",
  },
  {
    icon: Lock,
    title: "ISO 27001 + AES-256 encryption",
    body: "Per-workspace encryption keys, searchable while encrypted. Investor-grade trust signals on by default.",
  },
];

function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          What you get
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
          Six things every meeting will have,{" "}
          <span className="italic text-brand">starting day one</span>.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {HEADLINE_FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="flex flex-col rounded-3xl border border-line bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_10px_24px_-12px_rgba(30,64,175,0.55)]">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-[18px] font-semibold tracking-[-0.01em] text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-soft">
                  {f.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 3. HOW IT WORKS ─────────────────────────── */

const STEPS = [
  {
    n: "01",
    icon: Calendar,
    title: "Connect your calendar",
    body: "Sign in once with Google or Outlook. Toggle auto-join on the events you want recorded. Solo events and declined ones are skipped automatically.",
  },
  {
    n: "02",
    icon: Mic,
    title: "The bot joins and transcribes",
    body: "Meetory arrives ~60 seconds before the meeting starts. Captures audio, language-detects per segment, and identifies speakers from the calendar attendee list.",
  },
  {
    n: "03",
    icon: FileText,
    title: "Recap lands in your inbox",
    body: "Within minutes of hang-up: bullet summary, decisions, action items with owners and deadlines, plus a searchable transcript link. Slack post optional, one click.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-surface/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <Workflow size={12} />
          How it works
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
          One toggle in your calendar.{" "}
          <span className="italic text-brand">The rest is automatic.</span>
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

/* ─────────────────────────── 4. LANGUAGES ─────────────────────────── */

const LANGUAGES = [
  "English",
  "Hindi",
  "Tamil",
  "Kannada",
  "Telugu",
  "Malayalam",
  "Marathi",
  "Bengali",
  "Gujarati",
  "Arabic",
  "Urdu",
  "Punjabi",
  "Assamese",
  "Odia",
];

function LanguagesPanel() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="rounded-3xl border border-line bg-surface p-7 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:items-start">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                <Languages size={12} />
                Languages
              </div>
              <h3 className="mt-4 font-display text-[28px] font-semibold tracking-[-0.01em] text-ink sm:text-[32px]">
                10+ languages,{" "}
                <span className="italic text-brand">code-switching included</span>.
              </h3>
              <p className="mt-4 max-w-md text-[14.5px] leading-[1.6] text-ink-soft">
                Most competitors handle Hindi as an afterthought and barely
                touch the south. Meetory is built around the assumption that
                meetings flip language mid-sentence — <span lang="hi-Latn">&ldquo;कल तक deck भेज देना, I&apos;ll show it to leadership on Monday&rdquo;</span> — and transcribes each segment in the language it was spoken in.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-line bg-background px-3 py-1.5 text-[12.5px] font-medium text-ink-soft"
                >
                  {lang}
                </span>
              ))}
              <span className="rounded-full bg-brand/10 px-3 py-1.5 text-[12.5px] font-medium text-brand">
                + more on roadmap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 5. TRUST STRIP ─────────────────────────── */

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001 certified",
    body: "Independently audited information security program.",
  },
  {
    icon: Lock,
    title: "AES-256 at rest",
    body: "Per-workspace encryption keys, envelope-encrypted master.",
  },
  {
    icon: Shield,
    title: "Searchable while encrypted",
    body: "Search vectors never see plaintext. Workspace-isolated.",
  },
  {
    icon: Sparkles,
    title: "RBI-compliant billing",
    body: "Indian subscription billing — UPI, cards, netbanking in INR.",
  },
];

function TrustStrip() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div
          className="overflow-hidden rounded-3xl p-7 text-white sm:p-9"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand) 14.29%, var(--color-brand-mid) 50%, var(--color-brand-dark) 85.71%)",
            boxShadow:
              "0 30px 60px -25px rgba(10, 52, 101, 0.45), 0 10px 30px -15px rgba(30, 64, 175, 0.3)",
          }}
        >
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
            <Shield size={12} />
            Trust & security
          </div>
          <h3 className="mt-4 max-w-2xl font-display text-[26px] font-semibold tracking-[-0.01em] sm:text-[30px]">
            Investor-grade encryption,{" "}
            <span className="italic text-[#FBF6E3]">on by default</span>.
          </h3>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {TRUST_BADGES.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex flex-col gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <p className="mt-1 text-[13.5px] font-semibold leading-tight text-white">
                    {b.title}
                  </p>
                  <p className="text-[12.5px] leading-[1.5] text-white/75">
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 6. USE CASES ─────────────────────────── */

const USE_CASES = [
  {
    icon: Briefcase,
    audience: "Founders & sales leaders",
    pitch: "Notetaker that speaks the way your team actually talks.",
  },
  {
    icon: Headphones,
    audience: "Customer success teams",
    pitch: "Spend the hour on the customer, not on the recap.",
  },
  {
    icon: Users,
    audience: "HR / People ops",
    pitch: "Every interview, captured and searchable.",
  },
  {
    icon: FileText,
    audience: "Consultants & agencies",
    pitch: "Send polished meeting recaps to clients in minutes.",
  },
  {
    icon: ShieldCheck,
    audience: "Compliance-sensitive teams",
    pitch: "Investor-grade encryption + audit trail, on by default.",
  },
  {
    icon: Globe,
    audience: "MENA + multilingual teams",
    pitch: "First meeting AI that natively handles Arabic + English.",
  },
];

function UseCases() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <Users size={12} />
          Who it&apos;s for
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
          Built for the teams who{" "}
          <span className="italic text-brand">speak more than one language</span>{" "}
          to get work done.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
          {USE_CASES.map((u) => {
            const Icon = u.icon;
            return (
              <article
                key={u.audience}
                className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-background/40"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                    {u.audience}
                  </p>
                  <p className="mt-1 text-[14.5px] font-medium leading-[1.45] text-ink">
                    {u.pitch}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 7. INTEGRATIONS ─────────────────────────── */

const INTEGRATIONS_LIVE = [
  "Google Meet",
  "Zoom",
  "Microsoft Teams",
  "Skype",
  "Google Calendar",
  "Microsoft Outlook",
  "Slack",
];

const INTEGRATIONS_ROADMAP = ["HubSpot CRM", "Microsoft Teams app", "Notion", "Linear"];

function Integrations() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                <Workflow size={12} />
                Integrations
              </div>
              <h3 className="mt-4 font-display text-[24px] font-semibold tracking-[-0.01em] text-ink sm:text-[28px]">
                Works with the tools you already use.
              </h3>
            </div>
            <p className="max-w-sm text-[13.5px] leading-[1.55] text-ink-soft sm:text-right">
              No new tab. Summaries land where your team already lives.
            </p>
          </div>

          <div className="mt-7">
            <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Live now
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {INTEGRATIONS_LIVE.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-line bg-background px-3 py-1.5 text-[12.5px] font-medium text-ink"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              On the roadmap
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {INTEGRATIONS_ROADMAP.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-dashed border-line bg-background/40 px-3 py-1.5 text-[12.5px] font-medium text-ink-soft"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 8. PRICING TEASER ─────────────────────────── */

const PLANS = [
  {
    label: "Solo",
    name: "Free",
    price: "₹0",
    cadence: "forever",
    bullets: ["2 hours / month", "40-min meeting cap", "English + Hindi"],
    cta: "Start free",
    href: "#early-access",
    highlighted: false,
  },
  {
    label: "Individual",
    name: "Pro",
    price: "₹799",
    cadence: "/ month, annual",
    bullets: ["20 hrs / month", "10+ Indic + English", "Slack auto-post"],
    cta: "Notify me at launch",
    href: "#early-access",
    highlighted: true,
  },
  {
    label: "Teams",
    name: "Business",
    price: "₹1,799",
    cadence: "/ user / month",
    bullets: ["25 hrs / user (pooled)", "All languages", "Workspace roles"],
    cta: "Notify me at launch",
    href: "#early-access",
    highlighted: false,
  },
  {
    label: "Custom",
    name: "Enterprise",
    price: "Custom",
    cadence: "priced on conversation",
    bullets: ["Negotiated hours", "10+ concurrent bots", "Custom retention"],
    cta: "Talk to sales",
    href: "mailto:partners@magdee.ai",
    highlighted: false,
  },
];

function PricingTeaser() {
  return (
    <section id="pricing" className="relative bg-surface/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Pricing
        </div>
        <h2 className="mt-5 max-w-3xl font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
          One tier free forever.{" "}
          <span className="italic text-brand">Three more</span> when you need more meeting hours.
        </h2>
        <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.55] text-ink-soft">
          Hour-based, not meeting-count. A 3-hour discovery call costs the same as six 30-minute standups.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-3xl border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1 ${
                p.highlighted ? "border-gold-soft bg-gold-bg/40" : "border-line"
              }`}
            >
              {p.highlighted && (
                <span className="-mt-1 mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-bg px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-gold">
                  Most popular
                </span>
              )}
              <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft">
                {p.label}
              </p>
              <h3 className="mt-1.5 font-display text-[20px] font-semibold tracking-[-0.01em] text-ink">
                {p.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-[32px] font-semibold leading-none tracking-[-0.02em] text-ink">
                  {p.price}
                </span>
                <span className="text-[11.5px] text-ink-soft">{p.cadence}</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[13px] text-ink"
                  >
                    <CheckCircle2
                      size={13}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`cta-magnetic mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13.5px] font-medium ${
                  p.highlighted
                    ? "bg-brand text-white shadow-[0_14px_30px_-14px_rgba(30,64,175,0.55)]"
                    : "border border-line bg-surface text-ink hover:bg-background"
                }`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 9. FAQ ─────────────────────────── */

const FAQS = [
  {
    q: "When does the beta open?",
    a: "Private beta opens Q2 2026. Request access below — the first wave of invites goes out in the order people asked.",
  },
  {
    q: "Which languages do you support today?",
    a: "10+ at launch — English, Hindi, Tamil, Kannada, Telugu, Malayalam, Marathi, Bengali, Gujarati, Arabic — plus Urdu, Punjabi, Assamese, Odia with lighter emphasis. Code-switching (English + Hindi, English + Tamil) is handled mid-sentence, not as separate meetings.",
  },
  {
    q: "Where is the data stored?",
    a: "On audited cloud infrastructure inside our ISO/IEC 27001 program. Every transcript and summary is AES-256 encrypted at rest with per-workspace keys, envelope-encrypted to a managed master. Searchable while encrypted — vectors never see plaintext.",
  },
  {
    q: "Will Meetory join Google Meet, Zoom, Teams, and Skype?",
    a: "Yes — all four are live as bot integrations. Bot joins as a regular participant; no admin install required, works on free-tier conferencing accounts too.",
  },
  {
    q: "Is there a pricing tier in USD?",
    a: "Not yet — checkout is INR only today (UPI, cards, netbanking, all RBI-compliant). International tiers are planned for v2. Enterprise customers outside India can talk to partners@magdee.ai.",
  },
  {
    q: "Can I self-host or use my own cloud?",
    a: "Self-host isn't on the roadmap. Enterprise plans get configurable retention, audit logs (in progress), and dedicated tenancy. If on-prem is a hard requirement, write to partners@magdee.ai and we'll talk.",
  },
];

function FAQ() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              FAQ
            </div>
            <h2 className="mt-5 font-display text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[38px] lg:text-[44px]">
              Questions, before you{" "}
              <span className="italic text-brand">ask one</span>.
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-[1.6] text-ink-soft">
              If your question isn&apos;t here, write to{" "}
              <a
                href="mailto:hello@magdee.ai"
                className="font-medium text-brand hover:underline"
              >
                hello@magdee.ai
              </a>{" "}
              — a real person reads every email.
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-[15px] font-semibold leading-snug text-ink marker:hidden">
                  {f.q}
                  <ChevronDown
                    size={18}
                    className="mt-0.5 shrink-0 text-ink-soft transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 max-w-prose text-[14px] leading-[1.6] text-ink-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 10. FINAL CTA / EARLY ACCESS ─────────────────────────── */

function FinalCTA() {
  return (
    <section id="early-access" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Get notified at launch
            </div>
            <h2 className="mt-5 font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
              First wave of beta invites{" "}
              <span className="italic text-brand">go out in Q2 2026</span>.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-ink-soft">
              Tick Meetory on the form. We&apos;ll email you when the beta opens, with a
              direct link to claim a workspace. No spam, no sales sequence —
              one email when there&apos;s something to use.
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
