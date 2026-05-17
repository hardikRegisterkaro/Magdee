"use client";

import { useState } from "react";

export default function NewsletterMini() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <div className="w-[212px] rounded-[10px] border border-[#e2e8f0] bg-[#f1f5f9] p-[16px]">
      <p className="font-mono text-[9px] font-bold tracking-[1.3px] text-[#4a5568]">
        — QUARTERLY NOTE
      </p>
      <p className="mt-[10px] w-[180px] text-[13px] font-semibold leading-[18px] text-[#0a192f]">
        New posts in your inbox.
      </p>
      <form className="mt-[10px] space-y-[10px]" onSubmit={handleSubmit}>
        <div className="flex w-[180px] items-center rounded-[7px] border border-[#e2e8f0] bg-white px-[9px] py-[7px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.in"
            className="w-full bg-transparent text-[11px] font-normal text-[#0a192f] placeholder:text-[#718096] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-[180px] items-center justify-center gap-[6px] rounded-[7px] bg-[#0a192f] px-[10px] py-[8px] text-[12px] font-semibold text-white transition-colors hover:bg-black"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
          Subscribe
        </button>
      </form>
    </div>
  );
}
