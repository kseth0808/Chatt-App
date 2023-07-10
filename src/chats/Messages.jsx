import React from 'react'
import img from '../imgs/photo_6273840793387120073_y.jpg'

function Messages() {
  return (
    <div className='message owner'>
      <div className="messageinfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messagecontent">
        <p>hello</p>
        <img src={img} alt="" />
      </div>
    </div>
    )
}

export default Messages
