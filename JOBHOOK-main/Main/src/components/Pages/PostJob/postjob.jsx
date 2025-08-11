import { useState } from "react";
import { ChevronDown, Check, Plus } from "lucide-react";
import Header from "../header/Header";
import Footer from "../Home/Footer/footer";

const JobPostingForm=()=>{
  const [expanded, setExpanded] = useState({
    jobInfo: true,
    companyInfo: true,
    receiveApplication: true
  });

  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  return (
    <><Header/>
    <div className="max-w-3xl mx-auto bg-white p-4 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Post a new job</h1>
        <button className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium flex items-center">
          <Check size={16} className="mr-1" /> Draft
        </button>
      </div>

      {/* Job Type Section */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Job Type</p>
        <div className="flex items-center gap-2">
          <div className="bg-teal-100 text-teal-600 px-4 py-2 rounded-md inline-flex items-center text-sm">
            <Check size={16} className="mr-1" />
            Category Title
          </div>
          <span className="text-gray-500">Remote/Hybrid/On-site</span>
        </div>
      </div>

      {/* Premium Plan Advertisement */}
      <div className="bg-orange-50 border border-orange-200 rounded-md p-4 mb-6">
        <div className="flex items-start">
          <div className="flex-1">
            <p className="text-orange-500 font-medium mb-1">Reach and attract the right people</p>
            <p className="text-sm text-gray-600 mb-2">Premium job notice</p>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              Upgrade to Premium
            </button>
          </div>
          <div className="w-16 h-16 bg-purple-100 rounded-md overflow-hidden flex items-center justify-center">
            <div className="text-3xl">🎉</div>
          </div>
        </div>
      </div>

      {/* Job Information Section */}
      <div className="mb-6 border border-gray-200 rounded-md">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection("jobInfo")}
        >
          <h2 className="font-medium">Job Information</h2>
          <ChevronDown 
            size={20} 
            className={`text-gray-500 transition-transform ${expanded.jobInfo ? "rotate-180" : ""}`} 
          />
        </div>

        {expanded.jobInfo && (
          <div className="p-4 pt-0 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Job Title</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Senior Designer"
                />
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Job Location</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Rochester, NY"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Employment Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Salary range ($)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="80,000"
                />
                <span className="text-gray-500">-</span>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="110,000"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Job Description</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md h-24" 
                placeholder="Describe the job role and responsibilities..."
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs flex items-center">
                  Design <span className="ml-1 text-teal-700">×</span>
                </span>
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs flex items-center">
                  PhotoShop <span className="ml-1 text-teal-700">×</span>
                </span>
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs flex items-center">
                  Sketch <span className="ml-1 text-teal-700">×</span>
                </span>
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-xs flex items-center">
                  Other <span className="ml-1 text-teal-700">×</span>
                </span>
              </div>
              <button className="text-sm text-teal-600 flex items-center">
                <Plus size={16} className="mr-1" /> Add another skill
              </button>
            </div>

            <div className="bg-orange-50 text-xs p-2 rounded-md text-orange-600 mb-2">
              This form is partially filled out. Complete all required fields to move to the next section.
            </div>

            <div className="text-right">
              <button className="text-teal-600 text-sm">
                More options →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Company Info Section */}
      <div className="mb-6 border border-gray-200 rounded-md">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection("companyInfo")}
        >
          <h2 className="font-medium">Company Info</h2>
          <div className="flex items-center">
            <span className="text-xs text-teal-600 mr-2">10% Complete profile</span>
            <ChevronDown 
              size={20} 
              className={`text-gray-500 transition-transform ${expanded.companyInfo ? "rotate-180" : ""}`} 
            />
          </div>
        </div>

        {expanded.companyInfo && (
          <div className="p-4 pt-0 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="ABC"
                />
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Employees</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="500-1000"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Location</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="US"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">About</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md h-24" 
                placeholder="Tell us about your company..."
              ></textarea>
            </div>

            <div className="bg-orange-50 text-xs p-2 rounded-md text-orange-600 mb-2">
              This form is partially filled out. Complete all required fields to move to the next section.
            </div>

            <div className="text-right">
              <button className="text-teal-600 text-sm">
                More options →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Receive Application Section */}
      <div className="mb-6 border border-gray-200 rounded-md">
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection("receiveApplication")}
        >
          <h2 className="font-medium">Receive Application</h2>
          <ChevronDown 
            size={20} 
            className={`text-gray-500 transition-transform ${expanded.receiveApplication ? "rotate-180" : ""}`} 
          />
        </div>

        {expanded.receiveApplication && (
          <div className="p-4 pt-0 border-t border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center">
                <input type="radio" name="applicationMethod" className="mr-2" checked />
                <span>Email</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="applicationMethod" className="mr-2" />
                <span>External page</span>
              </label>
            </div>

            <div className="mb-4">
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded-md" 
                placeholder="hiring@email.com"
              />
            </div>

            <div className="bg-orange-50 text-xs p-2 rounded-md text-orange-600 mb-2">
              This form is partially filled out. Complete all required fields to move to the next section.
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md">
          Cancel
        </button>
        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md">
          Save
        </button>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
          Save & publish
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default JobPostingForm;