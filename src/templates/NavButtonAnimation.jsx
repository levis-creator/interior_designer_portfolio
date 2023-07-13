import { motion } from "framer-motion";

const NavButtonAnimation = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      whileTap={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{opacity:1}}
    >
      {children}
    </motion.div>
  );
};

export default NavButtonAnimation;
