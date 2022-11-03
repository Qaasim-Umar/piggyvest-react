import React from 'react'
import './GetIphone.css';
import apple from './apple-icon.svg'

const GetIphone = ({id}) => {
  return (
    <div className='iphone-btn' id={id}> <img src={apple} alt=''/><a href=''>Get on iphone </a> </div>
  )
}

export default GetIphone