import { Icon } from "@iconify/react";

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
};

const colors = {
  red: "text-red",
  white: "text-white",
};

const LinkArrow = ({ size = "sm", color = "red", className = "" }) => (
  <Icon
    icon="prime:arrow-up-right"
    aria-hidden="true"
    className={`${sizes[size]} ${colors[color]} shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
  />
);

export default LinkArrow;
