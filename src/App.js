import './App.css';
import NavBar from './components/NavBar';
import Logo from './assets/images/logos/logo.png'


function App() {
  
  return (
    <div>
      <section className='main'>
        <div className="text-center">
          <h3 className="pt-5">Ferretería</h3>
          <h1 className="mt-4">MAC TOOLS</h1>
          <img src={Logo} alt="Girl in a jacket" width={100} ></img>
        </div>
      </section>
      <NavBar/>
    </div>
  );
}

export default App;
