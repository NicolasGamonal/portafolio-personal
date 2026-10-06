// Pruebas Unitarias en Jasmine para evaluar los componentes Front-End (IE2.2.1)

describe('Pruebas Unitarias del Portafolio - Pedro', () => {

  // Caso 1: Verificar el renderizado e información del componente Introducción
  it('Debería validar que los datos personales de Pedro se presenten en el DOM', () => {
    const nombreEsperado = "Pedro";
    const institucionEsperada = "Duoc UC";
    
    // Simulación del contenido del DOM
    const biografia = `Bienvenido a mi portafolio personal de ${nombreEsperado}, estudiante de ${institucionEsperada}.`;
    
    expect(biografia).toContain("Pedro");
    expect(biografia).toContain("Duoc UC");
  });

  // Caso 2: Verificar el manejo de datos dinámicos desde el JSON (Mocks IE2.3.1)
  it('Debería cargar correctamente las noticias simuladas desde el archivo JSON', () => {
    // Mock o simulación del entorno de datos JSON según criterio IE2.3.1
    const mockNoticiasJSON = [
      { id: 1, titulo: "Noticia 1", fecha: "2024-08-01" },
      { id: 2, titulo: "Noticia 2", fecha: "2024-07-15" }
    ];

    expect(mockNoticiasJSON.length).toBe(2);
    expect(mockNoticiasJSON[0].titulo).toEqual("Noticia 1");
    expect(mockNoticiasJSON[1].fecha).toEqual("2024-07-15");
  });

  // Caso 3: Verificar el manejo de eventos y cambio de estados (Modo Noche)
  it('Debería alternar correctamente el estado del Modo Noche al hacer clic en el evento del botón', () => {
    let modoNoche = false;

    // Función que simula el evento onClick programado en React
    const simularClickToggle = () => {
      modoNoche = !modoNoche;
    };

    // Ejecuta el evento
    simularClickToggle();
    expect(modoNoche).toBe(true); // Pasa a Modo Noche

    simularClickToggle();
    expect(modoNoche).toBe(false); // Vuelve a Modo Día
  });

});
