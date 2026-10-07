import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';

function App() {
  const [modoNoche, setModoNoche] = useState(false);

  const toggleModoNoche = () => {
    setModoNoche(!modoNoche);
  };

  return (
    <div className={modoNoche ? 'bg-secondary text-white' : 'bg-white text-dark'} style={{ transition: 'all 0.3s ease', minHeight: '100vh' }}>
      <Navbar modoNoche={modoNoche} toggleModoNoche={toggleModoNoche} />
      
      <div className={modoNoche ? 'text-white' : 'text-dark'}>
        <main>
          <Introduccion />
          <Proyectos modoNoche={modoNoche} />
          <Noticias modoNoche={modoNoche} />
          <Contacto modoNoche={modoNoche} />
        </main>
      </div>

      <footer className="text-center py-4 bg-dark text-white border-top border-secondary">
        <div className="container">
          <p className="mb-0">&copy; 2024 Juan Juanito. Todos los derechos reservados. | Duoc UC</p>
        </div>
      </footer>
    </div>
  );
}

export default App;











/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
