"use client";

import { ArrowRight, Check, Mail } from "lucide-react";
import { useState } from "react";

const PRODUCTS = ["VOChef", "Mee Tory", "Ellamly"] as const;
type Product = (typeof PRODUCTS)[number];

export default function EarlyAccessForm() {
  const [selected, setSelected] = useState<Set<Product>>(new Set(["VOChef"]));
  const [email, setEmail] = useState("");

  const toggle = (p: Product) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  return (
    <div className="mt-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
        Get early access
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {PRODUCTS.map((p) => {
          const active = selected.has(p);
          return (
            <button
              key={p}
              type="button"
              onClick={() => toggle(p)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                active
                  ? "text-white"
                  : "border border-line bg-surface text-ink-soft hover:text-ink"
              }`}
              style={active ? { background: "#003B8B" } : undefined}
            >
              {active && <Check size={12} strokeWidth={2.5} />}
              {p}
            </button>
          );
        })}
      </div>

      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="relative flex-1">
          <Mail
            size={15}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.in"
            className="w-full rounded-full border border-line bg-surface py-3 pl-10 pr-4 text-[14px] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium text-white transition-colors hover:opacity-90"
          style={{ background: "#003B8B" }}
        >
          Join
          <ArrowRight size={14} />
        </button>
      </form>

      <p className="mt-3 text-[12px] text-ink-soft">
        We email only about the products you ticked. One-click unsubscribe.
      </p>
    </div>
  );
}
