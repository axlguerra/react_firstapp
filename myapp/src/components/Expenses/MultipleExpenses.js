import React from 'react'
import "./Expenses.css"
import ExpenseDate from './ExpenseDate'

function MultipleExpenses(props) {


    return (

        <div className='expenses'>

             

             {props.data.map((item)=>{

                return(

                <div className='expense-item'>

                    <ExpenseDate data={item.date}></ExpenseDate>

                    <h2>{item.title}</h2>

                    <div className='expense-item__price'> {item.amount} </div>
                    

                </div>
                )
            })}

            

           

             

        </div>

       
    )
           

        }

export default MultipleExpenses
