"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          pageSource: "contact",
          pageUrl: "/about",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label className="relative block">
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-soft">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.in"
                  className="w-full rounded-2xl bg-white py-4 pl-14 pr-5 text-[15px] font-medium text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-[15px] font-medium text-white transition-colors hover:bg-white/15 disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing…" : "Keep me in the loop"}
                {status !== "loading" && <ArrowIcon />}
              </button>

              {status === "success" && (
                <p className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[12.5px] leading-normal text-white">
                  You&apos;re on the list. Talk soon.
                </p>
              )}
              {status === "error" && errorMsg && (
                <p className="rounded-lg border border-red-300/40 bg-red-500/15 px-3 py-2 text-[12.5px] leading-normal text-red-100">
                  {errorMsg}
                </p>
              )}

              <a
                href="mailto:hello@magdee.in?subject=Hiring%20Inquiry"
                className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/70 transition-colors hover:text-white"
              >
                Or write to us about hiring
                <ArrowIcon />
              </a>
            </form>
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
