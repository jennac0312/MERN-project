import React from 'react'
import './circle.css'

const Circle = () => {

    const handleClick = () => {
        console.log('start new message clicked')
        // toggle new message page
            // list of all agents (with search at top?)
            // click one
            // toggle individual dm
    }

  return (
    <div className='hover circle' onClick={handleClick}>
      <p className='icon-40'>📤</p>
    </div>
  )
}

export default Circle
