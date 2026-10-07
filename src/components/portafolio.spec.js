import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Introduccion from './Introduccion';
import Navbar from './Navbar';
import Proyectos from './Proyectos';
import Noticias from './Noticias';
import Contacto from './Contacto';

describe('Pruebas Unitarias del Portafolio - Juan Juanito', () => {

  // =========================================================
  // CASO 1: Renderizado del componente Introducción (DOM)
  // =========================================================
  it('Debería renderizar el nombre de Juan Juanito en el DOM', () => {
    render(<Introduccion />);
    expect(screen.getByText('Juan Juanito')).toBeInTheDocument();
  });

  it('Debería mostrar el enlace al GitHub de Juan', () => {
    render(<Introduccion />);
    const enlaces = screen.getAllByText(/juanjuanito/i);
    expect(enlaces.length).toBeGreaterThan(0);
  });

  // =========================================================
  // CASO 2: Renderizado de Proyectos (3 tarjetas)
  // =========================================================
  it('Debería renderizar al menos 3 proyectos', () => {
    render(<Proyectos modoNoche={false} />);
    expect(screen.getByText(/Proyecto 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyecto 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyecto 3/i)).toBeInTheDocument();
  });

  it('Debería mostrar el botón "Ver Repositorio" en cada proyecto', () => {
    render(<Proyectos modoNoche={false} />);
    const botones = screen.getAllByText(/Ver Repositorio/i);
    expect(botones.length).toBeGreaterThanOrEqual(3);
  });

  // =========================================================
  // CASO 3: Renderizado de Noticias desde JSON
  // =========================================================
  it('Debería cargar las noticias desde el archivo JSON', () => {
    render(<Noticias modoNoche={false} />);
    expect(screen.getByText(/Noticias/i)).toBeInTheDocument();
  });

  // =========================================================
  // CASO 4: Renderizado del Navbar
  // =========================================================
  it('Debería renderizar el Navbar con los enlaces de navegación', () => {
    render(<Navbar modoNoche={false} toggleModoNoche={() => {}} />);
    expect(screen.getByText('Mi Portafolio')).toBeInTheDocument();
    expect(screen.getByText(/Introducción/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyectos/i)).toBeInTheDocument();
    expect(screen.getByText(/Noticias/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
  });

  // =========================================================
  // CASO 5: Evento click en el botón de Modo Noche
  // =========================================================
  it('Debería ejecutar la función toggleModoNoche al hacer clic en el botón', () => {
    let llamado = false;
    const toggle = () => { llamado = true; };
    render(<Navbar modoNoche={false} toggleModoNoche={toggle} />);
    const boton = screen.getByRole('button');
    fireEvent.click(boton);
    expect(llamado).toBe(true);
  });

  // =========================================================
  // CASO 6: Evento change en el formulario de Contacto
  // =========================================================
  it('Debería permitir escribir en el campo Nombre del formulario', () => {
    render(<Contacto modoNoche={false} />);
    const inputNombre = screen.getByLabelText(/Nombre/i);
    fireEvent.change(inputNombre, { target: { value: 'Juan' } });
    expect(inputNombre.value).toBe('Juan');
  });

  it('Debería permitir escribir en el campo Correo del formulario', () => {
    render(<Contacto modoNoche={false} />);
    const inputCorreo = screen.getByLabelText(/Correo/i);
    fireEvent.change(inputCorreo, { target: { value: 'juan@duoc.cl' } });
    expect(inputCorreo.value).toBe('juan@duoc.cl');
  });

});