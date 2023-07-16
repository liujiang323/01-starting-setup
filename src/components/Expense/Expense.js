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
      <ExpenseItem expense={props.expenseItems[0]} />
      <ExpenseItem expense={props.expenseItems[1]} />
      <ExpenseItem expense={props.expenseItems[2]} />
    </Card>
  );
}

export default Expense;
