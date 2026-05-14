type Props = {
  className?: string;
};

export default function MagDeeLogo({ className }: Props) {
  return (
    <span
      className={`inline-flex items-center font-display text-[26px] font-semibold tracking-tight text-ink ${className ?? ""}`}
      aria-label="MagDee"
    >
      <svg
        viewBox="0 0 40 18"
        width="34"
        height="16"
        className="mr-[2px] -mt-3 text-brand"
        aria-hidden
      >
        <path
          d="M2 14 C 6 4, 12 4, 16 12 S 26 16, 30 6 S 38 6, 38 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-none">
        <span className="text-ink">Mag</span>
        <span className="text-[#8a7a4a]">Dee</span>
      </span>
    </span>
  );
}
