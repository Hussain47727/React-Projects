import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center p-3 bg-blue-300 '>
                <h1 className='text-green-700 font-extrabold text-3xl pointer hover:cursor-pointer'>LOGO</h1>
                <ul className='flex gap-7 pr-9 text-white font-medium'>
                    <Link className='hover:text-black' to="/">Home</Link>
                    <Link className='hover:text-black' to="/about">About</Link>
                    <Link className='hover:text-black' to="/blog">Blog</Link>
                    <Link className='hover:text-black' to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
