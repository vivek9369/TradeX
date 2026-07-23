import React from 'react';

const Hero = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">

        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero image"
            className="img-fluid mb-5"
          />
        </div>

        <div className="col-12">
          <h1 className="fw-bold">Invest in Everything</h1>

          <p className="fs-5 text-muted mx-auto col-lg-6 col-md-8 col-11">
            Invest in stocks, mutual funds, ETFs, and more with ease.
          </p>

          <button className="btn btn-primary btn-lg px-5 mt-3 mb-5">
            Sign Up Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;