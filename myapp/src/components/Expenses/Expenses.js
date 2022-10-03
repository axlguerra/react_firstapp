import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'

function Expenses(props) {
  return (
    <Card className='expenses'>

        <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} data={props.expenses[0].date} />
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} data={props.expenses[1].date} />
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} data={props.expenses[2].date} />
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} data={props.expenses[3].date} />
      
    </Card>
  )
}

export default Expenses
