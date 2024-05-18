import React from "react";
import { Link } from "react-router-dom";
import './StyleBoton.css'

const Boton1 = (props) =>{
    return(
        <div>
            <button className="boton-imagen">
                <img src={props.icon} alt="" className="icono" />
                <span className="texto-boton">{props.textIcon}</span>
            </button>
        </div>
    )
}

export default Boton1;