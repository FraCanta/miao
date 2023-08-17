import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import HeroHome from "@/components/heros/heroHome";
import Lampadina from "../public/pageImg/lampadina.png";
import Image from "next/image";
import Graffa from "@/public/pageImg/meTitle.png";
const Me = () => {
  return (
    // <SlideAnimation direction="backward">
    <div className="w-full min-h-[calc(40vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="w-[90%] mx-auto h-full flex flex-col md:flex-row 2xl:items-center 2xl:justify-around gap-8 mt-6">
        <div>
          <Image
            src={Graffa}
            alt="lampadina"
            className="object-contain w-[250px] lg:w-[420px] xl:w-[420px] fxl:w-[500px] 3xl:w-[750px] h-full"
            width={420}
          />
        </div>
        <Image
          src={Lampadina}
          alt="lampadina"
          className="object-contain lg:w-[500px] xl:w-[680px] fxl:w-[1000px] 3xl:w-[1200px] h-full"
          width={680}
        />
      </div>
    </div>
    // </SlideAnimation>
  );
};

export default Me;
