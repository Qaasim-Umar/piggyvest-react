import React from "react";
import "./Security.css";


import Securityimg from "./security.png";

const Security = (props) => {
  return (
    <div className='security'>
      <div className="security-container">
        <div className="security-image">
          <img src={Securityimg} alt="" />
        </div>
        <div className="security-text">
          <h4 className={props.scrollstate ? "security-h4 animation" : "security-h4"}>Your security is our priority</h4>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is comepletely protected from fraud.
          </p>
          <a href="">Learn more &gt; </a>
        </div>
      </div>
    </div>
  );
};

export default Security;
