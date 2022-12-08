import React, {useState} from 'react'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from './ExpensesList'
import ExpensesCharts from './ExpensesCharts'

function Expenses(props) {

  const [enteredYear, setEnteredYear]=useState("2020");




  const filterChangeHandler = (selectedYear)=>{

    setEnteredYear(selectedYear)



  };

  const filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()===enteredYear
  })


  let expenseContent =  <p> No expenses found. </p>;

  // if(filteredExpenses.length > 0){

  //   expenseContent =  filteredExpenses.map((expense) => (
      
  //     <ExpenseItem
  //       key ={expense.id}
  //       title={expense.title} 
  //       amount={expense.amount} 
  //       data={expense.date}
  //     />
  //        ))



  // }

  return (

    
    <div>

      


    
      <Card className='expenses'>

      <ExpenseFilter defaultSelected={enteredYear} onFilterChange={filterChangeHandler}/>
      <ExpensesCharts expenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 &&  <p> No expenses found. </p>  }
      
      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
      
          <ExpenseItem
            key ={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            data={expense.date}
          />
             ))
      } */}

      {/* {expenseContent} */}
      <ExpensesList items={filteredExpenses}/>




      

        
      </Card>
    </div>
  )
}

export default Expenses
