import React from 'react'

function Stats() {
  return (
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-2 mb-5'>Trust with Confidence</h1>

          <h2 className='fs-4'>Customer-first always</h2>
          <p className='text-muted'>
            That's why 1.3+ crore customers trust TradeX with over ₹3.5 lakh crore
            worth of equity investments.
          </p>

          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='text-muted'>
            No unnecessary calls, hidden charges, or misleading promotions.
            Just a transparent platform designed for investors and traders.
          </p>

          <h2 className='fs-4'>Simple and transparent pricing</h2>
          <p className='text-muted'>
            Enjoy low brokerage fees with zero hidden costs, making investing
            affordable for everyone.
          </p>

          <h2 className='fs-4'>Powerful technology</h2>
          <p>
            Experience lightning-fast order execution, real-time market data,
            and advanced charting tools for smarter trading decisions.
          </p>

          <h2 className='fs-4'>Secure and reliable</h2>
          <p className='text-muted'>
            Your investments and personal data are protected with industry-leading
            security practices and trusted infrastructure.
          </p>
        </div>

        <div className='col-6 p-5'>
          <img
            src='media/images/ecosystem.png'
            style={{ width: "100%" }}
            alt="TradeX Ecosystem"
          />
          <div className='text-center'>
            <a href="#products" style={{textDecoration: "none"}} className='mx-5'>Explore our product <i className="fa-solid fa-arrow-right"></i>
          </a>
            <a href="#try-kite" style={{textDecoration: "none"}}>Try Kite <i className="fa-solid fa-arrow-right"></i>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats