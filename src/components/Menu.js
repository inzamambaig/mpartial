import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Menu = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(
    function () {
      listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (scrollState !== "not-top") {
            setScrollState("not-top");
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top");
          }
        }
      });
      return () => {
        document.removeEventListener("scroll", listener);
      };
    },
    [scrollState]
  );
  return (
    <nav
      className={
        scrollState === "top"
          ? "navbar navbar-expand-xl navbar-dark bg-transparent fixed-top"
          : "navbar navbar-expand-xl fixed-top white-bg anchor"
      }
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ml-auto">
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
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
