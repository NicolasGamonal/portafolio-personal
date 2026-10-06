import React from 'react';

const Proyectos = ({ modoNoche }) => {
  const listaProyectos = [
    {
      id: 1,
      titulo: "Proyecto 1",
      subtitulo: "GAMEZONE",
      descripcion: "Descripción breve del proyecto, destacando los objetivos alcanzados y las tecnologías utilizadas.",
      colorFondo: "#0d6efd" // Azul Bootstrap
    },
    {
      id: 2,
      titulo: "Proyecto 2",
      subtitulo: "ZONA LIBROS",
      descripcion: "Descripción breve del proyecto, destacando los objetivos alcanzados y las tecnologías utilizadas.",
      colorFondo: "#ffc107" // Amarillo Bootstrap
    },
    {
      id: 3,
      titulo: "Proyecto 3",
      subtitulo: "GUAU & MIAU",
      descripcion: "Descripción breve del proyecto, destacando los objetivos alcanzados y las tecnologías utilizadas.",
      colorFondo: "#198754" // Verde Bootstrap
    }
  ];

  return (
    <section id="proyectos" className={`py-5 ${modoNoche ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-5">Proyectos</h2>
        <div className="row g-4">
          {listaProyectos.map((proyecto) => (
            <div className="col-12 col-md-4" key={proyecto.id}>
              {/* Forzamos que la tarjeta se adapte al modo noche */}
              <div className={`card h-100 shadow-sm ${modoNoche ? 'bg-dark text-white border-secondary' : 'bg-white text-dark'}`}>
                
                {/* Cuadro de Color Local en vez de imagen de internet para que nunca falle offline */}
                <div 
                  className="d-flex align-items-center justify-content-center text-white fw-bold fs-4" 
                  style={{ height: '220px', backgroundColor: proyecto.colorFondo }}
                >
                  {proyecto.subtitulo}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className={`card-title fw-bold ${modoNoche ? 'text-white' : 'text-dark'}`}>{proyecto.titulo}</h5>
                  <p className={`card-text ${modoNoche ? 'text-light' : 'text-muted'} flex-grow-1`}>{proyecto.descripcion}</p>
                  <button className="btn btn-primary btn-sm align-self-start mt-2">
                    Ver Demo
                  </button>
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
