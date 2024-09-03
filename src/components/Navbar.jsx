import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[70%] w-full h-[25px]" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={handleClick}>
          <img src={!toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
        </div>

      </div>

      {/* Mobile Menu */}
      <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;