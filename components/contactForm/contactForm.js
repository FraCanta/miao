import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Button from "@/components/layout/Button";

const sourceOptions = [
  { value: "passaparola", label: "Passaparola" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "google", label: "Google Search" },
  { value: "linkedin", label: "LinkedIn" },
];

const serviceOptions = [
  { value: "logo", label: "Logo Design" },
  { value: "label", label: "Label Design" },
  { value: "branding", label: "Branding" },
  { value: "social", label: "Social Media" },
  { value: "altro", label: "Altro" },
];

const budgetOptions = [
  "€ 350 - 500",
  "€ 500 - 1.500",
  "€ 1.500 - 2.500",
  "€ 2.500+",
];

const initialInputs = {
  name: "",
  work: "",
  email: "",
  message: "",
};

const initialServices = {
  logo: false,
  label: false,
  branding: false,
  social: false,
  altro: false,
};

const fieldClass =
  "mt-2 min-h-12 w-full border border-main/20 bg-[#f7f6f4] px-4 py-3 text-base text-main outline-none transition-colors placeholder:text-second/60 hover:border-main/40 focus:border-red focus:ring-2 focus:ring-red/15";

const optionClass = (selected) =>
  `inline-flex min-h-11 cursor-pointer items-center border px-4 py-2 text-sm font-bold transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-red ${
    selected
      ? "border-red bg-red text-white"
      : "border-main/20 bg-white text-main hover:border-red hover:text-red"
  }`;

export default function ContactForm({ translation }) {
  const [inputs, setInputs] = useState(initialInputs);
  const [services, setServices] = useState(initialServices);
  const [source, setSource] = useState("");
  const [budget, setBudget] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (status.state !== "success") return undefined;

    const resetTimer = window.setTimeout(() => {
      setStatus({ state: "idle", message: "" });
    }, 6000);

    return () => window.clearTimeout(resetTimer);
  }, [status.state]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((current) => ({ ...current, [name]: value }));
  };

  const toggleService = (service) => {
    setServices((current) => ({ ...current, [service]: !current[service] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...inputs,
          source,
          price: budget,
          privacyAccepted,
          services: Object.keys(services).filter((key) => services[key]),
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Non è stato possibile inviare il messaggio.",
        );
      }

      setInputs(initialInputs);
      setServices(initialServices);
      setSource("");
      setBudget("");
      setPrivacyAccepted(false);
      setStatus({ state: "success", message: "Messaggio inviato." });
      toast.success("Grazie, il messaggio è stato inviato.");
    } catch (error) {
      const message = error.message || "Qualcosa è andato storto.";
      setStatus({ state: "error", message });
      toast.error(message);
    }
  };

  return (
    <section className="pt-10 lg:pt-12" aria-label="Modulo di contatto">
      {status.state === "success" ? (
        <div
          className="flex min-h-[620px] flex-col items-center justify-center border border-main/15 bg-white px-6 py-16 text-center sm:px-10 lg:min-h-[720px] 4xl:min-h-[1000px]"
          role="status"
          aria-live="polite"
        >
          <span
            aria-hidden="true"
            className="font-serif text-[6rem] leading-[0.55] text-red md:text-[10rem]"
          >
            {"{"}
          </span>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-red 4xl:text-xl">
            Messaggio inviato
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-main md:text-5xl 4xl:max-w-4xl 4xl:text-7xl">
            Grazie per avermi contattata.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-second md:text-lg 4xl:max-w-3xl 4xl:text-3xl">
            Ho ricevuto la tua richiesta. Controlla la casella email: ti ho
            inviato una conferma con il riepilogo. Ti risponderò normalmente
            entro 1–2 giorni lavorativi.
          </p>
          <Button
            type="button"
            size="lg"
            className="mt-10"
            onClick={() => setStatus({ state: "idle", message: "" })}
          >
            Invia un altro messaggio
          </Button>
          <p className="mt-5 text-xs text-second 4xl:text-lg">
            Il form riapparirà automaticamente tra pochi secondi.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-5 bg-white border border-main/15 sm:p-7 lg:p-8 xl:p-10"
        >
          <div className="grid gap-6 pt-7 sm:grid-cols-2">
            <label className="text-sm font-bold text-main">
              Nome e cognome <span className="text-red">*</span>
              <input
                className={fieldClass}
                type="text"
                name="name"
                autoComplete="name"
                value={inputs.name}
                onChange={handleInputChange}
                placeholder="Come ti chiami?"
                required
              />
            </label>
            <label className="text-sm font-bold text-main">
              Azienda o progetto <span className="text-red">*</span>
              <input
                className={fieldClass}
                type="text"
                name="work"
                autoComplete="organization"
                value={inputs.work}
                onChange={handleInputChange}
                placeholder="Nome del brand"
                required
              />
            </label>
          </div>

          <label className="block mt-6 text-sm font-bold text-main">
            Email <span className="text-red">*</span>
            <input
              className={fieldClass}
              type="email"
              name="email"
              autoComplete="email"
              value={inputs.email}
              onChange={handleInputChange}
              placeholder="nome@email.com"
              required
            />
          </label>

          <fieldset className="mt-8 border-t border-main/15 pt-7">
            <legend className="text-sm font-extrabold text-main">
              Di cosa hai bisogno?
            </legend>
            <div className="flex flex-wrap gap-2 mt-4">
              {serviceOptions.map((option) => (
                <label
                  key={option.value}
                  className={optionClass(services[option.value])}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={services[option.value]}
                    onChange={() => toggleService(option.value)}
                  />
                  {option.value === "altro"
                    ? translation?.altro || option.label
                    : option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8 border-t border-main/15 pt-7">
            <legend className="text-sm font-extrabold text-main">
              Budget indicativo
            </legend>
            <div className="flex flex-wrap gap-2 mt-4">
              {budgetOptions.map((option) => (
                <label key={option} className={optionClass(budget === option)}>
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    className="sr-only"
                    checked={budget === option}
                    onChange={(event) => setBudget(event.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8 border-t border-main/15 pt-7">
            <legend className="text-sm font-extrabold text-main">
              Come mi hai conosciuta?
            </legend>
            <div className="flex flex-wrap gap-2 mt-4">
              {sourceOptions.map((option) => (
                <label
                  key={option.value}
                  className={optionClass(source === option.value)}
                >
                  <input
                    type="radio"
                    name="source"
                    value={option.value}
                    className="sr-only"
                    checked={source === option.value}
                    onChange={(event) => setSource(event.target.value)}
                  />
                  {option.value === "passaparola"
                    ? translation?.passaparola || option.label
                    : option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block mt-8 text-sm font-bold border-t border-main/15 pt-7 text-main">
            Parlami del progetto <span className="text-red">*</span>
            <textarea
              className={`${fieldClass} min-h-40 resize-y`}
              name="message"
              value={inputs.message}
              onChange={handleInputChange}
              placeholder="Obiettivi, necessità, tempistiche o qualsiasi dettaglio utile."
              required
            />
          </label>

          <div className="mt-7 border-t border-main/15 pt-7">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-second">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                required
              />
              <span>
                Dichiaro di aver letto l&apos;
                <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-main underline decoration-red underline-offset-4 transition-colors hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                >
                  Informativa privacy
                </Link>{" "}
                ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 e di
                essere informato/a che i dati saranno trattati esclusivamente
                per gestire la mia richiesta, ai sensi dell&apos;art. 6, par. 1,
                lett. b) del medesimo Regolamento.{" "}
                <span className="text-red">*</span>
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-4 mt-8 border-t border-main/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p
              className={`text-sm ${status.state === "error" ? "text-red" : "text-second"}`}
              role="status"
              aria-live="polite"
            >
              {status.message ||
                (privacyAccepted
                  ? "I campi con * sono obbligatori."
                  : "Accetta l’informativa privacy per abilitare l’invio.")}
            </p>
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status.state === "loading" || !privacyAccepted}
            >
              {status.state === "loading"
                ? "Invio…"
                : status.state === "error"
                  ? "Riprova"
                  : translation?.btn || "Invia"}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
