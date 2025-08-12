import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo/logo.png"
import Profile from '../pages/Profile';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="bg-[#437057] border-[#fffff0] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 max-lg:px-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-10" alt="Kab Garut Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white ">Desa Cipareuan</span>
        </a>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#fffff0] hover:text-black focus:outline-none  "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link to={'/'} className="block py-2 px-3 text-white hover:text-[#F1BA88] rounded-sm md:bg-transparent md:p-0 dark:text-white " aria-current="page">Home</Link>
            </li>
            <li>
              <Link to={'/profile'} className="block py-2 px-3 text-white hover:text-[#F1BA88] rounded-sm  md:hover:bg-transparent md:border-0 md:p-0 ">Profile</Link>
            </li>
            <li>
              <Link to={'/infografis'} className="block py-2 px-3 text-white hover:text-[#F1BA88] rounded-sm  md:hover:bg-transparent md:border-0 md:p-0 ">Infografis</Link>
            </li>
            <li>
              <Link to={'/berita'} className="block py-2 px-3 text-white hover:text-[#F1BA88] rounded-sm  md:hover:bg-transparent md:border-0 md:p-0 ">Berita</Link>
            </li>
            <li>
              <Link to={'/contact'} className="block py-2 px-3 text-white hover:text-[#F1BA88] rounded-sm  md:hover:bg-transparent md:border-0 md:p-0 ">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};