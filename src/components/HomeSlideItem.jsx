import Image from "next/image";
import React from "react";

const HomeSlideItem = ({data, className}) => {
  return (
    <div className="h-full w-full">
      <Image
        src={data.image}
        alt={data.title}
        width={0}
        height={0}
        className={`w-full h-full object-cover ${className}`}
        unoptimized
      />
    </div>
  );
};

export default HomeSlideItem;
