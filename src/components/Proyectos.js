import React from 'react';

const Proyectos = ({ modoNoche }) => {
  const listaProyectos = [
    {
      id: 1,
      titulo: "Proyecto 1: El Corral Gourmet",
      subtitulo: "CORRAL GOURMET",
      descripcion: "Menú digital interactivo para un restaurante de avena premium. Don Juan administra platillos, reservas de mesas y pedidos en tiempo real con un diseño elegante.",
      tecnologias: ["React", "Bootstrap", "JavaScript (ES6)"],
      enlace: "/corral-gourmet.html",
      colorFondo: "#0d6efd"
    },
    {
      id: 2,
      titulo: "Proyecto 2: Establo Inmobiliario",
      subtitulo: "ESTABLO INMOBILIARIO",
      descripcion: "Portal web para arrendar establos y cuadras de lujo. Permite filtrar propiedades por tamaño, ubicación y servicios incluidos, con fichas detalladas por cada establo.",
      tecnologias: ["React", "JSON", "CSS3 Custom Properties"],
      enlace: "/establo-inmobiliario.html",
      colorFondo: "#ffc107"
    },
    {
      id: 3,
      titulo: "Proyecto 3: El Establo Gamer",
      subtitulo: "ESTABLO GAMER",
      descripcion: "Plataforma interactiva donde Don Juan administra un catálogo de videojuegos retro. Incluye gestión de stock, perfiles de jugadores y un carrito con temática ecuestre.",
      tecnologias: ["React", "Bootstrap Icons", "Git / GitHub"],
      enlace: "https://github.com/juanjuanito/establo-gamer",
      colorFondo: "#198754"
    }
  ];

  return (
    <section id="proyectos" className={`py-5 ${modoNoche ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Proyectos</h2>
        <div className="row g-4">
          {listaProyectos.map((proyecto) => (
            <div className="col-12 col-md-4" key={proyecto.id}>
              <div className={`card h-100 shadow-sm border-0 ${modoNoche ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
                <div
                  className="d-flex align-items-center justify-content-center text-white fw-bold fs-4"
                  style={{ height: '200px', backgroundColor: proyecto.colorFondo, letterSpacing: '2px' }}
                >
                  {proyecto.subtitulo}
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <h5 className={`card-title fw-bold mb-3 ${modoNoche ? 'text-white' : 'text-dark'}`}>
                    {proyecto.titulo}
                  </h5>

                  <p className={`card-text ${modoNoche ? 'text-light' : 'text-muted'} flex-grow-1`} style={{ fontSize: '0.95rem' }}>
                    {proyecto.descripcion}
                  </p>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ fontSize: '0.85rem' }}>Tecnologías:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {proyecto.tecnologias.map((tech, idx) => (
                        <span key={idx} className="badge bg-secondary font-monospace" style={{ fontSize: '0.75rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm w-100 fw-bold py-2 mt-auto"
                  >
                    <i className="bi bi-github me-2"></i> Ver Repositorio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;