import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenseItems[0]} />
      <ExpenseItem expense={props.expenseItems[1]} />
      <ExpenseItem expense={props.expenseItems[2]} />
    </Card>
  );
}

export default Expense;
