import { useEffect, useRef } from "react";

export const useMagnetic = (strength = 0.35) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let bounds;

    const handleMouseEnter = () => {
      bounds = el.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
      if (!bounds) return;
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      el.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
    };

    const handleMouseLeave = () => {
      el.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
      el.style.transform = "translate3d(0, 0, 0)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 600);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
};
