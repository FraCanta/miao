import Image from "next/image";
import React from "react";
import Tigre from "../../public/pageImg/tigre.webp";
import Rettangolo from "../../public/pageImg/disegno.png";
import MobileRet from "../../public/pageImg/rettangolo_mobile.png";

const HeroHome = ({ translation }) => {
  return (
    <>
      <div className="hidden h-full overflow-hidden lg:block ">
        <Image
          className="object-contain w-full h-full"
          src={Rettangolo}
          alt="home image"
          width={550}
        />
      </div>
      <div className="block pr-4 lg:hidden">
        <Image className="object-contain " src={MobileRet} alt="home image" />
      </div>

      <div className="lg:absolute w-[90%] mx-auto fxl:top-1/2 lg:left-[25%] xl:left-[24%] 2xl:left-[20%] fxl:left-[24%] my-10">
        <h1 className="text-main text-[68px] md:text-[150px] md:leading-[130px] lg:text-[80px] lg:leading-[65px] xl:text-[95px] xl:leading-[85px] 2xl:text-[120px] fxl:text-[150px] fxl:leading-[120px] 3xl:text-[180px] 3xl:leading-[160px] 4xl:text-[350px] 4xl:leading-[300px] font-normal leading-[60.88px] mb-6 md:mt-20 2xl:leading-[100.50px] ">
          Miao <br /> graphics <br />
          <span className="text-main text-[30px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] fxl:text-[40px] 3xl:text-[50px] 4xl:text-[70px] font-normal leading-[25px]">
            {translation?.title?.uno} {translation?.title?.due}
          </span>
          <span className="text-red text-[30px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] fxl:text-[40px] 3xl:text-[50px] 4xl:text-[70px] font-normal leading-[25px]">
            .
          </span>
        </h1>
      </div>
      <Image
        className="object-contain lg:w-[500px] xl:w-[750px] fxl:w-[900px] 3xl:w-auto h-full"
        src={Tigre}
        alt="home image"
        width={650}
      />
    </>
  );
};

export default HeroHome;
