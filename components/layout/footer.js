import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import socials from "../../utils/socials.json";
import Logo from "../../public/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = ({ translation }) => {
  const { locale } = useRouter();

  return (
    <div className="min-h-[20vh] h-full w-full flex flex-col justify-center items-center mt-20 py-6 lg:py-2 3xl:mt-40">
      <div className="w-[90%] flex-col lg:flex-row justify-between md:items-end gap-[35px] md:gap-[106px] inline-flex">
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-right text-main text-base lg:text-[0.9rem] xl:text-base fxl:text-xl 3xl:text-2xl font-light capitalize">
            {translation?.[locale]?.col1?.row1?.title}
          </div>
          <div className="text-main text-[32px] lg:text-[18px] xl:text-[32px] fxl:text-4xl 3xl:text-5xl font-extrabold capitalize h-[39px] lg:h-[29px] xl:h-[39px]">
            <Link
              href="https://calendly.com/thalliondev/parliamo-del-tuo-progetto"
              target="_blank"
            >
              {translation?.[locale]?.col1?.row1?.cta}
            </Link>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-right text-main text-base lg:text-[0.9rem] xl:text-base fxl:text-xl 3xl:text-2xl font-light capitalize">
            {translation?.[locale]?.col2?.row1?.title}
          </div>
          <div className="text-main text-[32px] lg:text-[18px] xl:text-[32px] fxl:text-4xl 3xl:text-5xl font-extrabold capitalize h-[39px] lg:h-[29px] xl:h-[39px]">
            <Link href="/contact" target="_blank">
              {" "}
              {translation?.[locale]?.col2?.row1?.cta}
            </Link>
          </div>
        </div>
        <div className="flex-col justify-start md:items-end gap-2.5 inline-flex">
          <div className="md:text-right text-main text-xs fxl:text-xl 3xl:text-2xl font-light capitalize">
            Via Avondo, 15 - 11100 Aosta (AO)
          </div>
          <div className="text-main text-xs fxl:text-xl 3xl:text-2xl font-light capitalize">
            Via Jacopo della Quercia , 2 - 20096 Pioltello (MI)
          </div>
          <div className="text-main text-xs fxl:text-xl 3xl:text-2xl font-extrabold lowercase">
            +39 340 853 9159 - miaographics@gmail.com
          </div>
        </div>
        <div className="flex-col justify-start md:items-end gap-2.5 inline-flex ">
          <Image src={Logo} alt="logo" width={100} className="opacity-60" />
          <div className="md:text-right text-main text-base fxl:text-xl 3xl:text-2xl font-[300] capitalize">
            <Link href="/privacy" target="_blank">
              {" "}
              Privacy policy
            </Link>
          </div>
          <div className="text-main text-xs fxl:text-xl 3xl:text-2xl font-light lowercase">
            P.iva: 01115240077
          </div>
        </div>
      </div>
      <div className="flex-col justify-center md:items-center gap-[10px] flex mt-12 w-[90%]">
        <div className="w-[full] justify-start md:items-center gap-5 inline-flex">
          <div className="">
            <div className="flex ">
              {socials?.Elisa?.map((el, i) => (
                <Link
                  href={el?.url}
                  target="_blank"
                  className="text-main mr-4"
                  aria-label="link a instagram"
                  key={i}
                >
                  <Icon
                    icon={el?.icon}
                    className="w-[20px] h-[20px] fxl:w-[30px] fxl:h-[30px] 3xl:w-[35px] 3xl:h-[35px] cursor-pointer "
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-main text-[10px] fxl:text-lg 3xl:text-xl font-normal capitalize">
          Made with ❤️ by{" "}
          <Link
            href="https://www.thallion-dev.it/"
            target="_blank"
            className="font-bold"
          >
            Thallion dev
          </Link>{" "}
          2023, all rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
