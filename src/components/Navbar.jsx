//react navbar component that is used in the header of the website with react router links to the different pages that are inicio y contacto

import React from "react";
import { Link } from "react-router-dom";
//bootstrap is installed as npm bootstrap and imported here
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

//navbar component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-danger">
      <div className="container-fluid">
        <p className="navbar-brand text-white align-items-center">
        {/* only show logo on small devices */}
          <img src="../assets/1.png" alt="logo" className="vh-5 m-auto d-sm-none logo-img" /> Happy
          Cakes
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* button burger icon */}
          <span className="navbar-toggler-icon "></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav space-between">
          <Link to="/" className="nav-link text-white" aria-current="page">
            Inicio
          </Link>
          <Link to="/contacto" className="nav-link text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
