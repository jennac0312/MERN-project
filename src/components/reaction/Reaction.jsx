import React from 'react'
import './reaction.css'

const Reaction = () => {

  // pass post prop to identify post
  
  const handleLike = () => {

  }

  const handleDislike = () => {

  }

  const handleReply = () => {

  }

  return (
    <div className='reaction'>
      <p className="like hover icon-20" onClick={handleLike}>👍</p>
      <p className="dislike hover icon-20" onClick={handleDislike}>👎</p>
      <p className="reply hover icon-20" onClick={handleReply}>⤵️</p>
    </div>
  )
}

export default Reaction
