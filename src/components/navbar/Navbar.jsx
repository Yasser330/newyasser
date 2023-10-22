import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="mainnavbar">
        <nav className="nav">
          <div className="img">
          <NavLink to="/"><img src="./images/logo.png" alt=""/></NavLink>
          </div>
          <div className="links">
            <ul>
              <li className="homenav">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/ourstory">Our Story</NavLink>
              </li>
              <li className="productnav">
                <NavLink to="/productsandservices">Products & Services</NavLink>
              </li>
              <li className="newsnav">
                <NavLink to="/news">News</NavLink>
              </li>
              <li className="contact">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer">
          <footer>
            <div className="logo">
            <img src="./images/logo.png" alt="" />
            </div>
            <div className="rights">
              <h4> 2023, All rights reserved</h4>
            </div>
            <div className="endnav">
              <h1>Company</h1>
              <ul>
              <li className="homenav2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Ourstory">Our Story</NavLink>
              </li>
              <li className="productnav2">
                <NavLink to="/Productsandservices">Products & Services</NavLink>
              </li>
              <li className="newsnav2">
                <NavLink to="/News">News</NavLink>
              </li>
              <li className="contactend">
                <NavLink to="/Contact">Contact Us</NavLink>
              </li>
              </ul>
            </div>
            <div className="newsletter">
            <h1>Join our newsletter</h1>
            <p>Subscribe to our newsletter for the latest insights and trends in the fertilizer industry, boosting your agricultural knowledge</p>
            <div className="subscribe">
              <NavLink to="https://www.linkedin.com/company/supreme-chemical/"> <i class="fa-brands fa-linkedin"></i></NavLink>
              <NavLink to="https://www.linkedin.com/company/supreme-chemical/"><button>Follow</button></NavLink>
            </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

<></>;
export default Navbar;
