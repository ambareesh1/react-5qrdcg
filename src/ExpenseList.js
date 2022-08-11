import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const ExpenseList = (props) => {
  let itemList = <h3 className="expenses-list__fallback"> DATA NOT FOUND </h3>;
  if (props.items.length > 0) {
    itemList = props.items.map((expense, index) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    });
  }

  return (
    <ul>
      <li className="expenses-list"> {itemList}</li>
    </ul>
  );
};

export default ExpenseList;
