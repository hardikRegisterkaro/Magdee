"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { MainMenuItem } from "../lib/header-menu";

export default function NavbarClient({ menu }: { menu: MainMenuItem[] }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(title: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(title);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 150);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="/" className="shrink-0" aria-label="MagDee — home">
          <Image
            src="/logo.svg"
            alt="MagDee"
            width={120}
            height={36}
            priority
            unoptimized
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/80 px-2 py-1.5 text-[14px] font-medium text-ink-soft shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            {menu.map((item) =>
              item.child_menu ? (
                <li
                  key={item.url}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.title)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-background hover:text-ink"
                  >
                    {item.title}
                    <ChevronIcon
                      open={dropdownOpen === item.title}
                    />
                  </button>
                  {dropdownOpen === item.title && (
                    <div
                      className="absolute left-0 top-full pt-2"
                      onMouseEnter={() => openDropdown(item.title)}
                      onMouseLeave={scheduleClose}
                    >
                      <ul className="min-w-[160px] rounded-2xl border border-line bg-surface py-1.5 shadow-lg">
                        {item.child_menu.map((child) => (
                          <li key={child.url}>
                            <a
                              href={child.url}
                              className="block px-4 py-2 text-[13px] text-ink-soft transition-colors hover:bg-background hover:text-ink"
                            >
                              {child.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.url}>
                  <a
                    href={item.url}
                    className="rounded-full px-3 py-1.5 block transition-colors hover:bg-background hover:text-ink"
                  >
                    {item.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/contact-us"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[14px] font-medium text-white shadow-[0_8px_24px_-12px_rgba(42,75,255,0.7)] transition-colors hover:bg-[#1f3ce8]"
          >
            Contact Us
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
            {menu.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 hover:bg-background hover:text-ink"
                >
                  {item.title}
                </a>
                {item.child_menu && (
                  <ul className="ml-3 flex flex-col gap-0.5 pb-1">
                    {item.child_menu.map((child) => (
                      <li key={child.url}>
                        <a
                          href={child.url}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-3 py-2 text-[14px] hover:bg-background hover:text-ink"
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-[15px] font-medium text-white"
              >
                Contact Us
                <ArrowIcon />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
