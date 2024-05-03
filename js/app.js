const formularioElement = document.querySelector('#agregar-gasto');
const gastosListadoElement = document.querySelector('#gastos ul');


// Clase Presupuesto
class Presupuesto {

  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
    this.gastos = [];
  }

  // Nuevo gasto
  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  // Calcular el restante
  calcularRestante() {
    const gastado = this.gastos.reduce((total, gasto) => total + Number(gasto.cantidadGasto), 0);
    this.restante = this.presupuesto - gastado;

    ui.insertarGastoHTML(this.gastos);
    ui.actualizarRestante(this.restante);
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
    const cantidadGasto = document.querySelector('#cantidad').value;

    if ([nombreGasto, cantidadGasto].includes('')) {
      ui.imprimirAlerta('Ambos campos son obligatorios');
      return;
    }

    if (Number(cantidadGasto) <= 0 || isNaN(cantidadGasto)) {
      ui.imprimirAlerta('Cantidad no válida');
      return;
    }

    // resetear el formulario
    formularioElement.reset();

    ui.imprimirAlerta('Gasto agregado', true);

    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: Date.now()
    };

    presupuesto.nuevoGasto(gasto);
  }


  // Imprime alerta en el HTML
  imprimirAlerta(mensaje, tipo = false) {
    const divMensaje = document.createElement('div');
    divMensaje.textContent = mensaje;
    divMensaje.classList.add('text-center', 'alert');

    tipo ? divMensaje.classList.add('alert-success') : divMensaje.classList.add('alert-danger');

    document.querySelector('.primario').insertBefore(divMensaje, formularioElement);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }


  // Inserta los gastos en el HTML
  insertarGastoHTML(gastos) {
    this.limpiarHTML();

    gastos.forEach(gasto => {
      const { nombreGasto, cantidadGasto, id } = gasto;

      const nuevoGasto = document.createElement('li');
      nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
      nuevoGasto.dataset.id = id;

      nuevoGasto.innerHTML = `
      ${nombreGasto} <span class="badge badge-primary badge-pill">$ ${cantidadGasto}</span>`;

      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.innerHTML = 'Borrar &times;';
      btnBorrar.onclick = () => {
        borrarGasto(id);
      };

      nuevoGasto.appendChild(btnBorrar);
      gastosListadoElement.appendChild(nuevoGasto);
    });
  }


  // Elimina los gastos del HTML
  limpiarHTML() {
    while (gastosListadoElement.firstChild) {
      gastosListadoElement.removeChild(gastosListadoElement.firstChild);
    }
  }

  // Actualiza el restante
  actualizarRestante(restante) {
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


document.addEventListener('DOMContentLoaded', () => {
  preguntarPresupuesto();
  formularioElement.addEventListener('submit', ui.validarFormulario);
});