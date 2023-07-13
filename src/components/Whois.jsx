"use client";

import { motion } from "framer-motion";

const Whois = () => {
  return (
    <div className="relative w-full overflow-hidden h-28 px-2">
      <motion.h1
        initial={{
          y: -5,
          x: -5,
        }}
        animate={{
          y: [-5, 0, 5, 10, 15],
          x: [-5, 0, 5, 10, 15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="font-bold text-5xl text-center absolute text-white drop-shadow-lg z-0 w-full"
      >
        Who is Shani?
      </motion.h1>
      <h1 className="font-bold text-5xl text-center absolute w-full z-10">
        Who is Shani?
      </h1>
    </div>
  );
};

export default Whois;
