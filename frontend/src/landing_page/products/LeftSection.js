import React from 'react'

function LeftSection({ imageUrl, productName, productDescription, tryDemo, lernMore, googlePlay, appStore }) {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-6 p-3'>
          <img src={imageUrl} alt={productName} style={{ width: '100%' }} />
        </div>
        <div className='col-6'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo} className='me-3'>Try Demo</a>
          <a href={lernMore} className='me-3'>Learn More</a>
          <div className='mt-3'>
            {googlePlay && <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg' alt='Google Play' style={{ height: '40px', marginRight: '10px' }} /></a>}
            {appStore && <a href={appStore}><img src='/media/images/appstoreBadge.svg' alt='App Store' style={{ height: '40px' }} /></a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
