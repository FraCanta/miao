import React, { useEffect, useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
const Gallery = ({
  imageArray,
  galleryID,
  galleryTitle,
  previewLimit,
  ctaLabel,
}) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const backEasing = {
      in: "cubic-bezier(0.6, -0.28, 0.7, 1)",
      out: "cubic-bezier(0.3, 0, 0.32, 1.275)",
      inOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    };
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      imageClickAction: "next",
      tapAction: "next",
      pswpModule: () => import("photoswipe"),
      escKey: true,
      arrowKeys: true,
      loop: true,
      indexIndicatorSep: " / ",
      padding: { top: 100, bottom: 20, left: 10, right: 10 },
      mainClass: "pswp--custom-bg",
      showHideAnimationType: "zoom",
      showAnimationDuration: 500,
      hideAnimationDuration: 500,
    });

    lightbox.on("firstUpdate", () => {
      lightbox.pswp.options.easing = backEasing.out;
    });
    lightbox.on("initialZoomInEnd", () => {
      lightbox.pswp.options.easing = backEasing.inOut;
    });
    lightbox.on("close", () => {
      lightbox.pswp.options.easing = backEasing.in;
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  const openGallery = () => {
    galleryRef.current?.querySelector("a")?.click();
  };

  return (
    <div>
      <div
        ref={galleryRef}
        className="gallery pswp-gallery grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-7"
        id={galleryID}
      >
        {imageArray?.map((el, i) => (
          <a
            href={el?.src}
            data-pswp-width={el?.width}
            data-pswp-height={el?.height}
            key={galleryID + "-" + i}
            target="_blank"
            rel="noreferrer"
            className={
              previewLimit && i >= previewLimit
                ? "hidden"
                : "group overflow-hidden bg-main/5"
            }
          >
            <Image
              src={el?.src}
              width={800}
              height={800}
              alt={`${galleryTitle}, immagine ${i + 1}`}
              className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              sizes="(max-width: 767px) 44vw, (max-width: 1279px) 29vw, 15vw"
            />
          </a>
        ))}
      </div>
      {ctaLabel && imageArray?.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openGallery}
            className="site-button-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
          >
            <Icon
              icon="ri:gallery-view-2"
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            />
            {ctaLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
