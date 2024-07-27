// Importar modulos
import { Presupuesto } from "./Presupuesto.js";
import { formularioHtml } from "./selectores.js";
import { listarGastos, mostarAlerta, obtenerDatos, solicitarSaldoPresupuesto, verificarDatos } from "./utilities.js";

let presupuesto;

// Funcion para inicializar la aplicacion
const init = (event) => {
  event.preventDefault();

  // Obtener datos del formulario
  const gasto = obtenerDatos();

  // Verificar datos
  const esDatosValidos = verificarDatos(gasto);

  // Si los datos no son validos mostrar alerta
  if (!esDatosValidos) {
    mostarAlerta('Datos no válidos', 'error');
    return;
  }

  // Agregar gasto
  presupuesto.agregarGasto(gasto);

  // Listar gastos
  listarGastos();

};


// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  formularioHtml.addEventListener('submit', init);

  // Solicitar saldo presupuesto
  const saldo = solicitarSaldoPresupuesto();

  // Crear presupuesto
  presupuesto = new Presupuesto(saldo);

  // Mostrar presupuesto
  presupuesto.mostrarPresupuesto();
});


export {
  presupuesto
}