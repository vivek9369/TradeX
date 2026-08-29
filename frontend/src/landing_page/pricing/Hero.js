import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 border-bottom text-center'>
        <h1>Pricing</h1>
        <h3 className='text-muted fs-5'>Free equity investment and flat $20 intrady and F&O Trades</h3>
             </div>
              <div className='row p-5 mt-5'>

<div className='col-4 p-5 text-center'>  
    <img src='media/images/pricingEquity.svg'/> 
    <h1>Free Equity Delivery</h1>
    <p className='text-muted'>Invest in stocks for free with zero brokerage charges on equity delivery trades.</p>
</div>

<div className='col-4 p-5 text-center'> 
    <img src='media/images/intradayTrades.svg'/> 
    <h1>Intraday Trading</h1>
    <p className='text-muted'>Trade in equity intraday with a simple and transparent brokerage fee structure.</p>
</div>

<div className='col-4 p-5 text-center'>
    <img src='media/images/pricingEquity.svg'/> 
    <h1>Futures & Options</h1>
    <p className='text-muted'>Trade in Futures and Options with low brokerage charges and a transparent pricing model.</p>
</div>

      </div>
    </div>
  )
}

export default Hero