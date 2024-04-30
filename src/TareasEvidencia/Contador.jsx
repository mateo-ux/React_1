import React, { useState, useCallback } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

  // Usamos useCallback para memorizar las funciones incrementarContador y decrementarContador
    const incrementarContador = useCallback(() => {
        setContador(contador => contador +1);
    }, []); // La dependencia es un arreglo vacío, lo que significa que esta función no depende de ninguna variable externa

    const decrementarContador = useCallback(() => {
        setContador(contador => contador - 1);
    }, []); // La dependencia es un arreglo vacío, lo que significa que esta función no depende de ninguna variable externa

    return (
        <div>
        <h2>Contador</h2>
        <p>Valor actual del contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
        <button onClick={decrementarContador}>Decrementar</button>
        </div>
    );
}

export default Contador;
