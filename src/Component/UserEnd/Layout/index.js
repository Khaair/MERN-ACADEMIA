import React from "react";
import Footer from "./footer/index";
import Menu from "./menu";
import TopHeader from "./top-header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <TopHeader />
      <Menu />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
