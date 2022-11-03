import React from "react";
import "./Landing.css";
import CreateBtn from "../../components/CreateBtn/CreateBtn";
import GetIphone from "../../components/GetIphone/GetIphone";
import GetAndroid from "../../components/GetAndroid/GetAndroid";


import headerimage from './headerImg.png';
import investify from './investifycard.png';
import rect from './rect.png';
import rentcard from './myrentcard.png';

import lineDot from './lineDot.svg';
import cross from './cross.svg';
import circle from './circle.svg';



const Landing = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="left">

        
            <h1>The Better Way to Save & invest.</h1>
            <p>
              PiggyVest helps over 4 million customers achieve thier financial
              goals by helping them save and invest with ease
            </p>
            

            <div className="bttn">
            <CreateBtn text='Create free account'/>

            <div className="get-app">
              <GetIphone id='getiphone' />
              <GetAndroid id='getandroid' />
            </div>

            </div>

          </div>

          <div className="right">
         
            <img src={rect} id='rect' alt=""/>
            <img src={rentcard} id='rentcard' alt=""/>
            <img src={investify} id='investify' alt=""/>
            <img src={headerimage} id='headerimg' alt=""/>
          
            <img src={lineDot} id='lineDot' alt=""/>
            <img src={cross} id='cross' alt=""/>
            <img src={circle} id='circle' alt=""/>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
