import React from 'react';

import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

// Main Component
const Navbar = () => {
  return (
    <nav>
      {/* Calling Navbar for small screens here */}
      {/* It will be hidden for every screen size greater than and equal to medium 'md' */}
      <div className="md:hidden">
        <Navsm />
      </div>
    </nav>
  )
}

// Navbar for small screen sizes
function Navsm() {
  return (
    <>
      <div className='text-white flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>It All Starts Here!</h3>
          <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>
                Bhubaneswar
                <BiChevronDown />
          </span>
        </div>
        <div classNme="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  )
}

// Navbar for medium screen sizes
function Navmd()  {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
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
            <BiSearch />
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

export default Navbar;