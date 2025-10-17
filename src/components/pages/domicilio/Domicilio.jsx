import React from "react";
import Navigation2 from "../../navigation/Navigation2";
import Footer from "../../footer/Footer";
import "../domicilio/Domicilio.css";
const Lettino = "/image/corsi/lettino.jpg";
import { useNavigate } from "react-router-dom";
const Domicilio = () => {
  const navigate = useNavigate();
  const goToSection = (sectionId) => {
    navigate(`/trattamenti#${sectionId}`);
  };
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
              className="w-100 rounded video-custom"
            ></video>
          </div>

          <div className="col-12   text-center py-3">
            <div className="text-center mb-4">
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
            <div className="custom-divider d-md-none"></div>
            <p className="text-center text-lettino">
              Goditi un momento di relax o svolgi la tua attività fisica
              direttamente a casa tua.
            </p>
            <h5 className="text-center mt-3">Trattamenti Disponibili</h5>
            <div className="d-flex justify-content-center mt-4">
              <ul className="list-unstyled lh-3 lista-servizi ">
                <li onClick={() => goToSection("massoterapia")}>
                  Trattamento Terapeutico
                </li>
                <li onClick={() => goToSection("massaggio-decontratturante")}>
                  Massaggio Decontratturante
                </li>
                <li onClick={() => goToSection("massaggio-sportivo")}>
                  Massaggio Sportivo
                </li>
                <li onClick={() => goToSection("massaggio-drenante")}>
                  Massaggio Drenante
                </li>
                <li onClick={() => goToSection("massaggio-rilassante")}>
                  Massaggio Rilassante
                </li>
                <li>Personal Training</li>
              </ul>
            </div>
            <div className="custom-divider mt-5 d-md-none"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Domicilio;
