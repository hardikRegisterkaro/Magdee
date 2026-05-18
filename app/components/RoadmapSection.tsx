import EarlyAccessForm from "./EarlyAccessForm";
import RoadmapTimeline from "./RoadmapTimeline";
import Reveal from "./Reveal";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div
                className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em]"
                style={{ color: "#003B8B" }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "#003B8B" }}
                />
                04 — Roadmap
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[60px]">
                The slow,
                <br />
                <span className="italic" style={{ color: "#003B8B" }}>
                  honest
                </span>{" "}
                plan.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-ink-soft">
                No vaporware. No moving targets dressed as visions. Here&apos;s
                what we&apos;re actually shipping, in the order we&apos;re
                shipping it.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <EarlyAccessForm />
            </Reveal>
          </div>

          <RoadmapTimeline />
        </div>
      </div>
    </section>
  );
}
