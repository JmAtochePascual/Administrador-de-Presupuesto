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

  // Eliminar gasto
  eliminarGasto(id) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
  }

  // Actualizar restante
  actualizarRestante(gasto) {
    const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    this.restante = this.presupuesto - gastado;
    this.mostrarPresupuesto();
  }
}

export {
  Presupuesto
}