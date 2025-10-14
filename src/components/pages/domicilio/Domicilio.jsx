import React from "react";
import Navigation2 from "../../navigation/Navigation2";
import Footer from "../../footer/Footer";
import "../domicilio/Domicilio.css";
const Lettino = "/image/corsi/lettino.jpg";

const Domicilio = () => {
  return (
    <>
      <Navigation2 />
      <div className="container custom-container">
        <div className="row">
          <h2 className="text-center custom-text fw-bold mb-4">
            SERVIZI A DOMICILIO
          </h2>
          <div className="col-12">
            <video
              src="/image/Video Domicilio Finito.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-100 rounded video-custom d-md-none"
            ></video>
          </div>
        </div>
        <div className="col-12 col-md-6 w-100 text-center">
          <p className="text-center text-lettino">
            Hai bisogno di un trattamento ma non vuoi affrontare il traffico?{" "}
            <br />
            Nessun problema , vengo io a casa tua.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className=" rounded img-fluid  img-custom"
              src={Lettino}
              alt=""
              loading="lazy"
            />{" "}
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Domicilio;
