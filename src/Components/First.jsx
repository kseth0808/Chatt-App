import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function First() {
    const navigate = useNavigate();
    const login = () =>{
        navigate("/Login")
    }
    const newuser = ()=>{
        navigate("/Register")
    }
    useEffect(() => {
        AOS.init();
      }, []);
      
  return (
    <div className='main'>
         Chatting App
        <div className="btn" data-aos="zoom-in">
      <button className='login' onClick={login}>Login</button>
      <button className = 'newuser' onClick={newuser}>New User</button>
      </div>
    </div>
  )
}

export default First
