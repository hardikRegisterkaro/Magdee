import {
  CloudOff,
  Globe,
  Lock,
  Mic,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { FeatureCard } from "@/app/lib/fetchServicePage";

type Props = { features: FeatureCard[] };

const ICONS: Record<string, LucideIcon> = {
  Lock,
  Globe,
  CloudOff,
  Mic,
  ShieldCheck,
  Sparkles,
  Zap,
};

export default function DynamicFeatures({ features }: Props) {
  if (!features?.length) return null;
  return (
    <section className="relative">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feat, i) => {
            const Icon: ComponentType<SVGProps<SVGSVGElement>> =
              ICONS[feat.iconName] ?? Sparkles;
            return (
              <li key={i}>
                <a
                  href={feat.href || "#"}
                  className="group block h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/20"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                      <Icon width={18} height={18} strokeWidth={1.8} />
                    </span>
                    <span
                      aria-hidden
                      className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink"
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[20px] font-semibold tracking-[-0.01em] text-ink">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft">
                    {feat.body}
                  </p>
                </a>
              </li>
            );
          })}
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
