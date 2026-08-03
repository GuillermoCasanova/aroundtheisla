type NavArrowButtonProps = {
  direction: "prev" | "next";
  ariaLabel: string;
  onClick: () => void;
  className?: string;
};

export function NavArrowButton({
  direction,
  ariaLabel,
  onClick,
  className = "",
}: NavArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 flex items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition hover:bg-black/80 md:flex ${direction === "prev" ? "left-4" : "right-4"} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-5 w-5 ${direction === "prev" ? "-translate-x-px" : "translate-x-px"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? (
          <path d="M15 6l-6 6 6 6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  );
}
