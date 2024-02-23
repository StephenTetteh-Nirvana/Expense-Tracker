import React from 'react'
import '../css/History.css'

const History = ({sources,delSource}) => {
  return (
    <div className='history-container'>
      {
          sources.map((source)=>(
            <div onClick={() => delSource(source.id)} className={source.amount > 0 ? "income" : "expense"} key={source.id}>
                <p>{source.source}</p>
                <p>{source.amount}$</p>
            </div>
          ))
      }
    </div>
  )
}

export default History;
