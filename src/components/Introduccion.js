import React from 'react';

const Introduccion = () => {
  return (
    <section id="inicio" className="text-white text-center py-5" style={{
      background: 'linear-gradient(135deg, #7b1fa2 0%, #1e88e5 100%)',
      minHeight: '55vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        {/* Icono de usuario local de Bootstrap (Reemplaza la foto de internet rota) */}
        <div className="mb-4">
          <div 
            className="bg-dark d-inline-flex align-items-center justify-content-center rounded-circle border border-4 border-white shadow"
            style={{ width: '130px', height: '130px' }}
          >
            <i className="bi bi-person-circle" style={{ fontSize: '4.5rem', color: '#fff' }}></i>
          </div>
        </div>

        <h1 className="display-4 fw-bold mb-2">Pedro</h1>
        <h3 className="h5 text-light mb-3">Sobre mí</h3>
        <p className="lead mb-2">Estudiante de informática Duoc UC | Entusiasta de la Tecnología</p>
        
        <div className="mb-4">
          <a href="https://github.com/pedrohacker20" target="_blank" rel="noreferrer" className="text-white text-decoration-none border-bottom">
            https://github.com/pedrohacker20
          </a>
        </div>
        
        <p className="mx-auto text-light" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes. ¡Explora y conoce más sobre mi trabajo!
        </p>

        <div className="d-flex justify-content-center gap-4 fs-3 mt-4">
          <a href="#facebook" className="text-white"><i className="bi bi-facebook"></i></a>
          <a href="#twitter" className="text-white"><i className="bi bi-twitter"></i></a>
          <a href="#linkedin" className="text-white"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/pedrohacker20" className="text-white"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Introduccion;
export { Introduccion }; // Exportación doble para facilitar los mocks de testing de Duoc
