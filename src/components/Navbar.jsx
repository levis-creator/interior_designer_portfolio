"use client";
import { menuItems } from "@/api/menuItems";
import useDisplay from "@/hook/useDisplay";
import LayerAnimation from "@/templates/LayerAnimation";
import LogoAnimation from "@/templates/LogoAnimation";
import NavButtonAnimation from "@/templates/NavButtonAnimation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Footer from "./Footer";

// staggering effect

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const { changeNav } = useDisplay();
  const container = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <LayerAnimation className="fixed top-0 bottom-0 right-0 left-0 bg-black text-white z-30">
            <div className=" relative flex w-full items-center px-3 py-2 justify-between">
              <div className="flex-1">
                <LogoAnimation className="mx-auto w-fit h-fit">
                  <Link href={"/"} onClick={handleOpen}>
                    <Image
                      src="/logo-white.png"
                      alt="logo"
                      width={0}
                      height={0}
                      className="w-auto h-16 "
                      unoptimized
                    />
                  </Link>
                </LogoAnimation>
              </div>
              <NavButtonAnimation>
                <button onClick={handleOpen} className="text-4xl">
                  <CgClose />
                </button>
              </NavButtonAnimation>
            </div>
            <div className="px-20 pt-10">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-5"
              >
                {menuItems.map((items, i) => (
                  <motion.li
                    className="font-bold text-3xl capitalize"
                    key={i}
                    variants={listItem}
                  >
                    <Link href={items.link} onClick={handleOpen}>
                      {items.menu_item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <Footer className="absolute bottom-0" />
            </div>
          </LayerAnimation>
        )}
      </AnimatePresence>
      <header
        className={`w-full text-white px-3 py-2 fixed z-20 ${
          !changeNav ? "bg-black" : "bg-transparent"
        } z-10`}
      >
        <nav className="w-full">
          <div className="flex w-full justify-between items-center">
            <AnimatePresence>
              <LogoAnimation forward={true}>
                <Link href={"/"}>
                  <Image
                    src="/logo-white.png"
                    alt="logo"
                    width={0}
                    height={0}
                    className="w-auto h-16"
                    unoptimized
                  />
                </Link>
              </LogoAnimation>
            </AnimatePresence>
            <NavButtonAnimation>
              <button onClick={handleOpen} className="text-4xl">
                <BiMenuAltRight />
              </button>
            </NavButtonAnimation>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
