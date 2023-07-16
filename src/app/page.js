"use client";
import { content } from "@/api/content";
import HomeCarousel from "@/components/HomeCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";
import Whois from "@/components/Whois";
import useDisplay from "@/hook/useDisplay";
import { useScrollDirection } from "@/hook/useScrollDrection";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const { change_nav } = useDisplay();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection == "down") {
      change_nav(false);
    } else {
      change_nav(true);
    }
  }, [scrollDirection]);

  return (
    <>
      <section className="h-screen w-full " ref={homeRef}>
        <HomeCarousel />
      </section>

      <section
        id="about"
        className="max-h-screen bg-gradient-to-r from-slate-100 to-slate-200 pt-32 overflow-hidden"
      >
        <div className="px-3 sm:px-6 text-center leading-relaxed ">
          <Whois />
          <p className="text-center">{content[0].whoIs}</p>
          <Link href={"/about"}>
            <button className="bg-black text-white px-8  py-2 rounded-md mt-10">
              Learn More
            </button>
          </Link>
        </div>
        <div
          className="w-full h-full 
        "
        >
          <Image
            src={content[0].whoIsImageBackground}
            width={0}
            height={0}
            alt="who is background"
            className="w-full h-full object-right-bottom"
          />
        </div>
      </section>
      <section id="works" className="h-screen pt-28">
        <div className="space-y-6 px-3 pb-2 sm:px-6">
          <h2 className="font-bold text-5xl text-center ">Works</h2>
          <p className="text-center">{content[1].works_paragraph}</p>
        </div>
        <div className="px-3 text-center">
          <ProjectCarousel />
          <Link href={"/portfolio"}>
            <button className="underline "> View more </button>
          </Link>
        </div>
      </section>
    
    </>
  );
}
