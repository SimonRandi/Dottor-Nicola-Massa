import React from "react";
import { Link } from "react-router-dom";
const Logo = "/image/logo-scritta.png";
const Navigation3 = () => {
  return (
    <>
      <div className="navigation-container">
        <nav className="navbar  navbar-expand-lg">
          <div className="container-fluid ">
            <Link className="text-dark fs-3 text-decoration-none" to="/">
              <img loading="lazy" className="logo" src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-lg-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-link text-dark fs-3" to="/chi-sono">
                  Chi sono{" "}
                </Link>
                <Link className=" text-dark nav-link  fs-3" to="/trattamenti">
                  Trattamenti
                </Link>
                <Link className="nav-link text-dark fs-3" to="/corsi">
                  Corsi{" "}
                </Link>
                <Link className="nav-link text-dark fs-3" to="/domicilio">
                  Servizi a Domicilio
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation3;
