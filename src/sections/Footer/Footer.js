import React from "react";
import "./Footer.css";

import compliance from "./compliance.webp";
import logo from "../Navbar/logo.svg";

import { FaFacebookSquare , FaTwitterSquare, FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-flex">
        <div className="footer-img">
          <img src={logo} id='footer-logo' alt="logo" />
          <img src={compliance} id='compliance' alt="compliance-img" />
        </div>
        <div className="two-grid">
          <div>
            <ul>
              <h5>Products</h5>
              <li>Piggybank</li>
              <li>Invest</li>
              <li>Safelock</li>
              <li>Target Savings</li>
              <li>Flex Naira</li>
            </ul>
          </div>
          <div>
            <ul>
              <h5>Company</h5>
              <li>About</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <h5>Legal</h5>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="social-icons">
          <FaFacebookSquare id="facebook" />
         <FaTwitterSquare id="twitter"/>
         <FaInstagramSquare id="instagram"/>
          </div>
        <div className="address">
          <p>
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </p>
          <p>contact@piggyvest.com</p>
          <p>+234 700 933 933 933</p>
        </div>
      </div>
      <div className="footer-about">
        <p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
        <a href='' >2016 - 2022 PiggyTech Global Limited - RC 1405222</a>
      </div>
    </div>
  );
};

export default Footer;
