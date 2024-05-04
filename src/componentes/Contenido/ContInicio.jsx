import React from "react";
import "./styleContenidos.css";

const ContInicio = () => {
    
    return(
        <div className="contenido">
            <div className="bienvenida">
                <p>Descubre una amplia selección de productos y 
                    disfruta de una experiencia de compra excepcional.
                    </p>
            <button>Explorar Productos</button>
            </div>
            <div className="imgInicio">
                <img src="src\componentes\img\contenido.gif" alt=""  />
            </div>
            
        </div>
    );
};

export default ContInicio;