"use client";

import { useState } from "react";

export type SidebarSection = {
  label: string;
  posts: { slug: string; title: string; active?: boolean }[];
};

export default function MobileSidebarMenu({
  sections,
}: {
  sections: SidebarSection[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden border-b border-[#e2e8f0] bg-white">
      {/* Toggle bar */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-5 py-3.5 text-left"
      >
        <span
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
        <span className="text-[15px] font-semibold text-[#0a192f]">Menu</span>
      </button>

      {/* Expandable nav panel */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "70vh" : "0px" }}
      >
        <div className="overflow-y-auto" style={{ maxHeight: "70vh" }}>
          {/* Filter chips */}
          <div className="flex flex-col gap-3 border-b border-[#e2e8f0] px-5 py-4">
            <div className="flex items-center justify-between rounded-[8px] border border-[#e2e8f0] bg-white px-3 py-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] bg-[#f1f5f9]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[8px] font-bold tracking-[1px] text-[#4a5568]">READING</p>
                  <p className="text-[12px] font-semibold text-[#0a192f]">All posts</p>
                </div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            <div className="flex items-center justify-between rounded-[8px] border border-[#e2e8f0] bg-white px-3 py-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] bg-[#f1f5f9]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[8px] font-bold tracking-[1px] text-[#4a5568]">YEAR</p>
                  <p className="text-[12px] font-semibold text-[#0a192f]">2026</p>
                </div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Nav sections */}
          <div className="flex flex-col gap-5 px-5 py-4 pb-6">
            {sections.map((section) => (
              <div key={section.label}>
                <p className="mb-1 text-[13px] font-semibold text-[#0a192f]">{section.label}</p>
                <div className="flex flex-col gap-0.5">
                  {section.posts.map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center rounded-[6px] px-3 py-2 text-[13px] leading-normal transition-colors ${
                        post.active
                          ? "bg-[#f1f5f9] font-semibold text-[#0a192f]"
                          : "font-normal text-[#4a5568] hover:bg-[#f1f5f9] hover:text-[#0a192f]"
                      }`}
                    >
                      {post.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
