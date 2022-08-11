import React, { useState } from 'react';
//import './style.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './ExpenseItem.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredData = props.item.filter(
    (x) => x.date.getFullYear().toString() == filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredData} />
        <ExpenseList items={filteredData}> </ExpenseList>
      </Card>
    </div>
  );
};

export default Expense;
