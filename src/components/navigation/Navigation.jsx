import React, { useState, useEffect } from "react";
import "../navigation/Navigation.css";
import { Link } from "react-router-dom";
import Logo from "../../image/logo-scritta.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔹 Chiude la navbar se si scrolla
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // 🔹 Gestisce il blur sul body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("blur-background");
    } else {
      document.body.classList.remove("blur-background");
    }
  }, [isOpen]);

  return (
    <div className="navigation-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="text-color fs-3 text-decoration-none" to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
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
                Chi sono
              </Link>
              <Link
                className="text-color nav-link fs-3"
                to="/trattamenti"
                onClick={() => setIsOpen(false)}
              >
                Trattamenti
              </Link>
              <Link
                className="nav-link text-white fs-3"
                to="/corsi"
                onClick={() => setIsOpen(false)}
              >
                Corsi
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
