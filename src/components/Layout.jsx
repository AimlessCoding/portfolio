import React from "react";
import { SSRProvider } from "react-bootstrap";
import "../style/global.scss";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <NavBar />
      <main>{children}</main>
    </SSRProvider>
  );
};

export default Layout;
