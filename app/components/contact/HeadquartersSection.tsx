"use client";

import { useReveal } from "@/app/hooks/useReveal";

interface HQData {
  badge?: string;
  companyName?: string;
  address?: string;
  mapsUrl?: string;
  phone?: string;
  hours?: string;
  lat?: string;
  long?: string;
  neighborhoodHeading?: string;
  neighborhoodDescription?: string;
  mapImgUrl?: string;
}

interface Props {
  data?: HQData;
}

function renderNeighborhoodHeading(text: string) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i} className="italic text-brand">{part}</em> : part
  );
}

export default function HeadquartersSection({ data }: Props) {
  const badge = data?.badge || "03 — Headquarters";
  const companyName = data?.companyName || "MagDee Technologies Pvt. Ltd.";
  const address = data?.address || "Floor 2, No. 47, Race Course Road\nRS Puram, Coimbatore — 641 002\nTamil Nadu, India";
  const mapsUrl = data?.mapsUrl || "https://maps.google.com/?q=11.0168,76.9558";
  const phone = data?.phone || "+91 422 4567 890";
  const officeHours = data?.hours || "Mon-Fri · 9-7 IST";
  const lat = data?.lat || "11.0168° N";
  const long = data?.long || "76.9558° E";
  const neighborhoodHeading = data?.neighborhoodHeading || "Above the *filter coffee* shop.";
  const neighborhoodDescription = data?.neighborhoodDescription || "Race Course Road is one of the older streets in town — wide, tree-lined, never in a hurry. We're on the second floor, behind a heavy teak door, two doors down from a 40-year-old filter coffee shop. You'll smell us before you see us.";
  const mapImgUrl = data?.mapImgUrl || "";

  const { ref, visible } = useReveal(0.1);

  const details = [
    { icon: <PhoneIcon />, label: "Phone", value: phone },
    { icon: <ClockIcon />, label: "Hours", value: officeHours },
    { icon: <PinIcon />, label: "Lat", value: lat },
    { icon: <GlobeIcon />, label: "Long", value: long },
  ];

  return (
    <section className="relative bg-background">
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — HQ card */}
          <div
            className={`reveal-left relative${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_4px_40px_-16px_rgba(15,23,42,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_48px_-16px_rgba(15,23,42,0.16)]">
              <div className="h-0.75 w-full bg-brand" />

              <div className="px-7 py-8 sm:px-9 sm:py-10">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                  {badge}
                </div>

                <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[48px]">
                  Find us in
                  <br />
                  Coimbatore.
                </h2>

                <address className="mt-6 not-italic text-[14px] leading-[1.7] text-ink-soft">
                  {companyName}
                  {address.split("\n").map((line, i) => (
                    <span key={i}>
                      <br />
                      {line}
                    </span>
                  ))}
                </address>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {details.map((d, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-line bg-surface px-4 py-3 transition-colors duration-200 hover:border-brand/20 hover:bg-[#f0f4ff]"
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
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-[14px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_36px_-14px_rgba(11,16,32,0.8)]"
                  >
                    <MapIcon />
                    Open in Maps
                    <ArrowIcon />
                  </a>
                  <a
                    href="mailto:hello@magdee.in?subject=Visit%20Request"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[14px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-background"
                  >
                    Book a visit
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — neighborhood + map */}
          <div
            className={`reveal-right${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: "260ms" }}
          >
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              The Neighborhood
            </div>

            <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[52px] lg:text-[60px]">
              {renderNeighborhoodHeading(neighborhoodHeading)}
            </h2>

            <p className="mt-5 max-w-136 text-[15px] leading-[1.7] text-ink-soft">
              {neighborhoodDescription}
            </p>

            {mapImgUrl ? (
              <img
                src={mapImgUrl}
                alt="Map"
                className="mt-7 w-full rounded-3xl object-cover transition-shadow duration-300 hover:shadow-[0_8px_32px_-12px_rgba(15,23,42,0.14)] lg:h-80"
              />
            ) : (
              <div className="mt-7 flex items-center justify-center rounded-3xl border-2 border-dashed border-line bg-surface lg:h-80">
                <div className="flex flex-col items-center gap-3 py-16 text-center lg:py-0">
                  <ImagePlaceholderIcon />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    Image placeholder
                  </p>
                  <p className="text-[13px] text-muted">Map illustration goes here</p>
                </div>
              </div>
            )}
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
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8ccd8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
