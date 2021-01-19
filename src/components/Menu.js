import React from "react";
import logo from "../assets/images/logo.png";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Ground-Truth Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fee Structure
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Example Deliverables
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Submission Portal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" class="btn btn-primary">
                  Sign In
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
