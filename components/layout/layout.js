import React from "react";
import Footer from "./footer";
import Menu from "./menu";
import LayoutTranslation from "../../public/layout.json";

const Layout = (props) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 150) {
        navbar.classList.add("nav-scroll");
      } else if (!!navbar.classList) {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 200) {
          navbar.classList.add("nav-scroll");
        } else if (!!navbar) {
          navbar.classList.remove("nav-scroll");
        }
      });
    }
  }, [navbarRef]);
  const handleScroll = (refIndex) => {
    sectionsRef[refIndex].current.scrollIntoView({ behavior: "smooth" });
  };

  // console.log(LayoutTranslation?.menu);
  return (
    <>
      <Menu
        nr={navbarRef}
        lr={logoRef}
        handleScroll={handleScroll}
        translation={LayoutTranslation?.menu}
      />
      <main>{props.children}</main>
      <Footer translation={LayoutTranslation?.footer} />
    </>
  );
};

export default Layout;
