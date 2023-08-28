import React from 'react'
import "./error.css"

const Error = ( { message } ) => {
  return (
    <div className='error'>
      <p>{message}</p>
    </div>
  )
}

export default Error
