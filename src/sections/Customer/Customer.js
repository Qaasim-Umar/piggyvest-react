import React from "react";
import "./Customer.css";

import damilola from "./damilola.jpg";
import joseph from "./joseph.jpeg";
import micheal from "./micheal.jpeg";
import tobenna from "./tobenna.jpeg";

import CreateBtn from "../../components/CreateBtn/CreateBtn";
import GetIphone from "../../components/GetIphone/GetIphone";
import GetAndroid from "../../components/GetAndroid/GetAndroid";

const Customer = () => {
  return (
    <div className="customers-card">
      <div id="customers">
        <div className="customer-container">
          <div className="reviews">
            <div className="reviews-box">
              <div className="review-single">
                <p className="date">
                  {" "}
                  Thursday, 6th of October 2022 by 11:42 AM
                </p>
                <div className="review-content">
                  <img src={micheal} alt="customer" className="profile" />
                  <div className="review-text">
                    <span className="review-name">Micheal F</span>
                    <p>
                      I just joined tho and I believe piggyVest won't disappoint
                      me
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-single">
                <p className="date">Tuesday, 4th of October 2022 by 18:01 PM</p>
                <div className="review-content">
                  <img src={damilola} alt="customer" className="profile" />
                  <div className="review-text">
                    <span className="review-name">Oluwadamilola A</span>
                    <p>
                      PiggyVest was introduced to me some years back and I have
                      been able to save multiple millions over the years. I look
                      forward to more from Piggyvest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-single">
                <p className="date">
                  Saturday, 24th of September 2022 by 19:58 PM
                </p>
                <div className="review-content">
                  <img src={joseph} alt="customer" className="profile" />
                  <div className="review-text">
                    <span className="review-name">Joseph A</span>
                    <p>
                      Piggvest has helped me with buying my new iPhone and it is
                      the most reliable ap
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-single">
                <p className="date">
                  Thursday, 6th of October 2022 by 11:42 AM
                </p>
                <div className="review-content">
                  <img src={tobenna} alt="customer" className="profile" />
                  <div className="review-text">
                    <span className="review-name">Tobenna A</span>
                    <p>
                      Thanks to piggyvest I've saved enough money to start up a
                      really large business
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-single">
                <p className="date">
                  {" "}
                  Thursday, 6th of October 2022 by 11:42 AM
                </p>
                <div className="review-content">
                  <img src={micheal} alt="customer" className="profile" />
                  <div className="review-text">
                    <span className="review-name">Micheal F</span>
                    <p>
                      I just joined tho and I believe piggyVest won't disappoint
                      me
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-single">
                <p className="date">Tuesday, 4th of October 2022 by 18:01 PM</p>
                <div className="review-content">
                  <img src={damilola} alt="customer" className="profile" />
                  <div className="review-text">
                    <span className="review-name">Oluwadamilola A</span>
                    <p>
                      PiggyVest was introduced to me some years back and I have
                      been able to save multiple millions over the years. I look
                      forward to more from Piggyvest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="customer-left">
        <h4>4 Million + customers</h4>
        <p>
          Since launching in 2016, over 4,000,000 people have used PiggyVest to
          manage their money better, avoid over-spending and be more
          accountable.
        </p>
        <CreateBtn text="Create free account " id="customer-c-btn" />
        <div className="customer-get-btn">
          <GetIphone />
          <GetAndroid />
        </div>
      </div>
    </div>
  );
};

export default Customer;
