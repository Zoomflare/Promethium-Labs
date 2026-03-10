import { motion } from "framer-motion";

const curtainVariants = {
  initial: { scaleY: 0, transformOrigin: "bottom" },
  animate: {
    scaleY: 1,
    transformOrigin: "bottom",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scaleY: 0,
    transformOrigin: "top",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const PageTransition = ({ children, routeKey }) => {
  return (
    <>
      <motion.div
        key={`curtain-${routeKey}`}
        className="fixed inset-0 z-30 bg-greenDark pointer-events-none"
        variants={curtainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      {children}
    </>
  );
};

export default PageTransition;

