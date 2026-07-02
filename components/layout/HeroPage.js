import Image from "next/image";

const columns = {
  balanced: "lg:grid-cols-[0.95fr_1.05fr]",
  visual: "lg:grid-cols-[0.92fr_1.08fr]",
  editorial: "lg:grid-cols-[0.9fr_1.1fr]",
};

const mobileHeights = {
  compact: "min-h-[100px]",
  standard: "min-h-[420px]",
  portfolio: "min-h-[430px]",
  blog: "min-h-[360px] sm:min-h-[460px]",
  contact: "min-h-[380px] sm:min-h-[480px]",
};

const HeroPage = ({
  children,
  image,
  imageAlt,
  imageSizes = "(max-width: 1023px) 90vw, 48vw",
  columnsVariant = "balanced",
  mobileImageHeight = "standard",
  mobileMinHeight = "viewport",
  maxWidth = false,
  compactGap = false,
  contentClassName = "max-w-3xl",
  imageWrapperClassName = "max-w-[760px]",
  imageClassName = "",
}) => (
  <section className="overflow-hidden border-b border-main/10">
    <div
      className={`mx-auto grid w-[90%] gap-10 py-12 lg:min-h-[calc(100svh-108px)] lg:items-center lg:py-0 2xl:min-h-[calc(100svh-138px)] ${
        mobileMinHeight === "fixed"
          ? "min-h-[650px]"
          : mobileMinHeight === "header"
            ? "min-h-[calc(100svh-108px)]"
            : "min-h-[calc(100svh-88px)]"
      } ${columns[columnsVariant]} ${
        compactGap ? "lg:gap-10" : "lg:gap-16"
      } ${maxWidth ? "max-w-[1600px]" : ""}`}
    >
      <div className={`relative z-20 ${contentClassName}`}>{children}</div>

      <div
        className={`relative mx-auto flex w-full items-end justify-center lg:h-[calc(100svh-108px)] lg:min-h-0 2xl:h-[calc(100svh-138px)] ${mobileHeights[mobileImageHeight]} ${imageWrapperClassName}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={780}
          height={800}
          sizes={imageSizes}
          priority
          className={`relative z-0 h-auto w-full object-contain object-bottom lg:h-full lg:max-h-none ${imageClassName}`}
        />
      </div>
    </div>
  </section>
);

export default HeroPage;
