import React from "react";
import LeftSearchbar from "./leftSearchbar";
import Card from "./card";

const LeftJobSection = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white  rounded-lg">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              Search <span className="text-emerald-500">Job</span>
            </h1>
          </div>

          <LeftSearchbar />

          <div className="pt-4">
            <h2 className="text-gray-600 font-medium">
              32 results for UI/UX Designer
            </h2>
          </div>
          <div className="cards">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftJobSection;
