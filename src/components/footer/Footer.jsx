import React from "react";
import "../footer/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
const Logo = "/image/logo-bianco.png";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container mt-4">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6   text-light">
            <h4 className="fw-bold mb-3">Contatti</h4>
            <p className="mb-1">
              <strong>Nicola Massa</strong> <br />
              Specialista in tecniche di Massoterapia Sanitaria M.C.B.
            </p>
            <div className="footer-divider"></div>
            <p className="mb-2">
              <MapPin />{" "}
              <span className="ms-1 telephone-number">
                {" "}
                Via Sardegna - 08020 San Toeodoro
              </span>
            </p>
            <p className="mb-2">
              <a
                href="mailto:schintuantonio.mcb@gmail.com"
                className="text-light text-decoration-none"
              >
                {" "}
                <Mail /> <span className="ms-1">nicola.massa001@gmail.com</span>
              </a>
            </p>
            <p className="mb-2">
              <Phone /> Tel:
              <span className=" telephone-number ms-1">+39 379 1089847</span>
            </p>
            <div className="social-icons ">
              <FaInstagram size={24} />
              <span className="ms-2">nicolamassa_massoterapista</span>
            </div>
            <div className="footer-divider"></div>
            <div className="">
              <p className="mb-1">Riceve per appuntamento:</p>
              <ul className="ps-3 mb-0">
                <li className="mb-2">
                  San Teodoro - Viale Sardegna presso centro Commerciale Gambaru
                </li>
                <li>
                  Nuoro - via Milano{" "}
                  <span className="telephone-number"> 38 </span>(Studio SC
                  Dental)
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center"></div>
            <img className="footer-logo bounce" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
