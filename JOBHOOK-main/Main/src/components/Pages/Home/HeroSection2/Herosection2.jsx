import React from "react";

const Herosection2 = () => {
  return (
    <div className="flex flex-col items-center mb-14 mt-10 sm:mb-5 lg:mb-8 min-h-screen font-openSans">
      <div className="text-center">
        <h1 className="font-semibold text-4xl">
          Explore more <span className="text-emerald-400">jobs</span>
        </h1>
      </div>

      <div className="w-full max-w-2xl p-10 pt-25">
        <form className="max-w-4xl mx-auto"> {/* Changed max-w-md to max-w-4xl */}
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for jobs..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-0 h-full bottom-0 bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-r-lg text-sm px-6 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-6xl mx-auto px-4">
        {/* Card content */}
        <div className="h-40 shadow-2xl bg-emerald-100 rounded-lg flex flex-col justify-center items-center p-6 hover:shadow-lg transition-all">
          <div className="mb-4 rounded-full bg-emerald-300 p-2 t">
            {/* Add your logo here */}
            <sv
              className="w-8 h-8 text-emerald-600" ></sv>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 1 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              Finance
            </h1>
            <p className="text-gray-600">1297 jobs</p>
          </div>
        </div>

        {/* Add more cards with the same structure */}
        <div className="h-40 shadow-2xl bg-orange-200 rounded-lg flex flex-col justify-center items-center p-6 hover:shadow-lg transition-all">
          {/* Second card content */}
          <div className="mb-4 rounded-full bg-orange-500 p-2 t">
            {/* Add your logo here */}
            <sv
              className="w-8 h-8 text-emerald-600" ></sv>
             <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="white"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-backpack"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" /><path d="M10 6v-1a2 2 0 1 1 4 0v1" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /><path d="M11 10h2" /></svg>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              Education
            </h1>
            <p className="text-gray-600">1405 jobs</p>
          </div>
        </div>

        <div className="h-40 shadow-2xl bg-purple-100 rounded-lg flex flex-col justify-center items-center p-6 hover:shadow-lg transition-all">
          {/* Third card content */}
             <div className="mb-4 rounded-full bg-purple-500 p-2 t">
            {/* Add your logo here */}
            <sv
              className="w-8 h-8 text-emerald-600" ></sv>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-devices-pc"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5h6v14h-6z" /><path d="M12 9h10v7h-10z" /><path d="M14 19h6" /><path d="M17 16v3" /><path d="M6 13v.01" /><path d="M6 16v.01" /></svg>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              IT
            </h1>
            <p className="text-gray-600">5608 jobs</p>
          </div>
        </div>


         <div className="h-40 shadow-2xl bg-pink-100 rounded-lg flex flex-col justify-center items-center p-6 hover:shadow-lg transition-all">
          {/* Fourth card content */}
               <div className="mb-4 rounded-full bg-pink-500 p-2 t">
            {/* Add your logo here */}
            <sv
              className="w-8 h-8 text-emerald-600" ></sv>
           <svg  xmlns="http://www.w3.org/2000/svg"  width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-1">
              Marketing
            </h1>
            <p className="text-gray-600">2690 jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection2;
