import React, { useState } from 'react';
import './style.css';
import Expense from './Expense';
import NewExpense from './NewExpense';

let expenseItems = [
  {
    id: 1,
    title: 'Credit Card',
    amount: 220,
    date: new Date(),
  },
  {
    id: 2,
    title: 'Travel',
    amount: 420,
    date: new Date(),
  },
  {
    id: 3,
    title: 'Medical Expense',
    amount: 120,
    date: new Date(),
  },
  {
    id: 4,
    title: 'Mutual Funds',
    amount: 2220,
    date: new Date(),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(expenseItems);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}> </NewExpense>

      <Expense item={expenses} />
    </div>
  );
};
export default App;
