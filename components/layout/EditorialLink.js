import { Icon } from "@iconify/react";
import Link from "next/link";

const EditorialLink = ({
  children,
  href,
  title,
  target,
  className = "",
}) => {
  return (
    <Link
      href={href}
      title={title}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 border-b border-main/30 pb-1 text-lg font-bold capitalize text-main transition-colors duration-300 hover:border-red hover:text-red md:text-xl 3xl:text-3xl ${className}`}
    >
      <span>{children}</span>
      <Icon
        icon="prime:arrow-up-right"
        className="text-red transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
};

export default EditorialLink;
