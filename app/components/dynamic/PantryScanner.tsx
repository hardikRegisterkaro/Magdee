import type { ServicePageData } from "@/app/lib/fetchServicePage";

type Props = { data: NonNullable<ServicePageData["pantryScannerSection"]> };

function AccentHeading({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="italic text-brand">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function DynamicPantryScanner({ data }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            {data.tagText && (
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                {data.tagText}
              </div>
            )}

            {data.heading && (
              <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
                <AccentHeading text={data.heading} />
              </h2>
            )}

            {data.subHeading && (
              <p className="mt-6 max-w-[34rem] text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]">
                {data.subHeading}
              </p>
            )}

            {data.bullets?.length > 0 && (
              <ul className="mt-7 space-y-3">
                {data.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-ink">
                    <span className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f7ee] text-[#176c3a]">
                      <CheckIcon />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {data.ctaText && (
              <a
                href={data.ctaHref || "#"}
                className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand transition-colors hover:text-[#1f3ce8]"
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

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="m2.5 6.2 2.3 2.3L9.5 3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

