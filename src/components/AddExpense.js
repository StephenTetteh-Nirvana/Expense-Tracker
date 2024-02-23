import React,{useState} from 'react'
import '../css/AddExpense.css'

const AddExpense = ({newSource}) => {

     const [transaction,setTransaction] = useState('')
     const [amount,setAmount] = useState('')

     const newExpenseData = () => {
      const id = Math.floor(Math.random() * 100)
       if( transaction && amount){
        const newData = {
          id:id,
          source:transaction,
          amount:amount
         }
         setTransaction('')
         setAmount('')
         newSource(newData)
       }
       else{
        alert("Please add transaction and amount")
       }
     }

     


  return (
    <div className='new-transaction-container'>
        <h3>Add New Transaction</h3>

            <div className='transaction-section'>
                <label>Transaction</label><br/>
                <input type='text' 
                placeholder='Enter Transaction Here'
                value={transaction}
                onChange={(e)=>setTransaction(e.target.value)}
                />
            </div>

            <div className='amount-section'>
                <label>Amount</label><br/>
                <label>(negative-expense,positive-income)</label><br/>
                <input type='number' 
                placeholder="0"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>

       <button onClick={newExpenseData}>Add Transaction</button>
    </div>
  )
}

export default AddExpense
