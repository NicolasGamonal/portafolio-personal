import React from 'react';

const Navbar = ({ modoNoche, toggleModoNoche }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">Mi Portafolio</a>
        
        {/* Botón funcional conectado al estado global */}
        <button 
          className={`btn btn-sm ms-auto me-3 ${modoNoche ? 'btn-warning' : 'btn-outline-light'}`}
          onClick={toggleModoNoche}
          style={{ fontSize: '0.85rem' }}
        >
          {modoNoche ? '☀️ Modo Día' : '🌙 Cambiar a Noche'}
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Introducción</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#noticias">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
