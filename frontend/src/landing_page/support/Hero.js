import React from 'react'

function Hero() {
  return (
    <section className='container-fluid' id='support'>
      <div className='p-5' id='supportWrapper'>
        <h3>Support Portal</h3>
        <a href='#' style={{ color: 'white', fontWeight: '500' }}>Track Ticket</a>
      </div>

      <div className='row p-5'>
        <div className='col-12 col-md-6 p-5'>
          <h1 style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '1rem' }}>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <div className='d-flex mb-3' style={{ maxWidth: '500px' }}>
            <input
              className='form-control me-2'
              placeholder='Eg. How do I open a Demat Account?'
              style={{ borderRadius: '6px' }}
            />
            <button className='btn btn-light' style={{ whiteSpace: 'nowrap' }}>
              Search
            </button>
          </div>

          <div className='d-flex flex-column gap-2 mt-3'>
            <a href='#' style={{ color: 'white', textDecoration: 'none' }}>📂 Track account opening</a>
            <a href='#' style={{ color: 'white', textDecoration: 'none' }}>📂 Track segment activation</a>
            <a href='#' style={{ color: 'white', textDecoration: 'none' }}>📂 Intraday margins</a>
            <a href='#' style={{ color: 'white', textDecoration: 'none' }}>📂 Kite user manual</a>
          </div>
        </div>

        <div className='col-12 col-md-6 p-5'>
          <h2 className='fs-4 fw-semibold mb-3'>⭐ Featured</h2>
          <div className='d-flex flex-column gap-2'>
            <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              📌 Current takeovers and Delisting – JAN 2026
            </a>
            <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              📌 Latest Intraday leverages – MIS &amp; CO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero