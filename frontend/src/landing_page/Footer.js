import React from 'react'

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <style>
        {`
          .footer-link {
            display: block;
            margin-bottom: 10px;
            color: inherit;
            text-decoration: none;
          }

          .footer-link:hover {
            color: rgb(41, 98, 255);
            text-decoration: underline;
          }
        `}
      </style>

      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img
              src="/media/images/Trade_X-logo.png"
              alt="Logo"
              style={{ width: "150px" }}
            />
            <p>@2010, Trade X Broking Ltd. All rights reserved.</p>
          </div>

          <div className='col'>
            <p>Company</p>
            <a href='' className='footer-link'>About</a>
            <a href='' className='footer-link'>Product</a>
            <a href='' className='footer-link'>Pricing</a>
            <a href='' className='footer-link'>Referral Programme</a>
            <a href='' className='footer-link'>Careers</a>
            <a href='' className='footer-link'>Trade X.Tech</a>
            <a href='' className='footer-link'>Press & Media</a>
            <a href='' className='footer-link'>Trade X</a>
          </div>

          <div className='col'>
            <p>Support</p>
            <a href='' className='footer-link'>Contact</a>
            <a href='' className='footer-link'>Support Portal</a>
            <a href='' className='footer-link'>Trade X Connect blog</a>
            <a href='' className='footer-link'>List of Charges</a>
            <a href='' className='footer-link'>Download & Resources</a>
          </div>

          <div className='col'>
            <p>Account</p>
            <a href='' className='footer-link'>Open an Account</a>
            <a href='' className='footer-link'>Fund transfer</a>
            <a href='' className='footer-link'>60 day challenge</a>
          </div>
        </div>

        <div className='mt-5 text-muted' style={{ fontSize: "16px" }}>
          <p>
            Trade X Broking Ltd.: Member of NSE & BSE ⚊ SEBI Registration no.: INZ000031633
            CDSL: Depository services through Trade X Securities Pvt. Ltd. ⚊ SEBI Registration no.:
            IN-DP-100-2015 Commodity Trading through Trade X Commodities Pvt. Ltd. MCX: 46025 ⚊ SEBI
            Registration no.: INZ000038238 Registered Address: Trade X Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru –
            560078, Karnataka, India. For any complaints pertaining to securities broking please
            write to complaints@tradex.com, for DP related to dp@tradex.com. Please ensure you
            carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory
            details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read all the related
            documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs
            with your stock brokers. Receive information of your transactions directly from Exchange
            on your mobile/email at the end of the day. Issued in the interest of investors as a
            one time exercise while dealing in securities markets – once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear Investor, MTF/Margin
            subscribing to an IPO, there is no need to issue a cheque. Please write your bank account
            number and sign the IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your bank account.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer