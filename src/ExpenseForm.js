import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmitExpense = (event) => {
    event.preventDefault();
    const expenseList = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseList);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onDisabledForm(false);
  };

  const onCancel = () => {
    props.onDisabledForm(false);
  };
  return (
    <form onSubmit={onSubmitExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label> Amount </label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label> Date </label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
        <div className="new-expense__controls">
          <button className="new-expense__actions" type="submit">
            Add Expense
          </button>
        </div>
        <div className="new-expense__controls">
          <button
            className="new-expense__actions"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
