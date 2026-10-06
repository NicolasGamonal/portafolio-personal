import React, { useState } from 'react';

const Contacto = ({ modoNoche }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${nombre}`);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <section id="contacto" className={`py-5 ${modoNoche ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
      <div className="container" style={{ maxWidth: '750px' }}>
        <h2 className="text-center mb-5">Contacto</h2>
        <form onSubmit={manejarEnvio} className={`p-4 shadow rounded ${modoNoche ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'}`}>
          <div className="mb-4">
            <label htmlFor="nombre" className={`form-label ${modoNoche ? 'text-light' : 'text-muted'}`}>Nombre</label>
            <input 
              type="text" 
              className={`form-control ${modoNoche ? 'bg-secondary text-white border-dark' : ''}`}
              id="nombre" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className={`form-label ${modoNoche ? 'text-light' : 'text-muted'}`}>Correo Electrónico</label>
            <input 
              type="email" 
              className={`form-control ${modoNoche ? 'bg-secondary text-white border-dark' : ''}`}
              id="correo" 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className={`form-label ${modoNoche ? 'text-light' : 'text-muted'}`}>Mensaje</label>
            <textarea 
              className={`form-control ${modoNoche ? 'bg-secondary text-white border-dark' : ''}`}
              id="mensaje" 
              rows="4" 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary px-4 fw-bold">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
