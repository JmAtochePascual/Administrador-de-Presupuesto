const formularioElement = document.querySelector('#agregar-gasto');
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


  // Valida el formulario
  validarFormulario(event) {
    event.preventDefault();

    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = Number(document.querySelector('#cantidad').value);

    if ([nombreGasto, cantidadGasto].includes('')) {
      console.log('Ambos campos son obligatorios');
      return;
    }
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


document.addEventListener('DOMContentLoaded', () => {
  preguntarPresupuesto();
  formularioElement.addEventListener('submit', ui.validarFormulario);
});