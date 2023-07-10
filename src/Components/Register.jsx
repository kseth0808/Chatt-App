import React, { useState } from 'react';
import avtar from '../imgs/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Register() {
    const [error, seterror]= useState(false);
  const helloSubmit = async(e) => {
    e.preventDefault();
    const yName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        
           
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (error) => {
    // Handle unsuccessful uploads
  seterror(true)}, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{})
    });
  }
);
    }
    catch(err){
        seterror(true)
    }

  return (
    <div className="formcontainer">
      <div className="formwrppe">
        <span className="logo">Lmma Chatt</span>
        <span className="title">Register</span>
        <form onSubmit={helloSubmit}>
          <input type="text" placeholder='text' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{ display: "none" }} type="file" className='file' />
          <label htmlFor='file'>
            <img src={avtar} alt="" />
            <p>Add an Avatar</p>
          </label>
          <button type="submit">Signup</button>
          {error && <span>something went wrong</span>}
        </form>
        <p>You don't have an account? Login</p>
      </div>
    </div>
  );
}
}
export default Register;