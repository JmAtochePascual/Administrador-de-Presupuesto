import Budget from "./Budget.js";

const budgetHtml = document.querySelector('#total');
const remainingHtml = document.querySelector('#restante');
const formHtml = document.querySelector('#agregar-gasto');
const expsenseHtml = document.querySelector('#gasto');
const quantitydHtml = document.querySelector('#cantidad');
const expensesHtml = document.querySelector('#gastos ul');
const remainingDivHtml = document.querySelector('.restante');
let budget;

const addExpense = (event) => {
  event.preventDefault();

  const expense = {
    id: generarId(),
    text: expsenseHtml.value,
    quantity: Number(quantitydHtml.value),
  };

  if (Object.values(expense).includes('')) {
    showAlert('Los campos son obligatorios', 'error');
    return;
  };

  if (expense.quantity > budget.remaining) {
    showAlert('Cantidad del gasto es mayor al restante', 'error');
    return;
  };

  budget.addExpense(expense);

  showAlert('Gasto agregado correctamente', 'success');

  showExpsenses();

  updateExpenseHtml();

  resteForm();
};

const getBudget = () => {
  let data = Number(prompt('¿Cuál es tu presupuesto?'));

  while (data <= 0 || isNaN(data)) {
    data = Number(prompt('Por favor, ingrese un presupuesto válido'));
  }

  budget = new Budget(data);
};

const showAlert = (message, type) => {
  const alertExist = document.querySelector('.notification');

  if (alertExist) return;

  const divMessage = document.createElement('div');
  divMessage.textContent = message;
  divMessage.className = `text-center alert notification d-block col-12 ${type === 'error' ? 'alert-danger' : 'alert-success'}`;

  document.querySelector('.primario').insertBefore(divMessage, formHtml);

  setTimeout(() => {
    divMessage.remove();
  }, 3000);
};

const updateExpenseHtml = () => {
  budgetHtml.textContent = budget.budget;
  remainingHtml.textContent = budget.remaining;

  if (budget.remaining < budget.budget * 0.25) {
    remainingDivHtml.classList.remove('alert-success', 'alert-warning');
    remainingDivHtml.classList.add('alert-danger');
  } else if (budget.remaining < budget.budget * 0.50) {
    remainingDivHtml.classList.remove('alert-success', 'alert-danger');
    remainingDivHtml.classList.add('alert-warning');
  } else {
    remainingDivHtml.classList.remove('alert-danger', 'alert-warning');
    remainingDivHtml.classList.add('alert-success');
  };
};

const showExpsenses = () => {
  clearHtml();

  budget.expenses.forEach(expense => {
    const { text, quantity, id } = expense;

    const newExpenseHtml = document.createElement('li');
    newExpenseHtml.className = 'list-group-item d-flex justify-content-between align-items-center';
    newExpenseHtml.innerHTML = `${text} <span class="badge badge-primary badge-pill">$${quantity}</span>`;

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn', 'btn-danger', 'borrar-gasto');
    buttonDelete.innerHTML = 'Borrar &times;';

    buttonDelete.onclick = () => {
      budget.deleteExpense(id);
      updateExpenseHtml();
      showExpsenses();
    };

    newExpenseHtml.appendChild(buttonDelete);
    expensesHtml.appendChild(newExpenseHtml);
  });
};

const clearHtml = () => {
  while (expensesHtml.firstChild) {
    expensesHtml.removeChild(expensesHtml.firstChild);
  }
}
const resteForm = () => {
  formHtml.reset();
  expsenseHtml.focus();
};

const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

document.addEventListener('DOMContentLoaded', () => {
  getBudget();
  updateExpenseHtml();
  formHtml.addEventListener('submit', addExpense);
});