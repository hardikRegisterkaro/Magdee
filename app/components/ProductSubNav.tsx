"use client";

import { usePathname } from "next/navigation";
import { VOCHEF_PLAY_STORE_URL } from "../lib/links";

type Product = {
  name: string;
  href: string;
  status: "LIVE" | "BETA" | "SOON";
};

const PRODUCTS: Product[] = [
  { name: "VOChef", href: "/vochef", status: "LIVE" },
  { name: "Mee Tory", href: "/mee-tory", status: "BETA" },
  { name: "Ellamly", href: "/ellamly", status: "SOON" },
];

type Props = {
  active?: Product["name"];
  playStoreHref?: string;
};

export default function ProductSubNav({ active, playStoreHref = VOCHEF_PLAY_STORE_URL }: Props) {
  const pathname = usePathname();
  const activeName =
    active ??
    PRODUCTS.find((p) => p.href.toLowerCase() === pathname?.toLowerCase())?.name ??
    PRODUCTS[0].name;
  return (
    <header className="bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 px-5 py-3 sm:h-14 sm:flex-row sm:items-center sm:gap-4 sm:px-8 sm:py-0 lg:px-12">
        <nav aria-label="Breadcrumb" className="min-w-0 shrink-0">
          <ol className="flex items-center gap-2 text-[13.5px] font-medium text-ink-soft">
            <li className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 rounded-md text-ink-soft transition-colors hover:text-ink"
              >
                <BackArrow />
                MagDee
              </a>
            </li>
            <li aria-hidden className="text-muted">/</li>
            <li>
              <a href="/#suite" className="transition-colors hover:text-ink">
                Products
              </a>
            </li>
            <li aria-hidden className="text-muted">/</li>
            <li aria-current="page" className="truncate font-semibold text-ink">
              {activeName}
            </li>
          </ol>
        </nav>

        <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />

        <nav
          aria-label="Products"
          className="hidden sm:mx-0 sm:flex sm:w-auto sm:shrink-0 sm:justify-center sm:overflow-visible sm:px-0"
        >
          <ul className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/80 p-1 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            {PRODUCTS.map((p) => {
              const isActive = p.name === activeName;
              return (
                <li key={p.name}>
                  <a
                    href={p.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "bg-ink text-white"
                        : "text-ink-soft hover:bg-background hover:text-ink"
                    }`}
                  >
                    {p.name}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.12em] ${
                        isActive
                          ? "bg-white/15 text-white"
                          : p.status === "BETA"
                            ? "bg-warm text-[#9b5d20]"
                            : "bg-line text-ink-soft"
                      }`}
                    >
                      {p.status}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />

        <div className="hidden shrink-0 sm:block">
          <a
            href={playStoreHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand transition-colors hover:text-[#1f3ce8]"
          >
            View on Google Play
            <ForwardArrow />
          </a>
        </div>
      </div>
    </header>
  );
}

function BackArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M11.5 7h-9M6 3.5 2.5 7 6 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForwardArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
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
