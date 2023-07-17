import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenseItems.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  //when no expense condition
  let expenseContent = <p>No Expense Found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectValue={filteredYear}
        onFilterChange={onFilterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expense;
