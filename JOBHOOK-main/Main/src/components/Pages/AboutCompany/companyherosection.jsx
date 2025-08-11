import React from 'react'

const companyherosection = () => {
  return (
    <>
        {/* Hero Banner */}
      <div className="relative w-full h-32 bg-teal-500 rounded-b-lg mb-6">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
          <h2 className="text-lg font-medium">Get your</h2>
          <h1 className="text-2xl font-bold">DREAM JOB with us</h1>
        </div>
        <div className="absolute right-12 top-0 h-full">
          <div className="relative h-full">
            <img src="/api/placeholder/180/140" alt="placeholder" className="h-full object-cover" />
          </div>
        </div>
        <div className="absolute left-6 bottom-0 translate-y-1/2">
          <div className="w-12 h-12 bg-white p-1 rounded-lg shadow flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 bottom-6">
          <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
      </>
  )
}

export default companyherosection
