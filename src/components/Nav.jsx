import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
function Nav() {
    return (
        <>
            <header className='  sticky z-50 mt-1 bg-gray-800'>
                <nav className=' flex shadow-xl  w-screen p-3'>
                    <ul className='flex w-screen'>
                        <li className=' w-[20%]'>

                            <NavLink to='/' className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-orange-400"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }

                            >Home</NavLink></li>
                        <li className=' w-[20%]'>

                            <NavLink to='/service'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }>Service</NavLink></li>
                        <li className=' w-[20%]'>
                            <NavLink to='/about' className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>about</NavLink>
                        </li>
                        <li className=' w-[20%]'>
                            <NavLink to='/contact' className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>Contact</NavLink>
                        </li>

                    </ul>
                   
                </nav>
            </header>


        </>
    )
}

export default Nav
