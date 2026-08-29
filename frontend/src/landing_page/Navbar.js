import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#f4d5d522" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/Trade_X-logo.png"
            alt="TradeX Logo"
            style={{ width: "160px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-1">

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link
                className="btn btn-outline-secondary px-4"
                to="/login"
                style={{ borderRadius: "6px" }}
              >
                Login
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link
                className="btn btn-primary px-4"
                to="/signUp"
                style={{ borderRadius: "6px" }}
              >
                Sign Up
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;