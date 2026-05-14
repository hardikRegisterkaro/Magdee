const BULLETS = [
  "Recognizes 800+ Indian ingredients",
  "Reads dates on packaging — flags what expires soon",
  "Suggests recipes that use what you already have",
];

type Detection = {
  label: string;
  confidence: string;
  top: string;
  left: string;
  width: string;
  height: string;
};

const DETECTIONS: Detection[] = [
  { label: "Tomato", confidence: "98%", top: "10%", left: "6%", width: "17%", height: "30%" },
  { label: "Onion", confidence: "94%", top: "26%", left: "28%", width: "22%", height: "44%" },
  { label: "Ginger", confidence: "87%", top: "10%", left: "56%", width: "21%", height: "32%" },
  { label: "Basmati", confidence: "99%", top: "48%", left: "62%", width: "23%", height: "40%" },
];

type Item = {
  name: string;
  emoji: string;
  qty: string;
  status: "added" | "updated";
};

const ITEMS: Item[] = [
  { name: "Tomato", emoji: "🍅", qty: "4 pcs", status: "added" },
  { name: "Onion", emoji: "🧅", qty: "6 pcs", status: "added" },
  { name: "Ginger", emoji: "🫚", qty: "1 knob", status: "added" },
  { name: "Basmati Rice", emoji: "🍚", qty: "2 kg", status: "updated" },
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
              Snap a photo of your shelves, fridge, or a grocery receipt.
              VOChef recognizes Indian brands, regional vegetables, and even
              handwritten dabba labels — and quietly updates your inventory.
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

          <ScannerMockup />
        </div>
      </div>
    </section>
  );
}

function ScannerMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="flex items-center gap-2 border-b border-[#ece4d4] bg-[#f5ecda] px-4 py-3">
        <span className="flex items-center gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-[#d8cfb9]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#d8cfb9]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#d8cfb9]" />
        </span>
        <p className="flex-1 text-center font-mono text-[12px] tracking-wide text-ink-soft">
          vochef.app <span className="mx-1 text-muted">/</span> pantry-scanner
        </p>
        <span aria-hidden className="w-[42px]" />
      </div>

      <div className="p-4 sm:p-5">
        <div
          className="relative h-[220px] overflow-hidden rounded-xl sm:h-[230px]"
          style={{
            background:
              "linear-gradient(180deg, #0e1a3c 0%, #091025 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 56px)",
            }}
          />

          <span className="absolute right-3 top-3 hidden items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink sm:inline-flex">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#22a55b] opacity-60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#22a55b]" />
            </span>
            Scanning
          </span>

          {DETECTIONS.map((d) => (
            <DetectionBox key={d.label} {...d} />
          ))}
        </div>

        <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
          Detected <span className="mx-1.5">·</span> {ITEMS.length} items
        </p>

        <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5"
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background text-[15px]">
                <span aria-hidden>{item.emoji}</span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-ink">{item.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {item.qty} <span className="mx-1">·</span> {item.status}
                </p>
              </div>
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-[#22a55b]">
                <CheckIcon />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DetectionBox({
  label,
  confidence,
  top,
  left,
  width,
  height,
}: Detection) {
  return (
    <div
      className="absolute"
      style={{ top, left, width, height }}
      aria-hidden
    >
      <span className="absolute -top-2 left-0 inline-flex items-center gap-1 rounded-md bg-[#22a55b] px-1 py-[1.5px] font-mono text-[8px] uppercase tracking-[0.1em] text-white sm:-top-2.5 sm:gap-1.5 sm:px-1.5 sm:py-[2px] sm:text-[9.5px] sm:tracking-[0.12em]">
        {label} <span className="text-white/80">{confidence}</span>
      </span>
      <div className="h-full w-full rounded-md border-[1.5px] border-[#22a55b]" />
    </div>
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
