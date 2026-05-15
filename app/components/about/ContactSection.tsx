export default function ContactSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div
          className="rounded-3xl px-8 py-12 sm:px-12 lg:px-14 lg:py-14"
          style={{
            background: "linear-gradient(135deg, #3B4ED8 0%, #6B5CE7 60%, #8B6CF0 100%)",
          }}
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/50">
                — Come Say Hi
              </p>

              <h2 className="mt-5 font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[52px] lg:text-[60px]">
                We answer
                <br />
                our own email.
              </h2>

              <p className="mt-5 max-w-[38ch] text-[14.5px] leading-[1.7] text-white/60">
                Press, partnership, careers, or just a hello in Tamil — it all
                lands in the same inbox, and one of us reads it that day.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@magdee.in"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-[15px] font-medium text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
              >
                <MailIcon />
                hello@magdee.in
              </a>

              <a
                href="mailto:hello@magdee.in?subject=Hiring%20Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-[15px] font-medium text-white transition-colors hover:bg-white/15"
              >
                We&apos;re hiring 
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
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
