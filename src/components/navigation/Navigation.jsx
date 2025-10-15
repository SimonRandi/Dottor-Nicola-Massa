import React, { useState, useEffect } from "react";
import "../navigation/Navigation.css";
import { Link } from "react-router-dom";
const Logo = "/image/logo-scritta.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("blur-background");
    } else {
      document.body.classList.remove("blur-background");
    }
  }, [isOpen]);

  return (
    <div className="navigation-container">
      <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid">
          <Link className="text-color fs-3 text-decoration-none" to="/">
            <img loading="lazy" className="logo" src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler custom-btn "
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse d-lg-flex justify-content-lg-center ${
              isOpen ? "show" : ""
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link text-color fs-3"
                to="/chi-sono"
                onClick={() => setIsOpen(false)}
              >
                CHI SONO
              </Link>
              <Link
                className="text-color nav-link fs-3"
                to="/trattamenti"
                onClick={() => setIsOpen(false)}
              >
                TRATTAMENTI
              </Link>
              <Link
                className="nav-link text-color fs-3"
                to="/corsi"
                onClick={() => setIsOpen(false)}
              >
                CORSI
              </Link>
              <Link
                className="nav-link text-color fs-3"
                to="/domicilio"
                onClick={() => setIsOpen(false)}
              >
                SERVIZI A DOMICILIO
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
