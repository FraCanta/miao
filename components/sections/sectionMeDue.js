import Marquee from "../marquee/marquee";
import SectionIndex from "../layout/SectionIndex";

const methodSteps = [
  {
    title: "Ascolto",
    description:
      "Parto dalla tua storia, dai tuoi obiettivi, dal pubblico e dal mercato.",
    symbol: "□",
  },
  {
    title: "Direzione visiva",
    description:
      "Definisco mood, riferimenti e direzione creativa per costruire una visione chiara.",
    symbol: "↗",
  },
  {
    title: "Progetto",
    description:
      "Creo identità, packaging e contenuti con coerenza visiva e cura artigianale.",
    symbol: "••",
  },
  {
    title: "Applicazione",
    description:
      "Preparo materiali pronti per comunicare, essere riconoscibili e creare relazione.",
    symbol: "◇",
  },
];

const SectionMeDue = () => {
  return (
    <>
      <section className="border-y border-main/10 py-20 lg:py-24">
        <div className="mx-auto w-[90%]">
          <SectionIndex>IL MIO METODO</SectionIndex>
          <h2 className="sr-only">Il mio metodo di lavoro</h2>
          <ol className="mt-8 grid border-l border-t border-main/15 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((step, index) => (
              <li
                key={step.title}
                className="min-h-[260px] border-b border-r border-main/15 p-6 lg:p-8"
              >
                <div className="flex items-center justify-between text-xs font-bold tracking-[0.16em] text-second">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-2xl font-normal text-red" aria-hidden="true">
                    {step.symbol}
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-extrabold text-main lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-second lg:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-main/10 py-16 lg:py-20">
        <div className="mx-auto grid w-[90%] gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:items-center lg:gap-16">
          <div>
            <SectionIndex>COLLABORAZIONI</SectionIndex>
            <h2 className="text-2xl font-extrabold leading-tight text-main lg:text-3xl">
              Ho collaborato con realtà artigianali, culturali e imprenditoriali
              che condividono valori autentici.
            </h2>
          </div>
          <div className="min-w-0 border-main/15 lg:border-l lg:pl-10">
            <Marquee compact />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMeDue;
