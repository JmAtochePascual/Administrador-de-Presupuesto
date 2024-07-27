import { cantidadHtml, gastoHtml } from "./selectores.js";

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


export {
  solicitarSaldoPresupuesto,
  obtenerDatos
}