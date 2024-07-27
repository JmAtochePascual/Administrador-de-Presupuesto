class Presupuesto {

  // Constructor
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
}

export {
  Presupuesto
}