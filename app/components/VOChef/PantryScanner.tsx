import Image from "next/image";

const BULLETS = [
  "Recognizes 800+ Indian ingredients",
  "Detected items become editable chips — add, remove, reorder",
  "Generates 3–5 recipes in your language using what you have",
];

export default function PantryScanner() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Feature
              <span className="text-muted">·</span>
              <span className="text-muted">01</span>
            </div>

            <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
              Knows <span className="italic text-brand">what&apos;s</span>
              <br className="hidden sm:block" />{" "}
              in your pantry.
            </h2>

            <p className="mt-6 max-w-[34rem] text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]">
              Snap a photo of your fridge, shelves, or a plate of ingredients.
              VOChef recognizes Indian vegetables, packaged brands, even
              handwritten dabba labels — then turns what it sees into recipes
              you can actually cook.
            </p>

            <ul className="mt-7 space-y-3">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f7ee] text-[#176c3a]">
                    <CheckIcon />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#scanner"
              className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand transition-colors hover:text-[#1f3ce8]"
            >
              See how the scanner works
              <ArrowIcon />
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              <Image
                src="/screenshots/vochef_02_scan_details_android.png"
                alt="VOChef scan details — AI detected 13 ingredients from a fridge photo, and generated two Tamil recipes"
                width={1356}
                height={2602}
                unoptimized
                className="block h-auto w-full drop-shadow-[0_40px_80px_rgba(15,23,42,0.25)]"
              />
            </div>
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
