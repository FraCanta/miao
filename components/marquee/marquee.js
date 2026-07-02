import Image from "next/image";
import React from "react";

const compactLogos = [
  ...[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ].map((logo) => ({
    src: `/assets/logos/logo${logo}.optimized.webp`,
    alt: `Logo cliente ${logo} di MIAO graphics`,
  })),
  {
    src: "/assets/logos/alpimiel_logo.optimized.webp",
    alt: "Logo AlpiMiel",
  },
  {
    src: "/assets/logos/giain_logo.optimized.webp",
    alt: "Logo Giain",
  },
];

const LogoList = ({ duplicate = false }) => (
  <ul className="marquee__content" aria-hidden={duplicate || undefined}>
    {compactLogos.map((logo) => (
      <li key={`${duplicate ? "duplicate-" : ""}${logo.src}`}>
        <Image
          src={logo.src}
          alt={duplicate ? "" : logo.alt}
          className="logo"
          width={150}
          height={150}
          sizes="(max-width: 768px) 80px, 120px"
        />
      </li>
    ))}
  </ul>
);

const Marquee = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="enable-animation" aria-label="Una selezione di clienti">
        <div className="marquee">
          <LogoList />
          <LogoList duplicate />
        </div>
      </div>
    );
  }

  return (
    <div className="enable-animation">
      <div className="marquee">
        <ul className="marquee__content">
          <li>
            {" "}
            <Image
              src="/assets/logos/logo1.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo2.optimized.webp"
              alt="Logo 2"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
          <li>
            <Image
              src="/assets/logos/logo3.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo4.optimized.webp"
              alt="Logo 2"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo5.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo6.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
        </ul>
        <ul className="marquee__content">
          <li>
            {" "}
            <Image
              src="/assets/logos/logo7.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo8.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo9.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo10.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo1.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo11.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
        </ul>
      </div>
      <div className="marquee">
        <ul className="marquee__content">
          <li>
            {" "}
            <Image
              src="/assets/logos/logo12.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo13.optimized.webp"
              alt="Logo 2"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
          <li>
            <Image
              src="/assets/logos/logo14.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo15.optimized.webp"
              alt="Logo 2"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo16.optimized.webp"
              alt="Logo 1"
              className="logo "
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo17.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
        </ul>
        <ul className="marquee__content">
          <li>
            {" "}
            <Image
              src="/assets/logos/logo18.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo19.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo20.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo21.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo12.optimized.webp"
              alt="Logo 1"
              className="logo"
              width={150}
              height={150}
            />
          </li>
          <li>
            {" "}
            <Image
              src="/assets/logos/logo13.optimized.webp"
              alt="Logo 2"
              className="logo"
              width={150}
              height={150}
            />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
