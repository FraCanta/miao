import React from "react";
import Marquee from "../marquee/marquee";
import Image from "next/image";

const SectionMeDue = ({ translation }) => {
  // console.log(translation);
  return (
    <section className="w-full min-h-[40vh] justify-between items-center mt-[100px] 2xl:mt-[150px] flex mx-auto">
      <div className="w-full h-full">
        <div className="justify-start items-center flex w-[90%] mx-auto pb-10 2xl:py-14">
          <Image
            className="object-cover w-[90vw] 2xl:w-[30vw] fxl:w-[35vw] 3xl:w-[40vw]"
            src={translation?.title}
            alt="welcome title"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="w-full h-full  bg-main flex items-center 2xl:py-8">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default SectionMeDue;
