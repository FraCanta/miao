// components/SlideAnimation.js
import { motion } from "framer-motion";
const SlideAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw", overflow: "hidden" }}
      animate={{ opacity: 1, x: 0, y: 0, overflow: "hidden" }}
      exit={{ opacity: 0, x: "100vw", overflow: "hidden" }}
      transition={{ duration: 1.3, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
