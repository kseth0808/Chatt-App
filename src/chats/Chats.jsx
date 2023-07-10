import React from 'react'
import Cam from '../imgs/cam.png'
import add from'../imgs/add.png'
import more from '../imgs/more.png'
import Message from './Message'
import Input from './Input'

function Chats() {
  return (
    <div className='chatt'>
      <div className="chatInfo">
        <span>Jand</span>
        <div className="chatIcon">
        <img src={Cam} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
        </div>
      </div>
      <Message/>
      <Input/>
    </div>
  )
}

export default Chats
