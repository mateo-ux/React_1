import React from "react";
import './styleEncabezados.css';


const Inicio = () =>{
        return (
            <header className="header" >
            <a href="Encabezado.jsx" className="logo">Mateo Salgado <span>STORE</span></a>
            <nav className="navbar">
                <a href="#" className="nav-link">Inicio</a>
                <a href="#" className="nav-link">Contacto</a>
            </nav>
            </header>
        );
        };
export default Inicio;