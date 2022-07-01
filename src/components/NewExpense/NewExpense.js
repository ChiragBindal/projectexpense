import React , {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isclicked , setClicked] = useState(false)
    const clickingBtn = () =>{
        setClicked(true);
    }
    const clickingCancelBtn = () => {
        setClicked(false);
    } 
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData , 
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setClicked(false);
    }



    return(
        <div className="new-expense">
            {!isclicked && <button onClick ={clickingBtn}>Add New Expense</button>}
            {isclicked && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {clickingCancelBtn}/>}
        </div>
    )
}

export default NewExpense;