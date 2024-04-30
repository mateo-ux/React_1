import React, { Component } from 'react';

class CicloDeVidaComponente extends Component {
  // Método que se ejecuta después de que el componente se monta en el DOM
    componentDidMount() {
    console.log('El componente se montó en el DOM');
    }

  // Método que se ejecuta después de que el componente se actualiza en el DOM
    componentDidUpdate() {
        console.log('El componente se actualizó en el DOM');
    }

  // Método que se ejecuta antes de que el componente se desmonte del DOM
    componentWillUnmount() {
        console.log('El componente se desmontará del DOM');
    }

    render() {
        return <div>Paso 2: Ciclo de Vida de Componentes</div>;
    }
}

export default CicloDeVidaComponente;
