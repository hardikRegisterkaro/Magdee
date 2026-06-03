import Image from "next/image";

const LANGUAGES = [
  "Tamil",
  "English",
  "Hindi",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Bengali",
];

export default function VoiceListening() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              <Image
                src="/screenshots/vochef_03_cook_guide_android.png"
                alt="VOChef Ask Chef AI — a real conversation mixing English, Tamil and Hindi mid-sentence"
                width={1356}
                height={2602}
                unoptimized
                className="block h-auto w-full drop-shadow-[0_40px_80px_rgba(15,23,42,0.25)]"
              />
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
              Ask &ldquo;tamil la pesuviya chef?&rdquo; — VOChef replies in
              Tamil. Switch to English mid-sentence — it follows. 20+ languages
              supported, with Tamil, English, and Hindi as the headline trio.
              Trained on Indian kitchens, not American ones.
            </p>

            <div className="mt-7">
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted">
                Supported today
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-[12.5px] font-medium text-ink"
                  >
                    {lang}
                  </span>
                ))}
                <span className="rounded-full bg-brand/10 px-3 py-1.5 text-[12.5px] font-medium text-brand">
                  + 12 more
                </span>
              </div>
            </div>

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

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 2.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}
