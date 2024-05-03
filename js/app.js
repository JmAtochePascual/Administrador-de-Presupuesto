const formularioElement = document.getElementById('#agregar-gasto');
const gastosListadoElement = document.querySelector('#gastos ul');






// Obtiene el presupuesto del usuario
const preguntarPresupuesto = () => {
  let presupuestoUsuario = Number(prompt('¿Cuál es tu presupuesto?'));

  while (presupuestoUsuario <= 0 || isNaN(presupuestoUsuario)) {
    presupuestoUsuario = Number(prompt('¿Ingrese un presupuesto Valido?'));
  };
};


document.addEventListener('DOMContentLoaded', preguntarPresupuesto);