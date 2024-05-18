import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
};
const CarritoSlice = createSlice({
  initialState,
  name: "carrito",
  reducers: {
    agregarAlCarrito: (estadoActual, action) => {
      const producto = action.payload;
      estadoActual.productos.push(producto);
    },
  },
});

export const carritoReducer = CarritoSlice.reducer;
export default CarritoSlice.actions;
