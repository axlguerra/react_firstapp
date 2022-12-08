import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },




];

function App() {

 const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expense])
    setExpenses((prevExpenses)=>{

      return [expense, ...prevExpenses]

    })
  }

  return (
    <div> 
      <NewExpense onAddExpense= {addExpenseHandler} />

      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} data={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} data={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} data={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} data={expenses[3].date} /> */}

      <Expenses expenses={expenses}/>


    </div>
    
  );
}

export default App;
