"use client";

import {
  ChefHat,
  Mic,
  Puzzle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Status = "shipped" | "in-flight" | "planned";

type Milestone = {
  quarter: string;
  year: string;
  status: Status;
  title: string;
  body: string;
  icon: LucideIcon;
};

const MILESTONES: Milestone[] = [
  {
    quarter: "Q4",
    year: "2025",
    status: "shipped",
    title: "VOChef",
    body: "Public release on Android. Tamil + English.",
    icon: ChefHat,
  },
  {
    quarter: "Q2",
    year: "2026",
    status: "in-flight",
    title: "Meetory Beta",
    body: "Private beta for Indian SMB teams. Slack + Meet integrations.",
    icon: Mic,
  },
  {
    quarter: "Q3",
    year: "2026",
    status: "planned",
    title: "Decodory",
    body: "Daily IT puzzles for working engineers. Real-world stories. Hidden tech.",
    icon: Puzzle,
  },
  {
    quarter: "Q4",
    year: "2026",
    status: "planned",
    title: "On-device tier",
    body: "A local model running on entry-level Android — no cloud required.",
    icon: Zap,
  },
];

const STATUS_STYLES: Record<
  Status,
  { label: string; pill: string; dot?: string }
> = {
  shipped: {
    label: "Shipped",
    pill: "bg-[#dcf5e6] text-[#0f9d6e]",
    dot: "#0f9d6e",
  },
  "in-flight": {
    label: "In flight",
    pill: "bg-[#e2ebff] text-brand-dark",
  },
  planned: {
    label: "Planned",
    pill: "bg-line text-ink-soft",
  },
};

const STEP_MS = 1800;

export default function RoadmapTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [progressPx, setProgressPx] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setActiveIndex((i) => {
        const next = i + 1;
        if (next >= MILESTONES.length) {
          clearInterval(id);
          return MILESTONES.length - 1;
        }
        return next;
      });
    }, STEP_MS);
    return () => clearInterval(id);
  }, [started]);

  useEffect(() => {
    const list = listRef.current;
    const node = nodeRefs.current[activeIndex];
    if (!list || !node) return;
    const listRect = list.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    setProgressPx(nodeRect.top - listRect.top + nodeRect.height / 2);
  }, [activeIndex, started]);

  return (
    <ol ref={listRef} className="relative">
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-2 bottom-2 w-px"
        style={{ background: "rgba(15,23,42,0.08)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-2 w-px"
        style={{
          height: `${Math.max(progressPx - 8, 0)}px`,
          background:
            "linear-gradient(180deg, rgba(10,52,101,0.85) 0%, rgba(10,52,101,0.55) 100%)",
          transition: "height 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {MILESTONES.map((m, i) => (
        <MilestoneRow
          key={m.title}
          milestone={m}
          isLast={i === MILESTONES.length - 1}
          isActive={i === activeIndex}
          isPassed={i < activeIndex}
          nodeRef={(el) => {
            nodeRefs.current[i] = el;
          }}
        />
      ))}
    </ol>
  );
}

function MilestoneRow({
  milestone,
  isLast,
  isActive,
  isPassed,
  nodeRef,
}: {
  milestone: Milestone;
  isLast: boolean;
  isActive: boolean;
  isPassed: boolean;
  nodeRef: (el: HTMLSpanElement | null) => void;
}) {
  const Icon = milestone.icon;
  const status = STATUS_STYLES[milestone.status];

  const isLit = isActive || isPassed;
  const nodeStyle: React.CSSProperties = isActive
    ? {
        background: "var(--color-brand-dark)",
        borderColor: "var(--color-brand-dark)",
        color: "#ffffff",
        transform: "scale(1.08)",
      }
    : isPassed
      ? {
          background: "var(--color-brand-dark)",
          borderColor: "var(--color-brand-dark)",
          color: "#ffffff",
        }
      : {
          background: "var(--color-surface)",
          borderColor: "var(--color-line)",
          color: "var(--color-muted)",
        };

  const titleStyle: React.CSSProperties = {
    opacity: isLit ? 1 : 0.55,
    transition: "opacity 500ms ease, color 500ms ease",
  };

  return (
    <li
      className={`relative pl-14 ${isLast ? "" : "pb-10 sm:pb-12"}`}
      style={{
        opacity: isLit ? 1 : 0.7,
        transition: "opacity 600ms ease",
      }}
    >
      <span
        ref={nodeRef}
        className={`absolute left-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] ${
          isActive ? "animate-ring-pulse" : ""
        }`}
        style={{
          ...nodeStyle,
          transition:
            "background 500ms ease, border-color 500ms ease, color 500ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Icon size={15} strokeWidth={1.75} />
      </span>

      <div className="flex flex-wrap items-center gap-3 pt-1.5">
        <span className="font-mono text-[11px] tracking-[0.16em] text-ink-soft">
          {milestone.quarter} · {milestone.year}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] ${status.pill}`}
        >
          {status.dot && (
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: status.dot }}
            />
          )}
          {status.label}
        </span>
      </div>

      <h3
        className="mt-2 font-display text-[28px] font-semibold tracking-[-0.01em] text-ink sm:text-[32px]"
        style={titleStyle}
      >
        {milestone.title}
      </h3>
      <p
        className="mt-2 max-w-xl text-[14.5px] leading-[1.55] text-ink-soft"
        style={titleStyle}
      >
        {milestone.body}
      </p>
    </li>
  );
}
