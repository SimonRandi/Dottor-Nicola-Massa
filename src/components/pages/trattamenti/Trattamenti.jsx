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
import { Diamond } from "lucide-react";

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
                Massaggio Decontratturante
              </h2>
              <p className="text-black text-font text-center">
                <span className="fw-bold text-dark">Trattamento</span> che
                impiega{" "}
                <span className="fw-bold text-dark">
                  tecniche manuali profonde
                </span>{" "}
                mirate a eliminare le tensioni muscolari localizzate e a{" "}
                <span className="fw-bold text-dark">
                  risolvere le contratture
                </span>
                . Agendo in profondità, migliora la{" "}
                <span className="fw-bold text-dark">circolazione</span> e l'
                <span className="fw-bold text-dark">ossigenazione</span> dei
                tessuti, accelerando il{" "}
                <span className="fw-bold text-dark">recupero funzionale</span>.
                L’obiettivo è{" "}
                <span className="fw-bold text-dark">
                  ristabilire il tono muscolare ottimale
                </span>
                , alleviare il dolore e{" "}
                <span className="fw-bold text-dark">
                  incrementare la mobilità
                </span>
                , contribuendo al benessere generale e alla prevenzione delle
                recidive.
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
                Il{" "}
                <span className="fw-bold text-dark">
                  Massaggio Rilassante Svedese
                </span>{" "}
                è ideale per{" "}
                <span className="fw-bold text-dark">
                  promuovere un benessere psicofisico ottimale.
                </span>{" "}
                Utilizza manovre fluide e avvolgenti con pressione da leggera a
                moderata per favorire il{" "}
                <span className="fw-bold text-dark">rilassamento mentale</span>,
                la{" "}
                <span className="fw-bold">
                  distensione muscolare superficiale
                </span>{" "}
                e un{" "}
                <span className="fw-bold">
                  sensibile miglioramento del sonno.
                </span>{" "}
                E' <span className="fw-bold">indicato</span> per contrastare{" "}
                <span className="fw-bold">stress</span>,{" "}
                <span className="fw-bold">ansia leggera</span> e{" "}
                <span className="fw-bold">insonnia</span>, donando una{" "}
                <span className="fw-bold">
                  sensazione di leggerezza immediata.
                </span>
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
              <section id="massaggio-drenante">
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
                Il <span className="fw-bold">Massaggio Linfodrenante</span> è un{" "}
                <span className="fw-bold">trattamento</span> che , attraverso{" "}
                <span className="fw-bold">
                  manualità ritmiche, leggere e superficiali, stimola il sistema
                  linfatico.{" "}
                </span>{" "}
                Il suo scopo principale è quello di facilitare il{" "}
                <span className="fw-bold">
                  drenaggio dei liquidi in eccesso
                </span>{" "}
                e favorire l'{" "}
                <span className="fw-bold">
                  eliminazionedi tossine e cataboliti.
                </span>{" "}
                E' fortemente <span className="fw-bold">indicato</span> per
                contrastare{" "}
                <span className="fw-bold">ritenzione idrica,edemi </span> e come
                supporto nel trattamento di{" "}
                <span className="fw-bold">cicatrici</span> e{" "}
                <span className="fw-bold">inestetismi della cellulite</span>.{" "}
                <br />I principali <span className="fw-bold">benefici</span>{" "}
                includono la riduzione del senso di pesantezza, una visibile
                diminuzione del gonfiore e un notevole miglioramento delle
                funzionalità circolatoria e del tono cutaneo.
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
                Il <span className="fw-bold">Massaggio Sportivo</span> è un{" "}
                <span className="fw-bold">trattamento profondo e vigoroso</span>{" "}
                che agisce sulle masse muscolari sottoposte a sforzo intenso per{" "}
                <span className="fw-bold">
                  ottimizzare la performance e accellerare il recupero
                </span>
                . E'{" "}
                <span className="fw-bold">ideale per atleti e sportivi</span> e
                si modula in tre momenti:{" "}
                <span className="fw-bold">pre-gara </span>(attiva il muscolo e
                lo prepara allo sforzo),{" "}
                <span className="fw-bold">post-gara</span> (defaticante), o come{" "}
                <span className="fw-bold">prevenzione</span> per ridurre il
                rischio di infortuni. I principali{" "}
                <span className="fw-bold">benefici</span> includono un{" "}
                <span className="fw-bold">recupero muscolare più rapido</span>,
                il{" "}
                <span className="fw-bold">miglioramento dell'elasticità</span> e
                una{" "}
                <span className="fw-bold">
                  significativa riduzione delle tensione e contratture
                  localizzate .
                </span>
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
                Il <span className="fw-bold">Trattamento Cervicale</span> è una{" "}
                <span className="fw-bold">terapia manuale</span> che si
                concentra su{" "}
                <span className="fw-bold">collo , spalle e schiena alta</span>.
                Utilizza{" "}
                <span className="fw-bold">manovre profonde e controllate</span>{" "}
                per eliminare rigidità e tensioni legate a stress o posture
                scorrette. E' <span className="fw-bold">indicato </span> per chi
                soffre di{" "}
                <span className="fw-bold">
                  dolore cervicale , torcicollo ,rigidità
                </span>{" "}
                e <span className="fw-bold">cefalee tensive</span>. I principali{" "}
                <span className="fw-bold">benefici</span> includono{" "}
                <span className="fw-bold">
                  l'alleviamento rapido del dolore{" "}
                </span>{" "}
                e una netta <span className="fw-bold">libertà </span> e{" "}
                <span className="fw-bold">ampiezza di movimento</span> della
                testa e del collo.
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
                La <span className="fw-bold">Massoterapia</span> è un{" "}
                <span className="fw-bold">trattamento di terapia manuale</span>{" "}
                a finalità esclusivamente{" "}
                <span className="fw-bold">terapeutica</span>, mirata alla
                gestione e{" "}
                <span className="fw-bold">
                  risoluzione di precise patologie
                </span>{" "}
                dell'aparato muscolo scheletrico. E'{" "}
                <span className="fw-bold">indicata</span> in presenza di{" "}
                <span className="fw-bold">diagnosi specifiche</span> (es.
                lombalgia, sciatalgia, tendiniti o dolori articolari) e
                nell'ambito di{" "}
                <span className="fw-bold">percorsi riabilitativi</span>I
                principali <span className="fw-bold">benefici</span> includono
                la{" "}
                <span className="fw-bold">
                  riduzione del dolore, il miglioramento del tono muscolare{" "}
                </span>{" "}
                e{" "}
                <span className="fw-bold">
                  l'accelerazione del recupero funzionale
                </span>
                . <br />
                <Diamond /> <span className="fw-bold">Nota importante:</span> In
                obtemperanza alle normative vigenti, il trattamento di
                Massoterapia a fini curativi è{" "}
                <span className="fw-bold">
                  praticabile solo sotto prescrizione o indicazione medica
                </span>
                .
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
