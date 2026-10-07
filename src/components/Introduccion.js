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
            alt="Foto profesional de Juan Juanito"
            className="rounded-circle border border-4 border-white shadow"
            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            onError={(e) => {
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

        {/* Nombre y datos */}
        <h1 className="display-4 fw-bold mb-2">Juan Juanito</h1>
        <h3 className="h5 text-light mb-3">Sobre mí</h3>
        <p className="lead mb-2 fw-semibold">Estudiante de Ingeniería en Informática | Duoc UC</p>

        <div className="mb-4">
          <a href="https://github.com/juanjuanito" target="_blank" rel="noreferrer" className="text-white text-decoration-none border-bottom">
            https://github.com/juanjuanito
          </a>
        </div>

        <p className="mx-auto text-light" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          Bienvenido a mi portafolio personal. Soy estudiante en Duoc UC y un entusiasta de la tecnología enfocado en el desarrollo fullstack. ¡Explora mis proyectos y noticias recientes para conocer más sobre mi trabajo!
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