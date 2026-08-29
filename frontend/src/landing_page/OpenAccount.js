import React from 'react'
import { Link } from 'react-router-dom'

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">

        <div className="col-12">
          <h1 className="fw-bold">Invest in Everything</h1>

          <p className="fs-5 text-muted mx-auto col-lg-6 col-md-8 col-11">
            Invest smarter, grow your wealth, and achieve your financial goals.
          </p>

          <Link to="/signUp" className="btn btn-primary btn-lg px-5 mt-3 mb-5">
            Sign Up Now
          </Link>
        </div>

      </div>
    </div>
  )
}

export default OpenAccount
