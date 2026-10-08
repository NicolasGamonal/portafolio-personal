import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Introduccion from './Introduccion';
import Navbar from './Navbar';
import Proyectos from './Proyectos';
import Noticias from './Noticias';
import Contacto from './Contacto';

describe('Pruebas Unitarias del Portafolio (Compatibilidad Jasmine + Karma)', () => {

  // =========================================================
  // CASO 1: Renderizado del componente Introducción (DOM)
  // =========================================================
  it('Debería renderizar la sección de introducción en el DOM', () => {
    const { container } = render(<Introduccion />);
    // Usamos selectores nativos del DOM y aserciones nativas de Jasmine
    const titulo = container.querySelector('h1, h2, h3');
    expect(titulo).not.toBeNull();
  });

  // =========================================================
  // CASO 2: Renderizado de Proyectos y Bootstrap Cards
  // =========================================================
  it('Debería renderizar las tarjetas (cards) de Bootstrap en Proyectos', () => {
    const { container } = render(<Proyectos modoNoche={false} />);
    // Valida la existencia de elementos con la clase .card de Bootstrap
    const tarjetas = container.querySelectorAll('.card');
    expect(tarjetas.length).toBeGreaterThanOrEqual(1);
  });

  // =========================================================
  // CASO 3: Renderizado de Noticias desde JSON
  // =========================================================
  it('Debería cargar las noticias y renderizar el título de la sección', () => {
    const { container } = render(<Noticias modoNoche={false} />);
    const encabezadoNoticias = container.querySelector('h2');
    expect(encabezadoNoticias.textContent).toContain('Noticias');
  });

  // =========================================================
  // CASO 4: Renderizado del Navbar
  // =========================================================
  it('Debería renderizar el Navbar con su contenedor de navegación', () => {
    const { container } = render(<Navbar modoNoche={false} toggleModoNoche={() => {}} />);
    const navElement = container.querySelector('nav');
    expect(navElement).not.toBeNull();
  });

  // =========================================================
  // CASO 5: Simulación de Eventos (Click en Navbar)
  // =========================================================
  it('Debería ejecutar la función de callback al hacer clic en el botón de modo noche', () => {
    let funcionLlamada = false;
    const miToggleMock = () => { funcionLlamada = true; };

    const { container } = render(<Navbar modoNoche={false} toggleModoNoche={miToggleMock} />);
    const boton = container.querySelector('button');
    expect(boton).not.toBeNull();

    // Simulación del evento click compatible
    fireEvent.click(boton);

    expect(funcionLlamada).toBe(true);
  });

  // =========================================================
  // CASO 6: Manipulación de Formularios (Contacto)
  // =========================================================
  it('Debería validar la existencia de campos de entrada en el formulario de Contacto', () => {
    const { container } = render(<Contacto modoNoche={false} />);
    const inputs = container.querySelectorAll('input, textarea');
    expect(inputs.length).toBeGreaterThanOrEqual(1);
  });
});
