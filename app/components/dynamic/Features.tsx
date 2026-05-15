import type { FeatureCard } from "@/app/lib/fetchServicePage";

type Props = { features: FeatureCard[] };

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
          {features.map((feat, i) => (
            <li
              key={i}
              className="relative flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <span className="text-sm font-bold">{feat.iconName?.slice(0, 2) ?? "✦"}</span>
              </div>
              <div>
                <h3 className="font-semibold text-[15px] text-ink">{feat.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-soft">{feat.body}</p>
              </div>
              {feat.href && (
                <a
                  href={feat.href}
                  className="mt-auto text-[13px] font-medium text-accent hover:underline"
                >
                  Learn more →
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
