import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import './App.css'
import InicioView from './views/InicioView.jsx';
import ExplorarProductos from './views/ExplorarProductos.jsx';
import ContProducto from './componentes/Contenido/ContProducto.jsx';
import Carrito from './views/Carrito.jsx';

function App() {

  return (
  <>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioView></InicioView>}></Route>             
        <Route path='/producto/:id' element={<ContProducto></ContProducto>}></Route>  
          <Route path='/productos' element={<ExplorarProductos></ExplorarProductos>}></Route>
          <Route path='/carro' element={<Carrito></Carrito>}></Route>
      </Routes>
      <Link to="/carro">Ver Carrito</Link>
    </BrowserRouter>

  </>
  )
}

export default App
