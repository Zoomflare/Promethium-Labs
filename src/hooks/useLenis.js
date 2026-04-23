import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Module-level reference so App can access lenis for scroll reset + resize
let _lenis = null;
export const getLenis = () => _lenis;

export const useLenis = () => {
  useEffect(() => {
    // Disable Lenis on small screens to avoid jank
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    _lenis = lenis;

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    // Recalculate scroll height when DOM changes (lazy-loaded pages)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute("href");
        if (href === "#") return;
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element, { offset: -100, duration: 1.5 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
        // Recalculate after tab regains focus
        requestAnimationFrame(() => lenis.resize());
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    // Ensure Lenis recalculates once lazy content has loaded
    const initialResize = setTimeout(() => lenis.resize(), 500);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(initialResize);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      _lenis = null;
    };
  }, []);
};
