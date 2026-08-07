'use client';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import { registerLenis, scrollToSection, scrollToTop } from '../lib/scroll';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    registerLenis(lenis);

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    // Plain `<a href="#id">` links jump instantly past Lenis — route them through it.
    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute('href')!.slice(1);
      if (!id) {
        event.preventDefault();
        scrollToTop();
        return;
      }

      if (!document.getElementById(id)) return;
      event.preventDefault();
      scrollToSection(id);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(frame);
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
