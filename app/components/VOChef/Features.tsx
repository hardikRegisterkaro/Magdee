import { CloudOff, Globe, Lock } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  href: string;
};

const FEATURES: Feature[] = [
  {
    icon: Lock,
    title: "Privacy First",
    body: "Voice and pantry data stays on-device by default. Cloud sync is opt-in and encrypted end-to-end.",
    href: "#privacy",
  },
  {
    icon: Globe,
    title: "Tamil Support",
    body: "Native Tamil understanding — not translation. Code-switches naturally between Tamil, English, and Hindi.",
    href: "#languages",
  },
  {
    icon: CloudOff,
    title: "Offline Cooking",
    body: "Your saved recipes work without signal. Voice control runs locally with sub-second response.",
    href: "#offline",
  },
];

export default function Features() {
  return (
    <section className="relative">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.map((f) => (
            <li key={f.title}>
              <a
                href={f.href}
                className="group block h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/20"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                    <f.icon width={18} height={18} strokeWidth={1.8} />
                  </span>
                  <span
                    aria-hidden
                    className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink"
                  >
                    <ArrowIcon />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[20px] font-semibold tracking-[-0.01em] text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">
                  {f.body}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
