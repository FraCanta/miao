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
      <div className="w-[90%] flex-col lg:flex-row justify-between lg:items-end gap-[35px] md:gap-[40px] lg inline-flex">
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-right text-main text-base lg:text-[0.9rem] xl:text-base fxl:text-xl 3xl:text-2xl font-light capitalize">
            {translation?.[locale]?.col1?.row1?.title}
          </div>
          <div className="text-red text-[32px] lg:text-[18px] xl:text-[32px] fxl:text-4xl 3xl:text-5xl font-extrabold capitalize h-[39px] lg:h-[29px] xl:h-[39px]">
            <Link
              href="https://calendly.com/arvine82/parlami-del-tuo-progetto"
              target="_blank"
              title="Prenota una call 1-to-1 e parliamo del tuo progetto"
            >
              {translation?.[locale]?.col1?.row1?.cta}
            </Link>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-right text-main text-base lg:text-[0.9rem] xl:text-base fxl:text-xl 3xl:text-2xl font-light capitalize">
            {translation?.[locale]?.col2?.row1?.title}
          </div>
          <div className="text-red text-[32px] lg:text-[18px] xl:text-[32px] fxl:text-4xl 3xl:text-5xl font-extrabold capitalize h-[39px] lg:h-[29px] xl:h-[39px]">
            <Link
              href="/contatti"
              target="_blank"
              title="Contattami per una consulenza e parlami del tuo progetto"
            >
              {" "}
              {translation?.[locale]?.col2?.row1?.cta}
            </Link>
          </div>
        </div>
        <div className="flex-col justify-start lg:items-end gap-2.5 inline-flex">
          <div className="text-xs font-light capitalize lg:text-right text-main fxl:text-xl 3xl:text-2xl">
            Via Avondo, 15 - 11100 Aosta (AO)
          </div>
          <div className="text-xs font-light capitalize text-main fxl:text-xl 3xl:text-2xl">
            Via Jacopo della Quercia, 2 - 20096 Pioltello (MI)
          </div>
          <div className="text-xs font-extrabold lowercase text-main fxl:text-xl 3xl:text-2xl">
            +39 340 853 9159 - miaographics@gmail.com
          </div>
        </div>
        <div className="flex-col justify-start lg:items-end gap-2.5 inline-flex ">
          <Image src={Logo} alt="logo" width={100} className="opacity-60" />
          <div className="lg:text-right text-main text-base fxl:text-xl 3xl:text-2xl font-[300] capitalize">
            <Link
              href="/privacy"
              target="_blank"
              title="leggi la mia privacy policy"
            >
              {" "}
              Privacy policy
            </Link>
          </div>
          <div className="text-xs font-light lowercase text-main fxl:text-xl 3xl:text-2xl">
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
                  className="mr-4 text-main"
                  aria-label={el?.name}
                  key={i}
                  title={`seguimi anche ${el?.name}`}
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
            title="thallion dev website"
          >
            Thallion dev
          </Link>{" "}
          2024, all rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
