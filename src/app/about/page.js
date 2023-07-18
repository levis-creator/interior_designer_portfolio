import { content } from "@/api/content";
import AboutImageAnimated from "@/components/AboutImageAnimated";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="py-[85px] min-h-screen bg-slate-50 px-3   ">
        <div className="w-full lg:max-h-screen px-3 sm:px-6 md:px-16 lg:flex">
          <div className="relative">
            <AboutImageAnimated
              image={content[2].image}
              description={content[2].brief_description}
            />
          </div>
          <div className="mt-20 leading-relaxed space-y-6 text-center px-3    sm:px-6">
            <h2 className="font-bold text-5xl text-center ">About me</h2>
            <p className="text-center">{content[2].description}</p>
            <Link href={"/contact-me"}>
              <button className="bg-black text-white px-8  py-2 rounded-md mt-10">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default About;
