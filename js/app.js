// Importar modulos
import { Presupuesto } from "./Presupuesto.js";
import { solicitarSaldoPresupuesto } from "./utilities.js";

let presupuesto;


// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  const saldo = solicitarSaldoPresupuesto();

  // Crear presupuesto
  presupuesto = new Presupuesto(saldo);
});  