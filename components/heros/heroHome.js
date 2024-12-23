import Image from "next/image";
import React from "react";
import Tigre from "../../public/pageImg/tigre.webp";
import Rettangolo from "../../public/pageImg/disegno.png";
import MobileRet from "../../public/pageImg/rettangolo_mobile.png";

const HeroHome = ({ translation }) => {
  return (
    <>
      <div className="h-full overflow-hidden hidden lg:block ">
        <Image
          className="object-contain w-full h-full"
          src={Rettangolo}
          alt="home image"
          width={550}
        />
      </div>
      <div className="block lg:hidden pr-4">
        <Image className="object-contain  " src={MobileRet} alt="home image" />
      </div>

      <div className="lg:absolute top-[40%] fxl:top-1/2 lg:left-[25%] xl:left-[24%] 2xl:left-[20%] fxl:left-[24%]">
        <h1 className="text-main text-[75px] md:text-[150px] md:leading-[130px] lg:text-[80px] lg:leading-[65px] xl:text-[95px] xl:leading-[85px] 2xl:text-[110px] fxl:text-[150px] fxl:leading-[120px] 3xl:text-[180px] 3xl:leading-[160px] 4xl:text-[350px] 4xl:leading-[300px] font-normal leading-[77.88px] mt-10 mb-10 md:mt-20 2xl:leading-[94.50px] ">
          {translation?.title?.uno}
          <br />
          {translation?.title?.due}
        </h1>
      </div>
      <Image
        className="object-contain lg:w-[500px] xl:w-[650px] fxl:w-[900px] 3xl:w-auto h-full"
        src={Tigre}
        alt="home image"
        width={650}
      />
    </>
  );
};

export default HeroHome;
