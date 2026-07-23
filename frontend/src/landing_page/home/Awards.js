import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Stock Broker"
            className="img-fluid"
          />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker in India</h1>

          <p className="mb-5">
            India's largest stock broker, trusted by millions for seamless
            investing in stocks, mutual funds, ETFs, and more.
          </p>

          <div className="row mt-4">
            <ul className="col-6">
              <li>
                <p>Futures and Options</p>
              </li>
              <li>
                <p>Commodity derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </ul>

            <ul className="col-6">
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct Mutual Funds</p>
              </li>
              <li>
                <p>Bonds and Government Securities</p>
              </li>
            </ul>
          </div>
          <img  src='media/images/pressLogos.png'/>
        </div>
      </div>
    </div>
  );
}

export default Awards;