import React, { useState } from 'react'; 
import avtar from "../imgs/addAvatar.png"
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";
import  { Auth }  from '../firebase';


function Register() {
  const [displayName, setDisplayName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit =  (e) =>{
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="formcontainer">
      <div className="formwrppe">
        <span className="logo"><h3>Lmma Chatt</h3></span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display Name' onChange={(e) => setDisplayName(e.target.value)} />
          <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <input style={{display: "none"}} type="file" className='file' />
          <label htmlFor='file'>
            <img src={avtar} alt="" />
            <p>Add an Avatar</p>
          </label>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
