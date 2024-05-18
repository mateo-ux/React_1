import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import { useDispatch } from "react-redux";

import "./styleContenidos.css";
import CarritoSlice from "../../slices/CarritoSlice.js";


const ContProducto = () =>{
    const {id} = useParams();
    const {data, isLoading, hasError} = useFetch(`https://fakestoreapi.com/products/${id}`)

   
    //    const dispatch = useDispatch(); 
    const handleAgregarAlCarrito = (producto) => {
      console.log("Agregando al carrito", producto.id);
      dispatch(CarritoSlice.agregarAlCarrito(producto));
    };

    if(isLoading){
        return <h1>Cargando...</h1>;
    }

    return(
        <div>
            <h1>{data?.title}</h1>
            <img src={data?.image} className="icon"/>
            <p>{data?.description}</p>
            <button onClick={() => handleAgregarAlCarrito(data)}>
        Agregar al carrito
      </button>
        </div>
    );

}
export default ContProducto;