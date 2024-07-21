import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiVanFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { TbTarget } from "react-icons/tb";
import { BiSolidLogOutCircle } from "react-icons/bi";

const Navbar = () => {
    const [active, setActive] = useState('/');
    const handleClick = (path) => {
        setActive(path);
    }
    return (
        <nav className='nav'>
            <Link to='/'>
                <div className={`flex items-center py-2 ${active === '/' ? 'border-l-4 border-red-500 text-black' : 'text-gray-500'} `}
                    onClick={() => handleClick('/')} >
                    <p className={`text-xl ${active === '/' ? 'px-1' : 'px-2'}`}><PiVanFill /></p><p>MY MOVES</p>
                </div>
            </Link>
            <Link to='/profile'>
                <div className={`flex items-center py-2 ${active === '/profile' ? 'border-l-4 border-red-500 text-black' : 'text-gray-500'}`}
                    onClick={() => handleClick('/profile')}>
                    <p className={`text-xl ${active === '/profile' ? 'px-1' : 'px-2'}`}><FaUser /></p><p>MY PROFILE</p>
                </div>
            </Link>
            <Link to='/profile'>
                <div className={`flex items-center py-2 ${active === '/quote' ? 'border-l-4 border-red-500 text-black' : 'text-gray-500'}`}
                    onClick={() => handleClick('/quote')}>
                    <p className={`text-xl ${active === '/quote' ? 'px-1' : 'px-2'}`}><TbTarget /></p><p>GET QUOTE</p>
                </div>
            </Link>
            <Link to='/profile' profile>
                <div
                    className={`flex items-center py-2 ${active === '/logout' ? 'border-l-4 border-red-500 text-black' : 'text-gray-500'}`}
                    onClick={() => handleClick('/logout')}>
                    <p className={`text-xl ${active === '/logout' ? 'px-1' : 'px-2'}`}><BiSolidLogOutCircle /></p><p>LOGOUT</p>
                </div>
            </Link>
        </nav>
    )
}

export default Navbar