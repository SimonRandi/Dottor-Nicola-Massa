import React from "react";
import "../trattamenti/Trattamenti.css";
const Trattamento1 = "/image/Trattamento1.webp";
const Trattamento2 = "/image/Trattamento2.webp";
const Trattamento3 = "/image/Trattamento3.webp";
const Trattamento4 = "/image/Trattamento4.webp";
const Trattamento5 = "/image/Trattamento5.webp";
const Trattamento6 = "/image/Trattamento6.webp";

import Navigation3 from "../../navigation/Navigation3";
import Footer from "../../footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Trattamenti = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    const observer = new MutationObserver(() => {
      scrollToSection();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // fallback: tenta anche dopo 500ms
    const timeout = setTimeout(scrollToSection, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location]);
  return (
    <>
      <Navigation3 />
      <div className="container-custom">
        <div className="container">
          <div className="row">
            <h3 className="font-heading-treatment text-center">TRATTAMENTI</h3>
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex justify-content-center mt-4 order-1 order-md-1"
            >
              <section id="massaggio-decontratturante">
                <img
                  className="img-fluid treatment-img"
                  src={Trattamento1}
                  alt="Massaggio Decontratturante"
                  loading="lazy"
                />
              </section>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-2"
            >
              <h2 className="font-heading-treatment text-center mt-4">
                MASSAGGIO DECONTRATTURANTE
              </h2>
              <p className="text-black text-font text-center">
                Questo tipo di trattamento ha lo scopo di rilassare e distendere
                la muscolatura, sciogliendo le contratture e riducendo tensioni
                muscolari. Allevia il dolore localizzato, permettendo di
                raggiungere una condizione di benessere fisico. È adatto a chi
                soffre di dolori muscolo-scheletrici o problemi posturali.
              </p>
            </div>
          </div>
          <div className="vertical-divider"></div>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-1"
            >
              <h2 className="font-heading-treatment text-center mt-4">
                Massaggio Rilassante Svedese
              </h2>

              <p className="text-black text-font text-center">
                Il massaggio rilassante svedese si focalizza sulla riduzione
                dello stress e sulla promozione del rilassamento attraverso
                movimenti fluidi e pressioni leggere o moderate.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex justify-content-center mt-4 order-1 order-md-2"
            >
              <section id="massaggio-rilassante">
                <img
                  className="img-fluid treatment-img"
                  src={Trattamento2}
                  alt="Massaggio Rilassante"
                  loading="lazy"
                />
              </section>
            </div>
          </div>

          <div className="text-center  ">
            <button
              className="btn custom-btn"
              onClick={() => {
                const footer = document.getElementById("footer");
                footer.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contattami
            </button>
          </div>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex justify-content-center mt-4 order-1 order-md-1"
            >
              <section id="massaggio-linfodrenante">
                <img
                  className="img-fluid treatment-img"
                  src={Trattamento3}
                  alt="Massaggio Linfodrenante"
                  loading="lazy"
                />
              </section>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-2"
            >
              <h2 className="font-heading-treatment text-center mt-4">
                Massaggio Linfodrenante
              </h2>
              <p className="text-black text-font text-center">
                Trattamento con manualità leggere e superficiali <br /> che
                favorisce il drenaggio linfatico, aiutando l’eliminazione di
                tossine. Indicato per ritenzione idrica, edemi e cicatrici.
              </p>
            </div>
          </div>
          <div className="vertical-divider"></div>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-1"
            >
              <h2 className="font-heading-treatment text-center mt-4">
                Massaggio Sportivo
              </h2>
              <p className="text-black text-font text-center">
                Ideale per atleti e sportivi, aiuta a prevenire infortuni, a
                preparare i muscoli all’attività e a favorire il recupero
                post-allenamento, con attenzione mirata alle zone più
                sollecitate.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex justify-content-center mt-4 order-1 order-md-2"
            >
              <section id="massaggio-sportivo">
                <img
                  className="img-fluid treatment-img"
                  src={Trattamento4}
                  alt="Massaggio Sportivo"
                  loading="lazy"
                />
              </section>
            </div>
          </div>
          <div className="vertical-divider"></div>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex justify-content-center mt-4 order-1 order-md-1"
            >
              <section id="trattamento-cervicale">
                <img
                  className="img-fluid treatment-img"
                  src={Trattamento5}
                  alt="Trattamento Cervicale"
                  loading="lazy"
                />
              </section>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-2"
            >
              <h2 className="font-heading-treatment text-center mt-4">
                Trattamento Cervicale
              </h2>
              <p className="text-black text-font text-center">
                Un trattamento mirato alla zona del collo, spalle e parte
                superiore della schiena per alleviare tensioni muscolari,
                rigidità e dolori legati a posture scorrette o stress.
                Attraverso manovre delicate ma profonde, favorisce il
                rilassamento, migliora la circolazione e restituisce libertà di
                movimento e benessere generale.
              </p>
            </div>
          </div>
          <div className="vertical-divider"></div>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center order-2 order-md-1"
            >
              <h2 className="font-heading-treatment text-center mt-4">
                Massoterapia
              </h2>
              <p className="text-black text-font text-center">
                Trattamento di terapia manuale eseguito in presenza di
                patologie, praticabile solo sotto prescrizione medica.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex justify-content-center mt-4 order-1 order-md-2"
            >
              <section id="massoterapia">
                <img
                  className="img-fluid treatment-img"
                  src={Trattamento6}
                  alt="Massoterapia"
                  loading="lazy"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trattamenti;
