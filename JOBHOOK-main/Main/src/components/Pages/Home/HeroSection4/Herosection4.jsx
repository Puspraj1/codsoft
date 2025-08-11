import React from "react";

const Herosection4=()=>{
  const handleClick =(e)=>{
    e.preventDefault();
    const element=document.getElementById("footer");
    element.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8" id="herosection4">
      <div className="text-center">
        <h1 className="text-4xl text-emerald-500 font-semibold mb-2">
         <span className="text-black gap-2 p-2">Top</span>IT companies
        </h1>
        <p className="text-gray-400">Build a Bridge to Your Future
 </p>
      </div>

      <marquee id="mrqueeID" 
         behavior="scroll"
  direction="left"
  scrollAmount="15"
  onMouseEnter={(e) => e.target.stop()}
  onMouseLeave={(e) => e.target.start()}
  className="marquee"
      >
        <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-full mx-auto" >
          {/* card-1 */}
          <div className="jobs-card  rounded-2xl border-x-0 hover:scale-95 transition-all shadow-2xl h-48 p-10 border-y-slate-700">
            <div className="card-content flex flex-col items-center justify-center gap-5">
              <div className="card-logo  text-amber-700">
                {" "}
               <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"/><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"/></svg>
              </div>
              <div className="job-title text-xl font-semibold">
                <h1>Google</h1>
              </div>
            </div>
            <div className="card-description mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-500 flex" >
              20 jobs <span ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v14" /></svg></span> New York
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div className="jobs-card  rounded-2xl border-x-0 hover:scale-95 transition-all shadow-2xl h-48 p-10 border-y-slate-700" >
            <div className="card-content flex flex-col items-center justify-center gap-5">
              <div className="card-logo  text-amber-700">
                {" "}
                <img src="https://www.vectorlogo.zone/logos/accenture/accenture-icon.svg"className="h-10"  alt="" />
              </div>
              <div className="job-title text-xl font-semibold">
                <h1>Accenture</h1>
              </div>
            </div>
            <div className="card-description mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-500 flex" >
              34 jobs <span ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v14" /></svg></span> India
              </p>
            </div>
          </div>
          {/* card-3 */}
         <div className="jobs-card  rounded-2xl border-x-0 hover:scale-95 transition-all shadow-2xl h-48 p-10 border-y-slate-700">
            <div className="card-content flex flex-col items-center justify-center gap-5">
              <div className="card-logo  text-amber-700">
                {" "}
                <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" className="h-10" alt="microsoft-logo" />
              </div>
              <div className="job-title text-xl font-semibold">
                <h1>Microsoft</h1>
              </div>
            </div>
            <div className="card-description mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-500 flex" >
              15 jobs <span ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v14" /></svg></span> USA
              </p>
            </div>
          </div>
          {/* card-4 */}
         <div className="jobs-card  rounded-2xl border-x-0 hover:scale-95 transition-all shadow-2xl h-48 p-10 border-y-slate-700">
            <div className="card-content flex flex-col items-center justify-center gap-5">
              <div className="card-logo  text-amber-700">
                {" "}
                <img src="https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg" className="h-10" alt="" />
              </div>
              <div className="job-title text-xl font-semibold">
                <h1>Amazon</h1>
              </div>
            </div>
            <div className="card-description mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-500 flex" >
              20 jobs <span ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v14" /></svg></span> America
              </p>
            </div>
          </div>
          {/* card-5 */}
          <div className="jobs-card  rounded-2xl border-x-0 hover:scale-95 transition-all shadow-2xl h-48 p-10 border-y-slate-700">
            <div className="card-content flex flex-col items-center justify-center gap-5">
              <div className="card-logo  text-amber-700">
                {" "}
                <img src="https://www.vectorlogo.zone/logos/canva/canva-icon.svg" className="h-10" alt="" />
              </div>
              <div className="job-title text-xl font-semibold">
                <h1>Canva</h1>
              </div>
            </div>
            <div className="card-description mt-4 flex flex-col items-center justify-center">
              <p className="text-gray-500 flex" >
              50 jobs <span ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5v14" /></svg></span> London
              </p>
            </div>
          </div>
        </div>
      </marquee>
      <div className="see-m">
        <button onClick={handleClick} className="bg-emerald-500 text-white px-4 py-2 rounded-md mt-10 hover:bg-emerald-600 transition-all">
          See More
        </button>
      </div>
    </div>
  );
};

export default Herosection4;
