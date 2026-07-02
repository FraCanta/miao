import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const pageLabels = {
  "/": "Home",
  "/chi-sono": "Chi sono",
  "/servizi": "Servizi",
  "/portfolio": "Portfolio",
  "/blog": "Blog",
  "/contatti": "Contattami",
};

const serviceLabels = {
  logo: "Logo Design",
  branding: "Branding Strategy",
  label: "Label & Packaging",
  social: "Social Media Strategy",
  campagne: "Offline Campaigns",
  allestimenti: "Allestimenti",
  illustrazione: "Illustrazioni",
  content: "Content Creator",
};

const normalizePathname = (pathname) =>
  pathname.replace(/^\/it(?=\/|$)/, "") || "/";

const humanizeSlug = (slug = "") =>
  decodeURIComponent(slug)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const cleanLabel = (label = "") =>
  label
    .replace(/\s+/g, " ")
    .replace(
      /^(guarda il progetto|scopri il servizio|leggi l['’]articolo|progetto precedente|progetto successivo)\s*:?\s*/i,
      "",
    )
    .trim();

const getPageLabel = (anchor, url) => {
  const pathname = normalizePathname(url.pathname);

  if (pageLabels[pathname]) return pageLabels[pathname];
  if (pathname.startsWith("/blog/") || pathname.startsWith("/posts/")) {
    return "Blog";
  }

  const heading = anchor.querySelector("h1, h2, h3, h4, h5, h6");
  const explicitLabel = anchor.dataset.transitionLabel;
  const accessibleLabel = anchor.getAttribute("aria-label");
  const title = anchor.getAttribute("title");
  const visibleHeading = cleanLabel(heading?.textContent);

  if (explicitLabel) return cleanLabel(explicitLabel);
  if (visibleHeading) return visibleHeading;

  if (pathname.startsWith("/servizi/")) {
    const slug = pathname.split("/").filter(Boolean).at(-1);
    return serviceLabels[slug] || cleanLabel(title) || humanizeSlug(slug);
  }

  const attributeLabel = cleanLabel(accessibleLabel) || cleanLabel(title);
  if (attributeLabel) return attributeLabel;

  const slug = pathname.split("/").filter(Boolean).at(-1);
  return humanizeSlug(slug) || "MIAO graphics";
};

const PageTransition = () => {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [transition, setTransition] = useState(null);
  const stageRef = useRef("idle");
  const targetRef = useRef("");

  const finishTransition = () => {
    stageRef.current = "idle";
    targetRef.current = "";
    document.documentElement.classList.remove("page-transition-active");
    setTransition(null);
  };

  useEffect(() => {
    if (reduceMotion) return undefined;

    const handleDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        stageRef.current !== "idle"
      ) {
        return;
      }

      const clickTarget =
        event.target instanceof Element
          ? event.target
          : event.target?.parentElement;
      const anchor = clickTarget?.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.hasAttribute("download") ||
        (anchor.target && anchor.target !== "_self") ||
        anchor.dataset.noPageTransition === "true"
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;

      const currentLocation = `${window.location.pathname}${window.location.search}`;
      const targetLocation = `${url.pathname}${url.search}`;
      if (currentLocation === targetLocation) return;

      event.preventDefault();

      const target = `${url.pathname}${url.search}`;
      stageRef.current = "entering";
      targetRef.current = target;
      document.documentElement.classList.add("page-transition-active");
      setTransition({
        key: `${target}-${Date.now()}`,
        label: getPageLabel(anchor, url),
        stage: "entering",
      });
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () =>
      document.removeEventListener("click", handleDocumentClick, true);
  }, [reduceMotion]);

  useEffect(() => {
    const revealNewPage = () => {
      if (stageRef.current !== "loading") return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          stageRef.current = "exiting";
          setTransition((current) =>
            current ? { ...current, stage: "exiting" } : current,
          );
        });
      });
    };

    const handleRouteError = () => {
      if (stageRef.current === "idle") return;
      stageRef.current = "exiting";
      setTransition((current) =>
        current ? { ...current, stage: "exiting" } : current,
      );
    };

    router.events.on("routeChangeComplete", revealNewPage);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      router.events.off("routeChangeComplete", revealNewPage);
      router.events.off("routeChangeError", handleRouteError);
      document.documentElement.classList.remove("page-transition-active");
    };
  }, [router.events]);

  const handleOverlayAnimationComplete = () => {
    if (stageRef.current === "entering") {
      stageRef.current = "loading";
      setTransition((current) =>
        current ? { ...current, stage: "loading" } : current,
      );

      router.push(targetRef.current).catch(() => {
        stageRef.current = "exiting";
        setTransition((current) =>
          current ? { ...current, stage: "exiting" } : current,
        );
      });
      return;
    }

    if (stageRef.current === "exiting") {
      finishTransition();
    }
  };

  return (
    <AnimatePresence>
      {transition && (
        <motion.div
          key={transition.key}
          role="status"
          aria-live="polite"
          aria-label={`Apertura pagina ${transition.label}`}
          className="fixed inset-0 z-[3000000] flex items-center justify-center overflow-hidden bg-white text-main"
          initial={{ x: "-100%" }}
          animate={{ x: transition.stage === "exiting" ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={handleOverlayAnimationComplete}
        >
          <div className="flex max-w-[88vw] items-center justify-center gap-4 md:gap-7">
            <motion.span
              aria-hidden="true"
              className="origin-center font-serif text-[4rem] font-light leading-[0.9] text-red md:text-[11rem] lg:text-[8rem] "
              initial={{ opacity: 0, scaleY: 0.45, x: -18 }}
              animate={{
                opacity: transition.stage === "exiting" ? 0 : 1,
                scaleY: transition.stage === "exiting" ? 0.7 : 1,
                x: transition.stage === "exiting" ? 12 : 0,
              }}
              transition={{ duration: 0.42, delay: 0.16, ease: "easeOut" }}
            >
              {"{"}
            </motion.span>
            <div className="overflow-hidden py-3">
              <motion.p
                className="max-w-[70vw] text-balance text-center text-[clamp(2.2rem,8vw,6rem)] font-extrabold leading-[1] text-main"
                initial={{ opacity: 0, y: 55 }}
                animate={{
                  opacity: transition.stage === "exiting" ? 0 : 1,
                  y: transition.stage === "exiting" ? -35 : 0,
                }}
                transition={{ duration: 0.42, delay: 0.22, ease: "easeOut" }}
              >
                {transition.label}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
