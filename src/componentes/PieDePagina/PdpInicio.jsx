import React from "react";
import Boton1 from '../Botones/Boton1.jsx';
import "./stylePieDePagina.css";



const PdpInicio = () =>{
    return(
        <div className="pieDePagina">
            <div className="contenedor">
            <img src="src\componentes\img\icon\entrega.png" className = "icono" />
            <h3 className="texto-boton">Envíos internacionales y rápidos.</h3>
            </div>

            <div className="contenedor">
            <img src="src\componentes\img\icon\pago.png" className = "icono" />
            <h3 className="texto-boton">Pago rápido y seguro.</h3>
            </div>

            <div className="contenedor">
            <img src="src\componentes\img\icon\regalo.png" className = "icono" />
            <h3 className="texto-boton">Indicanos si es un regalo y se empacará con más amor.</h3>
            </div>

            <div className="contenedor">
            <img src="src\componentes\img\icon\tienda.png" className = "icono" />
            <h3 className="texto-boton">Disponibilidad de recoger en tienda.</h3>
            </div>
        </div>
    )
}

export default PdpInicio;