// components/SlideAnimation.js
import { motion } from "framer-motion";
const SlideAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "ease-in-out", duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
