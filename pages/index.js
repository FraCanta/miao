import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Head from "next/head";
import Tigre from "../public/pageImg/tigre.png";
import Rettangolo from "../public/pageImg/disegno.png";
import MobileRet from "../public/pageImg/rettangolo_mobile.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Miao - grafismi itineranti</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className="w-full min-h-[calc(40vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* <Image src={Logo} alt="Miao grafismi itineranti" width={500} priority />
        <p className="text-3xl mt-10 text-main font-[400]">
          work in progress...
        </p> */}
        <div className="h-full overflow-hidden hidden lg:block">
          <Image
            className="object-contain w-full h-full"
            src={Rettangolo}
            alt="home image"
            width={550}
          />
        </div>
        <div className="block lg:hidden">
          <Image
            className="object-contain  "
            src={MobileRet}
            alt="home image"
          />
        </div>

        <div className="text-main text-[75px] md:text-[150px] md:leading-[130px] lg:text-[80px] lg:leading-[65px] xl:text-[95px] xl:leading-[85px] 2xl:text-[110px] fxl:text-[150px] fxl:leading-[120px] 3xl:text-[180px] 3xl:leading-[160px] font-normal leading-[77.88px] mt-10 mb-8 md:mt-20 2xl:leading-[94.50px] lg:absolute top-[40%] fxl:top-1/2 lg:left-[25%] xl:left-[24%] 2xl:left-[20%] fxl:left-[24%]">
          <h1>
            Soluzioni <br />
            creative{" "}
          </h1>
        </div>
        <Image
          className="object-contain lg:w-[500px] xl:w-[650px] fxl:w-[900px] 3xl:w-[1050px] h-full"
          src={Tigre}
          alt="home image"
          width={650}
        />
      </div>
    </>
  );
}
