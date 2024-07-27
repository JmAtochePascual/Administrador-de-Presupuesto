import { cantidadHtml, formularioHtml, gastoHtml } from "./selectores.js";

// Solicitar presupuesto
const solicitarSaldoPresupuesto = () => {
  let presupuesto = prompt('Por favor, ingrese su presupuesto');

  // mientras el presupuesto sea menor a 0 o no sea un número volver a preguntar
  while (presupuesto <= 0 || isNaN(presupuesto)) {
    presupuesto = Number(prompt('Por favor, ingrese un presupuesto válido'));
  }

  return presupuesto;
};

// Obtener datos del formulario
const obtenerDatos = () => {
  return {
    gasto: gastoHtml.value,
    cantidad: Number(cantidadHtml.value),
  };
};

// Verificar datos
const verificarDatos = (datos) => Object.values(datos).every((dato) => dato !== '' && !isNaN(datos.cantidad) && datos.cantidad > 0);

// Mostrar alerta
const mostarAlerta = (mensaje, tipo) => {

  // Crear div
  const divMensaje = document.createElement('div');
  divMensaje.textContent = mensaje;
  divMensaje.className = `text-center alert d-block col-12 ${tipo === 'error' ? 'alert-danger' : 'alert-success'}`;

  // Insertar en el DOM
  document.querySelector('.primario').insertBefore(divMensaje, formularioHtml);

  // Eliminar alerta
  setTimeout(() => {
    divMensaje.remove();
  }, 3000);
};


export {
  solicitarSaldoPresupuesto,
  obtenerDatos,
  verificarDatos,
  mostarAlerta
}