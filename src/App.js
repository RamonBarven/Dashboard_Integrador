
import './App.css';
import TotalProductos from './components/totalProductos';
import TotalUser from './components/totalUsers';
import TotalCategory from './components/totalCategory';
import UltimoProducto from './components/ultimoProducto';
import ListaProductos from './components/listProducts';
import PerCategory from './components/perCategory';
import Tarjeta from './components/tarjeta';

function App() {
  return (
    <div className="App">
      <Tarjeta>
        <TotalProductos />
      </Tarjeta>
      <Tarjeta>
        <TotalUser />
      </Tarjeta> 
      <Tarjeta>
        <TotalCategory />
      </Tarjeta>
      <div className='izquierda'>
        <Tarjeta>
          <UltimoProducto />
        </Tarjeta>
        <Tarjeta>
          <PerCategory />
        </Tarjeta> 
      </div>  
      <Tarjeta>
        <ListaProductos />
      </Tarjeta> 
      

      
    </div>
  );
}

export default App;
