"use client";

import logo from "@/assets/loading.svg";
import { motion } from "framer-motion";
import Image from "next/image";
const Loading = () => {
  return (
    <motion.div className="absolute bg-black h-screen bottom-0 top-0 left-0 right-0 z-30 flex justify-center items-center text-white">
      <motion.div className="space-y-4 w-fit h-fit p-2">
        <Image
          unoptimized
          src={logo}
          alt="logo"
          width={0}
          height={0}
          className="w-20 h-20  "
        />
        <div className="leading-relaxed">
          Loading..
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
            }}
          >
            .
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
