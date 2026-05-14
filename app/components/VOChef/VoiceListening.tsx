const STATS = [
  { value: "3", label: "Languages" },
  { value: "142ms", label: "Avg latency" },
  { value: "98%", label: "Accuracy" },
];

const WAVEFORM = [
  0.32, 0.55, 0.78, 0.92, 0.68, 0.85, 0.6, 0.95, 0.72, 0.5, 0.88, 0.62, 0.78,
  0.45, 0.7, 0.55, 0.4, 0.62, 0.48, 0.35, 0.55, 0.42, 0.3, 0.5, 0.38, 0.28,
  0.46, 0.34, 0.26, 0.4,
];
const PLAYHEAD_INDEX = 12;

export default function VoiceListening() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, #0A192F 14.29%, #1E3A8A 50%, #3B5BDB 85.71%)",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#3bd28a] opacity-60" />
                  <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#3bd28a]" />
                </span>
                Listening
                <span className="text-white/40">·</span>
                Tamil + English
              </span>

              <p className="mt-7 font-display text-[20px] font-semibold italic leading-[1.35] text-white sm:text-[22px]">
                &ldquo;Adha aiyo, ipdi panrein.
                <br />
                Next step la onion add panren.&rdquo;
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-white/65">
                &ldquo;Wait, doing it this way. Next step, I&apos;ll add onion.&rdquo;
              </p>

              <div className="mt-7 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-5 backdrop-blur">
                <div className="flex h-12 items-end justify-between gap-[3px]">
                  {WAVEFORM.map((h, i) => (
                    <span
                      key={i}
                      aria-hidden
                      className="w-[3px] rounded-full"
                      style={{
                        height: `${Math.round(h * 100)}%`,
                        background:
                          i === PLAYHEAD_INDEX
                            ? "#ff8a3d"
                            : `rgba(255,255,255,${0.25 + h * 0.45})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/60">
                <span>Confidence</span>
                <ConfidencePill language="Tamil" value="94%" />
                <ConfidencePill language="English" value="98%" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Feature
              <span className="text-muted">·</span>
              <span className="text-muted">02</span>
            </div>

            <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[56px]">
              Listens in your
              <br />
              <span className="italic text-brand">actual</span> voice.
            </h2>

            <p className="mt-6 max-w-[34rem] text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16.5px]">
              Switch between Tamil, English, and Hindi mid-sentence — VOChef
              follows. No &ldquo;say it slower,&rdquo; no broken transcription.
              Trained on Indian kitchens, not American ones.
            </p>

            <ul className="mt-7 grid grid-cols-3 gap-3 max-w-[26rem]">
              {STATS.map((s) => (
                <li
                  key={s.label}
                  className="rounded-xl border border-line bg-surface px-3.5 py-3"
                >
                  <p className="font-display text-[20px] font-semibold tracking-[-0.01em] text-ink sm:text-[22px]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#tamil-demo"
              className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-brand transition-colors hover:text-[#1f3ce8]"
            >
              Hear it in Tamil
              <PlayIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConfidencePill({ language, value }: { language: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
      {language}
      <span className="text-white/55">{value}</span>
    </span>
  );
}

function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 2.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}
