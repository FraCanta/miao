import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

const groupLabels = {
  service: "Servizi",
  work: "Portfolio",
  post: "Dal blog",
};

const normalize = (value = "") =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("it")
    .trim();

const SiteSearch = ({ menuOpen, onNavigate }) => {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  const openSearch = () => {
    setOpen(true);
    if (status !== "idle") return;

    setStatus("loading");
    fetch("/api/search-index")
      .then((response) => {
        if (!response.ok) throw new Error("Indice non disponibile");
        return response.json();
      })
      .then((data) => {
        setItems(data.items || []);
        setStatus("ready");
        fetch("/api/search-index?scope=posts")
          .then((response) => (response.ok ? response.json() : { items: [] }))
          .then((postData) =>
            setItems((current) => [...current, ...(postData.items || [])]),
          )
          .catch(() => undefined);
      })
      .catch(() => setStatus("error"));
  };

  const results = useMemo(() => {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    if (words.length === 0) return [];

    return items
      .filter((item) => {
        const haystack = normalize(
          `${item.title} ${item.description} ${item.terms}`,
        );
        return words.every((word) => haystack.includes(word));
      })
      .slice(0, 18);
  }, [items, query]);

  const groupedResults = useMemo(
    () =>
      ["service", "work", "post"]
        .map((type) => ({
          type,
          items: results.filter((item) => item.type === type).slice(0, 6),
        }))
        .filter((group) => group.items.length > 0),
    [results],
  );

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const handleDialogKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeSearch();
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = [
      ...(dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) || []),
    ].filter((element) => element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openSearch}
        tabIndex={menuOpen ? undefined : -1}
        className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
        aria-haspopup="dialog"
      >
        <Icon icon="ri:search-line" className="h-6 w-6 text-red" />
        Cerca nel sito
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Cerca nel sito"
                onKeyDown={handleDialogKeyDown}
                data-lenis-prevent
                className="fixed inset-0 z-[2000000] min-h-[100dvh] overflow-x-hidden overflow-y-auto bg-white text-main"
                initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
                animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { y: "100%" }}
                transition={{
                  duration: reduceMotion ? 0.2 : 0.58,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-0.12em] top-1/2 -translate-y-1/2 font-serif text-[clamp(22rem,48vw,46rem)] font-light leading-none text-red/[0.055]"
                >
                  {"}"}
                </span>
                <motion.div
                  className="relative mx-auto min-h-full w-[90%] pb-16 pt-7 md:pt-10"
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: reduceMotion ? 0 : 0.22 }}
                >
          <div className="flex items-center justify-between border-b border-main/15 pb-5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-red">
              Ricerca globale
            </span>
            <button
              type="button"
              onClick={closeSearch}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
            >
              Chiudi
              <Icon icon="ri:close-line" className="h-8 w-8 text-red" />
            </button>
          </div>

          <div className="mx-auto max-w-[1200px] pt-12 md:pt-16">
            <label
              htmlFor="site-search"
              className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-red"
            >
              Cosa stai cercando?
            </label>
            <div className="flex items-center gap-4 border-b-2 border-main pb-3 focus-within:border-red">
              <Icon icon="ri:search-line" className="h-8 w-8 shrink-0 text-red" />
              <input
                ref={inputRef}
                id="site-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Un servizio, un progetto, un articolo…"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent text-[clamp(1.5rem,5vw,3.8rem)] font-extrabold leading-none tracking-[-0.035em] outline-none placeholder:text-main/25"
              />
            </div>

            <div className="pt-10" aria-live="polite">
              {status === "loading" && <p>Preparo la ricerca…</p>}
              {status === "error" && (
                <p>Gli articoli non sono disponibili. Riprova tra poco.</p>
              )}
              {status === "ready" && !query.trim() && (
                <p className="max-w-xl text-lg text-second">
                  Cerca per nome, servizio, categoria o argomento.
                </p>
              )}
              {status === "ready" && query.trim() && results.length === 0 && (
                <p className="text-lg">Nessun risultato per “{query}”.</p>
              )}

              <div className="space-y-12">
                {groupedResults.map((group) => (
                  <section key={group.type}>
                    <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-red">
                      {groupLabels[group.type]}
                    </h2>
                    <ul className="grid gap-px bg-main/10 md:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => (
                        <li key={item.id} className="bg-white">
                          <Link
                            href={item.href}
                            data-transition-label={
                              item.type === "post" ? "Blog" : item.title
                            }
                            onClick={(event) => {
                              closeSearch();
                              onNavigate?.(event);
                            }}
                            className="group grid min-h-[132px] grid-cols-[92px_1fr] gap-5 p-4 transition-colors hover:bg-main/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-red"
                          >
                            <div className="relative overflow-hidden bg-main/5">
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt=""
                                  fill
                                  sizes="92px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <span className="flex h-full items-center justify-center text-4xl text-red/30" aria-hidden="true">
                                  {"{"}
                                </span>
                              )}
                            </div>
                            <span className="flex min-w-0 flex-col justify-center">
                              <strong className="text-xl leading-tight group-hover:text-red">
                                {item.title}
                              </strong>
                              <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-second">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default SiteSearch;
