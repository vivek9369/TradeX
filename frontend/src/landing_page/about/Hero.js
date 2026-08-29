import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 mb-5'>
        <h1 className='fs-4 text-center'>
          We pioneered the discount broking model in India.<br/> Now, we are breaking ground with our Technology.
        </h1>
      </div>


      <div className='row p-5 mt-5 border-top'>
        <div className='col-5'>
          <p>
            Zerodha is India's first discount broker, offering the lowest, most transparent
            brokerage rates in the industry. We charge zero brokerage on equity and mutual
            fund investments, and a flat fee across segments, helping traders and investors
            save more on every transaction. Since our founding, we've grown to become the
            largest stockbroker in the country by active client base, serving millions of
            traders and investors across every corner of India. Our mission has always been
            simple: make investing accessible, affordable, and transparent for everyone,
            regardless of how much capital they start with or how experienced they are.
          </p>
        </div>
        <div className='col-5'>
          <p>
            Since our inception, we've built everything in-house — from our trading platforms
            like Kite to our back-office and reporting systems. This lets us move fast, keep
            costs low, and pass those savings directly to our customers, all while maintaining
            complete control over reliability and security. Our engineering-first culture means
            we're constantly rethinking how financial infrastructure should work, rather than
            relying on legacy systems built by others. From algorithmic trading tools to
            intuitive mobile apps, every product we ship is designed around a single goal:
            giving our users the fastest, most reliable, and most cost-effective way to
            participate in the markets.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero