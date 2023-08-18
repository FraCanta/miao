import Image from "next/image";
import React from "react";

const HeroPage = ({ img, title }) => {
  return (
    <div className="w-[90%] mx-auto h-full flex flex-col lg:flex-row 2xl:items-center 2xl:justify-around gap-8 mt-6">
      <div>
        <Image
          src={title}
          alt="lampadina"
          className="object-contain w-[230px] md:w-[420px] xl:w-[420px] fxl:w-[500px] 3xl:w-[750px] h-full"
          width={230}
          height={100}
          priority
        />
      </div>
      <Image
        src={img}
        alt="lampadina"
        className="object-contain w-full lg:w-[500px] xl:w-[680px] fxl:w-[1000px] 3xl:w-[1200px] h-full"
        width={780}
        height={800}
        priority
      />
    </div>
  );
};

export default HeroPage;
