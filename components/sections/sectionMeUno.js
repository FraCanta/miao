import Image from "next/image";
import SectionIndex from "../layout/SectionIndex";

const SectionMeUno = ({ translation }) => {
  const storyParagraphs = translation?.presentazione?.slice(0, 4) || [];

  return (
    <>
      <section className="border-y border-main/10 bg-main/[0.025]">
        <div className="mx-auto grid w-[90%] grid-cols-[auto_minmax(0,1fr)] items-start gap-x-5 gap-y-8 py-12 md:grid-cols-[auto_1.1fr_1fr] md:items-center md:gap-10 lg:py-16">
          <span
            className="flex self-stretch items-center font-serif text-red"
            aria-hidden="true"
          >
            <span className="block origin-center scale-y-[1.15] text-[9rem] leading-[0.65] md:scale-y-100 md:text-[9rem]">
              {"{"}
            </span>
          </span>
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-main lg:text-4xl">
              Il mio manifesto
            </h2>
            <p className="mt-4 max-w-md text-xl leading-snug text-main md:text-2xl">
              Ogni brand ha una storia. Il mio lavoro è darle una forma visiva
              chiara, coerente e riconoscibile.
            </p>
          </div>
          <p className="col-span-2 border-main/15 text-base leading-relaxed text-second md:col-span-1 md:border-l md:pl-10 lg:text-lg">
            Per me il design è molto più di un fatto estetico: è il linguaggio
            con cui un brand esprime la propria identità, trova il suo spazio
            nel mercato e crea relazioni autentiche con le persone.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-[90%] gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28">
        <div className="max-w-2xl">
          <SectionIndex>LA MIA STORIA</SectionIndex>
          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] text-main ">
            Un percorso di curiosità e visione.
          </h2>
          <div className="mt-8 space-y-5">
            {storyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-second lg:text-lg"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <span
            className="absolute -bottom-4 left-1/2 z-0 -translate-x-1/2 font-serif text-[14rem] leading-none text-main md:text-[21rem]"
            aria-hidden="true"
          >
            {"{"}
          </span>
          <span
            className="absolute right-[3%] top-[20%] z-20 h-8 w-8 rotate-12 bg-red md:h-12 md:w-12"
            aria-hidden="true"
          />
          <Image
            className="relative z-10 h-auto w-full object-contain"
            src={translation?.img}
            alt="Elisa, graphic designer di MIAO graphics"
            width={620}
            height={620}
            sizes="(max-width: 1023px) 90vw, 45vw"
          />
        </div>
      </section>
    </>
  );
};

export default SectionMeUno;
