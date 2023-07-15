import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";

function Expense(props) {
  return (
    <Card className="expenses">
      {props.expenseItems.map(item => (<ExpenseItem expense={item} />))}
    </Card>
  );
}

export default Expense;
