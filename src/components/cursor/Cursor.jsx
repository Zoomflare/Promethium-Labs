import { useEffect, useRef, useState } from "react";
import { useCursor } from "./CursorContext.jsx";

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState("default"); // default, text, hover, drag

  const { cursorType } = useCursor();

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "0.4";
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.body.classList.add("has-custom-cursor");

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    let rafId;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    // Listeners for states
    const addStateListeners = () => {
      const links = document.querySelectorAll("a, button, .cta-main, .cta-ghost, .nav-btn, .intern-cta");
      const textElements = document.querySelectorAll("p, h1, h2, h3, .manifesto-body, .hero-desc, input, textarea, select");

      links.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorState("hover"));
        el.addEventListener("mouseleave", () => setCursorState("default"));
      });

      textElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorState("text"));
        el.addEventListener("mouseleave", () => setCursorState("default"));
      });
    };

    // Initial binding
    addStateListeners();

    // Re-bind when URL changes (using simple body observer since we are in a SPA)
    const observer = new MutationObserver(addStateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className={`cursor-wrapper cursor-${cursorState} cursor-type-${cursorType}`}>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
};

export default Cursor;

