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
        {/* Foto Profesional */}
        <div className="mb-4">
          <img
            src="/fino_juan.webp"
            alt="Foto profesional de Don Juan"
            className="rounded-circle border border-4 border-white shadow"
            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none';
              document.getElementById('avatar-respaldo').classList.remove('d-none');
            }}
          />
          {/* Respaldo si la imagen falla */}
          <div
            id="avatar-respaldo"
            className="bg-dark d-none d-inline-flex align-items-center justify-content-center rounded-circle border border-4 border-white shadow"
            style={{ width: '140px', height: '140px' }}
          >
            <i className="bi bi-person-circle" style={{ fontSize: '4.5rem', color: '#fff' }}></i>
          </div>
        </div>

        {/* Nombre y datos */}
        <h1 className="display-4 fw-bold mb-2">Don Juan</h1>
        <h3 className="h5 text-light mb-3">Sobre el Magnate</h3>
        <p className="lead mb-2 fw-semibold">Empresario Visionario | Fundador del Grupo Don Juan</p>

        <div className="mb-4">
          <a href="https://github.com/juanjuanito" target="_blank" rel="noreferrer" className="text-white text-decoration-none border-bottom">
            https://github.com/juanjuanito
          </a>
        </div>

        <p className="mx-auto text-light" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
          Bienvenido al portafolio empresarial de Don Juan, reconocido magnate del rubro ecuestre y fundador de un imperio comercial con presencia en múltiples industrias. Con una trayectoria impecable y una visión estratégica inigualable, Don Juan ha consolidado su marca como símbolo de excelencia, elegancia y éxito. Explore sus proyectos más destacados.
        </p>

        {/* Redes sociales */}
        <div className="d-flex justify-content-center gap-4 fs-3 mt-4">
          <a href="#facebook" className="text-white"><i className="bi bi-facebook"></i></a>
          <a href="#twitter" className="text-white"><i className="bi bi-twitter"></i></a>
          <a href="#linkedin" className="text-white"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/juanjuanito" className="text-white"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Introduccion;