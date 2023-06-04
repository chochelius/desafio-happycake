//react navbar component that is used in the header of the website with react router links to the different pages that are inicio y contacto

import React from "react";
import { Link } from "react-router-dom";
//bootstrap is installed as npm bootstrap and imported here
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

//navbar component

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-sm navbar-light bg-danger position-fixed w-100">

        <button
          className="navbar-toggler bg-danger border-white ms-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <p className="navbar-brand text-white align-items-center justify-content-center mt-3 ms-1 text-responsive-md">
          Happy
          Cakes
        </p>
        <img src="../assets/1.png" alt="logo" className="logo-img d-sm-none me-1 d-md-block" />
        <div className="collapse navbar-collapse bg-danger" id="navbarNavAltMarkup">
          <div className="navbar-nav bg-danger">
            <Link to="/" className="nav-link text-white ms-2 text-responsive-sm" aria-current="page">
              Inicio
            </Link>
            <Link to="/contacto" className="nav-link text-white ms-2 text-responsive-sm">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
