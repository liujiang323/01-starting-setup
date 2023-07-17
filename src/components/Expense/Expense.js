import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expense(props) {
  const[filteredYear, setFilteredYear] = useState('2020');
  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selectValue={filteredYear} onFilterChange={onFilterChangeHandler} />
      {props.expenseItems.filter(item => (item.date.getFullYear().toString() === filteredYear))
      .map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
  );
}

export default Expense;
