import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
const Gallery = ({ imageArray, galleryID, galleryTitle }) => {
  useEffect(() => {
    const backEasing = {
      in: "cubic-bezier(0.6, -0.28, 0.7, 1)",
      out: "cubic-bezier(0.3, 0, 0.32, 1.275)",
      inOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    };
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      showHideAnimationType: "fade",
      imageClickAction: "next",
      tapAction: "next",
      pswpModule: () => import("photoswipe"),
      escKey: true,
      arrowKeys: true,
      loop: true,
      padding: { top: 20, bottom: 20, left: 10, right: 10 },
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
  }, []);
  return (
    <div
      className="gallery  pswp-gallery grid grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5"
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
        >
          <Image
            src={el?.src}
            width={800}
            height={800}
            alt=""
            key={i}
            className="w-full h-auto"
          />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
