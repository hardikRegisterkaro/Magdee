import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Error 404</p>

      <h1 className="mt-4 font-display text-[64px] font-bold leading-none tracking-[-2px] text-ink sm:text-[96px]">
        404
      </h1>

      <p className="mt-4 max-w-[380px] text-[16px] leading-relaxed text-ink-soft">
        This page doesn&apos;t exist — or it moved somewhere we haven&apos;t mapped yet.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_14px_30px_-14px_rgba(11,16,32,0.6)] transition-all hover:bg-black active:scale-[0.97]"
        >
          Back to home
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="translate-y-[0.5px]">
            <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-ink/20"
        >
          Contact us
        </Link>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #1E40AF 0%, transparent 70%)" }}
        />
      </div>
    </main>
  );
}
