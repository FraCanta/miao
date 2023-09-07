import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/logo.png";

import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import socials from "../../utils/socials.json";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Menu = ({ nr, translation }) => {
  const { locale } = useRouter();
  const [open, setOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState("overlay");

  const pathname = usePathname();
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
      setOverlayVisible("");
    } else {
      setOpen(false);
      setOverlayVisible("overlay");
    }
  };

  return (
    <header>
      <nav
        className="h-[60px] md:h-[140px] lg:h-[70px] xl:h-[80px] fxl:h-[150px] 3xl:h-[180px] 4xl:h-[250px] 3xl flex w-full items-center justify-between relative z-[999999]  "
        id="header"
        ref={nr}
      >
        <div className="flex w-[90%] mx-auto justify-between items-center ">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-[85px] md:w-[160px] lg:w-[100px] xl:w-[130px] 2xl:w-[120px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
              />
            </Link>
          </div>

          <div className="lg:flex items-center  hidden capitalize">
            <div className="w-full flex items-center justify-end">
              <Link
                href="/me"
                className={`${
                  pathname === "/me" ? "text-red font-medium" : ""
                } mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center`}
              >
                {translation?.[locale]?.me}
              </Link>

              <Link
                href="/servizi"
                className={`${
                  pathname === "/servizi" ? "text-red font-medium" : ""
                } mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center`}
              >
                {translation?.[locale]?.servizi}
              </Link>
              <Link
                href="/portfolio"
                className={`${
                  pathname === "/portfolio" ? "text-red font-medium" : ""
                } mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center`}
              >
                {translation?.[locale]?.portfolio}
              </Link>
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" ? "text-red font-medium" : ""
                } mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center`}
              >
                {translation?.[locale]?.blog}
              </Link>
            </div>
          </div>
          <div className="lg:flex hidden">
            {/* {socials?.Elisa?.map((el, i) => (
              <Link
                href={el?.url}
                target="_blank"
                className="text-main "
                aria-label="link a instagram"
                key={i}
              >
                <Icon
                  icon={el?.icon}
                  className="w-[25px] h-[25px]  fxl:w-[30px] fxl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] 4xl:w-[50px] 4xl:h-[50px] cursor-pointer mr-4"
                />
              </Link>
            ))} */}
            <Link
              href="/contatti"
              className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 border 2xl:text-xl fxl:text-2xl 3xl:text-3xl rounded shadow  text-white hover:transition-all border-red  bg-red"
            >
              {translation?.[locale]?.contatti}
            </Link>
          </div>
          <div className="flex lg:hidden text-main">
            <Icon
              icon="jam:menu"
              className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
              onClick={handleOpen}
            />
          </div>
        </div>
        <div
          className={`${overlayVisible} fixed left-0 right-0 top-0 bottom-0 h-screen bg-main/30 opacity-1  `}
          onClick={handleOpen}
        ></div>
        <div
          className="h-screen w-screen fixed top-0 left-0  transition-transform duration-500 ease-in-out transform"
          style={{
            transform: open ? "translateX(0)" : "translateX(-100%)",
          }}
          id="contacts"
        >
          <div className="w-1/2 contacts hidden lg:block" id="contact1"></div>
          <div
            className={`w-11/12 h-screen md:w-[70%] lg:w-[60%] xl:w-[40%] flex flex-col p-4 md:p-6 lg:p-8 contact bg-white  ${
              open ? "block" : "hidden"
            }`}
            id="contact2"
          >
            <div className="text-main w-full flex items-center justify-end py-1 ">
              <div className="flex items-center" id="close">
                <Icon
                  icon="ep:close"
                  className="w-[20px] h-[20px] md:w-[35px] md:h-[40px] lg:w-[30px] lg:h-[30px] cursor-pointer mr-4"
                  onClick={handleOpen}
                />
              </div>
            </div>

            <div className="flex flex-col justify-between  " id="details">
              <ul
                className="xl:leading-9 mt-4 text-main flex flex-col gap-6 md:gap-12 capitalize"
                onClick={handleOpen}
              >
                <li onClick={handleOpen}>
                  <Link
                    href="/me"
                    className={`${
                      pathname === "/me" ? "text-red font-medium" : ""
                    } "mr-8 text-[25px] md:text-[38px] lg:text-4xl text-main font-regular "`}
                  >
                    {translation?.[locale]?.me}
                  </Link>
                </li>
                <li onClick={handleOpen}>
                  <Link
                    href="/servizi"
                    className={`${
                      pathname === "/servizi" ? "text-red font-medium" : ""
                    } "mr-8 text-[25px] md:text-[38px] lg:text-4xl text-main font-regular "`}
                  >
                    {translation?.[locale]?.servizi}
                  </Link>
                </li>
                <li onClick={handleOpen}>
                  <Link
                    href="/portfolio"
                    className={`${
                      pathname === "/portfolio" ? "text-red font-medium" : ""
                    } "mr-8 text-[25px] md:text-[38px] lg:text-4xl text-main font-regular "`}
                  >
                    {translation?.[locale]?.portfolio}
                  </Link>
                </li>
                <li
                  className="text-[25px] md:text-[38px] lg:text-4xl  flex items-center"
                  onClick={handleOpen}
                >
                  <Link
                    href="/blog"
                    className={`${
                      pathname === "/blog" ? "text-red font-medium" : ""
                    } "mr-8 text-[25px] md:text-[38px] lg:text-4xl text-main font-regular "`}
                  >
                    {translation?.[locale]?.blog}
                  </Link>
                </li>
                <li className="my-4" onClick={handleOpen}>
                  <Link
                    href="/contatti"
                    className="capitalize font-bold py-2.5 px-6 text-[22px] md:text-[38px] lg:text-4xl border rounded shadow  text-white hover:transition-all border-red  bg-red"
                  >
                    {translation?.[locale]?.contatti}
                  </Link>
                </li>
              </ul>
              <div className="flex items-center  w-full h-full mt-10 md:mt-14">
                <div className="flex flex-col w-full">
                  <div className="flex">
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
                          className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] cursor-pointer mr-4"
                        />
                      </Link>
                    ))}
                  </div>
                  <div className=" flex flex-col lg:flex-row xl:flex-col mt-12 md:mt-20 justify-between gap-4 md:gap-10 xl:gap-8">
                    <div className="flex flex-col text-main capitalize md:text-xl">
                      <p> {translation?.[locale]?.col1?.row1?.title}</p>
                      <Link
                        href="https://calendly.com/thalliondev/parliamo-del-tuo-progetto"
                        target="_blank"
                      >
                        <h4 className="text-2xl md:text-4xl text-red font-bold">
                          {" "}
                          {translation?.[locale]?.col1?.row1?.cta}
                        </h4>
                      </Link>
                    </div>
                    <div className="flex flex-col text-main capitalize md:text-xl">
                      <p> {translation?.[locale]?.col2?.row1?.title}</p>
                      <Link href="/contact" target="_blank">
                        <h4 className="text-2xl md:text-4xl text-red font-bold">
                          {" "}
                          {translation?.[locale]?.col2?.row1?.cta}
                        </h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
