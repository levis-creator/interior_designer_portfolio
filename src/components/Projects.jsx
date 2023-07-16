"use client";

import { carouselData } from "@/api/carouselData";
import HomeSlideItem from "./HomeSlideItem";
import useDisplay from "@/hook/useDisplay";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const { change_nav } = useDisplay();
  useEffect(() => {
    change_nav(false);
  }, []);
  const projects = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const project = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeIn",
      },
    },
  };
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-2"
      variants={projects}
      initial="hidden"
      animate="show"
    >
      {carouselData.map((items, i) => (
        <motion.div className="relative " key={i} variants={project} whileInView={{ x:[-60, 0]}} whileHover={{scale:1.3}} >
          <HomeSlideItem data={items} />
          <div className="bottom-0 right-3 text-white absolute text-xl font-medium">
            {items.title}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
