"use client";

import { BACK_TO_TOP_THRESHOLD_PX } from "@/constants/ui";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { scrollToTop } from "@/utils/scroll";

interface BackToTopProps {
  label: string;
}

export function BackToTop({ label }: BackToTopProps) {
  const visible = useScrolledPast(BACK_TO_TOP_THRESHOLD_PX);

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => scrollToTop("main")}
      className={`bg-ink text-limewash fixed right-4 bottom-4 z-40 grid size-11 cursor-pointer place-items-center rounded-full shadow-lg transition-all duration-500 ease-out hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 md:right-8 md:bottom-8 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
