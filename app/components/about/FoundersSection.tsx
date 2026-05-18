"use client";

import { useReveal } from "@/app/hooks/useReveal";
import type { AboutPageData } from "@/app/lib/fetchAboutPage";

type Props = { teamSection?: AboutPageData["teamSection"] };

const AVATAR_COLORS = ["#3B4ED8", "#E8852A", "#7B42E8", "#16A34A", "#DC2626"];

const FALLBACK_MEMBERS = [
  {
    name: "Arjun Subramanian",
    designation: "Product",
    bio: "Ex-product at a payments unicorn. Cooks better than he codes.",
    location: "COIMBATORE",
    imgUrl: "",
  },
  {
    name: "Saanvi Iyer",
    designation: "Engineering",
    bio: "Linguist-turned-ML engineer. Writes documentation like poetry.",
    location: "MADURAI → COIMBATORE",
    imgUrl: "",
  },
  {
    name: "Vikram Pillai",
    designation: "Design",
    bio: "Designed for two well-known apps you've probably used.",
    location: "KOCHI → COIMBATORE",
    imgUrl: "",
  },
];

export default function FoundersSection({ teamSection }: Props) {
  const badge = teamSection?.teamBadgeTitle || "03 — The Three of Us";
  const heading = teamSection?.teamHeading || "A small team.";
  const members = teamSection?.teamMemberCards?.length ? teamSection.teamMemberCards : FALLBACK_MEMBERS;

  const { ref, visible } = useReveal(0.08);

  return (
    <section id="story" className="relative" ref={ref}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Section header */}
        <div
          className={`reveal-up flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "60ms" }}
        >
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {badge}
            </div>
            <h2 className="mt-4 font-display text-[48px] font-semibold leading-[1.0] tracking-[-0.025em] text-ink sm:text-[60px] lg:text-[72px]">
              {heading}
            </h2>
          </div>
          <p className="max-w-[18ch] font-mono text-[11px] font-medium uppercase leading-[1.7] tracking-[0.14em] text-muted sm:text-right">
            We answer our own email. We take the bus to work.
          </p>
        </div>

        {/* Member cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {members.map((member, i) => {
            const initial = member.name?.[0]?.toUpperCase() || "?";
            const firstName = member.name?.split(" ")[0] || member.name;
            const color = AVATAR_COLORS[i % AVATAR_COLORS.length];

            return (
              <div
                key={i}
                className={`reveal-up flex flex-col rounded-2xl border border-line bg-white px-6 pb-7 pt-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_8px_24px_-8px_rgba(30,64,175,0.12)]${visible ? " is-visible" : ""}`}
                style={{ transitionDelay: `${180 + i * 100}ms` }}
              >
                {member.imgUrl ? (
                  <img src={member.imgUrl} alt={member.name} className="h-14 w-14 rounded-xl object-cover" />
                ) : (
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-[22px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {initial}
                  </span>
                )}

                <div className="mt-5 flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.16em]">
                  <span className="text-brand">Co-Founder</span>
                  {member.designation && (
                    <>
                      <span className="text-muted">·</span>
                      <span className="text-ink-soft">{member.designation}</span>
                    </>
                  )}
                </div>

                <h3 className="mt-2 font-display text-[22px] font-semibold tracking-[-0.01em] text-ink">
                  {member.name}
                </h3>

                {member.bio && (
                  <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-ink-soft">
                    {member.bio}
                  </p>
                )}

                {member.location && (
                  <div className="mt-4 flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">
                    <PinIcon />
                    {member.location}
                  </div>
                )}

                <hr className="mt-4 border-line" />

                <p className="mt-4 font-display text-[18px] font-semibold italic tracking-[-0.01em] text-ink">
                  {firstName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
