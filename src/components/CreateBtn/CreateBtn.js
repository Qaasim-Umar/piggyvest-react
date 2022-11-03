import React from 'react'
import './CreateBtn.css'

const CreateBtn = ({id, text}) => {
  return (
    <div className='btn' id={id}> <a href=''>{text}</a>  </div>
  )
}

export default CreateBtn