import React from 'react'
import Navbar from '../chats/Navbar'
import Searchbar from '../chats/Searchb'
import Chatt from '../chats/Chatt'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Searchbar/>
      <Chatt/>
    </div>
  )
}

export default Sidebar
