import React from "react";
const NotFound = "/image/logo-scritta.png";
import "../not-found-page/NotFoundPage.css";
import Navigation2 from "../../navigation/Navigation2";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Homepage from "../Homepage";

const NotFoundPage = () => {
  return (
    <>
      <Navigation2 />
      <div className="d-flex flex-column align-items-center">
        <img className="not-found-logo" src={NotFound} alt="" />
        <h1 className="not-found-heading"> OOPS PAGINA NON TROVATA!</h1>
        <button className="redirect-btn">
          <Link className="text-decoration-none text-dark" to={"/"}>
            {" "}
            TORNA ALLA HOME
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
