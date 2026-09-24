import React from 'react'

function Hero() {
  return (
    
    <div className='continer'>
      <div className='text-center mt-5'>
   <h1>Technology</h1>
   <h3 className='text-muted mt-3'>Sleek, mordern and intutive trading platform</h3>
   <p className='mt-3'>Check out our {""} 
    <a href="#investment" style={{textDecoration: "none"}}>
      investment offering {" "}
    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
    </a>
    </p>
    </div>
    </div>
  )
}

export default Hero
