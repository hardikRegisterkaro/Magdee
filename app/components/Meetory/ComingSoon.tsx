import { Calendar, Check, Globe, Lock, MessageSquare, Mic, Search } from "lucide-react";
import EarlyAccessForm from "../EarlyAccessForm";

const HEADLINE_FEATURES = [
  {
    icon: Mic,
    title: "Joins your meetings automatically",
    body: "A polite bot joins Google Meet, Zoom, Teams or Skype, captures audio, and leaves quietly.",
  },
  {
    icon: Globe,
    title: "Multilingual transcription",
    body: "10+ languages including code-switching (English + Hindi, English + Tamil) handled segment-by-segment.",
  },
  {
    icon: MessageSquare,
    title: "AI summary + action items",
    body: "Every meeting becomes a clean recap: key points, decisions, who-owes-what-by-when.",
  },
  {
    icon: Search,
    title: "Searchable meeting memory",
    body: "Ask “what did we decide about pricing last month?” — get the exact quote with speaker and timestamp.",
  },
  {
    icon: Calendar,
    title: "Auto-join from your calendar",
    body: "Connect Google or Outlook. Meetory shows up to the meetings you tell it to. Set-and-forget.",
  },
  {
    icon: Lock,
    title: "ISO 27001 + AES-256 encryption",
    body: "Per-workspace encryption keys. Searchable without ever decrypting. Investor-grade trust signals on by default.",
  },
];

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
];

const PLATFORMS = ["Google Meet", "Zoom", "Microsoft Teams", "Skype", "Slack", "Google Calendar", "Outlook"];

export default function MeetoryComingSoon() {
  return (
    <main className="min-h-screen">
      <HeroPanel />
      <FeaturesGrid />
      <LanguagesStrip />
      <PlatformsStrip />
      <EarlyAccessPanel />
    </main>
  );
}

function HeroPanel() {
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

      <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-soft">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#F59E0B] opacity-60" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
          </span>
          Beta · Q2 2026
        </span>

        <h1 className="mt-7 font-display text-[64px] font-semibold leading-[0.95] tracking-[-0.02em] text-ink sm:text-[88px] lg:text-[104px]">
          Meetory<sup className="ml-1 text-[24px] font-medium text-ink-soft sm:text-[32px] lg:text-[40px]">&trade;</sup>
        </h1>

        <h2 className="mt-8 max-w-3xl font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[38px] lg:text-[44px]">
          Meeting intelligence,{" "}
          <span className="italic text-brand">in your language</span>.
        </h2>

        <p className="mt-6 max-w-[40rem] text-[16px] leading-[1.6] text-ink-soft sm:text-[17px]">
          An AI meeting assistant built for multilingual teams. Joins your call,
          captures every word in the language people actually spoke, and turns the
          conversation into summaries, action items, and searchable history.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-[13.5px] text-ink-soft">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#F59E0B]" />
          Private beta opens Q2 2026 — get on the list below to be invited first.
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
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
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_10px_24px_-12px_rgba(42,75,255,0.55)]">
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

function LanguagesStrip() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
            <Globe size={12} />
            Languages
          </div>
          <h3 className="mt-4 font-display text-[24px] font-semibold tracking-[-0.01em] text-ink sm:text-[28px]">
            10+ languages, code-switching included.
          </h3>
          <p className="mt-2 max-w-2xl text-[14px] leading-[1.55] text-ink-soft">
            Most competitors handle Hindi as an afterthought and barely touch the south.
            Meetory is built around the assumption that meetings flip language
            mid-sentence — &ldquo;कल तक deck भेज देना, I&apos;ll show it to leadership on Monday&rdquo; — and
            transcribes each segment in the language it was spoken in.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {LANGUAGES.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-line bg-background px-3 py-1.5 text-[12.5px] font-medium text-ink-soft"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformsStrip() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div
          className="overflow-hidden rounded-3xl p-7 text-white sm:p-9"
          style={{
            background:
              "linear-gradient(135deg, #0053D0 14.29%, #1651A9 50%, #0A3465 85.71%)",
          }}
        >
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
            <Check size={12} strokeWidth={2.5} />
            Works with what you already use
          </div>
          <h3 className="mt-4 font-display text-[24px] font-semibold tracking-[-0.01em] sm:text-[28px]">
            Lives in your workflow, not in another tab.
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12.5px] font-medium text-white/90 backdrop-blur"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-[13.5px] leading-[1.55] text-white/80">
            HubSpot CRM, Microsoft Teams sidebar app, and Notion / Linear task push are on the roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}

function EarlyAccessPanel() {
  return (
    <section className="relative">
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
