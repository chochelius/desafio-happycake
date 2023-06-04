//footer component with background danger color and text white with a logo and a link to the contacto page
//
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
    return (
        // footer at the bottom of the page position fixed that only shows a logo and a link to the contacto page in the same line and the same color as the navbar
        <footer className="bg-danger footer text-white text-center fixed-bottom w-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to="/contacto" className="text-white text-decoration-none mx-auto text-responsive-lg">
                            <img src="../assets/1.png" alt="logo" className="img-fluid logo border-black mx-3 logo-img" />Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </footer>


        );
    }

export default Footer;
