import React from 'react';
import './Topsaver.css';
import whitearrow from './whitearrow.svg';
// import tito from './tito.jpg';

const Topsaver = () => {
  return (
    <div className='topsaver-card'>

        <div className='topsaver-left'>
            <h4>Meet the saver of the month!</h4>
            <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
            <a href='' id='topsaver-btn'><img src={whitearrow} alt=''/> <span>Meet Tito</span></a>

        </div>

        <div className='topsaver-right'>
            <div className='topsaver-img'>
           {/* <img src={tito} alt=''/> */}
            </div>

        </div>




    </div>
  )
}

export default Topsaver