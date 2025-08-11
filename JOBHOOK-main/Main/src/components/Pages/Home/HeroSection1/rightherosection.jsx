import React from 'react'

const rightherosection = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-10 py-4 sm:py-6 lg:py-8">
      <div className="w-full max-w-5xl mx-auto relative">
        {/* Main circle background */}
        <div className="h-48 sm:h-60 lg:h-64 w-full rounded-full bg-emerald-400 relative shadow-2xl shadow-emerald-200">
          
          {/* Human 1 Image */}
          <div className="absolute left-4 sm:left-16 lg:left-20 -top-8 sm:-top-10 lg:-top-12 hover:scale-95 transition-all">
            <img
              src="src\images\Human1.jpg"
              className="h-16 sm:h-20 lg:h-28 w-16 sm:w-20 lg:w-28 rounded-full scale-125 shadow-2xl shadow-gray-500"
              alt="Cartoon-style human figure"
            />
          </div>

          {/* Java Developer Card */}
          <div className="bg-white h-24 sm:h-28 lg:h-32 w-56 sm:w-64 lg:w-80 absolute left-4 sm:left-12 lg:left-15 bottom-4 sm:bottom-8 lg:bottom-10 rounded-xl flex items-center justify-center shadow-lg shadow-slate-800 hover:scale-95 transition-all">
            <div className="javalogo align-text-start hover:scale-95 transition-all">
              <img
                src="src\images\java developer img.png"
                className="h-12 sm:h-14 lg:h-20"
                alt="Java Developer card"
              />
            </div>
            <div className="content ml-2 sm:ml-3">
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold font-poppins">
                Java Developer
              </h2>
              <span className="text-xs sm:text-sm lg:text-base text-emerald-500 font-bold">
                $120K - $130K
              </span>
            </div>
          </div>

          {/* Human 2 Image */}
          <div className="absolute right-4 sm:right-12 lg:right-16 top-7/10 hover:scale-95 transition-all">
            <img
              src="src\images\Human2.jpg"
              className="h-16 sm:h-20 lg:h-28 w-16 sm:w-20 lg:w-28 rounded-full scale-125"
              alt="Cartoon-style human figure"
            />
          </div>

          {/* UI/UX Designer Card */}
          <div className="bg-white h-20 sm:h-24 lg:h-28 w-56 sm:w-64 lg:w-72 absolute right-4 sm:right-12 lg:right-10 top-2 sm:top-6 lg:top-4 rounded-xl flex items-center justify-center shadow-lg shadow-zinc-700 hover:scale-95 transition-all">
            <div className="hover:scale-95 transition-all">
              <img
                src="src\images\ui developer img.png"
                className="h-12 sm:h-14 lg:h-20"
                alt="UI UX Designer card"
              />
            </div>
            <div className="content ml-2 sm:ml-3">
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold font-poppins">
                UI / UX Designer
              </h2>
              <span className="text-xs sm:text-sm lg:text-base text-emerald-500 font-bold">
                $100K - $110K
              </span>
            </div>
          </div>

          {/* Location Image */}
          <img
            className="absolute -right-2 sm:-right-1 lg:-right-2 -top-8 sm:-top-5 lg:-top-10 hover:scale-95 transition-all w-16 sm:w-20 lg:w-24"
            src="src\images\location img.png"
            alt="Location indicator"
          />
        </div>
      </div>
    </div>
  )
}

export default rightherosection
