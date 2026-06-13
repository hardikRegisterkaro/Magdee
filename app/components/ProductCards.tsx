"use client";

import { useState } from "react";
import { VOCHEF_PLAY_STORE_URL } from "../lib/links";

interface Product {
  name: string;
  status: string;
  active: boolean;
  popup: {
    badge: string;
    badgeColor: string;
    title: string;
    description: string;
    cta?: { label: string; href: string; external?: boolean };
    note?: string;
  };
}

const PRODUCTS: Product[] = [
  {
    name: "Meetory",
    status: "Private beta · Q2 2026",
    active: true,
    popup: {
      badge: "PRIVATE BETA · Q2 2026",
      badgeColor: "#1E40AF",
      title: "Meetory beta opens Q2 2026",
      description:
        "An AI meeting assistant for multilingual teams. Joins your call, transcribes 10+ languages (including code-switching), and turns every conversation into summaries, action items, and searchable history.",
      cta: { label: "Request beta access →", href: "/meetory" },
      note: "First wave of invites goes out in the order people asked.",
    },
  },
  {
    name: "VOChef",
    status: "Live on Android",
    active: false,
    popup: {
      badge: "LIVE ON ANDROID",
      badgeColor: "#16a34a",
      title: "VOChef is live 🎉",
      description:
        "Your voice-first AI chef assistant is ready to use. Hands stay on the spoon — the screen stays clean. Ask it anything about cooking, get step-by-step guidance, and cook smarter.",
      cta: { label: "Get it on Google Play →", href: VOCHEF_PLAY_STORE_URL, external: true },
    },
  },
  {
    name: "Decodory",
    status: "Coming late 2026",
    active: false,
    popup: {
      badge: "IN DEVELOPMENT",
      badgeColor: "#6d28d9",
      title: "Decodory is being built",
      description:
        "Decode the tech behind everyday life. Solve real-world puzzles — a tea stall during evening rush, a hospital ER, a busy bank — and discover the IT concepts hidden inside them. No code. No jargon. Just decode.",
      cta: { label: "Join the waitlist →", href: "/decodory" },
      note: "One puzzle a day. Calibrated against working engineers, not CS freshmen.",
    },
  },
];

export default function ProductCards() {
  const [active, setActive] = useState<Product | null>(null);
  const [exiting, setExiting] = useState(false);

  function open(product: Product) {
    if (active?.name === product.name) {
      close();
      return;
    }
    // If another popup is open, swap immediately
    setActive(product);
    setExiting(false);
  }

  function close() {
    setExiting(true);
    setTimeout(() => {
      setActive(null);
      setExiting(false);
    }, 300);
  }

  return (
    <>
      <style>{`
        @keyframes card-popup-in {
          from { opacity: 0; transform: translateY(10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes card-popup-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(10px) scale(0.97); }
        }
        .card-popup-enter { animation: card-popup-in  0.28s cubic-bezier(0.22,1,0.36,1) forwards; }
        .card-popup-exit  { animation: card-popup-out 0.22s cubic-bezier(0.4,0,1,1)     forwards; }

        @keyframes live-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.6); }
        }
        .live-dot-ring { animation: live-pulse 1.8s ease-in-out infinite; }
      `}</style>

      {/* ── Product cards ── */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {PRODUCTS.map((p) => {
          const isSelected = active?.name === p.name;
          return (
            <button
              key={p.name}
              type="button"
              onClick={() => open(p)}
              className={`flex w-full items-center justify-between rounded-2xl border bg-surface px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-brand shadow-[0_0_0_3px_rgba(42,75,255,0.12)] bg-[#f0f4ff]"
                  : p.active
                  ? "border-brand shadow-[0_0_0_3px_rgba(42,75,255,0.08)]"
                  : "border-line hover:border-ink/20"
              }`}
            >
              <span>
                <span className="block text-[14px] font-semibold text-ink">{p.name}</span>
                <span className="mt-0.5 block text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">
                  {p.status}
                </span>
              </span>
              <span className="relative ml-3 flex h-2 w-2 shrink-0 items-center justify-center">
                {p.active && (
                  <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
                )}
                <span className={`relative inline-block h-2 w-2 rounded-full ${p.active ? "bg-brand" : "bg-line"}`} />
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Backdrop blur ── */}
      {active && (
        <div
          onClick={close}
          className={`fixed inset-0 z-40 backdrop-blur-sm bg-white/30 ${
            exiting ? "card-popup-exit" : "card-popup-enter"
          }`}
        />
      )}

      {/* ── Centered popup ── */}
      {active && (
        <div
          className={`fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-100 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_24px_64px_rgba(10,25,47,0.18)] ${
            exiting ? "card-popup-exit" : "card-popup-enter"
          }`}
        >
          {/* Accent top bar */}
          <div
            className="h-0.75 w-full"
            style={{ background: `linear-gradient(to right, ${active.popup.badgeColor}, ${active.popup.badgeColor}88)` }}
          />

          <div className="px-6 py-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span
                  className="inline-block rounded-full px-2 py-0.5 font-mono text-[9px] font-bold tracking-[1.3px]"
                  style={{ color: active.popup.badgeColor, background: `${active.popup.badgeColor}15` }}
                >
                  {active.popup.badge}
                </span>
                <h3 className="mt-2 text-[17px] font-bold leading-snug text-[#0a192f]">
                  {active.popup.title}
                </h3>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="mt-0.5 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#a0aec0] transition-colors hover:bg-[#f1f5f9] hover:text-[#0a192f]"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M1 1l10 10M11 1L1 11" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="mt-3 text-[14px] leading-[1.75] text-[#4a5568]">
              {active.popup.description}
            </p>

            {/* Note */}
            {active.popup.note && (
              <p className="mt-2.5 text-[12px] leading-relaxed text-[#a0aec0] italic">
                {active.popup.note}
              </p>
            )}

            {/* CTA row */}
            <div className="mt-5 flex items-center gap-3">
              {active.popup.cta && (
                <a
                  href={active.popup.cta.href}
                  target={active.popup.cta.external ? "_blank" : undefined}
                  rel={active.popup.cta.external ? "noopener" : undefined}
                  className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: active.popup.badgeColor }}
                >
                  {active.popup.cta.label}
                </a>
              )}
              <a
                href="/contact-us"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-[#4a5568] underline underline-offset-2 transition-colors hover:text-[#0a192f]"
              >
                Contact us
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
