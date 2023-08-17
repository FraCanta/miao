// components/SlideAnimation.js
import { easeInOut, motion } from "framer-motion";

const SlideAnimation = ({ children, direction }) => {
  const isEntering = direction === "forward";
  const initial = {
    x: isEntering ? 100 * -1 : 100,
    transformOrigin: isEntering ? "left" : "right",
    width: "100%",
  };
  const animate = {
    x: 0,
    transformOrigin: "center",
    width: "100%",
  };
  const exit = {
    x: isEntering ? 100 : 100 * -1,
    transformOrigin: isEntering ? "right" : "left",
    width: "100%",
  };
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ ease: easeInOut, duration: 0.5 }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
