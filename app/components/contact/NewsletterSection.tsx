"use client";

import { useState } from "react";

interface Props {
  data?: {
    badge?: string;
    heading?: string;
    description?: string;
    email?: string;
  };
}

export default function NewsletterSection({ data }: Props) {
  const badge = data?.badge || "Stay quietly informed";
  const heading = data?.heading || "We email about once a quarter.";
  const description = data?.description || "No drip campaigns, no 'thought leadership', no marketing automation. Just a short note when something genuine has shipped or changed.";
  const mailTo = data?.email || "hello@magdee.in";

  const [email, setEmail] = useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("Quarterly note, please");
    const body = encodeURIComponent(
      `Hi MagDee,\n\nPlease add me to the quarterly note.\n\nEmail: ${email}`
    );
    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="relative bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div
          className="rounded-3xl px-8 py-12 sm:px-12 lg:px-14 lg:py-14"
          style={{
            background:
              "linear-gradient(106.7deg, #0A192F 0%, #1E3A8A 38.46%, #6D5BE2 76.92%)",
          }}
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/55">
                — {badge}
              </p>

              <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[52px]">
                {heading}
              </h2>

              <p className="mt-5 max-w-[38ch] text-[14.5px] leading-[1.7] text-white/65">
                {description}
              </p>
            </div>

            {/* Right */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="newsletter-email"
                  className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55"
                >
                  — Subscribe
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.in"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/8 px-5 py-4 text-[14.5px] text-white placeholder:text-white/45 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-5 py-4 text-[15px] font-medium text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
              >
                <SendIcon />
                Quarterly note, please
              </button>

              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                One-click unsubscribe <span className="mx-1.5">·</span> No marketing
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  );
}
