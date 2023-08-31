import React from 'react'
import './message.css'

const Message = () => {
  return (
    <div className='message'>
      {/* <h1>message</h1> */}
      <div className="left">
        <img src="" alt="" className='avi'/>
      </div>
      <div className="right">
        <p className="username">agent @username</p>
        <div className="messageContents">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat obcaecati assumenda pariatur ducimus laudantium perspiciatis</p>
        </div>
      </div>
    </div>
  )
}

export default Message
