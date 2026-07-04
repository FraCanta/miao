import Image from "next/image";
import EditorialLink from "../layout/EditorialLink";
import SectionIndex from "../layout/SectionIndex";
import SectionLink from "../layout/SectionLink";

const SectionMeTre = ({ translation }) => {
  return (
    <section className="mx-auto grid w-[90%] gap-12 border-b border-main/10 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-10 4xl:gap-32 4xl:py-24">
      <div className="relative">
        <Image
          className="h-auto w-full object-cover aspect-[4.3/3]"
          src={translation?.img}
          alt="Mitha Project, collaborazione tra MIAO graphics e Thallion Dev"
          width={900}
          height={600}
          sizes="(max-width: 1023px) 90vw, 45vw"
        />
        <span
          className="absolute -right-4 top-1/2 h-10 w-10 -translate-y-1/2 bg-red md:h-14 md:w-14"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-2xl 4xl:max-w-5xl">
        <SectionIndex>MITHA PROJECT</SectionIndex>
        <h2 className="text-4xl font-extrabold leading-[1.05] text-main md:text-5xl 2xl:text-4xl 4xl:text-7xl">
          Un gioco creativo che diventa realtà.
        </h2>
        <p className="mt-7 text-base leading-relaxed text-second lg:text-lg 4xl:mt-10 4xl:text-3xl">
          Mitha è la collaborazione tra MIAO graphics e Thallion Dev: uniamo
          identità visiva e web design per trasformare idee, obiettivi e
          contenuti in progetti digitali coerenti e riconoscibili.
        </p>
        <SectionLink
          href="https://www.mithacreative.it/"
          title="Visita il sito di Mitha Creative"
          target="_blank"
          className="mt-8"
        >
          {translation?.cta || "Scopri di più"}
        </SectionLink>
      </div>
    </section>
  );
};

export default SectionMeTre;
