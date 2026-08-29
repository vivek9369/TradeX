import React from 'react'

const categories = [
  {
    icon: "fa fa-university",
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Trading Account",
      "Demat Account",
      "Account Services",
      "Account Verification",
      "KYC Registration",
      "Customer Support",
    ],
  },
  {
    icon: "fa fa-bar-chart",
    title: "Trading & Markets",
    links: [
      "Equity Trading",
      "F&O Trading",
      "Commodity Trading",
      "Currency Derivatives",
      "IPO Applications",
      "Mutual Funds",
      "SIP Orders",
      "Market Orders",
    ],
  },
  {
    icon: "fa fa-credit-card",
    title: "Funds & Payments",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "Payment Failure",
      "Bank Account Linking",
      "UPI Issues",
      "NEFT / RTGS Transfer",
      "Margin Funding",
      "Fund Settlement",
    ],
  },
  {
    icon: "fa fa-file-text",
    title: "Reports & Statements",
    links: [
      "Profit & Loss Report",
      "Tax P&L Statement",
      "Contract Notes",
      "Ledger Statement",
      "Holdings Report",
      "Trade History",
      "Annual Report",
      "Capital Gains",
    ],
  },
  {
    icon: "fa fa-lock",
    title: "Security & Login",
    links: [
      "Forgot Password",
      "Two-Factor Authentication",
      "Login Issues",
      "Account Locked",
      "Change Password",
      "Change Mobile Number",
      "Change Email ID",
      "Suspicious Activity",
    ],
  },
  {
    icon: "fa fa-cogs",
    title: "Platform & Technical",
    links: [
      "Kite Web Issues",
      "Kite Mobile Issues",
      "Order Execution Errors",
      "Chart & Indicators",
      "API Access",
      "GTT Orders",
      "Bracket Orders",
      "Platform Speed",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="fs-3 fw-semibold">
            To Create a Ticket, select a relevant topic
          </h2>
          <hr />
        </div>
      </div>

      <div className="row g-4">
        {categories.map((cat, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="p-4 border rounded-3 h-100 shadow-sm">
              <h5 className="mb-3 fw-semibold">
                <i className={cat.icon + " me-2"} aria-hidden="true"></i>
                {cat.title}
              </h5>
              <div className="d-flex flex-column gap-1">
                {cat.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{ textDecoration: "none", color: "#387ed1" }}
                    className="support-link"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .support-link {
          display: block;
          padding: 2px 0;
          font-size: 0.92rem;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .support-link:hover {
          color: #1a5fb4 !important;
          padding-left: 6px;
        }
      `}</style>
    </div>
  );
}

export default CreateTicket
