import React from "react";
import './styleEncabezados.css';
import { Link } from "react-router-dom";



const Inicio = () =>{
        return (
            <header className="header" >
            <Link to="/" className="logo">Mateo Salgado <span>STORE</span></Link>
            <nav className="navbar">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="" className="nav-link">Contacto</Link>
            </nav>
            
            </header>
        );
        };
export default Inicio;