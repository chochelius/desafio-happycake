import React from "react";

const Contacto = () => {
    return (
        <div className="row">
            <div className="col-12 justify-content-center">
                
            <p className=" fs-4 text-center">
                Contacto 
                {/* imagen del logo 2 que solo es visible en dispositivos mayores a pequeños */}
                <img src="../assets/2.png" alt="logo" className=" img-fluid m-auto d-none d-sm-block" />
            </p>
            {/* center container that holds a contact form in spanish */}
            <div className="container">
                    <form>
                    <div className="mb-3">
                        <input type="email" placeholder="Correo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                        <input type="text" placeholder="Nombre" className="form-control" id="nombreCliente" aria-describedby="nombreCliente" />
                        <input type="text" placeholder="Teléfono" className="form-control" id="telefonoCliente" aria-describedby="telefonoCliente" />
                        <textarea className="form-control" id="mensajeCliente" rows="2" placeholder="Puedes preguntar lo que quieras aquí"></textarea>
                        {/* botón para enviar el formulario*/}
                        <button type="submit" className="btn btn-sm btn-primary mt-1 align-self-end">Enviar</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );

}

export default Contacto;