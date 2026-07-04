import Image from "next/image";
import Link from "next/link";
import LinkArrow from "../layout/LinkArrow";

const ServiceCard = ({ service, index }) => {
  const isExternal = service.link?.startsWith("http");

  return (
    <Link
      href={service.link}
      title={`Scopri il servizio ${service.name}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex aspect-square flex-col overflow-hidden border-b border-r border-main/15 bg-white transition-colors duration-300 hover:bg-main"
    >
    <div className="relative h-[52%] shrink-0 overflow-hidden bg-main/5">
      <Image
        src={service.img}
        alt={`Esempio del servizio ${service.name}`}
        fill
        sizes="(max-width: 639px) 90vw, (max-width: 1279px) 45vw, 22vw"
        className="object-contain transition-transform duration-500 group-hover:scale-[1.035]"
      />
      <span className="absolute right-4 top-4 bg-main px-2 py-1 text-[10px] font-bold tracking-[0.18em] text-white 4xl:right-7 4xl:top-7 4xl:px-4 4xl:py-2 4xl:text-lg">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <div className="flex min-h-0 flex-1 flex-col p-5 md:p-6 2xl:p-5">
      <h3 className="text-xl font-extrabold leading-[1.05] text-main transition-colors group-hover:text-white md:text-2xl 2xl:text-[1.45vw]">
        {service.name}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-second transition-colors group-hover:text-white/70 2xl:text-base 4xl:text-2xl">
        {service.descrizione}
      </p>
      <LinkArrow className="mt-auto self-end" />
    </div>
    </Link>
  );
};

export default ServiceCard;
