import { Icon } from "@iconify/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/assets/logo.svg";
import socials from "../../utils/socials.json";
import IconButton from "./IconButton";
import SiteSearch from "./SiteSearch";

const itemDelays = [
  "delay-[180ms]",
  "delay-[250ms]",
  "delay-[320ms]",
  "delay-[390ms]",
  "delay-[460ms]",
];

const Menu = ({ nr, translation }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    {
      href: "/chi-sono",
      label: translation?.it?.me,
      title: "Scopri chi sono e cosa posso fare per te",
    },
    {
      href: "/servizi",
      label: translation?.it?.servizi,
      title: "Ecco tutti i miei servizi",
    },
    {
      href: "/portfolio",
      label: translation?.it?.portfolio,
      title: "Guarda tutti i miei casi studio",
    },
    {
      href: "/blog",
      label: translation?.it?.blog,
      title: "Leggi i miei articoli",
    },
    {
      href: "/contatti",
      label: "Contattami",
      title: "Contattami e parliamo del tuo progetto",
    },
  ];

  const isActive = (href) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const closeMenu = () => setOpen(false);
  const handleNavigationClick = (event) => {
    if (!event.defaultPrevented) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleRouteComplete = () => setOpen(false);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => router.events.off("routeChangeComplete", handleRouteComplete);
  }, [router.events]);

  useEffect(() => {
    if (!open) return undefined;

    const previousActiveElement = document.activeElement;
    const panel = panelRef.current;
    const header = document.getElementById("header");
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const initialFocus = panel?.querySelector("a[href]");
    const focusFrame = window.requestAnimationFrame(() =>
      initialFocus?.focus(),
    );

    document.body.style.overflow = "hidden";

    const getVisibleFocusableElements = () =>
      [
        ...(header?.querySelectorAll(focusableSelector) || []),
        ...(panel?.querySelectorAll(focusableSelector) || []),
      ].filter((element) => element.getClientRects().length > 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getVisibleFocusableElements();
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (!firstFocusable || !lastFocusable) return;

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (open) return undefined;

    const syncHeaderPosition = () => {
      const header = nr?.current;
      if (!header) return;

      if (window.scrollY > 100) {
        header.classList.add("nav-scroll");
      } else {
        header.classList.remove("nav-scroll");
      }
    };

    const frame = window.requestAnimationFrame(syncHeaderPosition);

    return () => window.cancelAnimationFrame(frame);
  }, [open, nr]);

  return (
    <header className="layout-menu-enter h-[80px] bg-white md:h-[108px]  2xl:h-[138px]">
      <nav
        className={`relative z-[999999] flex h-[80px] w-full items-center bg-transparent md:h-[108px] lg:h-[116px] xl:h-[128px] 2xl:h-[138px] ${
          open ? "menu-open" : ""
        }`}
        id="header"
        ref={nr}
      >
        <div
          className={`mx-auto grid h-full w-[90%] grid-cols-[auto_1fr] items-center border-b transition-colors duration-500 ${
            open ? "border-white/20" : "border-main/15"
          }`}
        >
          <Link
            href="/"
            title="Home Page"
            aria-label="Home"
            onClick={handleNavigationClick}
            className="col-start-1 row-start-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
          >
            <Image
              src={Logo}
              alt="MIAO graphics"
              priority
              className={`w-[108px] transition-[filter] duration-500 md:w-[136px] lg:w-[148px] xl:w-[166px] 2xl:w-[180px] ${
                open ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <IconButton
            ref={triggerRef}
            label={open ? "Chiudi menu" : "Apri menu"}
            className={`group col-start-2 row-start-1 justify-self-end gap-3 ${
              open ? "text-white hover:text-red" : "text-main hover:text-red"
            }`}
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] block">
              {open ? "Chiudi" : "Menu"}
            </span>
            <span aria-hidden="true" className="relative block w-10 h-7">
              <span
                className={`absolute left-0.5 top-1 h-[2px] w-9 origin-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  open
                    ? "translate-y-[9px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              >
                <span
                  className={`block h-full w-full transition-colors duration-300 ${
                    open ? "bg-red" : "menu-line-attention-one bg-main"
                  }`}
                />
              </span>
              <span
                className={`absolute left-0.5 top-[13px] h-[2px] w-9 origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              >
                <span
                  className={`block h-full w-full bg-red ${
                    open ? "" : "menu-line-attention-two"
                  }`}
                />
              </span>
              <span
                className={`absolute left-0.5 top-[22px] h-[2px] w-9 origin-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  open
                    ? "-translate-y-[9px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              >
                <span
                  className={`block h-full w-full transition-colors duration-300 ${
                    open ? "bg-red" : "menu-line-attention-three bg-main"
                  }`}
                />
              </span>
            </span>
          </IconButton>
        </div>
      </nav>

      <div
        ref={panelRef}
        id="main-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigazione principale"
        aria-hidden={!open}
        data-lenis-prevent
        className={`fixed inset-0 z-[999998] overflow-x-hidden overflow-y-auto bg-main transition-[clip-path,visibility] ${
          open
            ? "visible duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
            : "invisible duration-300 ease-linear [clip-path:polygon(0_0,100%_0,100%_0,0_14%)]"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-16 flex items-center font-thin lg:right-28 2xl:-right-[1vw]"
        >
          <span className="block -translate-y-[25%] md:-translate-y-[15%]">
            <span
              className={`block leading-none text-red/10 transition-[transform,opacity] duration-1000 ${
                open
                  ? "translate-x-0 rotate-0 opacity-100"
                  : "translate-x-32 rotate-12 opacity-0"
              } text-[90vw] lg:text-[46vw]`}
            >
              {"{"}
            </span>
          </span>
        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -left-16 bottom-[12%] h-16 w-64 -rotate-12 bg-red/10 transition-[transform,opacity] duration-1000 ${
            open
              ? "translate-x-0 opacity-100 delay-300"
              : "-translate-x-32 opacity-0"
          } lg:bottom-[10%] lg:left-[8%] lg:h-20 lg:w-96`}
        />

        <div className="relative mx-auto flex min-h-full w-[90%] flex-col pb-8 pt-[104px] md:pb-10 md:pt-[140px] lg:justify-center lg:pb-[58px] lg:pt-[174px] xl:pt-[192px] 2xl:pt-[206px]">
          <ul className="relative z-10 flex w-full max-w-[1200px] flex-1 flex-col justify-center self-center">
            {links.map((link, index) => (
              <li
                key={link.href}
                className={`transition-[transform,opacity] duration-700 ${
                  open
                    ? `translate-y-0 opacity-100 ${itemDelays[index]}`
                    : "translate-y-12 opacity-0 delay-0"
                }`}
              >
                <Link
                  href={link.href}
                  title={link.title}
                  onClick={handleNavigationClick}
                  tabIndex={open ? undefined : -1}
                  className={`group flex items-center justify-between py-3 uppercase  transition-[color,padding] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red md:py-4 lg:px-2 lg:py-3 lg:hover:px-5 xl:py-4 ${
                    isActive(link.href)
                      ? "text-red"
                      : "text-white hover:text-red"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  <span className="text-[clamp(2rem,9vw,4.5rem)] font-bold leading-[0.92]  lg:text-[clamp(2.5rem,4.5vw,2.8rem)] fxl:text-[clamp(2.5rem,4.5vw,5rem)]">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-3 md:gap-5">
                    <span className="text-[10px] font-bold tracking-wider text-red lg:text-xs">
                      0{index + 1}
                    </span>
                    <Icon
                      icon="prime:arrow-up-right"
                      aria-hidden="true"
                      className="w-5 h-5 transition-transform duration-300 shrink-0 text-red group-hover:-translate-y-1 group-hover:translate-x-1 md:h-7 md:w-7 lg:h-8 lg:w-8"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`relative z-10 transition-[transform,opacity] duration-700 ${
              open
                ? "translate-y-0 opacity-100 delay-[530ms]"
                : "translate-y-8 opacity-0 delay-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 pt-5 mt-6 border-t border-white/20 md:grid-cols-2 lg:mt-8 lg:pt-6">
              <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-x-5">
                <div className="pb-4 border-b border-white/20 md:border-0 md:pb-0">
                  <SiteSearch
                    menuOpen={open}
                    onNavigate={handleNavigationClick}
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="hidden w-px h-5 bg-white/20 md:block"
                />
                <div className="flex items-center gap-4 md:gap-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red md:text-xs">
                    Seguimi
                  </span>
                  <span aria-hidden="true" className="w-8 h-px bg-white/30" />
                  {socials?.Elisa?.map((social) => (
                    <Link
                      href={social?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 transition-[color,transform] duration-300 hover:-translate-y-1 hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                      aria-label={social?.name}
                      title={`Seguimi anche su ${social?.name}`}
                      key={social?.name}
                      tabIndex={open ? undefined : -1}
                    >
                      <Icon
                        icon={social?.icon}
                        className="w-6 h-6 md:h-7 md:w-7"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm text-white/60 md:items-end md:text-base">
                <span>{translation?.it?.col1?.row1?.title}</span>
                <Link
                  href="https://calendly.com/arvine82/parlami-del-tuo-progetto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white capitalize hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  tabIndex={open ? undefined : -1}
                >
                  {translation?.it?.col1?.row1?.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
