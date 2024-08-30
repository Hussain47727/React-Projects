import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <h2>Navbar</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/israrhussain">contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
