import React from "react";
import "./Contacto.css"

// Componente Contacto que muestra un formulario de contacto
const Contacto = () => {
    return (
        <div className="row">
            <div className="col-12 justify-content-center">
                {/* Título */}
                <p className="fs-4 text-center mt-5">
                    Contacto
                    {/* Imagen del logo 2 que solo es visible en dispositivos mayores a pequeños */}
                    <img src="../assets/2.png" alt="logo" className="img-main m-auto d-none d-sm-block " />
                </p>
                {/* Contenedor centrado que contiene un formulario de contacto en español */}
                <div className="mx-auto container-fluid border-black">
                    <form className="mx-auto w-75 mt-1 mb-5 text-black">
                        {/* Campo de correo electrónico */}
                        <input type="email" placeholder="Correo" className="form-control mt-1 form-text" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text ms-2"><p className="fs-5 text-dark-emphasis">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </p></div>
                        {/* Campo de nombre */}
                        <input type="text" placeholder="Nombre" className="form-control mt-1" id="nombreCliente" aria-describedby="nombreCliente" />
                        {/* Campo de teléfono */}
                        <input type="text" placeholder="Teléfono" className="form-control mt-1" id="telefonoCliente" aria-describedby="telefonoCliente" />
                        {/* Campo de mensaje */}
                        <textarea className="form-control mt-1" id="mensajeCliente" rows="3" placeholder="Puedes cotizar o preguntar lo que quieras aquí"></textarea>
                        {/* Botón para enviar el formulario */}
                        <button type="submit" className="btn btn-sm btn-primary mt-2 align-self-end">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;