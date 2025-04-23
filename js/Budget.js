class Budget {

  constructor(presupuesto) {
    this.budget = presupuesto;
    this.remaining = presupuesto;
    this.expenses = [];
  };

  addExpense(expense) {
    this.expenses = [...this.expenses, expense];
    this.updateRemaining();
  };

  deleteExpense(id) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
    this.updateRemaining();
  };

  updateRemaining() {
    this.remaining = this.budget - this.expenses.reduce((total, expense) => total + expense.quantity, 0);
  };
}

export default Budget;