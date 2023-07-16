import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const changeTitleHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value};
    //     });
    // };

    // const changePriceHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount: event.target.value};
    //     });
    // };

    // const changeDateHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredDate: event.target.value};
    //     });
    // };

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };
    
    const changePriceHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    };

    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={changeTitleHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={changePriceHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2024-01-01' onChange={changeDateHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;