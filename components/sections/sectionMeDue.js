import React from "react";
import Marquee from "../marquee/marquee";
import Image from "next/image";

const SectionMeDue = ({ translation }) => {
  // console.log(translation);
  return (
    <div className="w-full min-h-[40vh] justify-between items-center mt-[150px] flex mx-auto">
      <div className="w-full h-full">
        <div className="justify-start items-center flex w-[90%] mx-auto py-14">
          <Image
            className="object-cover w-[300px] 2xl:w-[350px] fxl:w-[400px] 3xl:w-[450px]"
            src={translation?.title}
            alt="welcome title"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="w-full h-full  bg-main flex items-center py-8">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default SectionMeDue;
