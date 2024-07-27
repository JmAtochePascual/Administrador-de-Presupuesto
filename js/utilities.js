import { presupuesto } from "./app.js";
import { cantidadHtml, formularioHtml, gastoHtml, gastosHtml } from "./selectores.js";

// Solicitar presupuesto
const solicitarSaldoPresupuesto = () => {
  let presupuesto = prompt('Por favor, ingrese su presupuesto');

  // mientras el presupuesto sea menor a 0 o no sea un número volver a preguntar
  while (presupuesto <= 0 || isNaN(presupuesto)) {
    presupuesto = Number(prompt('Por favor, ingrese un presupuesto válido'));
  }

  return presupuesto;
};

// Obtener datos del formulario
const obtenerDatos = () => {
  return {
    gasto: gastoHtml.value,
    cantidad: Number(cantidadHtml.value),
  };
};

// Verificar datos
const verificarDatos = (datos) => Object.values(datos).every((dato) => dato !== '' && !isNaN(datos.cantidad) && datos.cantidad > 0);

// Mostrar alerta
const mostarAlerta = (mensaje, tipo) => {

  // Crear div
  const divMensaje = document.createElement('div');
  divMensaje.textContent = mensaje;
  divMensaje.className = `text-center alert d-block col-12 ${tipo === 'error' ? 'alert-danger' : 'alert-success'}`;

  // Insertar en el DOM
  document.querySelector('.primario').insertBefore(divMensaje, formularioHtml);

  // Eliminar alerta
  setTimeout(() => {
    divMensaje.remove();
  }, 3000);
};

// Listar gastos
const listarGastos = () => {

  // Limpiar HTML
  limpiarHtml();

  presupuesto.gastos.forEach(gastoObj => {
    const { gasto, cantidad } = gastoObj;

    // Crear un gastoHtml
    const nuevoGastoHtml = document.createElement('li');
    nuevoGastoHtml.className = 'list-group-item d-flex justify-content-between align-items-center';
    nuevoGastoHtml.innerHTML = `${gasto} <span class="badge badge-primary badge-pill">$${cantidad}</span>`;

    // Boton para borrar el gasto
    const btnBorrar = document.createElement('button');
    btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
    btnBorrar.innerHTML = 'Borrar &times;';

    // Agregar el boton al HTML
    nuevoGastoHtml.appendChild(btnBorrar);

    // Agregar gasto al HTML
    gastosHtml.appendChild(nuevoGastoHtml);
  });
};

//  Limpiar HTML
const limpiarHtml = () => {
  while (gastosHtml.firstChild) {
    gastosHtml.removeChild(gastosHtml.firstChild);
  }
};

export {
  solicitarSaldoPresupuesto,
  obtenerDatos,
  verificarDatos,
  mostarAlerta,
  listarGastos
}