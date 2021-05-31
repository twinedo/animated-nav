import React, { useState } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome, AiFillInfoCircle, AiOutlineMail } from 'react-icons/ai';

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
                        <Link
                            to='/'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AiFillHome size={20} style={{ marginRight: 20 }} />{' '}
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AiFillInfoCircle
                                size={20}
                                style={{ marginRight: 20 }}
                            />{' '}
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AiOutlineMail
                                size={20}
                                style={{ marginRight: 20 }}
                            />{' '}
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
