"use client";

import { Sparkle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  items: string[];
};

export default function HeroMarquee({ items }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden border-t border-line bg-surface/60 py-4"
    >
      <div
        className="marquee-track flex items-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
        style={{ animationPlayState: visible ? "running" : "paused" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="flex items-center gap-3 px-10">
              <Sparkle size={14} className="text-brand" strokeWidth={2} />
              <span>{item}</span>
            </span>
            <span aria-hidden className="text-muted/60">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
