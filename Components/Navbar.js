"use client";
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';
import './Style/Navbar.css';

const Navbar = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
        console.log(isChecked ? 'Switch is OFF' : 'Switch is ON');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav>
                <div className='logo'>
                    <div className='logoH'>Notes</div>
                    <div className='logoF'>
                        <div className='logoF1'>
                            <label className="switch">
                                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className='logoF2'>N</div>
                    </div>
                </div>
                <div className='menu'>
                    <Link href='Home' className='links'>Home</Link>
                    <Link href='About' className='links'>About</Link>
                    <Link href='https://forms.gle/9vXyyTC5Zo3T1RLa7' className='links'>Contribute</Link>
                    <Link href='#' className='links'>Github</Link>
                    <i className="ri-menu-line" onClick={toggleMenu}></i>
                </div>
            </nav>
            <div className={`sideMenu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href='Home' onClick={toggleMenu}>Home</Link></li>
                    <li><Link href='About' onClick={toggleMenu}>About</Link></li>
                    <li><Link href='https://forms.gle/9vXyyTC5Zo3T1RLa7' onClick={toggleMenu}>Contribute</Link></li>
                    <li><Link href='#' onClick={toggleMenu}>Github</Link></li>
                </ul>
            </div>
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
    );
};

export default Navbar;
