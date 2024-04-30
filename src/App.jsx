import React, { useState } from 'react'
import './App.css'
import MiComponente from './TareasEvidencia/MiComponente.jsx'
import CicloDeVidaComponente from './TareasEvidencia/CicloDeVidaComponente.jsx'
import Contador from './TareasEvidencia/Contador.jsx'
import Encabezado from './TareasEvidencia/propsEncabezado.jsx'

function App() {


  return (
    <>
      <div className="App">
        <MiComponente/>
        <CicloDeVidaComponente/>
        <Contador/>
        <Encabezado 
          titulo = "Soy encabezado" 
          primerParrafo = "Paso 4: Utilizando Props para Pasar Datos entre Componentes"/>
      </div>
      
    </>
  )
}

export default App
