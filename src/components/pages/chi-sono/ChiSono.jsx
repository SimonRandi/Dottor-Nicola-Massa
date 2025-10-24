import React from "react";
const DottorNicola = "/image/dottor-nicola.webp";
import "../../pages/chi-sono/ChiSono.css";
import Footer from "../../footer/Footer";
import Navigation2 from "../../navigation/Navigation2";

const ChiSono = () => {
  return (
    <>
      <Navigation2 />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div>
              <img className="doctor-image" src={DottorNicola} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 py-5 ">
            <div className="d-flex flex-column justify-content-center">
              <h5 className=" mt-4 font  mb-2 ">CHI SONO</h5>
              <h1 className=" font-heading">
                NICOLA <br /> MASSA
              </h1>
              <p className="   mt-3">
                Sono un Chinesiologo - Massoterapista. <br />
                Nato e vissuto a Nuoro, trasferito per studi prima nelle Marche
                e successivamente in Lombardia, ho deciso di fare ritorno nella
                mia Isola per aprire uno studio professionale.{" "}
              </p>
              <div className="vertical-divider"></div>

              <h3 className="   mt-4 ">QUALIFICHE:</h3>
              <p className="  mt-4 ">
                Ho conseguito la{" "}
                <span className="fw-bold text-dark">
                  {" "}
                  Laurea Triennale in Scienze Motorie, Sportive e della Salute
                </span>{" "}
                presso l'Università Carlo Bo di Urbino nel 2019. <br />
              </p>
              <p className="  mt-4">
                Nel 2021 ho conseguito la{" "}
                <span className="fw-bold text-dark">
                  Laurea Magistrale in Scienze e Tecniche delle Attività Motorie
                  Preventive e Adatte
                </span>{" "}
                presso l'Università degli Studi di Pavia.
              </p>
              <p className="  mt-4 ">
                Per ampliare ulteriormente le mie conoscenze nell'ambito del
                fitness e del benessere, nel 2022 ho ottenuto il{" "}
                <span className="fw-bold text-dark">
                  Diploma di MCB (Massoterapista)
                </span>{" "}
                presso la scuola di specializzazione Essence Academy di Milano.
              </p>
              <div className="vertical-divider"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChiSono;
