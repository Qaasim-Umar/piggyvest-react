import React from 'react'
import './Featured.css'

import guardian from './guardian.png'
import techcrunch from './techcrunch.png'
import techpoint from './techpoint.png'


const Featured = () => {
  return (
    <div className='featured-card'>

        <div className='featured-left'>
            <h4>As featured in</h4>


        </div>

        <div className='featured-right'>

            <img src={techpoint} alt='techpoint-img'/>
            <img src={guardian} alt='theguardian-img'/>
            <img src={techcrunch} alt='techcrunch-img'/>


        </div>






    </div>
  )
}

export default Featured