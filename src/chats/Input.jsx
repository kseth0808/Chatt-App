import React from 'react'
import Img from '../imgs/img.png'
import Attach from '../imgs/attach.png'


function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='type some' />
       <div className="send">
        <img src={Img} alt="" />
        <input type="file" style={{display: "none"}}/>
        <label htmlFor=" ">
          <img src={Attach} alt="" />
        </label>
         <button>send</button>
       </div>
    </div>
  )
}

export default Input
