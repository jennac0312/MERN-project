import { useState } from 'react'
import './post.css'
import Reaction from '../reaction/Reaction'

const Post = ({  }) => {
    // only show trash can if post belongs to user

    const [ isHover, setIsHover ] = useState(false)

    const handleHover = () => {
        console.log('post hovered')
        // toggle add comment / like / dislike
        setIsHover(!isHover)
    }

  return (
    <div className='post' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        { isHover && <Reaction /> }
        <div className="left">
            <img src="" alt="" className='avi'/>
        </div>
        <div className="right">
            <div className="top">
                <p className='username'>agent @username</p>
                <p className="date">08/31/2023</p>
                <p className="delete hover">🗑️</p>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus doloremque unde neque doloribus quod voluptatem fuga praesentium autem voluptates, numquam enim tempore nam incidunt commodi reprehenderit deserunt porro a, ipsum nemo officia. Nulla quibusdam, iure magni non aliquam esse vero fugiat illum qui. Labore laboriosam cumque aut. Eos, voluptatibus?</p>
            </div>
        </div>
    </div>
  )
}

export default Post
