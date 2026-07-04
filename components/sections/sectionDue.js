import React from "react";
import SectionLink from "../layout/SectionLink";
import ServiceCard from "../serviziItem/ServiceCard";

const SectionDue = ({ services = [] }) => {
  return (
    <section className="mx-auto mt-24 w-[90%] md:mt-32">
      <div className="flex flex-col gap-5 pb-5 mb-10 border-b border-main/20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red 4xl:text-xl">
            Cosa offro
          </p>
          <h2 className="text-[11vw] font-extrabold leading-none text-main md:text-[6vw] lg:text-[2.5vw]">
            I miei servizi
          </h2>
        </div>
        <SectionLink href="/servizi" title="Scopri tutti i servizi">
          Tutti i servizi
        </SectionLink>
      </div>

      <div className="grid grid-cols-1 border-t border-l border-main/15 sm:grid-cols-2 xl:grid-cols-4">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={service.link} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionDue;
