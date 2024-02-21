import React from 'react'
import '../css/IncomeExpenses.css'

const IncomeExpenses = () => {
  return (
    <div className='parent-container'>
      <div className='income-section'>
        <h3>INCOME</h3>
        <p>$200.00</p>
      </div>
      <span></span>
      <div className='expense-section'>
        <h3>EXPENSE</h3>
        <p>$50.00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
