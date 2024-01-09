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
                    <ul className="menu menu-horizontal px-3">
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
                                <summary>RapidApi</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/hobbies" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Hobbies
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lovecalc" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Love Calculator
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/facts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Facts
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
                                        <NavLink to="/weather3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Weather DAWA-datalist
                                        </NavLink>
                                        <NavLink to="/weather4" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Weather - med Data fra DAWA og Leafletmap
                                        </NavLink>
                                        <NavLink to="/pollution" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Pollution
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>BygSelv</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/coffee" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Hot Coffee
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Airtable</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/datalist" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Data List
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/datalistopgave" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            Data List Opgave
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>MERN API</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/mernapi" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            MernAPI - TodosAdmin
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mytodos" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            MernAPI - Todos
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mytodoscreate" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                            MyTodos - Create
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

        </nav>
    )
}

export default Navbar