const formularioElement = document.getElementById('#agregar-gasto');
const gastosListadoElement = document.querySelector('#gastos ul');


// Clase Presupuesto
class Presupuesto {

  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
    this.gastos = [];
  }
};


// Clase UI
class UI {

  // Inserta el presupuesto en el HTML
  insertarPresupuestoHTML(presupuestoUsuario) {
    const { presupuesto, restante } = presupuestoUsuario;
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }
}


let presupuesto;
const ui = new UI();


// Obtiene el presupuesto del usuario
const preguntarPresupuesto = () => {

  let presupuestoUsuario = Number(prompt('¿Cuál es tu presupuesto?'));

  while (presupuestoUsuario <= 0 || isNaN(presupuestoUsuario)) {
    presupuestoUsuario = Number(prompt('¿Ingrese un presupuesto Valido?'));
  };

  presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuestoHTML(presupuesto);
};


document.addEventListener('DOMContentLoaded', preguntarPresupuesto);