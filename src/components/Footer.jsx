//footer component with background danger color and text white with a logo and a link to the contacto page
//
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
    return (
        // footer at the bottom of the page position fixed that only shows a logo and a link to the contacto page in the same line and the same color as the navbar
        <footer className="footer bg-danger text-white text-center lead fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to="/contacto" className="text-white text-decoration-none mx-auto">
                            <img src="../assets/1.png" alt="logo" className="img-fluid" />Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </footer>


        );
    }

export default Footer;
