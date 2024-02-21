import React from 'react'
import '../css/AddExpense.css'

const AddExpense = () => {
  return (
    <div className='new-transaction-container'>
        <h3>Add New Transaction</h3>

            <div className='transaction-section'>
                <label>Transaction</label><br/>
                <input type='text' placeholder='Enter Transaction Here'/>
            </div>

            <div className='amount-section'>
                <label>Amount</label><br/>
                <label>(negative-expense,positive-income)</label><br/>
                <input type='text' placeholder="0"/>
            </div>

       <button>Add Transaction</button>
    </div>
  )
}

export default AddExpense
