"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterMini() {
  const pathname = usePathname() || "/blog";
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
          pageSource: "blog",
          pageUrl: pathname,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error.");
    }
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.in"
            className="w-full bg-transparent text-[11px] font-normal text-[#0a192f] placeholder:text-[#718096] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-[180px] items-center justify-center gap-[6px] rounded-[7px] bg-[#0a192f] px-[10px] py-[8px] text-[12px] font-semibold text-white transition-colors hover:bg-black disabled:opacity-60"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
        {status === "success" && (
          <p className="text-[10.5px] leading-snug text-[#0f9d6e]">
            Subscribed. See you next quarter.
          </p>
        )}
        {status === "error" && errorMsg && (
          <p className="text-[10.5px] leading-snug text-red-600">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}
