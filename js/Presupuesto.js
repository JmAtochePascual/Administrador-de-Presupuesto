import { presupuestoHtml, restanteHtml } from "./selectores.js";

class Presupuesto {

  // Constructor
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  // Mostrar presupuesto
  mostrarPresupuesto() {
    presupuestoHtml.textContent = this.presupuesto;
    restanteHtml.textContent = this.restante;
  }

  // Agregar gasto
  agregarGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
  }
}

export {
  Presupuesto
}