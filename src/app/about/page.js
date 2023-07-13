import { content } from "@/api/content";
import AboutImageAnimated from "@/components/AboutImageAnimated";
import Link from "next/link";

const About = () => {
  return (
    <div className="py-[85px] min-h-screen bg-slate-50 px-3">

    <div className="relative">
      <AboutImageAnimated
        image={content[2].image}
        description={content[2].brief_description}
      />
    </div>
      <div className="mt-20 leading-relaxed space-y-6 text-center">
        <h2 className="font-bold text-5xl text-center ">About me</h2>
        <p className="text-center">{content[2].description}</p>
        <Link href={"/about"}>
            <button className="bg-black text-white px-8  py-2 rounded-md mt-10">
              Contact me
            </button>
          </Link>
      </div>

    </div>
  );
};

export default About;
