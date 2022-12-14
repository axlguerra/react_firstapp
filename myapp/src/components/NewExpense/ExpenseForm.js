import React, { useState } from 'react';

import "../NewExpense/NewExpense.css"





const ExpenseForm = (props) => { 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })


    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
            

        // })


        


        // setUserInput((prevState)=>{

        //         return {...prevState, enteredTitle: event.target.value};

        // });


    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
            

        // })
        
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
        };
    
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
      };

     return (     
     <form onSubmit={submitHandler} className="new-expense new-expense__controls">       
        <div className="new-expense__control">         
            <label>Title:</label>        
                 <input onChange={titleChangeHandler} value={enteredTitle} type="text" />      
         </div>       
         <div className="new-expense__control">         
            <label>Amount:</label>         
            <input onChange={amountChangeHandler} value={enteredAmount} type="number" min="0.01" step="0.01" />       
            </div>       
            <div className="new-expense__control">        
             <label>Date:</label>        
              <input  onChange={dateChangeHandler} value={enteredDate} type="date" min="2019-1-1" max="2021-1-1" />       
            </div>      
            
            <div className="new-expense__actions">         
                 <button  className="new-expense__button" type="submit">           Add Expense         </button>
                 <button type='button' onClick={props.onCancel}>Cancel</button>      
             </div>   

             </form>  
              ); 
            }; 
            
export default ExpenseForm;