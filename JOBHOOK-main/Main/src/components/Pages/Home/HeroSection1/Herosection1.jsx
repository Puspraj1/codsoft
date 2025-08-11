import React from "react";
import Leftherosection1 from "./leftherosection1";
import Rightherosection from "./rightherosection";

const Herosection1 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-gradient-to-b from-[#ECFDFC] to-[#ECFDFC] font-openSans items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Left Section */}
      <div className="w-full sm:w-4/5 lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 flex justify-center items-center">
        <Leftherosection1 />
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-4/5 lg:w-1/2 flex justify-center items-center">
        <Rightherosection />
      </div>
    </div>
  );
};

export default Herosection1;
