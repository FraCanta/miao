import { Icon } from "@iconify/react";
import Link from "next/link";

const variants = {
  primary: "border-red bg-red text-white hover:border-main hover:bg-main",
  outline:
    "border-main/40 bg-transparent text-main hover:border-red hover:bg-red hover:text-white",
  inverse:
    "border-white bg-white text-red hover:border-main hover:bg-main hover:text-white",
};

const sizes = {
  sm: "min-h-11 px-5 py-2.5 text-xs 4xl:min-h-16 4xl:px-8 4xl:text-lg",
  md: "min-h-12 px-6 py-3 text-sm 4xl:min-h-20 4xl:px-10 4xl:text-xl",
  lg: "min-h-14 px-7 py-4 text-sm 4xl:min-h-20 4xl:px-10 4xl:text-xl",
};

const ButtonLink = ({
  children,
  href,
  title,
  variant = "primary",
  size = "md",
  arrow = true,
  arrowIcon = "prime:arrow-up-right",
  target,
  tabIndex,
  className = "",
  onClick,
}) => {
  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      target === "_blank" ||
      typeof href !== "string" ||
      !href.startsWith("#")
    ) {
      return;
    }

    const destination = document.querySelector(href);
    if (!destination) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const offset = -(
      parseFloat(getComputedStyle(destination).scrollMarginTop) || 0
    );

    if (!reduceMotion && window.__miaoLenis) {
      window.__miaoLenis.scrollTo(destination, {
        offset,
        duration: 1.05,
      });
      return;
    }

    destination.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <Link
      href={href}
      title={title}
      target={target}
      tabIndex={tabIndex}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-4 border font-bold uppercase  transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {arrow && (
        <Icon
          icon={arrowIcon}
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
            arrowIcon === "prime:arrow-down"
              ? "group-hover:translate-y-0.5"
              : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          }`}
        />
      )}
    </Link>
  );
};

export default ButtonLink;
