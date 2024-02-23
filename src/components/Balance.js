import React, { useEffect, useState } from 'react'
import '../css/Balance.css'

const Balance = ({sources}) => {
  const [balance,setBalance] = useState(0)


  const updateBalance = () => {
    const reducer = sources.reduce((total,source)=> total + Number(source.amount),0)
    setBalance(reducer);
  };
  useEffect(()=>{
    updateBalance()
  })
  return (
    <div className='balance-container'>
      <p className='balance-title'>ACCOUNT BALANCE</p>
      <p className='balance'>${balance}.00</p>
    </div>
  )
}

export default Balance
