import React, { useState } from 'react'
import Inicio from '../componentes/Encabezados/Inicio.jsx';
import ContInicio from '../componentes/Contenido/ContInicio.jsx';
import PdpInicio from '../componentes/PieDePagina/PdpInicio.jsx';

function InicioView() {

    return (
    <>    
        <Inicio/> 
        <ContInicio/>
        <PdpInicio/>
    </>
    )
}

export default InicioView;
