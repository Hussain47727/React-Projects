import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between p-4 bg-blue-400 items-center'>
        <h1 className='font-extrabold text-2xl cursor-pointer'>LOGO</h1>
        <ul className='flex gap-7 pr-8'>
            <Link to="#">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
