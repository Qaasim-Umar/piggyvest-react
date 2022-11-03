import React from "react";
import "./Card.css";


const Card=({id, image1,image2, span, p, h4,}) => {
  return (
    <div className="card">

      <div id={id} className="inner-Card">

        <img src={image1} alt="Icon" />

        <h4>{h4}</h4>
        <p>{p}</p>

        <a class="plan-btn">
          <img src={image2}  id='coloricon' alt="Arrow icon" />
          <span >{span} </span>
        </a>
      </div>

    </div>
  );
};

export default Card;
