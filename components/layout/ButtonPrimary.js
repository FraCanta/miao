import ButtonLink from "./ButtonLink";

function ButtonPrimary({ children, link, title }) {
  return (
    <ButtonLink href={link} title={title} className="w-full lg:w-auto">
      {children}
    </ButtonLink>
  );
}

export default ButtonPrimary;
