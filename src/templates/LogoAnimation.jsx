import { motion } from "framer-motion";

const LogoAnimation = ({ children, className, forward }) => {
  return (
    <motion.div
      className={className}
      initial={{
        x: forward?160:-160,
        opacity:0
      }}
      animate={{
        x:0,
        opacity:1
      }}
      exit={{
        x:forward?160:-160,
        opacity:0
      }}
    >
      {children}
    </motion.div>
  );
};

export default LogoAnimation;
