import Image from "next/image";
import React from "react";
import Graffa from "../../public/portfolioImg/graffa_grigia.png";
const SezioneIntro = ({ translation }) => {
  return (
    <>
      <h2 className="text-[10.26vw] md:text-[5.95vw] mt-4 font-bold text-main">
        {translation?.introTitolo}
      </h2>
      <div className="grid h-full grid-cols-1 gap-6 mb-8 lg:grid-cols-2 md:gap-10 lg:gap-4">
        <div className="grid grid-cols-1 gap-8 md:gap-[15vw] lg:gap-[6.15vw] w-full">
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-second">
                {translation?.cliente?.titolo}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: translation?.cliente?.nome,
                }}
                className="text-[16px] lg:text-[20px] uppercase  text-main"
              ></p>
              <p className="text-main">{translation?.cliente?.payoff}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-second">
                {translation?.anno?.titolo}
              </h3>
              <p className="text-[16px] lg:text-[20px] uppercase  text-main">
                {translation?.anno?.nome}
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
            {translation?.keywords && (
              <div className="flex flex-col gap-1 mr-2">
                <h3 className="text-base font-bold text-second">
                  {translation?.keywords?.titolo}
                </h3>
                <p className="text-[20px]  text-main">
                  {translation?.keywords?.nome}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-second">
                {translation?.servizi?.titolo}
              </h3>
              {translation?.servizi?.nome?.map((el, i) => {
                return (
                  <p
                    key={i}
                    className="ttext-[16px] lg:text-[20px] uppercase  text-main"
                  >
                    {el}
                  </p>
                );
              })}{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center h-full">
          <div className="relative hidden w-full h-full lg:block">
            <Image src={Graffa} alt="" fill className="object-contain" />
          </div>
          <div className="flex flex-col justify-between h-full gap-2 lg:px-4">
            {translation?.desc?.map((el, i) => {
              return (
                <p
                  key={i}
                  className="text-[4.5vw] md:text-[3.5vw] lg:text-[1.5vw] text-second"
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SezioneIntro;
