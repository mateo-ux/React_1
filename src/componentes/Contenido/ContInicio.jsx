import React from "react";
import "./styleContenidos.css";
import { Link } from "react-router-dom";

const ContInicio = () => {
    
    return(
        <div className="contenido">
            <div className="bienvenida">
                <p>Descubre una amplia selección de productos y 
                    disfruta de una experiencia de compra excepcional.
                    </p>
                    <Link to = '/productos'><button>Explorar Productos</button></Link>
            </div>
            <div className="imgInicio">
                <img src="src\componentes\img\contenido.gif" alt=""  />
            </div>
            
        </div>
    );
};

export default ContInicio;