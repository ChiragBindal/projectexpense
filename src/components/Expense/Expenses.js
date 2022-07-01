import React , { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
  const[filterYear , setYear] = useState('2022');
    const getFilterYear = (selectedYear) =>{
        setYear(selectedYear);
    }
   const filterExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
    });
    let expesesContent = <p>No expenses found.</p>;

    if(filterExpenses.length > 0){
      expesesContent = filterExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
    }
    return(
      <div>

     
        <Card className="expenses">
          <ExpenseFilter selected ={filterYear} onChangingYear ={getFilterYear}/>
          <ExpenseChart expenses = {filterExpenses} />
          {expesesContent}
        </Card>

       </div>
    )
}

export default Expenses;