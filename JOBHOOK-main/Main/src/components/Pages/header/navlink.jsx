import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import companies from '../companies'

const links = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Companies", path: "/companies" },
  { name: "People", path: "/people" },
  { name: "Post a job", path: "/jobspost" }
]

const Navlink = () => {
  const location = useLocation();

  return (
    <div>
      <div className='flex gap-9 items-center'>
        {links.map((link, index) => (
          <div key={index}>
            <Link 
              to={link.path}
              className={`${
                location.pathname === link.path 
                  ? 'text-emerald-600 font-medium' 
                  : 'text-gray-500 hover:border-b-4 rounded-b-sm border-yellow-400 text-shadow-neutral-900 hover:text-yellow-400 hover:scale-3d transition-all duration-100'
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}  
      </div>
    </div>
  )
}

export default Navlink