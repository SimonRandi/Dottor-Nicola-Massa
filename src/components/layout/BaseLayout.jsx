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
        <div className="d-flex align-items-center  justify-content-center">
          <h1 className="front-page-heading">
            NICOLA <br /> MASSA <br />{" "}
            <p className="profession-title">
              MASSOTERAPISTA <br /> CHINESIOLOGO{" "}
            </p>
          </h1>
        </div>
        <Headers />
      </div>

      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
