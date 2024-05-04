import React from "react";
import Boton1 from '../Botones/Boton1.jsx';
import "./stylePieDePagina.css";


const PdpInicio = () =>{
    return(
        <div className="pieDePagina">
            <Boton1 icon = "src\componentes\img\icon\entrega.png"
                textIcon = "Envíos internacionales y rápidos."
            />
            <Boton1 icon = "src\componentes\img\icon\pago.png"
                textIcon = "Pago rápido y seguro."
            />
            <Boton1 icon = "src\componentes\img\icon\regalo.png"
                textIcon = "Indicanos si es un regalo y se empacará con más amor."
            />
            <Boton1 icon="src\componentes\img\icon\tienda.png"
                textIcon = "Disponibilidad de recoger en tienda."
            />
        </div>
    )
}

export default PdpInicio;