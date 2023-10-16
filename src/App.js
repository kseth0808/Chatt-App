import React from 'react'
import Register from './Components/Register'
import Home from './Components/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import First from './Components/First'
import Login from "./Components/Login"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
   </Routes>
   </Router>
    
  )
}

export default App
