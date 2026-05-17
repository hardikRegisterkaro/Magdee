import TableOfContents, { TocItem } from "@/app/components/blog/TableOfContents";
import NewsletterMini from "@/app/components/blog/NewsletterMini";
import MobileSidebarMenu from "@/app/components/blog/MobileSidebarMenu";

/* ─── Static mock data ──────────────────────────────────────────────── */

const SIDEBAR_SECTIONS = [
  {
    label: "Latest",
    posts: [
      { slug: "tamil-first", title: "Why we built for Tamil first", active: true },
      { slug: "voychef-9-months", title: "Shipping VOChef in 9 months" },
      { slug: "patient-ai", title: "The Patient AI manifesto" },
      { slug: "mee-tory-listens", title: "How Mee Tory listens" },
      { slug: "naming-a-company", title: "Notes on naming a company" },
      { slug: "q1-beta", title: "What we learned from Q1 beta" },
    ],
  },
  {
    label: "Engineering",
    posts: [
      { slug: "on-device-inference", title: "On-device inference for ₹15K phones" },
      { slug: "tokenization-tamil", title: "Tokenization in Tamil" },
      { slug: "voice-latency", title: "Voice latency under 150ms" },
      { slug: "magdee-core-v14", title: "Building MagDee Core v1.4" },
    ],
  },
  {
    label: "Studio",
    posts: [
      { slug: "hiring", title: "Hiring without recruiters" },
      { slug: "why-coimbatore", title: "Why Coimbatore, honestly" },
      { slug: "elephant-mark", title: "Designing the elephant mark" },
      { slug: "press-kit", title: "Press kit & brand assets" },
    ],
  },
];

const TOC_ITEMS: TocItem[] = [
  { id: "the-decision", label: "The decision", level: 2 },
  { id: "native-tamil", label: 'What "native Tamil" means', level: 2 },
  { id: "technical-reality", label: "The technical reality", level: 2 },
  { id: "tokenization", label: "Tokenization", level: 3 },
  { id: "code-switching", label: "Code-switching", level: 3 },
  { id: "what-we-learned", label: "What we learned", level: 2 },
  { id: "whats-next", label: "What's next", level: 2 },
];

/* ─── Hatch divider ─────────────────────────────────────────────────── */

const HATCH_DIVIDER_STYLE: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.07) 0, rgba(0,0,0,0.07) 0.5px, transparent 0.5px, transparent 6px)",
};

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Mobile sidebar menu (lg and below) ── */}
      <MobileSidebarMenu sections={SIDEBAR_SECTIONS} />

      {/* ── 3-column body ── */}
      <div className="flex w-full max-w-[1440px] mx-auto">

        {/* ── LEFT SIDEBAR ─────────────────────────────────── */}
        <aside
          className="blog-slide-left hidden lg:flex w-[268px] shrink-0 flex-col gap-[20px] pb-[48px] pl-[32px] pr-[16px] pt-[32px]"
          style={{ animationDelay: "0ms" }}
        >
          {/* Filter chips */}
          <div className="flex w-[220px] items-center justify-between rounded-[8px] border border-[#e2e8f0] bg-white px-[10px] py-[8px]">
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] bg-[#f1f5f9]">
              <ReaderIcon />
            </div>
            <div className="flex flex-col gap-px">
              <p className="font-mono text-[8.5px] font-bold tracking-[1.1px] text-[#4a5568]">READING</p>
              <p className="text-[12px] font-semibold text-[#0a192f]">All posts</p>
            </div>
            <ChevronIcon />
          </div>

          <div className="flex w-[220px] items-center justify-between rounded-[8px] border border-[#e2e8f0] bg-white px-[10px] py-[8px]">
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] bg-[#f1f5f9]">
              <ShieldIcon />
            </div>
            <div className="flex flex-col gap-px">
              <p className="font-mono text-[8.5px] font-bold tracking-[1.1px] text-[#4a5568]">YEAR</p>
              <p className="text-[12px] font-semibold text-[#0a192f]">2026</p>
            </div>
            <ChevronIcon />
          </div>

          {/* Nav sections */}
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.label}>
              <p className="mb-[2px] text-[13px] font-semibold text-[#0a192f]">{section.label}</p>
              <div className="flex flex-col gap-[2px]">
                {section.posts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`flex w-[220px] items-center rounded-[6px] pl-[12px] pr-[8px] py-[7px] text-[12.5px] leading-normal transition-colors ${
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
        </aside>

        {/* ── Hatch divider: left │ main ── */}
        <div
          className="hidden lg:block w-3 shrink-0 self-stretch border-x border-[#e8eaf0]"
          style={HATCH_DIVIDER_STYLE}
        />

        {/* ── MAIN ARTICLE ─────────────────────────────────── */}
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-20 lg:py-12">
          {/* Eye row — category + read time */}
          <div className="blog-fade-up flex items-center gap-2.5" style={{ animationDelay: "60ms" }}>
            <span className="inline-flex items-center rounded-full border border-[rgba(30,64,175,0.2)] bg-[rgba(30,64,175,0.1)] px-[8px] py-[3px]">
              <span className="font-mono text-[9px] font-bold tracking-[1.3px] text-[#1e40af]">
                ENGINEERING
              </span>
            </span>
            <span className="font-mono text-[9.5px] font-bold tracking-[1.3px] text-[#4a5568]">
              9 MIN READ &nbsp;·&nbsp; MAY 12, 2026
            </span>
          </div>

          {/* Title */}
          <h1
            className="blog-fade-up mt-0 max-w-182.5 text-[48px] font-bold leading-13.5 tracking-[-1.6px] text-[#0a192f]"
            style={{ animationDelay: "140ms" }}
          >
            Why we built MagDee for Tamil first
          </h1>

          {/* 16px gap */}
          <div className="h-[16px]" />

          {/* Excerpt */}
          <p
            className="blog-fade-up max-w-182.5 text-[17px] font-normal leading-7 text-[#4a5568]"
            style={{ animationDelay: "210ms" }}
          >
            Most Indian AI products treat Tamil as a translation problem. We built MagDee assuming
            the opposite — that Tamil was the source language and English came along for the ride.
            Here&apos;s what that decision cost us, what it bought us, and why we&apos;d do it
            again.
          </p>

          {/* 24px gap */}
          <div className="h-[24px]" />

          {/* Byline */}
          <div
            className="blog-fade-up flex items-center gap-3"
            style={{ animationDelay: "270ms" }}
          >
            <div
              className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full text-center text-[14px] font-bold text-white"
              style={{ background: "linear-gradient(to right, #1e40af, #3b5bdb)" }}
            >
              S
            </div>
            <div className="flex min-w-0 flex-col gap-px">
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0">
                <span className="text-[13.5px] font-semibold text-[#0a192f]">Saanvi Iyer</span>
                <span className="text-[13px] font-normal text-[#a0aec0]">·</span>
                <span className="text-[13px] font-normal text-[#4a5568]">Co-founder, Engineering</span>
              </div>
              <p className="font-mono text-[9.5px] font-normal tracking-[0.8px] text-[#718096] sm:text-[10px] sm:tracking-[1.1px]">
                Posted to Engineering · Last updated 3 days ago
              </p>
            </div>
          </div>

          {/* 32px + divider + 32px */}
          <div className="h-[32px]" />
          <div className="h-px max-w-[730px] bg-[#e2e8f0]" />
          <div className="h-[32px]" />

          {/* ── Article body ── */}
          <div className="max-w-[730px]">

            {/* Section: The decision */}
            <h2 id="the-decision" className="text-[30px] font-bold leading-[38px] tracking-[-0.8px] text-[#0a192f]">
              The decision
            </h2>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              In November 2024, we sat in a small office in RS Puram and made what felt like a
              stupid commercial decision. We would build our voice assistant — the one we now call
              VOChef — to understand Tamil natively, not as a fine-tuned add-on.
            </p>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Stupid because every investor we spoke to said the same thing: ship in English, prove
              the model, then localize. Tamil-first sounded{" "}
              <em className="italic">romantic but irrational</em> — the market was tiny, the data
              was scarce, and the engineering effort was easily 3× harder. We agreed with all of it.
              We did it anyway.
            </p>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Three reasons. First, the people we wanted to serve already used Tamil at home — and
              the apps they used pretended Tamil didn&apos;t exist. Second, if we could make Tamil
              work well, every other Indian language got cheaper from there. Third — and this is the
              unfashionable one — we wanted to live with the product. We speak Tamil. We cook in
              Tamil. The assistant should too.
            </p>

            <div className="h-[32px]" />
            <div className="h-px bg-[#e2e8f0]" />
            <div className="h-[32px]" />

            {/* Section: What native Tamil means */}
            <h2 id="native-tamil" className="text-[30px] font-bold leading-[38px] tracking-[-0.8px] text-[#0a192f]">
              What &quot;native Tamil&quot; actually means
            </h2>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              A lot of products advertise Tamil support. Most of them do one of two things —
              translate from English at the edges, or run a multilingual model with thin Tamil
              training data. Both feel like Tamil-shaped output rather than Tamil thinking.
            </p>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              For us, native means three things, in order of difficulty:
            </p>
            <div className="h-[14px]" />
            {/* Bullet list with dash */}
            <div className="flex flex-col gap-[10px] text-[15.5px]">
              {[
                ["Phonemes", "the model should recognize ettae from ettu without coaching, and code-switch into English mid-sentence without panicking."],
                ["Pragmatics", `understand that "konjam saapdalama" is a polite question, not an instruction. Indian speech is full of soft requests dressed as statements.`],
                ["Vocabulary", "know what a thottuppadi is, what dabba means in a kitchen, and what aiyo signals."],
              ].map(([term, def]) => (
                <div key={term} className="flex items-start gap-[12px]">
                  <span className="leading-[26px] text-[#718096]">—</span>
                  <p className="leading-[26px] text-[#1e3a5f]">
                    <span className="font-semibold text-[#0a192f]">{term}</span>: {def}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-[32px]" />
            <div className="h-px bg-[#e2e8f0]" />
            <div className="h-[32px]" />

            {/* Section: The technical reality */}
            <h2 id="technical-reality" className="text-[30px] font-bold leading-[38px] tracking-[-0.8px] text-[#0a192f]">
              The technical reality
            </h2>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Two things made this much harder than it looks on the slide deck.
            </p>
            <div className="h-[28px]" />

            {/* H3 — Tokenization */}
            <h3 id="tokenization" className="text-[21px] font-bold leading-[28px] tracking-[-0.4px] text-[#0a192f]">
              Tokenization
            </h3>
            <div className="h-[10px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Standard BPE tokenizers — the ones shipped with most open base models — chop Tamil
              words into fragments of 3-5 characters. A 12-character word can take 6 tokens. That
              makes inference slow and expensive, and worse, the model loses context. We retrained
              the tokenizer from scratch on a Tamil-heavy corpus. Average tokens per Tamil word
              dropped from 4.8 to 1.4. Latency dropped 60%.
            </p>
            <div className="h-[14px]" />

            {/* Code block */}
            <div className="rounded-[8px] border border-[#e2e8f0] bg-[#f1f5f9] p-[16px]">
              <div className="mb-[6px] flex items-center justify-between">
                <span className="font-mono text-[10.5px] font-bold tracking-[0.8px] text-[#4a5568]">
                  tokens-per-word.py
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[1.2px] text-[#718096]">
                  PYTHON
                </span>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-[12.5px] font-normal leading-[20px] text-[#0a192f]">
                <code>{`# Before:  vēndumāṉāl  →  ["v", "ēnd", "umā", "ṉāl"]   (4 tokens)
# After:   vēndumāṉāl  →  ["vēndumāṉāl"]                    (1 token)`}</code>
              </pre>
            </div>

            <div className="h-[28px]" />

            {/* H3 — Code-switching */}
            <h3 id="code-switching" className="text-[21px] font-bold leading-[28px] tracking-[-0.4px] text-[#0a192f]">
              Code-switching
            </h3>
            <div className="h-[10px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Real Tamil speech is rarely pure Tamil. A home cook might say &apos;onion-ah saute
              panni, romba simply&apos;, mixing three languages in one sentence. The model
              can&apos;t pause to switch contexts — it has to handle the mix as if it were natural,
              because it is.
            </p>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              This was the hardest piece. The first six months of training data was, frankly,
              terrible — a mess of scraped subtitles, dubbed shows, and a few transcribed YouTube
              cooking channels. We eventually built our own dataset by recording 240 hours of
              conversational Tamil in actual kitchens, with permission, paying market rates. That
              single decision moved more accuracy than any architecture change.
            </p>

            <div className="h-[32px]" />
            <div className="h-px bg-[#e2e8f0]" />
            <div className="h-[32px]" />

            {/* Section: What we learned */}
            <h2 id="what-we-learned" className="text-[30px] font-bold leading-[38px] tracking-[-0.8px] text-[#0a192f]">
              What we learned
            </h2>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Going Tamil-first didn&apos;t make English worse — it made it better. We think this is
              the part most teams miss. When you build for a complex morphology and dense
              code-switching, the model develops a richer internal representation. English, which is
              comparatively simpler, just fits inside that representation.
            </p>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              It also reframed who the product was for. VOChef isn&apos;t &apos;an AI assistant
              that happens to support Indian languages.&apos; It&apos;s a cooking partner that speaks
              the way our users actually speak, and English mode is an option we offer politely.
              That&apos;s a real difference, not a positioning trick.
            </p>
            <div className="h-[24px]" />

            {/* Blockquote */}
            <div className="flex items-start gap-[20px] py-[8px] pl-[24px]">
              <div className="h-[96px] w-[3px] shrink-0 rounded-[2px] bg-[#1e40af]" />
              <p className="text-[22px] font-bold italic leading-[32px] tracking-[-0.4px] text-[#0a192f]">
                &quot;If you make the hard language the default, every other language becomes a
                discount.&quot;
              </p>
            </div>

            <div className="h-[32px]" />
            <div className="h-px bg-[#e2e8f0]" />
            <div className="h-[32px]" />

            {/* Section: What's next */}
            <h2 id="whats-next" className="text-[30px] font-bold leading-[38px] tracking-[-0.8px] text-[#0a192f]">
              What&apos;s next
            </h2>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              Hindi and Malayalam are next. Hindi because the scale is obvious; Malayalam because the
              morphology is even denser than Tamil, and we owe it to ourselves to confirm we built
              the right foundation. Both should reach beta inside MagDee Core v1.5, which is on the
              roadmap for Q3 2026.
            </p>
            <div className="h-[14px]" />
            <p className="text-[15.5px] font-normal leading-[26px] text-[#1e3a5f]">
              We&apos;ll keep writing about the engineering as we go. If you have thoughts, or
              you&apos;d like to test these languages early, write to{" "}
              <a
                href="mailto:engineering@magdee.in"
                className="font-semibold text-[#1e40af] hover:underline"
              >
                engineering@magdee.in
              </a>{" "}
              — a real person reads every note, in whichever language you send it.
            </p>

            {/* 48px gap + divider + 24px */}
            <div className="h-[48px]" />
            <div className="h-px bg-[#e2e8f0]" />
            <div className="h-[24px]" />

            {/* Prev / Next navigation */}
            <div className="flex items-center justify-between">
              <a
                href="/blog/naming-a-company"
                className="flex items-center gap-[14px] rounded-[12px] border border-[#e2e8f0] bg-white py-[14px] pl-[18px] pr-[22px] transition-colors hover:bg-[#f1f5f9]"
              >
                <ArrowLeftIcon />
                <div className="flex flex-col gap-[2px]">
                  <span className="font-mono text-[9px] font-bold tracking-[1.3px] text-[#4a5568]">
                    PREVIOUS
                  </span>
                  <span className="text-[13.5px] font-semibold text-[#0a192f]">
                    Notes on naming a company
                  </span>
                </div>
              </a>
              <a
                href="/blog/voychef-9-months"
                className="flex items-center gap-[14px] rounded-[12px] border border-[#e2e8f0] bg-white py-[14px] pl-[22px] pr-[18px] text-right transition-colors hover:bg-[#f1f5f9]"
              >
                <div className="flex flex-col items-end gap-[2px]">
                  <span className="font-mono text-[9px] font-bold tracking-[1.3px] text-[#4a5568]">
                    NEXT
                  </span>
                  <span className="text-[13.5px] font-semibold text-[#0a192f]">
                    Shipping VOChef in 9 months
                  </span>
                </div>
                <ArrowRightIcon />
              </a>
            </div>

            {/* 32px gap */}
            <div className="h-[32px]" />

            {/* Helpful reaction row */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-[12px] rounded-full border border-[#e2e8f0] bg-white py-[8px] pl-[18px] pr-[8px] shadow-[0px_2px_6px_0px_rgba(10,25,47,0.04)]">
                <span className="text-[13px] font-medium text-[#0a192f]">Was this helpful?</span>
                <div className="flex items-center gap-[6px]">
                  {[
                    { emoji: "😍", bg: "#ffedd5" },
                    { emoji: "🙂", bg: "#dbeafe" },
                    { emoji: "😐", bg: "#e5e7eb" },
                    { emoji: "😕", bg: "#fee2e2" },
                  ].map(({ emoji, bg }) => (
                    <button
                      key={emoji}
                      type="button"
                      className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[14px] transition-opacity hover:opacity-80"
                      style={{ background: bg }}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[64px]" />
          </div>
        </main>

        {/* ── Hatch divider: main │ right ── */}
        <div
          className="hidden xl:block w-3 shrink-0 self-stretch border-x border-[#e8eaf0]"
          style={HATCH_DIVIDER_STYLE}
        />

        {/* ── RIGHT TOC ─────────────────────────────────────── */}
        <aside
          className="blog-slide-right hidden xl:flex w-69 shrink-0 flex-col gap-3.5 px-8 py-12"
          style={{ animationDelay: "120ms" }}
        >
          <div className="sticky top-[88px]">
            {/* Table of contents */}
            <TableOfContents items={TOC_ITEMS} />

            <div className="h-[24px]" />
            {/* Newsletter mini box */}
            <NewsletterMini />
          </div>
        </aside>

      </div>
    </div>
  );
}

/* ─── Icon components ────────────────────────────────────────────────── */

function ReaderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a192f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a192f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

