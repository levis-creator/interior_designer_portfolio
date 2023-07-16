"use client";
import React, { useEffect } from "react";
import HomeSlideItem from "./HomeSlideItem";
import { motion, delay } from "framer-motion";
import useDisplay from "@/hook/useDisplay";

const AboutImageAnimated = ({ image, description }) => {
  const { change_nav } = useDisplay();
  useEffect(() => {
    change_nav(false)
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.6,
      },
    },
  };
  const leftComponent = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const rightComponent = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="relative w-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="h-72 w-2/3 sm:h-auto rounded-3xl shadow-lg overflow-hidden"
        variants={leftComponent}
      >
        <HomeSlideItem data={image} className="object-right-top" />
      </motion.div>
      <motion.div
        className="absolute bg-white -bottom-16 sm:right-6 w-72 right-0  rounded-2xl px-4 py-3 shadow-lg"
        variants={rightComponent}
      >
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutImageAnimated;
