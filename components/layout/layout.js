import React from "react";
import Footer from "./footer";
import Menu from "./menu";
import LayoutTranslation from "../../public/locales/layout.json";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const noLayoutPages = ["/welcome"];
  const showLayout = !noLayoutPages.includes(router.pathname);

  React.useEffect(() => {
    const navbar = navbarRef.current;
    if (typeof window !== "undefined" && navbar && showLayout) {
      const handleScroll = () => {
        if (window.pageYOffset > 100) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      };

      // Aggiunge l'evento di scroll solo se la pagina non è "/welcome"
      handleScroll(); // Chiamata iniziale per settare lo stato della navbar
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [navbarRef, router.pathname, showLayout]);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          success: {
            iconTheme: {
              primary: "#39373c",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#de4928",
              secondary: "black",
            },
          },
        }}
      />
      {showLayout && (
        <Menu
          nr={navbarRef}
          lr={logoRef}
          translation={LayoutTranslation?.menu}
        />
      )}
      <main>{props.children}</main>
      {showLayout && <Footer translation={LayoutTranslation?.footer} />}
    </>
  );
};

export default Layout;
