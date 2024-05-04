import React, { useState } from 'react'
import './App.css'
import Inicio from './componentes/Encabezados/Inicio.jsx';
import ContInicio from './componentes/Contenido/ContInicio.jsx';
import PdpInicio from './componentes/PieDePagina/PdpInicio.jsx';



function App() {

  return (
  <>
    <Inicio/>      
    <ContInicio/>
    <PdpInicio/>
  </>
  )
}

export default App
