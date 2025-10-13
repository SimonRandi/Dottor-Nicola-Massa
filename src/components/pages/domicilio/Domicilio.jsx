import React from "react";
import Navigation2 from "../../navigation/Navigation2";
import Footer from "../../footer/Footer";
import "../domicilio/Domicilio.css";
import Lettino from "../../../image/corsi/lettino.jpg";

const Domicilio = () => {
  return (
    <>
      <Navigation2 />
      <div className="container custom-container">
        <div className="row">
          <h2 className="text-center mb-4">SERVIZI A DOMICILIO</h2>
          <div className="col-12 col-md-6">
            <img
              className=" rounded img-fluid  img-custom"
              src={Lettino}
              alt=""
            />{" "}
          </div>
          <div className="col-12 col-md-6">
            <p className="text-center text-lettino">
              Hai bisogno di un trattamento ma non vuoi affrontare il traffico?{" "}
              <br />
              Nessun problema , vengo io a casa tua.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Domicilio;
