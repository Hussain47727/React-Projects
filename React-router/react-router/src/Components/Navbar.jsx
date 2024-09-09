import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
