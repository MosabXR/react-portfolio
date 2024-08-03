import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    let [nav,setNav] = useState(true);

    function toggleNav() {
        if(nav) {
            document.querySelector('.menu').classList.replace('hidden','flex');
        } else {
            document.querySelector('.menu').classList.replace('flex','hidden');
        }
        setNav(!nav);
    }

    return (
        <nav className='w-full bg-[#2c3e50] text-white py-10 fixed z-20'>
            <div className="container flex flex-wrap justify-between place-items-center">
                <Link to='/'>
                    <h1 className='text-2xl sm:text-3xl font-bold uppercase'>Mosab Elkalyouby</h1>
                </Link>
                <ul className='md:hidden' data-status='inactive' onClick={toggleNav}>
                    <li className='size-10 border-2 border-white flex justify-center place-items-center rounded cursor-pointer hover:bg-white hover:text-[#2c3e50] duration-200'>
                        <i className="fa-solid fa-bars"></i>
                    </li>
                </ul>
                <ul className='menu hidden md:flex w-full flex flex-col md:w-auto md:flex-row gap-4 font-bold uppercase py-4'>
                    <li>
                        <NavLink className='p-2' to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='p-2' to={'/portfolio'}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className='p-2' to={'/contact'}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
