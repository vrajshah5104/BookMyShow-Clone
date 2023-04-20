import React, { useContext } from 'react';
import { MovieContext } from '../../Context/movie.context';
import { BiShareAlt, BiMenu } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiChevronDown } from 'react-icons/hi';

const Navsm = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className='text-gray-700 flex justify-between items-center'>
        <div>
          <h3 className="font-bold text-xl">{movie.original_title}</h3>
        </div>
      </div>
      <div className='w-8 h-8'>
        <BiShareAlt className='w-full h-full' /> 
      </div>
    </>
  )
}

const Navlg = () => {
  return (
    <>
      <div className='flex mx-auto px-4 container items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3 '>
          <div className='w-10 h-10'>
            <img src="" alt="Logo" className='w-full h-full' />
          </div>
          <div className="w-full flex items-center rounded-md gap-3 px-3 py-1 bg-white">
            <AiOutlineSearch />
            <input type="search"
                   className="w-full bg-transparent border-none focus:outline-none"
                   placeholder='Search for Movies, Events, Plays, Sports and Activities'
            />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-200 flex text-base items-center cursor-pointer hover:text-white'>
            Ahmedabad <HiChevronDown />
          </span>
          <button className='bg-red-600 text-white py-1 px-2 text-sm rounded'>
            Sign In
          </button>
          <div className='w-8 h-8 text-white'>
            <BiMenu className='w-full h-full' />
          </div>
        </div>
      </div>
    </>
  )
}

const MovieNavbar = () => {
  return (
    <>
      <nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
        <div className='md:hidden'>
          {/* For Small Screen Sizes */}
          <Navsm />
        </div>
        {/* For Large Screen Sizes */}
        <div className='hidden w-full lg:flex'>
          <Navlg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;