import React from "react";
import logo from "../../assets/sup-porto.jpg";
import Carrito from "./Carrito";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} alt="SUP PORTO" width="90"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            <a className="nav-link" href="/">Paquetes</a>
                            <a className="nav-link" href="/">Contacto</a>
                            <a className="nav-link" href="/"><Carrito /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;