import React from 'react'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import Order from './Order'

const Summary = () => {
  return (
    <div className='summary-container'>
      <Holdings />
      <Positions />
      <Funds />
      <Order />
    </div>
  )
}

export default Summary
