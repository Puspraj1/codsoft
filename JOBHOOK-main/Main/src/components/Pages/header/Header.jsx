import React, { useState } from 'react'
import Navlink from './navlink'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      <div className='flex flex-wrap justify-between items-center bg-white-800 text-grey p-5 px-6'>
        {/* Logo Section */}
        <div className='flex gap-1 items-center'>
          <div className='text-emerald-600 font-semibold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-anchor">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
              <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>
          </div>
          <div className="text-emerald-600 font-semibold text-4xl stroke-2 stroke-fuchsia-800">JobHook</div>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button 
          className='lg:hidden text-emerald-600'
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation and Profile Section */}
        <div className={`lg:flex items-center gap-4 w-full lg:w-auto ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row mt-4 lg:mt-0`}>
          <div className='lg:mr-4 mb-4 lg:mb-0 w-full lg:w-auto'>
            <Navlink />
          </div>
          
          <div className='flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto'>
            <div className='flex flex-col lg:flex-row gap-4 w-full lg:w-auto'>
              <Link to="/login" className='bg-emerald-600 px-4 py-2 rounded-md text-amber-50 text-center drop-shadow-emerald-800 drop-shadow-lg'>Login</Link>
              <Link to="/register" className='bg-yellow-300 px-4 py-2 rounded-md text-black text-center drop-shadow-amber-800 drop-shadow-lg'>Register</Link>
            </div>
            <img 
              src="/src/images/Profileimage.png" 
              className="w-10 h-10 rounded-full bg-gray-400"
              alt="Profile" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header