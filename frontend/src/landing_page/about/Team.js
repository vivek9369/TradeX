import React from 'react'

function Team() {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 mb-5 border-top'>
        <h1 className='text-center '>People</h1>
      </div>


      <div className='row p-5 mt-5 '>
        <div className='col-5'>
          <img src="media/images/ceo.png" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} alt="CEO" />
          <h5 className='mt-3 mb-0 fw-bold'>Arjun Mehta</h5>
          <p className='text-muted' style={{ fontSize: '0.95rem' }}>Founder &amp; CEO, TradeX</p>
        </div>
        <div className='col-5'>
          <p>
            Arjun Mehta is the Founder and CEO of TradeX, India's fastest-growing next-generation
            trading platform. With over 15 years of experience in fintech and capital markets,
            Arjun started TradeX with a single vision — to democratize investing for every Indian,
            from first-time retail investors to seasoned traders. Before founding TradeX, he led
            product and engineering teams at top financial institutions across Mumbai and Singapore.
            A passionate advocate for financial literacy, Arjun believes that technology, when built
            right, can eliminate the barriers that have kept millions away from wealth creation.
            Under his leadership, TradeX has grown to serve over 2 million active users in just
            three years.
          </p>
          <p className='mt-3 mb-2 text-muted' style={{ fontSize: '0.9rem' }}>Connect on :</p>
          <div className='d-flex gap-2 flex-wrap'>
            <a href="/" style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#386df5', padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Homepage</a>
            <a href="#tradingqna" style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#386df5', padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>TradingQnA</a>
            <a href="#twitter" style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#1da1f2', padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;