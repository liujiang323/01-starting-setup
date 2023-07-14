import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.dateTime.toLocaleString("en-US", { month: "long" });
  const year = props.dateTime.getFullYear();
  const day = props.dateTime.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
