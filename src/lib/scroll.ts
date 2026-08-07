import type Lenis from 'lenis';

/**
 * Lenis takes over the page scroll, which silently breaks the native
 * `scrollIntoView({ behavior: 'smooth' })` / `window.scrollTo(...)` calls the
 * components used to make. Everything that wants to move the page goes through
 * this module instead, so there is a single instance to talk to.
 */
let lenisInstance: Lenis | null = null;

/** Clearance for the floating navbar so headings don't land underneath it. */
const NAV_OFFSET = -88;

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const immediate = prefersReducedMotion();

  if (lenisInstance) {
    // `force` so a scroll requested while the drawer still holds the lock is
    // honoured rather than silently dropped.
    lenisInstance.scrollTo(target, { offset: NAV_OFFSET, duration: 1.2, immediate, force: true });
    return;
  }

  // Lenis not mounted yet (or already destroyed) — fall back to native scrolling.
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET,
    behavior: immediate ? 'auto' : 'smooth',
  });
}

export function scrollToTop() {
  const immediate = prefersReducedMotion();

  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.2, immediate, force: true });
    return;
  }

  window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
}

/** Pauses Lenis while the mobile drawer covers the page. */
export function setScrollLocked(locked: boolean) {
  if (locked) lenisInstance?.stop();
  else lenisInstance?.start();
}
