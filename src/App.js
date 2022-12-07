import './App.css';
import NavBar from './components/NavBar';
import Logo from './assets/images/logos/logo.png'
import Tool from './pages/Tool';
import Material from './pages/Material';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail';


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <section className='main'>
          <div className="text-center">
            <h3 className="pt-5">Ferretería</h3>
            <h1 className="mt-4">MAC TOOLS</h1>
            <Link to='/'><img src={Logo} alt="Girl in a jacket" width={100} ></img></Link>
            
          </div>
        </section>
        <NavBar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/materiales' element={<Material/>} />
        <Route exact path='/herramientas' element={<Tool/>} />
        <Route exact path='/detalle/:id' element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <div>
    //     <section className='main'>
    //       <div className="text-center">
    //         <h3 className="pt-5">Ferretería</h3>
    //         <h1 className="mt-4">MAC TOOLS</h1>
    //         <img src={Logo} alt="Girl in a jacket" width={100} ></img>
    //       </div>
    //     </section>
    //     <NavBar/>
    //   </div>
    //   <ItemListContainer/>
    // </>
  );
}

export default App;
