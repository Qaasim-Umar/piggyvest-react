import React from 'react'
import './GetAndroid.css';
import google from './google-icon.svg'

const GetAndroid = ({id}) => {
  return (
    <div className='android-btn' id={id}><img src={google} alt=''/><a href=''>Get on Android </a> </div>
  )
}

export default GetAndroid