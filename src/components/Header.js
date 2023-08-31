import React, {useEffect, useState} from 'react';
import {Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';

export function Header() {
    const activeClass =   "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    const inactiveClass = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    const [hideMenu, setHideMenu] = useState(true);
    const {productList, total} = useCart();    
//    const [numberOfItems, setNumberOfItems] = useState(0);

    const numberOfItems = 0;
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode'))? JSON.parse(localStorage.getItem('darkmode')) : true);

    useEffect(()=>{
        localStorage.setItem('dark',darkMode ? true: false);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
    <div className="max-w-screen-xl flex flex-wrap mx-auto justify-between p-4">
    <NavLink to="https://flowbite.com/" className="flex items-center">
        <img src={Logo} className="h-8 mr-3" alt="Shopping Cart Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping Cart</span>
    </NavLink>
    <div className="flex md:order-2">
        <button onClick={()=>setDarkMode(!darkMode)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            { darkMode ? <svg data-toggle-icon="sun" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg> :
            <svg data-toggle-icon="moon" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>}            
        </button>
        <Link to='./cart' className='p-2'>
            <span className=' text-lg font-bold dark:text-white'>Cart:  {productList.length}/${total}</span>
        </Link>
        <button onClick={()=>setHideMenu(!hideMenu)}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div className={`${hideMenu ? 'hidden' : ''} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <NavLink  to="/" className={({isActive})=> isActive ? activeClass :inactiveClass} aria-current="page">Home</NavLink>
        </li>
        <li>
            <NavLink  to="/cart" className={({isActive}) =>isActive ? activeClass :inactiveClass}>Cart</NavLink>
        </li>
        </ul>
    </div>
    </div>
    </nav>



   );
}


