import React from 'react'
import './Investment.css'


import invest from './invest.png'
import circle from './circle.svg'
import cross from '../Landing/cross.svg'
import lineDot from '../Landing/lineDot.svg'

const Investment = () => {
  return (

    <div className='investment-card'>

<div className=' left'>
        <div className='investment-image'>
            <img src={invest} id='invest-img' alt=''/>
            <img src={cross} id='crossicon' alt=''/>
            <img src={lineDot} id='lineicon' alt=''/>
            <img src={circle} id='circleicon' alt=''/>


        </div>
        </div>

        <div className='investment-image right'>

            <span>Up To 25% Returns</span>
            <h4>Access investment opportunities</h4>
            <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
            <a href=''>Learn more about Investments &gt;</a>

        </div>





    </div>
  )
}

export default Investment