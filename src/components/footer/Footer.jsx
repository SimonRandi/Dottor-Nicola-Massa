import React from "react";
import "../footer/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container mt-4">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-light">
            <h4 className="fw-bold mb-3">Contatti</h4>

            <p className="mb-1">
              <strong>Nicola Massa</strong> <br />
              Specialista in tecniche di Massoterapia Sanitaria M.C.B.
            </p>

            <p className="mb-1">
              <MapPin /> Via Sardegna - 08020 San Toeodoro
            </p>

            <p className="mb-1">
              <a
                href="mailto:schintuantonio.mcb@gmail.com"
                className="text-light text-decoration-none"
              >
                {" "}
                <Mail /> nicola.massa001@gmail.com
              </a>
              <br />
              <Phone /> Tel: +39 379 1089847
            </p>

            <div className="social-icons ">
              <FaInstagram size={22} />
              <span className="ms-2">nicolamassa_massoterapista</span>
            </div>

            <div className="">
              <p className="mb-1">Riceve per appuntamento:</p>
              <ul className="ps-3 mb-0">
                <li>Nuoro - via Milano 38 (Studio SC Dental)</li>
                <li>
                  San Teodoro - Viale Sardegna presso centro Commerciale Gambaru
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
