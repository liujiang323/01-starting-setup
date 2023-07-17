import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShowingForm, setIsShowingForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsShowingForm(false);
  };

  const formShowupHandler = () => {
    setIsShowingForm(true);
  };

  const cancelFormHandler = (isFormShowing) => {
    setIsShowingForm(false);
  };

  return (
    <div className="new-expense">
      {isShowingForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={cancelFormHandler} />}
      {!isShowingForm && <button onClick={formShowupHandler}>Add New Expenses</button>}
    </div>
  );
};

export default NewExpense;
