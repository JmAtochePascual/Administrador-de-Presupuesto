// Solicitar presupuesto
const solicitarPresupuesto = () => {
  let prsupuesto = prompt('Por favor, ingrese su presupuesto');

  // mientras el presupuesto sea menor a 0 o no sea un número volver a preguntar
  while (prsupuesto <= 0 || isNaN(prsupuesto)) {
    prsupuesto = Number(prompt('Por favor, ingrese un presupuesto válido'));
  }
};


export {
  solicitarPresupuesto
}