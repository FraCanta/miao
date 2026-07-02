import Link from "next/link";
import LinkArrow from "./LinkArrow";

const variants = {
  default: "items-center",
  underline: "items-end border-b pb-1",
};

const colors = {
  main: {
    link: "text-main hover:text-red focus-visible:outline-red",
    underline: "border-main/40 hover:border-red",
    arrow: "red",
  },
  white: {
    link: "text-white hover:text-white/75 focus-visible:outline-white",
    underline: "border-white/60 hover:border-white",
    arrow: "white",
  },
};

const SectionLink = ({
  children,
  href,
  title,
  variant = "default",
  color = "main",
  className = "",
}) => {
  const selectedColor = colors[color] || colors.main;

  return (
    <Link
      href={href}
      title={title}
      className={`group inline-flex max-w-max gap-4 whitespace-nowrap text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${selectedColor.link} ${variants[variant]} ${variant === "underline" ? selectedColor.underline : ""} ${className}`}
    >
      <span>{children}</span>
      <LinkArrow color={selectedColor.arrow} />
    </Link>
  );
};

export default SectionLink;
