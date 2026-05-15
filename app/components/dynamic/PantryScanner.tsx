import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["pantryScannerSection"]> };

export default function DynamicPantryScanner({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            {data.tagText && (
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {data.tagText}
              </div>
            )}
            <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
              {data.heading}
            </h2>
            {data.subHeading && (
              <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.65] text-ink-soft">
                {data.subHeading}
              </p>
            )}
            {data.bullets?.length > 0 && (
              <ul className="mt-6 space-y-2.5">
                {data.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {data.ctaText && (
              <a
                href={data.ctaHref || "#"}
                className="mt-7 inline-flex items-center text-[14px] font-medium text-accent hover:underline"
              >
                {data.ctaText}
              </a>
            )}
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-line bg-surface p-8">
            <p className="text-sm text-ink-soft text-center">[ Pantry Scanner UI ]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
