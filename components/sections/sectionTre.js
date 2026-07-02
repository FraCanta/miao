import React from "react";
import SectionLink from "../layout/SectionLink";
import WorksItem from "../worksItem/worksItem";

const SectionTre = ({ works = [] }) => {
  return (
    <section className="mx-auto mt-24 w-[90%] md:mt-32">
      <div className="mb-10 flex flex-col gap-3 border-b border-main/20 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red">
            Portfolio
          </p>
          <h2 className="text-[11vw] font-extrabold leading-none tracking-[-0.05em] text-main md:text-[6vw] lg:text-[2.5vw]">
            Lavori in evidenza
          </h2>
        </div>
        <SectionLink href="/portfolio" title="Vedi tutti i progetti">
          Vedi tutti i progetti
        </SectionLink>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {works.map((work) => (
          <WorksItem key={work.link} {...work} />
        ))}
      </div>
    </section>
  );
};

export default SectionTre;
