import React from 'react';

// Icon na start thi khabar pade ke /ai,/bi,/hi etc. lage react-icons ni pahad
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiChevronDown } from 'react-icons/hi';

// Navbar for small screen sizes
function Navsm() {
  return (
    <>
      <div className='text-white flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>It All Starts Here!</h3>
          <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>
                Bhubaneswar
                <HiChevronDown />
          </span>
        </div>
        <div classNme="w-8 h-8">
          <button>Use App</button>
          <AiOutlineSearch className="w-full h-full" />
        </div>
      </div>
    </>
  )
}

// Navbar for medium screen sizes
function Navmd()  {
  return (
    <>
      <div className="w-full h-full">
        <img src="" alt="Logo" className='w-full h-full' />
      </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <AiOutlineSearch />
        <input type="search" className="w-full bg-transparent border-none focus:outline-none" />
      </div>
    </>
  )
}

// Navbar for large screen sizes
function Navlg() {
  return (
    <>
      <div className="container flex px-4 mx-auto items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="h-10 w-10">
            <img src="" alt="Logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center rounded-md gap-3 px-3 py-1 bg-white">
            <AiOutlineSearch />
            <input type="search"
                   className="w-full bg-transparent border-none focus: outline-none"
                   placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
      </div>
    </>
  )
}

// Main Component
const Navbar = () => {
  return (
    // Using the background color from 'tailwind.config.js'
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Calling Navbar for small screens sizes here */}
      {/* It will be hidden for every screen size greater than and equal to medium 'md' */}
      <div className="md:hidden lg:hidden sm:flex">
        <Navsm />
      </div>

      {/* For Medium Screen Sizes here */}
      {/* We need it for Medium soo 'md-flex' */}
      <div className="hidden lg:hidden md:flex">
        <Navmd />
      </div>

      {/* For Large Screen Sizes here */}
      <div className="hidden md:hidden lg-flex">
        <Navlg />
      </div>
    </nav>
  )
}

export default Navbar;