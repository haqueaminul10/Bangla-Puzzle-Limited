import React from "react";

//IMPORT COMPONENTS
import Header from "./Header";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
