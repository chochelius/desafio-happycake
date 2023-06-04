import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

// Componente de barra de navegación
const Navbar = () => {
  return (
    <>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-sm navbar-light bg-danger position-fixed w-100">
        {/* Botón para desplegar menú en dispositivos móviles */}
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
        {/* Logo de la empresa */}
        <p className="navbar-brand text-white align-items-center justify-content-center mt-3 ms-1 text-responsive-md">
          Happy Cakes
        </p>
        {/* Imagen del logo en dispositivos móviles */}
        <img src="../assets/1.png" alt="logo" className="logo-img d-sm-none me-1 d-md-block" />
        {/* Menú de navegación */}
        <div className="collapse navbar-collapse bg-danger" id="navbarNavAltMarkup">
          <div className="navbar-nav bg-danger">
            {/* Enlace a la página de inicio */}
            <Link to="/" className="nav-link text-white ms-2 text-responsive-sm" aria-current="page">
              Inicio
            </Link>
            {/* Enlace a la página de contacto */}
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
