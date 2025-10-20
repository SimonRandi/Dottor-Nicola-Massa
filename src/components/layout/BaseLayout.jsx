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
        <div className="text-center button-wrapper mb-4">
          <button
            className=" custom-btn"
            onClick={() => {
              const footer = document.getElementById("footer");
              footer.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contattami
          </button>
        </div>
        {/* <h1 className="heading-title">
          Relax. <br /> Respira. <br /> Salute.
        </h1> */}
        <Headers />
      </div>

      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
