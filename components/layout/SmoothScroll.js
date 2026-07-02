import Lenis from "lenis";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SmoothScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
      wheelMultiplier: 0.9,
      stopInertiaOnNavigate: true,
    });

    window.__miaoLenis = lenis;

    let shouldResetScroll = false;

    const handleRouteStart = (url, { shallow }) => {
      shouldResetScroll = !shallow && !url.includes("#");

      if (shouldResetScroll) {
        lenis.stop();
      }
    };

    const handleRouteComplete = () => {
      lenis.resize();

      if (shouldResetScroll) {
        const html = document.documentElement;
        const previousScrollBehavior = html.style.scrollBehavior;

        html.style.scrollBehavior = "auto";
        lenis.scrollTo(0, { immediate: true, force: true });
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        html.style.scrollBehavior = previousScrollBehavior;
        lenis.start();
      }

      shouldResetScroll = false;
    };

    const handleRouteError = () => {
      shouldResetScroll = false;
      lenis.start();
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
      delete window.__miaoLenis;
      lenis.destroy();
    };
  }, [router.events]);

  return null;
};

export default SmoothScroll;
