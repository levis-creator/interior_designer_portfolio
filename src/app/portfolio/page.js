import Projects from "@/components/Projects";
import React, { Suspense } from "react";
import Loading from "../loading";

const Portfolio = () => {
  return (
    <div className="pt-20">
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
};

export default Portfolio;
