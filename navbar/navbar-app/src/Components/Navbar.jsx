import React, { useState } from 'react';
import '../Components/Navbar.css';

function Navbar() {
    const [navStatus, setnavStatus] = useState(false);
    return (
        <div>
            <nav>
                <div>
                    <h2>Logo</h2>
                </div>
                <ul>
                    <li><a href="#" className='active'>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <button onClick={() => setnavStatus(!navStatus)}>
                    {navStatus ? <span>x</span> : <span>&#9776;</span>}
                </button>
            </nav>
            <div className={`nav ${navStatus ? 'active' : ''}`}>
                <nav className="navPhone">
                    <ul>
                        <li><a href="#" className='active'>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
