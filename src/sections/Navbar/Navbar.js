import logo from "./logo.svg";
import React from "react";
import "./Navbar.css";
import piggy from "./piggy.png";
import safelock from "./safelock.png";
import target from "./target.png";
import flex from "./flex.png";

import CreateBtn from "../../components/CreateBtn/CreateBtn";
import SignBtn from "../../components/SignBtn/SignBtn";

import { HiBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar(props) {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className={props.scrollstate ? "header shadow" : "header"}>
      <div className="logo">
        <img src={logo} id="logo" alt="" />
      </div>

      <nav className={state ? "nav-links" : "nav-links active"}>
        <div className="sub-header">
          <a href="#" className="tooltip">
            Save
            <div className="save">
              <div className="image1">
                <img src={piggy} alt="" />
                <span className="grid-item piggybank">Piggybank</span>
              </div>
              <div className="image2">
                <img src={safelock} alt="" />
                <span className="grid-item safelock">Safelock</span>
              </div>
              <div className="image3 target">
                <img src={target} alt="" />
                <span className="grid-item ">Target Savings</span>
              </div>
              <div className="image4">
                {" "}
                <img src={flex} alt="" />
                <span className="grid-item flex">Flex Naira</span>
              </div>
            </div>
          </a>

          <a href="#">Invest</a>
          <a href="#">Stories</a>
          <a href="#">FaQs</a>
          <a href="#">Blog</a>
        </div>

        <div className="auth">
          <SignBtn id="signBtn" />
          <CreateBtn id="createBtn" text="Create free account" />
        </div>
      </nav>

      <div className="bar">
        <button className={state ? " show" : "hidden"} onClick={handleClick}>
          <HiBars3  />
        </button>
        <button className={state ? "hidden" : "show "} onClick={handleClick}>
          <FaTimes/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
