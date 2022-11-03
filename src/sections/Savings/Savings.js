import React from "react";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import "./Savings.css";
import Card from "../../components/Card/Card";

import piggy from "../Navbar/piggy.png";
import safelock from "../Navbar/safelock.png";
import target from "../Navbar/target.png";
import flex from "../Navbar/flex.png";

import greenarrow from "./greenarrow.svg"
import bluearrow from "./bluearrow.svg"
import pinkarrow from "./pinkarrow.svg"
import lbluearrow from "./lbluearrow.svg"



const Savings = () => {
  return (

    <div className="saving-card">

      <div className="savings-left">

        <h4>4 ways to build your savings</h4>
        <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
        
        <CreateBtn id="savings-btn" text="Start Saving " />
      </div>

<div className="savings-grid right">

<Card h4='Automated Savings' p='Build a dedicated savings faster on your terms automatically or manually ' image1= {piggy} image2={bluearrow} span='piggybank ' id='' />
   
   <Card h4='Fixed Savings' p='Lock money away for a fixed duration with no access to it until maturity. It is like having a custom fixed deposit' image1={safelock} image2={lbluearrow} span='safelock' id=''/>
   
  <Card h4='Goal-oriented Savings' p='Reach all your saving goals faster. Save towards multiple goals on your own or with a group ' image1={target} image2={greenarrow} span='' id='Target Savings'/>
  
  <Card h4='Flexible Savings' p='save, transfer, withdraw, manage and organise your money free at any time ' image1={flex} image2={pinkarrow} span='Flex Naira' id='' />


</div>


    </div>
  );
};

export default Savings;
