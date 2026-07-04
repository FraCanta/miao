import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import socials from "../../utils/socials.json";
import Logo from "../../public/assets/logo.optimized.webp";
import Image from "next/image";
import Script from "next/script";

const Footer = ({ translation }) => {
  const currentYear = new Date().getFullYear();

  const renderTreeNation = () => {
    const widgetContainer = document.getElementById(
      "tree-nation-offset-website",
    );

    if (
      !widgetContainer ||
      widgetContainer.dataset.rendered ||
      !window.TreeNationOffsetWebsite
    ) {
      return;
    }

    window
      .TreeNationOffsetWebsite({
        code: "6b435e1164c51cd3",
        lang: "it",
        theme: "light",
      })
      .render("#tree-nation-offset-website");
    widgetContainer.dataset.rendered = "true";
  };
  return (
    <>
      <Script
        src="https://widgets.tree-nation.com/js/widgets/v1/widgets.min.js?v=1.0"
        strategy="lazyOnload"
        onReady={renderTreeNation}
      />
      <footer className="w-full text-white bg-main ">
        <div className="mx-auto w-[90%] py-14 md:py-16 2xl:py-20">
          <div className="grid grid-cols-1 border-y border-white/20 md:grid-cols-2">
            <div className="flex flex-col gap-3 py-8 md:border-r md:border-white/20 md:pr-10 2xl:py-12">
              <div className="text-sm font-light capitalize text-white/60 2xl:text-base 4xl:text-2xl">
                {translation?.it?.col1?.row1?.title}
              </div>
              <Link
                href="https://calendly.com/arvine82/parlami-del-tuo-progetto"
                target="_blank"
                rel="noopener noreferrer"
                title="Prenota una call 1-to-1 e parliamo del tuo progetto"
                className="group flex items-center justify-between gap-5 text-[9vw] font-extrabold capitalize leading-none transition-colors duration-300 hover:text-red md:text-[4.5vw] xl:text-[3.2vw] 3xl:text-[3vw]"
              >
                <span>{translation?.it?.col1?.row1?.cta}</span>
                <Icon
                  icon="prime:arrow-up-right"
                  className="transition-transform duration-300 shrink-0 text-red group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-3 py-8 border-t border-white/20 md:border-t-0 md:pl-10 2xl:py-12">
              <div className="text-sm font-light capitalize text-white/60 2xl:text-base 4xl:text-2xl">
                {translation?.it?.col2?.row1?.title}
              </div>
              <Link
                href="/contatti"
                title="Contattami per una consulenza e parlami del tuo progetto"
                className="group flex items-center justify-between gap-5 text-[9vw] font-extrabold capitalize leading-none transition-colors duration-300 hover:text-red md:text-[4.5vw] xl:text-[3.2vw] 3xl:text-[3vw]"
              >
                <span>{translation?.it?.col2?.row1?.cta}</span>
                <Icon
                  icon="prime:arrow-up-right"
                  className="transition-transform duration-300 shrink-0 text-red group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-white/70 2xl:text-base 4xl:text-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-red">
                Dove
              </span>
              <div>Via Avondo, 15 - 11100 Aosta (AO)</div>
              <div>Via Jacopo della Quercia, 2 - 20096 Pioltello (MI)</div>
            </div>

            <div className="flex flex-col gap-3 text-sm leading-relaxed text-white/70 2xl:text-base 4xl:text-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-red">
                Contatti
              </span>
              <Link href="tel:+393408539159" className="hover:text-white">
                +39 340 853 9159
              </Link>
              <Link
                href="mailto:miaographics@gmail.com"
                className="lowercase hover:text-white"
              >
                miaographics@gmail.com
              </Link>
            </div>

            <div className="flex flex-col items-start gap-4">
              <Image
                src={Logo}
                alt="MIAO graphics"
                width={110}
                className="w-[110px] brightness-0 invert 4xl:w-[180px]"
              />
              <div className="text-xs font-light lowercase text-white/60 2xl:text-sm">
                P.iva: 01115240077
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 xl:items-end">
              <div id="tree-nation-offset-website"></div>
              <div className="flex items-center gap-5">
                {socials?.Elisa?.map((el, i) => (
                  <Link
                    href={el?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 text-white/70 hover:text-red"
                    aria-label={el?.name}
                    key={i}
                    title={`seguimi anche ${el?.name}`}
                  >
                  <Icon
                    icon={el?.icon}
                    className="h-6 w-6 cursor-pointer 4xl:h-10 4xl:w-10"
                  />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-6 text-xs font-normal text-white/50 md:flex-row md:items-center md:justify-between 2xl:text-sm 4xl:text-lg">
            <div>
              Made with ❤️ by{" "}
              <Link
                href="https://www.thallion-dev.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white/80 hover:text-red"
                title="thallion dev website"
              >
                Thallion dev
              </Link>{" "}
              {currentYear}, all rights reserved.
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.iubenda.com/privacy-policy/12170837"
                className="iubenda-white iubenda-noiframe iubenda-embed hover:text-white"
                title="Privacy Policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.iubenda.com/privacy-policy/12170837/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed hover:text-white"
                title="Cookie Policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
