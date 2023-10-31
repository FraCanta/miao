import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionMeUno = ({ translation }) => {
  return (
    <section className="w-[90%] min-h-[40vh] justify-between items-center mt-[50px] md:mt-[150px] flex flex-col xl:flex-row mx-auto xl:gap-8 2xl:gap-2">
      <div className="w-full flex-col justify-between  flex 2xl:w-1/2 h-full gap-6 3xl:gap-14">
        {translation?.presentazione?.map((p, i) => {
          return (
            <p
              key={i}
              className="text-second text-[5vw] md:text-[2.6vw] xl:text-[1.55vw] 2xl:text-[1.3vw]"
              dangerouslySetInnerHTML={{ __html: p }}
            ></p>
          );
        })}

        <div className="w-full  justify-start items-center inline-flex">
          <Link
            href="/contatti"
            title="contattami per una consulenza e parliamo insieme del tuo progetto"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal "
          >
            {translation?.cta}
          </Link>
        </div>
      </div>
      <Image
        className="2xl:w-[550px] 2xl:h-[550px] 3xl:w-[40%] 3xl:h-auto object-contain mt-6 2xl:mt-0"
        src={translation?.img}
        alt=""
        width={450}
        height={450}
      />
    </section>
  );
};

export default SectionMeUno;
