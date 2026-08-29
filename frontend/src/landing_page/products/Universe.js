import React from 'react'

const partners = [
  {
    name: 'Smallcase',
    logo: '/media/images/smallcaseLogo.png',
    description: 'Invest in diversified, low-cost portfolios of stocks and ETFs based on themes, strategies, and ideas curated by experts.',
    learnMore: 'https://smallcase.com',
  },
  {
    name: 'Streak',
    logo: '/media/images/streakLogo.png',
    description: "Create, backtest, and deploy algo trading strategies without any coding. India's most popular algo platform for retail traders.",
    learnMore: 'https://streak.tech',
  },
  {
    name: 'Sensibull',
    logo: '/media/images/sensibullLogo.svg',
    description: "India's first and most advanced options trading platform. Find the best options strategies and trade smarter with confidence.",
    learnMore: 'https://sensibull.com',
  },
  {
    name: 'TradeX Fund House',
    logo: '/media/images/zerodhaFundhouse.png',
    description: 'A new-age asset management company offering innovative, low-cost passive funds and ETFs for long-term wealth creation.',
    learnMore: '#',
  },
  {
    name: 'GoldenPi',
    logo: '/media/images/goldenpiLogo.png',
    description: 'Buy bonds and fixed income securities online. Earn stable, predictable returns through government and corporate bonds.',
    learnMore: 'https://goldenpi.com',
  },
  {
    name: 'Ditto',
    logo: '/media/images/dittoLogo.png',
    description: 'Get unbiased insurance advice from certified advisors. Compare and buy the right health and term insurance plans hassle-free.',
    learnMore: 'https://joinditto.in',
  },
]

function Universe() {
  return (
    <div className='container my-5 py-4'>

      <div className='text-center mb-5'>
        <h1 style={{ fontWeight: '700' }}>The TradeX Universe</h1>
        <p className='text-muted mt-2' style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '8px auto 0' }}>
          Extend your trading and investment experience with our ecosystem of powerful partner platforms.
        </p>
      </div>

      <div className='row g-4'>
        {partners.map((partner) => (
          <div className='col-md-4' key={partner.name}>
            <div
              className='p-4 h-100 border rounded-3'
              style={{
                background: '#fff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.13)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'
              }}
            >
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ maxHeight: '50px', maxWidth: '160px', objectFit: 'contain' }}
                />
              </div>
              <p className='text-muted' style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                {partner.description}
              </p>
              <a
                href={partner.learnMore}
                style={{
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  color: '#387ed1',
                }}
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Universe
