import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950" id="footer">
      {/* Footer content */}
      <div className="flex flex-col  lg:flex-row bg-gray-950 min-h-90 md:h-96 w-full items-start p-6 md:p-20">
        {/* Logo section */}
        <div className="w-full md:w-1/4 text-emerald-600 flex gap-1 mb-8 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-anchor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
            <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
          <h1 className="text-emerald-600 text-2xl md:text-4xl font-bold">JobHook</h1>
        </div>

        {/* Lists section */}
        <div className="text-white flex flex-col md:flex-row gap-8 md:gap-20 w-full md:w-auto mb-8 md:mb-0">
          <ul className="space-y-4">
            <li>
              <h2 className="font-semibold text-lg md:text-xl mb-4 text-gray-300 font-sans">
                Product
              </h2>
            </li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">All jobs</li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">Companies</li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">Candidates</li>
          </ul>

          <ul className="space-y-4">
            <li>
              <h2 className="font-semibold text-lg md:text-xl mb-4 text-gray-300 font-sans">
                Resources
              </h2>
            </li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">Blog</li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">User Guides</li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">Webinars</li>
          </ul>

          <ul className="space-y-4">
            <li>
              <h2 className="font-semibold text-lg md:text-xl mb-4 text-gray-300 font-sans">
                Company
              </h2>
            </li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">About</li>
            <li className="hover:text-gray-300 cursor-pointer text-gray-300 font-sans">Join us</li>
          </ul>
        </div>

        {/* Newsletter section */}
        <div className="flex flex-col justify-baseline w-full md:w-auto md:px-20">
          <h2 className="text-emerald-600 font-sans text-xl font-bold mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-300 text-xs mb-4">
            For product announcements and exclusive insights
          </p>

          <form className="w-full max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </div>
              <input
                type="email"
                className="block w-full p-3 ps-10 text-sm text-gray-900 focus:outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Input your email"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-0 bottom-0 h-full bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer bottom */}
      <div className="text-gray-300 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 pb-6 md:pb-10 gap-4">
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li>&#169;2025 JobHook</li>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Sitemaps</li>
        </ul>
        <div className="flex gap-4">
          <i className="fa-brands fa-facebook text-gray-300"></i>
          <i className="fa-brands fa-twitter text-gray-300"></i>
          <i className="fa-brands fa-linkedin text-gray-300"></i>
          <i className="fa-brands fa-instagram text-gray-300"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
