import ContactForm from "./ContactForm";

const CONTACT_CARDS = [
  {
    icon: <MailIcon />,
    label: "Email Us",
    value: "hello@magdee.in",
    detail: "One of us within 24 hrs",
  },
  {
    icon: <PinIcon />,
    label: "Visit Us",
    value: "Coimbatore HQ",
    detail: "By appointment only",
  },
  {
    icon: <SpeechIcon />,
    label: "Or in Tamil",
    value: "வணக்கம்",
    detail: "vanakkam@magdee.in",
  },
  {
    icon: <PressIcon />,
    label: "Press Inbox",
    value: "press@magdee.in",
    detail: "Embargoed inquiries welcome",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 600px at 90% -5%, rgba(30,64,175,0.08), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pb-24 lg:pt-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Get in touch
            </div>

            <h1 className="mt-7 font-display text-[56px] font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-[72px] lg:text-[88px]">
              Say <em className="italic text-brand">hi</em>.
              <br />
              One of us
              <br />
              reads it.
            </h1>

            <p className="mt-7 max-w-[34rem] text-[15px] leading-[1.7] text-ink-soft sm:text-[16px]">
              There&apos;s no support queue, no ticketing system, no chatbot.
              Three founders and a small team handle every email — usually
              within a working day.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe6cd] bg-[#e8f7ee] px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#176c3a]">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#22a55b] opacity-60" />
                  <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#22a55b]" />
                </span>
                Open now
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                Mon-Fri · 09:00-19:00 IST
              </span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONTACT_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3.5"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f2f7] text-ink-soft">
                    {card.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted">
                      — {card.label}
                    </p>
                    <p className="mt-1 truncate text-[14px] font-semibold text-ink">
                      {card.value}
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-ink-soft">
                      {card.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function SpeechIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function PressIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

