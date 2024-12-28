import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center p-4">
        <h1 className="text-2xl font-bold">MyLogo</h1>
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto transition-all duration-300 ease-in-out ${nav ? 'top-16' : 'top-[-200px]'}`}>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;