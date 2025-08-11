import React from 'react'

const leftherosection1 = () => {
  return (
    <div className='flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 md:py-0'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 md:mb-6'>
          <span className='text-emerald-400 font-extrabold'>16,780 Jobs</span> For You
        </h1>
        <p className='text-lg sm:text-xl text-[#475569] mb-6 md:mb-8'>
          Find the best job that fits your life. We have thousands of opportunities 
          waiting for you.
        </p>
        <button className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-0 rounded-xl 
          bg-emerald-400 text-white hover:bg-emerald-500 transition-colors duration-300'>
          Explore Now
        </button>
      </div>
    </div>
  )
}

export default leftherosection1
