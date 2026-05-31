import Image from "next/image";

export default function MeetoryAppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[640px] select-none lg:max-w-none">
      {/* Primary card — full meeting transcript */}
      <div className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45),0_15px_30px_-15px_rgba(15,23,42,0.15)]">
        <BrowserChrome url="meet.google.com/qpr-strat-q2" />
        <Image
          src="/screenshots/meetory-transcript.png"
          alt="Meetory live meeting transcript with Hindi and English code-switching"
          width={3024}
          height={1588}
          priority
          unoptimized
          className="block h-auto w-full"
        />
      </div>

      {/* Floating callout — auto-detected language */}
      <div className="absolute right-3 top-[18%] hidden items-center gap-2 rounded-full bg-ink/90 px-3 py-1.5 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.4)] backdrop-blur sm:flex">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#7ce0a3] opacity-60" />
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#7ce0a3]" />
        </span>
        <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-white">
          EN + HI · auto-detected
        </span>
      </div>

      {/* Summary peek — small thumbnail bottom-right */}
      <div className="absolute -bottom-6 -right-3 hidden w-[34%] overflow-hidden rounded-lg border border-line bg-surface shadow-[0_24px_48px_-20px_rgba(15,23,42,0.35)] sm:block">
        <div className="flex items-center gap-1.5 border-b border-line bg-background px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
            AI Summary
          </span>
          <span className="ml-auto text-[9px] font-medium text-ink-soft">20 insights</span>
        </div>
        <Image
          src="/screenshots/meetory-summary.png"
          alt="Meetory AI summary preview"
          width={3024}
          height={1588}
          unoptimized
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-background px-3 py-2">
      <span className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </span>
      <span className="ml-2 truncate rounded-md bg-surface px-2 py-0.5 text-[10px] font-medium text-ink-soft">
        {url}
      </span>
    </div>
  );
}
