//this is the page routed from Inicio in the navbar
//
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inicio.css";


const Inicio = () => {
    return (
        <div className='main-content'>
            <div class="row">
                <div className='flex-column text-center'>
                    <img src="../assets/2.png" alt="logo-big" className=" img-main d-none d-sm-block mx-auto" />
                    <div className='main-responsive'>
                        <p class="responsive-text-large">Bienvenido a Happy Cakes</p>

                        <p class="responsive-text-medium">Somos una empresa dedicada a la <br /> elaboración de pasteles y postres para toda ocasión.</p>
                        <p className='responsive-text-small'>
                            Estamos ubicados en avenida siempreviva 722, <br /> Springfield, EE.UU.
                        </p>


                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.9142751166996!2d-93.28544352491416!3d37.249741342231566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf629e7ad3f35f%3A0xc7eb0fb7f8530349!2s742%20E%20Evergreen%20St%2C%20Springfield%2C%20MO%2065803%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1685826103202!5m2!1ses-419!2scl" className=''></iframe>
need this map to be aligned and justified at center 
*/}
                        <div className='row justify-content-center'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.9142751166996!2d-93.28544352491416!3d37.249741342231566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf629e7ad3f35f%3A0xc7eb0fb7f8530349!2s742%20E%20Evergreen%20St%2C%20Springfield%2C%20MO%2065803%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1685826103202!5m2!1ses-419!2scl" className='col-12 col-sm-8 col-md-6 col-lg-4 small-map' title='mapa'></iframe>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Inicio;
