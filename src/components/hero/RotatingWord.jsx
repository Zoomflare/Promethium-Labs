import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["ships.", "grows.", "cares.", "wins.", "delivers."];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  // Measure the widest word to reserve space, preventing layout shift
  useEffect(() => {
    if (!measureRef.current) return;
    // Use ResizeObserver to track the currently rendered width
    const ro = new ResizeObserver(() => {
      if (measureRef.current) {
        setWidth(measureRef.current.offsetWidth + "px");
      }
    });
    ro.observe(measureRef.current);
    return () => ro.disconnect();
  }, [index]);

  return (
    <span
      className="inline-block relative align-baseline"
      style={{
        width,
        minWidth: "1ch",
        transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        // NO overflow:hidden — let text breathe
      }}
    >
      {/* Hidden measuring element */}
      <span
        ref={measureRef}
        className="invisible absolute left-0 top-0 whitespace-nowrap"
        aria-hidden="true"
        style={{ fontStyle: "italic", color: "#00b85a" }}
      >
        {words[index]}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block whitespace-nowrap"
          style={{ color: "#10b981", fontStyle: "italic" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWord;
