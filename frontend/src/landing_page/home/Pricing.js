import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-4">
          <h1 className="mb-3">Unbeatable pricing</h1>

          <p className="text-muted">
            We offer simple, transparent, and affordable pricing with no hidden
            charges. Enjoy low brokerage fees and access to powerful trading
            tools designed for every type of investor.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-2"></div>

        {/* Right Section */}
        <div className="col-6">
          <div className="row g-4">

            <div className="col-6">
              <div className="border rounded-3 p-4 h-100 text-center shadow-sm pricing-card">
                <h1 className="fw-bold mb-2">₹0</h1>
                <p className="text-muted mb-0">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="border rounded-3 p-4 h-100 text-center shadow-sm pricing-card">
                <h1 className="fw-bold mb-2">₹20</h1>
                <p className="text-muted mb-0">
                  Intraday and F&amp;O trades
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .pricing-card {
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .pricing-card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default Pricing;