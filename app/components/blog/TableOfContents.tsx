"use client";

import { useEffect, useRef, useState } from "react";

export type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((el) => observer.current!.observe(el));
    return () => observer.current?.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="mb-[14px] text-[13px] font-semibold leading-normal text-[#0a192f]">
        On this page
      </p>
      <div className="flex flex-col gap-[8px]">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              className={`flex items-center gap-[8px] ${item.level === 3 ? "pl-[14px]" : ""}`}
            >
              {isActive && item.level === 2 && (
                <div className="h-[16px] w-[2px] shrink-0 rounded-[1px] bg-[#1e40af]" />
              )}
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveId(item.id);
                }}
                className={`block text-[12.5px] leading-normal transition-colors ${
                  isActive
                    ? "font-semibold text-[#1e40af]"
                    : "font-normal text-[#4a5568] hover:text-[#0a192f]"
                }`}
              >
                {item.label}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
