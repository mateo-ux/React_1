import React from "react";

const Encabezado = (props) =>{
    return(
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.primerParrafo}</p>
        </div>
    )
} 
export default Encabezado;