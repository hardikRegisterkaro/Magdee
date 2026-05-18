export default function Loading() {
  return (
    <>
      {/* Top progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-[2.5px] overflow-hidden">
        <div
          className="h-full bg-brand"
          style={{ animation: "loading-bar 1.6s cubic-bezier(0.4,0,0.2,1) infinite" }}
        />
      </div>

      {/* Page skeleton */}
      <div className="mx-auto w-full max-w-7xl animate-pulse px-5 py-20 sm:px-8 lg:px-12">

        {/* Hero — centered badge + heading + subtitle */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-5 w-28 rounded-full bg-line" />
          <div className="h-10 w-[55%] rounded-xl bg-line sm:h-12" />
          <div className="h-10 w-[40%] rounded-xl bg-line sm:h-12" />
          <div className="mt-1 h-4 w-[45%] rounded-lg bg-line" />
          <div className="h-4 w-[35%] rounded-lg bg-line" />
          <div className="mt-3 flex gap-3">
            <div className="h-10 w-28 rounded-full bg-line" />
            <div className="h-10 w-24 rounded-full bg-line" />
          </div>
        </div>

        {/* Two-column section — left text block, right card */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3">
            <div className="h-3 w-20 rounded-full bg-line" />
            <div className="h-7 w-[80%] rounded-lg bg-line" />
            <div className="h-7 w-[60%] rounded-lg bg-line" />
            <div className="mt-2 h-4 w-full rounded-lg bg-line" />
            <div className="h-4 w-full rounded-lg bg-line" />
            <div className="h-4 w-[75%] rounded-lg bg-line" />
            <div className="mt-3 h-10 w-32 rounded-full bg-line" />
          </div>
          <div className="h-64 rounded-2xl bg-line lg:h-72" />
        </div>

        {/* Three-column cards row */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
              <div className="h-8 w-8 rounded-lg bg-line" />
              <div className="h-5 w-[60%] rounded-lg bg-line" />
              <div className="h-4 w-full rounded-md bg-line" />
              <div className="h-4 w-[80%] rounded-md bg-line" />
            </div>
          ))}
        </div>

        {/* Wide text block — like a blog or about section */}
        <div className="mt-20 flex flex-col gap-3 max-w-2xl">
          <div className="h-3 w-16 rounded-full bg-line" />
          <div className="h-7 w-[70%] rounded-lg bg-line" />
          <div className="mt-1 h-4 w-full rounded-md bg-line" />
          <div className="h-4 w-full rounded-md bg-line" />
          <div className="h-4 w-[85%] rounded-md bg-line" />
          <div className="h-4 w-[65%] rounded-md bg-line" />
        </div>

      </div>

      <style>{`
        @keyframes loading-bar {
          0%   { width: 0%; opacity: 1; }
          70%  { width: 85%; opacity: 1; }
          95%  { width: 95%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
      `}</style>
    </>
  );
}
