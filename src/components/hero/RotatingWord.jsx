import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["ships.", "grows.", "cares.", "wins.", "delivers."];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-greenDark italic"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWord;

