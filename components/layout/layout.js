import React from "react";
import Menu from "./menu";
import LayoutTranslation from "../../public/layout.json";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <>
      <Menu translation={LayoutTranslation?.menu} />
      <main>{props.children}</main>
      <Footer translation={LayoutTranslation?.footer} />
    </>
  );
};

export default Layout;
