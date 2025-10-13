import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Headers from "../headers/Headers";
import "../layout/BaseLayout.css";

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="container-main">
        <Navigation />

        <Headers />
      </div>

      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
