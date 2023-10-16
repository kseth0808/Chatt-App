import React from 'react'
function Login() {
    return (
        <div className="formcontainer">
            <div className              ="formwrppe">
                <span className="logo"><h3>Lmma Chatt</h3></span>
                <span className="title">Login</span>y
                <form action="">
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input style={{display: "none"}} type="file" className='file'/>
                    <button>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Login
