"use client";

import { useState } from "react";
import MagDeeLogo from "./MagDeeLogo";

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Vision", href: "#vision" },
  { label: "Roadmap", href: "#roadmap" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="shrink-0">
          <MagDeeLogo />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/80 px-2 py-1.5 text-[14px] font-medium text-ink-soft shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-background hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[14px] font-medium text-white shadow-[0_8px_24px_-12px_rgba(42,75,255,0.7)] transition-colors hover:bg-[#1f3ce8]"
          >
            Join waitlist
            <ArrowIcon />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[5px] h-[1.5px] w-full bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[10px] h-[1.5px] w-full bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 text-[15px] font-medium text-ink-soft sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 hover:bg-background hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-[15px] font-medium text-white"
              >
                Join waitlist
                <ArrowIcon />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
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
      className="translate-y-[0.5px]"
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
