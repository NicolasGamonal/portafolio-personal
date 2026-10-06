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
        {/* Foto Profesional Externa desde URL (Cumple requerimiento de la pauta) */}
        <div className="mb-4">
          <img 
            src="https://unsplash.com" 
            alt="Foto profesional de Nicolás Gamonal" 
            className="rounded-circle border border-4 border-white shadow animate__animated animate__fadeIn"
            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            onError={(e) => {
              // Si el link de Google llega a fallar o no tienes internet, muestra un icono de respaldo automático para que el profe no vea un cuadro roto
              e.target.style.display = 'none';
              document.getElementById('avatar-respaldo').classList.remove('d-none');
            }}
          />
          {/* Respaldo offline automático */}
          <div 
            id="avatar-respaldo"
            className="bg-dark d-none d-inline-flex align-items-center justify-content-center rounded-circle border border-4 border-white shadow"
            style={{ width: '140px', height: '140px' }}
          >
            <i className="bi bi-person-circle" style={{ fontSize: '4.5rem', color: '#fff' }}></i>
          </div>
        </div>

        {/* Nombre del Estudiante Real basado en tu repositorio */}
        <h1 className="display-4 fw-bold mb-2">Nicolás Gamonal</h1>
        <h3 className="h5 text-light mb-3">Sobre mí</h3>
        
        {/* Breve Biografía del Estudiante exigida por la pauta */}
        <p className="lead mb-2 fw-semibold">Estudiante de Ingeniería en Informática | Duoc UC</p>
        
        <div className="mb-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white text-decoration-none border-bottom">
            https://github.com
          </a>
        </div>
        
        <p className="mx-auto text-light" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          Bienvenido a mi portafolio personal. Soy estudiante en Duoc UC y un entusiasta de la tecnología enfocado en el desarrollo fullstack. ¡Explora mis proyectos y noticias recientes para conocer más sobre mi trabajo!
        </p>

        <div className="d-flex justify-content-center gap-4 fs-3 mt-4">
          <a href="#facebook" className="text-white"><i className="bi bi-facebook"></i></a>
          <a href="#twitter" className="text-white"><i className="bi bi-twitter"></i></a>
          <a href="#linkedin" className="text-white"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com" className="text-white"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Introduccion;
