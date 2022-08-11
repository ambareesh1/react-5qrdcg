import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [disableForm, setdisableForm] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    debugger;
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const setTheFormDisable = () => {
    setdisableForm(false);
  };

  const showExpenseForm = () => {
    setdisableForm(true);
  };

  return (
    <div className="new-expense">
      {!disableForm && (
        <div className="new-expense__controls">
          <button
            className="new-expense__actions"
            type="button"
            onClick={showExpenseForm}
          >
            Add New Expense
          </button>
        </div>
      )}
      {disableForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onDisabledForm={setTheFormDisable}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
