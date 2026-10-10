export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scrolls to the top and moves keyboard focus to `focusTargetId`.
 * Without the focus move, a keyboard user's next Tab would continue from the bottom of the page.
 */
export function scrollToTop(focusTargetId: string): void {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });

  const target = document.getElementById(focusTargetId);
  if (!target) return;
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}
