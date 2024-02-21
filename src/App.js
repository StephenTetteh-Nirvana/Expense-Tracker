import './App.css';
import Balance from './components/Balance.js'
import IncomeExpenses from './components/IncomeExpenses.js'
import AddExpense from './components/AddExpense.js';


function App() {
  const transactions = [
    {
      id:3,
      transaction:"Food",
      amount:100
    },
    {
      id:5,
      transaction:"Vacation",
      amount:500
    },
    {
      id:8,
      transaction:"Movie",
      amount:50
    },
  ]
  return (
    <div className="App">
      <div className='transaction-container'>
          <h1>Expense Tracker</h1>
        <Balance/>
        <IncomeExpenses/>
        <AddExpense/>
      </div>
    
    </div>
  );
}

export default App;
