import React from 'react';

const Proyectos = ({ modoNoche }) => {
  // Lista de 3 proyectos detallada con imágenes locales y todos los puntos de la pauta
  const listaProyectos = [
    {
      id: 1,
      titulo: "Proyecto 1: Gamezone",
      subtitulo: "GAMEZONE",
      descripcion: "Plataforma web interactiva para la gestión de catálogo de videojuegos en tiempo real, permitiendo administración de stock y perfiles de usuario.",
      tecnologias: ["React", "Bootstrap", "JavaScript (ES6)"],
      enlace: "https://github.com",
      colorFondo: "#0d6efd" // Azul Bootstrap
    },
    {
      id: 2,
      titulo: "Proyecto 2: Zona Libros",
      subtitulo: "ZONA LIBROS",
      descripcion: "Aplicación web enfocada en el almacenamiento dinámico y búsqueda de libros a través de módulos modulares, ideal para bibliotecas digitales.",
      tecnologias: ["React", "JSON", "CSS3 Custom Properties"],
      enlace: "https://github.com",
      colorFondo: "#ffc107" // Amarillo Bootstrap
    },
    {
      id: 3,
      titulo: "Proyecto 3: Guau & Miau",
      subtitulo: "GUAU & MIAU",
      descripcion: "E-commerce responsivo diseñado para una tienda de mascotas, integrando componentes reutilizables y formularios controlados por estado.",
      tecnologias: ["React", "Bootstrap Icons", "Git / GitHub"],
      enlace: "https://github.com",
      colorFondo: "#198754" // Verde Bootstrap
    }
  ];

  return (
    <section id="proyectos" className={`py-5 ${modoNoche ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Proyectos</h2>
        {/* Sistema de cuadrícula (Grid System) de Bootstrap */}
        <div className="row g-4">
          {listaProyectos.map((proyecto) => (
            <div className="col-12 col-md-4" key={proyecto.id}>
              {/* Componente Card personalizado para resaltar información clave */}
              <div className={`card h-100 shadow-sm border-0 ${modoNoche ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
                
                {/* Contenedor de Imagen/Banner Local */}
                <div 
                  className="d-flex align-items-center justify-content-center text-white fw-bold fs-4" 
                  style={{ height: '200px', backgroundColor: proyecto.colorFondo, letterSpacing: '2px' }}
                >
                  {proyecto.subtitulo}
                </div>

                <div className="card-body d-flex flex-column p-4">
                  {/* Título */}
                  <h5 className={`card-title fw-bold mb-3 ${modoNoche ? 'text-white' : 'text-dark'}`}>
                    {proyecto.titulo}
                  </h5>
                  
                  {/* Descripción Breve */}
                  <p className={`card-text ${modoNoche ? 'text-light' : 'text-muted'} flex-grow-1`} style={{ fontSize: '0.95rem' }}>
                    {proyecto.descripcion}
                  </p>
                  
                  {/* Tecnologías Utilizadas */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ fontSize: '0.85rem', uppercase: 'true' }}>Tecnologías:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {proyecto.tecnologias.map((tech, idx) => (
                        <span key={idx} className="badge bg-secondary font-monospace" style={{ fontSize: '0.75rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enlace al repositorio del proyecto */}
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
