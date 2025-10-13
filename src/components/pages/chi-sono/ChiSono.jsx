import React from "react";
import DottorNicola from "../../../image/dottor-nicola.jpg";
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
              <h5 className=" mt-4  font mb-2 ">CHI SONO</h5>
              <h1 className=" font-heading">
                NICOLA <br /> MASSA
              </h1>
              <p className=" font  mt-3">
                Sono un Chinesiologo - Massoterapista. <br />
                Sono nato a Nuoro ma mi sono trasferito per studio prima nelle
                marche e poi in Lombardia, ho deciso di fare ritorno nella mia
                isola per aprire uno studio professionale{" "}
              </p>
              <div className="vertical-divider"></div>

              <h3 className="  font mt-4 ">Qualifiche:</h3>
              <p className=" font mt-4 ">
                Ho conseguito la{" "}
                <small className="fw-bold text-dark">
                  {" "}
                  Laurea Triennale in Scienze Motorie, Sportive e della Salute
                </small>{" "}
                presso l'Università Carlo Bo di Urbino nel 2019. <br />
              </p>
              <p className=" font mt-4">
                Nel 2021 ho conseguito la{" "}
                <small className="fw-bold text-dark">
                  Laurea Magistrale in Scienze e Tecniche delle Attività Motorie
                  Preventive e Adatte
                </small>{" "}
                presso l'Università degli Studi di Pavia
              </p>
              <p className=" font mt-4 ">
                Per ampliare ulteriormente le mie conoscenze nell'ambito del
                fitness e del benessere, nel 2022 ho ottenuto il{" "}
                <small className="fw-bold text-dark">
                  Diploma di MCB (Massoterapista)
                </small>{" "}
                presso la scuola di specializzazione Essence Academy di Milano
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
