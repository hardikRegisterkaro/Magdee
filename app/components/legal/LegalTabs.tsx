"use client";

import { useState, useEffect, useRef } from "react";
import TableOfContents, { TocItem } from "@/app/components/blog/TableOfContents";
import type { CSSProperties } from "react";

/* ─── Helpers ────────────────────────────────────────────────────────── */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractTocItems(html: string): TocItem[] {
  const items: TocItem[] = [];
  const usedIds = new Set<string>();
  const re = /<(h[23])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const level = (m[1] === "h2" ? 2 : 3) as 2 | 3;
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    let id = slugify(text);
    if (!id) continue;
    let unique = id;
    let n = 2;
    while (usedIds.has(unique)) unique = `${id}-${n++}`;
    usedIds.add(unique);
    items.push({ id: unique, label: text, level });
  }
  return items;
}

function injectHeadingIds(html: string): string {
  const usedIds = new Set<string>();
  return html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text);
    if (!id) return `<${tag}${attrs}>${inner}</${tag}>`;
    let unique = id;
    let n = 2;
    while (usedIds.has(unique)) unique = `${id}-${n++}`;
    usedIds.add(unique);
    return `<${tag}${attrs} id="${unique}">${inner}</${tag}>`;
  });
}

function liftItalicQuotes(html: string): string {
  return html.replace(
    /<p>(\s*(?:<strong>\s*)?<em>[\s\S]*?<\/em>(?:\s*<\/strong>)?\s*)<\/p>/gi,
    (_, inner) => `<blockquote><p>${inner}</p></blockquote>`
  );
}

const HATCH_STYLE: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.07) 0, rgba(0,0,0,0.07) 0.5px, transparent 0.5px, transparent 6px)",
};

/* ─── Tab types ──────────────────────────────────────────────────────── */

type Tab = "terms" | "privacy";

interface Props {
  title: string;
  subTitle: string;
  termsBody: string;
  privacyBody: string;
  updatedAt?: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

function SubTitleParagraphs({ text }: { text: string }) {
  // Split on blank lines (double newline) for paragraphs;
  // within each paragraph replace single \n with <br>
  const paras = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paras.length === 0) return null;

  return (
    <>
      {paras.map((para, i) => (
        <p key={i} className="text-[13.5px] font-normal leading-[1.75] text-[#4a5568]">
          {para.split("\n").map((line, j, arr) => (
            <span key={j}>
              {line}
              {j < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

/* ─── Component ──────────────────────────────────────────────────────── */

export default function LegalTabs({ title, subTitle, termsBody, privacyBody, updatedAt }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("terms");
  const contentRef = useRef<HTMLDivElement>(null);

  const currentBody = activeTab === "terms" ? termsBody : privacyBody;
  const processedBody = injectHeadingIds(liftItalicQuotes(currentBody));
  const tocItems = extractTocItems(currentBody);

  // Scroll to top of content when tab changes
  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "terms", label: "Terms & Conditions" },
    { id: "privacy", label: "Privacy Policy" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[1200px]">

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <main className="min-w-0 flex-1 px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

        {/* Label */}
        <div className="blog-fade-up mb-3">
          <span className="font-mono text-[9.5px] font-bold tracking-[1.3px] text-[#4a5568]">
            LEGAL
          </span>
        </div>

        {/* Title */}
        <h1 className="blog-fade-up text-[42px] font-bold leading-[1.12] tracking-[-1.4px] text-[#0a192f] sm:text-[52px]">
          {title}
        </h1>

        {/* Last updated byline */}
        {updatedAt && (
          <p className="blog-fade-up mt-3 text-[13px] text-[#718096]">
            <span className="font-semibold text-[#2d3748]">MagDee Technologies (OPC) Private Limited</span>
            {"  ·  "}
            <span>Last updated: {formatDate(updatedAt)}</span>
          </p>
        )}

        {/* Subtitle — rendered as proper paragraphs */}
        {subTitle && (
          <div className="blog-fade-up mt-5 space-y-3">
            <SubTitleParagraphs text={subTitle} />
          </div>
        )}

        {/* Tab switcher */}
        <div className="mt-8 flex items-center gap-1 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-[10px] px-5 py-2 text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-[#0a192f] shadow-sm border border-[#e2e8f0]"
                  : "text-[#4a5568] hover:text-[#0a192f]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div ref={contentRef} className="mt-8 mb-8 h-px bg-[#e2e8f0]" />

        {/* Article body */}
        {currentBody ? (
          <div
            key={activeTab}
            className="terms-body"
            dangerouslySetInnerHTML={{ __html: processedBody }}
          />
        ) : (
          <p className="text-[15px] italic text-[#718096]">
            Content is not available yet.
          </p>
        )}

        <div className="h-16" />
      </main>

      {/* ── Hatch divider ── */}
      {tocItems.length > 0 && (
        <div
          className="hidden w-3 shrink-0 self-stretch border-x border-[#e8eaf0] xl:block"
          style={HATCH_STYLE}
        />
      )}

      {/* ── RIGHT TOC ────────────────────────────────────────── */}
      {tocItems.length > 0 && (
        <aside className="blog-slide-right hidden w-[260px] shrink-0 px-7 py-16 xl:block">
          <div className="sticky top-[88px]">
            <TableOfContents key={activeTab} items={tocItems} />
          </div>
        </aside>
      )}

      {/* ── Styles ───────────────────────────────────────────── */}
      <style>{`
        .terms-body {
          color: #2d3748;
          font-size: 15.5px;
          line-height: 1.8;
        }
        .terms-body > * { margin-top: 0; margin-bottom: 0; }
        .terms-body > * + * { margin-top: 14px; }

        .terms-body h1,
        .terms-body h2,
        .terms-body h3,
        .terms-body h4 {
          color: #0a192f;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.4px;
        }
        .terms-body h1 { font-size: 32px; letter-spacing: -0.8px; margin-top: 48px; }
        .terms-body h2 {
          font-size: 24px;
          letter-spacing: -0.6px;
          margin-top: 40px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
        }
        .terms-body h2:first-child { margin-top: 0; }
        .terms-body h3 { font-size: 19px; letter-spacing: -0.3px; margin-top: 28px; }
        .terms-body h4 { font-size: 16px; margin-top: 24px; }

        .terms-body p { color: #2d3748; font-size: 15.5px; line-height: 1.8; }

        .terms-body a {
          color: #1e40af;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.15s;
        }
        .terms-body a:hover { color: #1e3a8a; }

        .terms-body strong { color: #0a192f; font-weight: 600; }
        .terms-body em { font-style: italic; color: #4a5568; }

        .terms-body ul, .terms-body ol { padding-left: 1.5rem; color: #2d3748; }
        .terms-body ul { list-style-type: disc; }
        .terms-body ol { list-style-type: decimal; }
        .terms-body li { margin-top: 6px; line-height: 1.75; }
        .terms-body li + li { margin-top: 4px; }

        .terms-body blockquote {
          margin-left: 0; margin-right: 0;
          padding: 14px 18px;
          border-left: 3px solid #1e40af;
          background: #f0f4ff;
          border-radius: 0 6px 6px 0;
          color: #1e40af;
          font-style: italic;
        }
        .terms-body blockquote p { color: inherit; margin: 0; }

        .terms-body code {
          font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
          font-size: 13px;
          background: #f1f5f9;
          color: #be185d;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
        }

        .terms-body pre {
          background: #0f172a;
          border-radius: 10px;
          padding: 18px 20px;
          overflow-x: auto;
          margin-top: 20px;
        }
        .terms-body pre code {
          background: transparent; color: #e2e8f0;
          border: none; padding: 0;
          font-size: 13.5px; line-height: 1.6;
        }

        .terms-body hr { border: none; border-top: 1px solid #e2e8f0; margin: 32px 0; }

        .terms-body table { width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 20px; }
        .terms-body th, .terms-body td { padding: 10px 14px; border: 1px solid #e2e8f0; text-align: left; }
        .terms-body th { background: #f8fafc; font-weight: 600; color: #0a192f; }
        .terms-body td { color: #2d3748; }
        .terms-body tr:nth-child(even) td { background: #fafbfc; }
      `}</style>
    </div>
  );
}
