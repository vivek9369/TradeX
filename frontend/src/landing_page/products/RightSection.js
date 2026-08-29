import React from 'react'

function RightSection({ imageUrl, productName, productDescription, tryDemo, lernMore }) {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-6'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo} className='me-3'>Try Demo</a>
          <a href={lernMore}>Learn More</a>
        </div>
        <div className='col-6 p-3'>
          <img src={imageUrl} alt={productName} style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default RightSection
