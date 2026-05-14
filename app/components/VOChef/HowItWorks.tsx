type Step = {
  number: string;
  label: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    label: "Tell",
    title: "Tell VOChef what you're craving.",
    body: "“Something light with the curry leaves I bought yesterday.” Voice. Text. Whatever feels right.",
  },
  {
    number: "02",
    label: "Cook",
    title: "Cook hands-free with patient guidance.",
    body: "Step by step, at your pace. Ask “next step”, “how much salt?”, or “skip this” and it adapts to you.",
  },
  {
    number: "03",
    label: "Eat",
    title: "Eat. Save. Forget the recipe.",
    body: "Loved it? It learns. Hated the cumin? It remembers. Tomorrow’s suggestion will be better.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            How it works
          </div>

          <h2 className="mt-6 max-w-[20ch] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[52px] lg:text-[64px]">
            From hungry to plated
            <br className="hidden sm:block" />{" "}
            in three <span className="italic text-brand">quiet</span> steps.
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
          {STEPS.map((s) => (
            <li
              key={s.number}
              className="rounded-2xl border border-line bg-surface p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[12.5px] font-semibold text-white">
                  {s.number}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                  {s.label}
                </span>
              </div>

              <h3 className="mt-7 font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[24px]">
                {s.title}
              </h3>

              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
