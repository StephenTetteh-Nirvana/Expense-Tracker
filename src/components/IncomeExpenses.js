import React, { useEffect, useState } from 'react'
import '../css/IncomeExpenses.css'

const IncomeExpenses = ({sources}) => {
     
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)

  const updateIncomeExpenses = () => {
    const { income, expense } = sources.reduce((acc, source) => {
      if (source.amount > 0) {
        acc.income += Number(source.amount);
      } else {
        acc.expense += Math.abs(source.amount);
      }
      return acc;
    }, { income: 0, expense: 0 });

    setIncome(income);
    setExpense(expense);
  };


   useEffect(()=>{
    updateIncomeExpenses()   
  })

  return (
    <div className='parent-container'>
      <div className='income-section'>
        <h3>INCOME</h3>
        <p>${income}.00</p>
      </div>
      <span></span>
      <div className='expense-section'>
        <h3>EXPENSE</h3>
        <p>${expense}.00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
