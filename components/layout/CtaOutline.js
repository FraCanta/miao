import React from "react";
import ButtonLink from "./ButtonLink";

const CtaOutline = ({ link, children, title }) => {
  return (
    <ButtonLink
      href={link}
      title={title}
      variant="outline"
      className="w-full lg:w-auto"
    >
      {children}
    </ButtonLink>
  );
};

export default CtaOutline;
