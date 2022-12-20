import './App.css';
import NavBar from './components/NavBar';
import Logo from './assets/images/logos/logo.png'
import Laptops from './pages/Laptops';
import Smartphones from './pages/Smartphones';
import Cart from './pages/Cart';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail';
import CategoryProducts from './pages/CategoryProducts';


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <section className='main'>
          <div className="text-center">
            <h3 className="pt-5">Tienda</h3>
            <Link to='/'><img src={Logo} alt="Girl in a jacket" width={100} ></img></Link>
          </div>
        </section>
        <NavBar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/smartphones' element={<Smartphones/>} />
        <Route exact path='/laptops' element={<Laptops/>} />
        <Route exact path='/detalle/:id' element={<ProductDetail/>} />
        <Route exact path='/carrito' element={<Cart/>} />
        <Route exact path='/category/:name' element={<CategoryProducts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
