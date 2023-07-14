import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.item[0]} />
      <ExpenseItem expense={props.item[1]} />
      <ExpenseItem expense={props.item[2]} />
      <ExpenseItem expense={props.item[3]} />
    </Card>
  );
}

export default Expense;
