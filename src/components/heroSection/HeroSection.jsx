import React from "react";
import "../heroSection/HeroSection.css";
const Studio1 = "/image/studio1.jpeg";
const Studio2 = "/image/studio2.jpeg";
const Studio3 = "/image/studio3.jpeg";

const HeroSection = () => {
  return (
    <>
      <div className="container mb-3">
        <div className="row ">
          <h1 className=" text-center heading-text mt-3 mb-3">
            Benvenuti nel mio studio di Massoterapia e Chinesiologia, <br />{" "}
            dove il relax e il benessere si fondono armoniosamente.
          </h1>

          <div
            /* data-aos="flip-right" */
            className="col-12 col-md-4 d-flex flex-column"
          >
            <img
              className="studio-image img-fluid mb-2 "
              src={Studio3}
              alt=""
              loading="lazy"
            />
            <p className="text-center heading-text mb-4 ">
              Qui, nel cuore di un atmosfera accogliente e raffinata, offro un
              esperienza personalizzata e mirata alle singole esigenze.
            </p>
          </div>
          <div
            /* data-aos="flip-right" */
            className="col-12 col-md-4 d-flex flex-column "
          >
            <img
              loading="lazy"
              className="studio-image img-fluid mb-2"
              src={Studio2}
              alt=""
            />
            <p className="text-center  mb-4 heading-text">
              Scegliendo tra una vasta gamma di trattamenti, garantisco
              un'esperienza di assoluta qualità in cui ogni dettaglio è curato
              con attenzione.
            </p>
          </div>
          <div
            /* data-aos="flip-right" */
            className="col-12 col-md-4 d-flex flex-column"
          >
            <img
              loading="lazy"
              className="studio-image mb-2 img-fluid"
              src={Studio1}
              alt=""
            />
            <p className="text-center mb-4 heading-text">
              Il tuo confort e la tua soddisfazione sono <br /> la mia massima
              priorità.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
