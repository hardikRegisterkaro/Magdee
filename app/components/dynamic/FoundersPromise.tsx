export default function FoundersPromise() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white sm:h-[72px] sm:w-[72px]"
            style={{
              background:
                "linear-gradient(135deg, #0A192F 0%, #1E3A8A 70%, #3B5BDB 100%)",
            }}
          >
            <ElephantIcon />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span>The Founders&apos; Promise</span>
              <span aria-hidden>·</span>
              <span>The Elephant Philosophy</span>
            </div>

            <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.6] text-ink sm:text-[17px]">
              We named the company after the elephant — patient, careful with
              what it carries, and{" "}
              <span className="italic font-semibold text-brand">
                quietly stronger than it looks
              </span>
              . That promise applies to every product we ship, including this
              one.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex -space-x-2">
                <InitialAvatar letter="A" bg="#2a4bff" />
                <InitialAvatar letter="S" bg="#7c4bff" />
              </span>
              <p className="text-[13.5px] text-ink-soft">
                <span className="font-medium text-ink">Arjun &amp; Saanvi</span>
                <span className="mx-1.5 text-muted">·</span>
                Co-founders, MagDee
                <span className="mx-1.5 text-muted">·</span>
                Coimbatore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InitialAvatar({ letter, bg }: { letter: string; bg: string }) {
  return (
    <span
      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[10.5px] font-semibold text-white ring-2 ring-background"
      style={{ background: bg }}
      aria-hidden
    >
      {letter}
    </span>
  );
}

function ElephantIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M9 12c0-3.3 2.7-6 6-6s6 2.7 6 6v2c0 1.1.9 2 2 2h1c1.1 0 2 .9 2 2v1c0 1.7-1.3 3-3 3h-1v3c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-2h-6v2c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-3.4c-1.2-.8-2-2.1-2-3.6v-2c0-1.1.4-2.1 1-2.9V12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="12" r="0.9" fill="currentColor" />
      <path
        d="M22 18c1.1 0 2-.9 2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
