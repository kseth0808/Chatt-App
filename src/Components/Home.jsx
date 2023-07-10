import React from 'react'
import Sidebar from '../chats/Sidebar'
import Chats from '../chats/Chats'

function Home() {
  return (
    <div className="home">
    <div className="container">
     <Sidebar/>
     <Chats/>
    </div>
    </div>
  )
}

export default Home
