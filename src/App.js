import './App.css';
import Balance from './components/Balance.js'
import IncomeExpenses from './components/IncomeExpenses.js'
import AddExpense from './components/AddExpense.js';
import History from './components/History.js';
import { useState } from 'react';

function App() {
  const [sources,setSources] = useState([
    {
      id:34,
      source:"Food",
      amount:40
    }
  ])

  const addNewSource = (newData) => {
        const updatedSources = [...sources,newData]
        setSources(updatedSources)
  }

  const deleteSource = (Id) =>{
      const updatedSources = sources.filter((source) => source.id !== Id)
      setSources(updatedSources)
  }

  return (
    <div className="App">
      <div className='transaction-container'>
          <h1>Expense Tracker</h1>
        <Balance sources={sources}/>
        <IncomeExpenses sources={sources}/>
        <h3 className='expense-history'>History</h3>
        {
          sources.length === 0 ? (
            <h2 className='empty-history'>Your History Is Empty</h2>
          ) : (
            <History sources={sources} delSource={deleteSource}/>
          )
        }
        
        <AddExpense newSource={addNewSource}/>
      </div>
    
    </div>
  );
}

export default App;
