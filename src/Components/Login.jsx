import React from 'react'
import avtar from '../imgs/addAvatar.png'

function Register() {
  return (
     <div className="formcontainer">
        <div className="formwrppe">
            <span className="logo">Lmma Chatt</span>
            <span className="title">Login</span>
            <form action="">
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display: "none"}} type="file" className='file'/>
            <label htmlFor='file'>
                <img src={avtar} alt="" />
                <p>Add an Avtar</p>
            </label>
            <button>Signup</button>
            </form>
            <p>You dont have an account? Register</p>
        </div>
     </div>
)
}

export default Register
