import React, { useState, useEffect } from 'react';
import datosNoticias from '../data/noticias.json';

const Noticias = ({ modoNoche }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(datosNoticias);
  }, []);

  return (
    <section id="noticias" className={`py-5 ${modoNoche ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-5">Noticias</h2>
        <div className="row g-4 justify-content-center">
          {noticias.map((noticia) => (
            <div className="col-12 col-md-5" key={noticia.id}>
              {/* Usamos bg-dark para resaltar las tarjetas sobre el fondo gris */}
              <div className={`card p-4 shadow-sm border-0 h-100 ${modoNoche ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                <h5 className="fw-bold mb-1">{noticia.titulo}</h5>
                <span className={`small d-block mb-3 ${modoNoche ? 'text-light' : 'text-muted'}`}>Fecha: {noticia.fecha}</span>
                <p className={modoNoche ? 'text-light' : 'text-secondary'}>{noticia.contenido}</p>
                <a href="#leer-mas" className={`text-decoration-none mt-auto small fw-bold ${modoNoche ? 'text-warning' : 'text-primary'}`}>
                  Leer más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
