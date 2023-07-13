import { motion } from "framer-motion";

const LayerAnimation = ({ children, className, whileInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
      }}
      exit={{ opacity: 0 }}
      whileInView={whileInView}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LayerAnimation;
