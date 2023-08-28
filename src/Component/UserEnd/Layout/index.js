import React from "react";
import Footer from "./footer/index";
import Menu from "./menu";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
