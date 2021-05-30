import React, { useState } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ show }) => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className={showNav ? 'sidenav active' : 'sidenav'}>
            {/* <img src={logo} alt='logo.png' className='logo' /> */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ul
                    style={{
                        position: 'sticky',
                        zIndex: 10,
                        top: 0,
                        left: 0,
                        backgroundColor: '#011627',
                    }}
                >
                    <li>
                        <Link to='/'>A</Link>
                    </li>
                    <li>
                        <Link to='/about'>B</Link>
                    </li>
                    <li>
                        <Link to='/contact'>C</Link>
                    </li>
                    <li
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'fixed',
                            bottom: 10,
                            left: 10,
                        }}
                    >
                        <GiHamburgerMenu
                            size={24}
                            onClick={() => setShowNav(!showNav)}
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
