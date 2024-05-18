import "./styleContenidos.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";

const ContProductos = ()=>{  
    const {data, isLoading, hasError} = useFetch('https://fakestoreapi.com/products')

    if(isLoading){
        return <h1>Cargando...</h1>;
    }
    return(
        <div>
            <h1 style={{marginLeft:"3vw", marginTop:"4vw"}}>Lista de productos</h1>            
            <div className="productos-container">
                {data?.map((elemento) => 
                <Link to = {`/producto/${elemento.id}`}>
                    <div key={elemento.id.toString()} className="producto-card">                        
                        <h3 className="producto-titulo">{elemento.title}</h3>
                        <img src={elemento.image} className="producto-img"/>
                        <p className="producto-precio"> $ {elemento.price}</p>                        
                            <div className="boton-tarjeta">
                            </div>
                        </div>
                    </Link>
                )};
            </div>            
        </div>

    )
}

export default ContProductos;