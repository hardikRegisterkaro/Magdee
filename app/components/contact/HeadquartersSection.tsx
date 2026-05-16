const DETAILS = [
  { icon: <PhoneIcon />, label: "Phone", value: "+91 422 4567 890" },
  { icon: <ClockIcon />, label: "Hours", value: "Mon-Fri · 9-7 IST" },
  { icon: <PinIcon />, label: "Lat", value: "11.0168° N" },
  { icon: <GlobeIcon />, label: "Long", value: "76.9558° E" },
];

export default function HeadquartersSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — HQ card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_4px_40px_-16px_rgba(15,23,42,0.1)]">
              <div className="h-[3px] w-full bg-brand" />

              <div className="px-7 py-8 sm:px-9 sm:py-10">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                  03 — Headquarters
                </div>

                <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px]">
                  Find us in
                  <br />
                  Coimbatore.
                </h2>

                <address className="mt-6 not-italic text-[14px] leading-[1.7] text-ink-soft">
                  MagDee Technologies Pvt. Ltd.
                  <br />
                  Floor 2, No. 47, Race Course Road
                  <br />
                  RS Puram, Coimbatore — 641 002
                  <br />
                  Tamil Nadu, India
                </address>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {DETAILS.map((d, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-line bg-surface px-4 py-3"
                    >
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {d.icon}
                        {d.label}
                      </div>
                      <p className="mt-1 text-[15px] font-semibold text-ink">
                        {d.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href="https://maps.google.com/?q=11.0168,76.9558"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-[14px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-colors hover:bg-black"
                  >
                    <MapIcon />
                    Open in Maps
                    <ArrowIcon />
                  </a>
                  <a
                    href="mailto:hello@magdee.in?subject=Visit%20Request"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-background"
                  >
                    Book a visit
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — neighborhood + map placeholder */}
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              The Neighborhood
            </div>

            <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
              Above the
              <br />
              <em className="italic text-brand">filter coffee</em> shop.
            </h2>

            <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.7] text-ink-soft">
              Race Course Road is one of the older streets in town — wide,
              tree-lined, never in a hurry. We&apos;re on the second floor,
              behind a heavy teak door, two doors down from a 40-year-old filter
              coffee shop. You&apos;ll smell us before you see us.
            </p>

            {/* Map placeholder */}
            <div className="mt-7 flex items-center justify-center rounded-3xl border-2 border-dashed border-line bg-surface lg:h-[320px]">
              <div className="flex flex-col items-center gap-3 py-16 text-center lg:py-0">
                <ImagePlaceholderIcon />
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Image placeholder
                </p>
                <p className="text-[13px] text-muted">Map illustration goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 6v16l7-3 8 3 7-3V3l-7 3-8-3-7 3z" />
      <path d="M8 3v15M16 6v15" />
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

function ImagePlaceholderIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c8ccd8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
