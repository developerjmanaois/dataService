import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (


        <nav>

            <div className="navbar bg-blue-200 p-10 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">LOGO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" className='hover:text-gray-200'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='hover:text-gray-200'>
                                Om os
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news" className='hover:text-gray-200'>
                                Nyheder
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='hover:text-gray-200' >
                                Kontakt
                            </NavLink>
                        </li>
                        <li>
                            <details>
                            <summary>JSONPlaceholder</summary>
                            <ul className="p-2">
                                <li>
                                    <NavLink to="/postadmin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                PostAdmin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/todos" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Todos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/photos" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Photos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/posts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Posts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/post" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                Post
                                    </NavLink>
                                </li>
                            </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>SWAPI</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/starships" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Starships
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>News</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/newseverything" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Everything
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/topheadlines" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Top Headlines
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Open Weather</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/weather" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Current Weather
                                        </NavLink>
                                        <NavLink to="/weather1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Current Weather w/DataList
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            {/* <div className="navbar bg-base-100">
                <div>
                    <a href="#">LOGO A/S</a>
                </div>

                <div>
                    <NavLink to="/" className='hover:text-gray-200'>
                        Home
                    </NavLink>
                    <NavLink to="/about" className='hover:text-gray-200'>
                        Om os
                    </NavLink>
                    <NavLink to="/news" className='hover:text-gray-200'>
                        Nyheder
                    </NavLink>
                    <NavLink to="/contact" className='hover:text-gray-200' >
                        Kontakt
                    </NavLink>
                    <div className="relative">
                        <div className='hover:text-gray-200 group'>
                            JSONPlaceholder

                            <div className='absolute right-0 hidden w-48 overflow-hidden bg-white rounded-md shadow-lg group-hover:block'>
                                <div>
                                    <NavLink to="/postadmin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    PostAdmin
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/straships" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Starships
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/todos" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Todos
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/photos" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Photos
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/posts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Posts
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/post" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Post
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='hover:text-gray-200 group'>
                            SWAPI

                            <div className='absolute right-0 hidden w-48 overflow-hidden bg-white rounded-md shadow-lg group-hover:block'>
                                <NavLink to="/straships" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    Starships
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className='hover:text-gray-200 group'>
                            Everything

                            <div className='absolute right-0 hidden w-48 overflow-hidden bg-white rounded-md shadow-lg group-hover:block'>
                                <NavLink to="/newseverything" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    News - Everything
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/login" className='hover:text-gray-200'>
                        Login
                    </NavLink>
                </div>

            </div> */}
        </nav>
    )
}

export default Navbar