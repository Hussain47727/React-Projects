import React from 'react'
const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center p-3 bg-blue-300 '>
                <h1 className='text-green-700 font-extrabold text-3xl pointer hover:cursor-pointer'>LOGO</h1>
                <ul className='flex gap-7 pr-9 text-white font-medium'>
                    <a className='hover:text-black' href="#">Home</a>
                    <a className='hover:text-black' href="#">About</a>
                    <a className='hover:text-black' href="#">Blog</a>
                    <a className='hover:text-black' href="#">Contact</a>
                </ul>
            </nav>
        </div>
    )
}

export default Header
