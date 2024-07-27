// Importar modulos
import { Presupuesto } from "./Presupuesto.js";
import { formularioHtml } from "./selectores.js";
import { obtenerDatos, solicitarSaldoPresupuesto } from "./utilities.js";

let presupuesto;

// Funcion para inicializar la aplicacion
const init = (event) => {
  event.preventDefault();

  // Obtener datos del formulario
  const datos = obtenerDatos();
};


// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  formularioHtml.addEventListener('submit', init);

  // Solicitar saldo presupuesto
  const saldo = solicitarSaldoPresupuesto();

  // Crear presupuesto
  presupuesto = new Presupuesto(saldo);

  // Mostrar presupuesto
  presupuesto.mostrarPresupuesto();
});  