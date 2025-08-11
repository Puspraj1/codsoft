import { useState } from "react";
import { Star, MapPin, Building, Users, MessageCircle, Calendar, ChevronLeft, ChevronRight, MoreHorizontal, Clock, Heart } from "lucide-react";
import CompanyHeroSection from "./companyherosection";
import CompanyHeader from "./companyheader";
import Header from "../header/Header";
import Footer from "../Home/Footer/footer";
const CompanyProfilePage=()=> {
  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto bg-white font-sans">
    <CompanyHeroSection/>

      {/* Company Header */}
      <CompanyHeader/>

        {/* Company Stats */}
        <div className="flex flex-col gap-2 mb-8 text-sm">
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2 text-gray-400" />
            <span>Washington DC</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Building size={16} className="mr-2 text-gray-400" />
            <span>Company - Private</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2 text-gray-400" />
            <span>500 - 1000 employees</span>
          </div>
        </div>

        <div className="flex gap-8 mb-8">
          <div className="flex-1">
            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">About us</h2>
              <p className="text-sm text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur. Vitae 
                placerat et sit amet, consectetur adipiscing elit. Nam blandit amet ligula consequat sed tristique sit vel. 
                Nullam id magna imperdiet ac. Blandith. Lorem ipsum dolor sit amet.
              </p>
            </div>
            
            {/* Why Choose Us */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Why choose us</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2 mt-0.5">•</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2 mt-0.5">•</span>
                  <span>Consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2 mt-0.5">•</span>
                  <span>Et tristique sed sit vel. Nam blandit ligula consequat.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-500 rounded-full p-1 mr-2 mt-0.5">•</span>
                  <span>Nullam id magna imperdiet ac. Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>
              <button className="text-teal-500 text-sm mt-3">Read more</button>
            </div>
          </div>

          {/* Rating Section */}
          <div className="w-56">
            <h2 className="text-lg font-semibold mb-3">Overall Rating</h2>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold mr-2">4.8/5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={16} 
                    className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"} 
                  />
                ))}
              </div>
            </div>

            {/* Rating Categories */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Compensation</span>
                  <span>4.9</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Work/life balance</span>
                  <span>4.7</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Culture</span>
                  <span>4.6</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Life at Company */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Life at LABORUM</h2>
            <div className="flex gap-1">
              <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <ChevronLeft size={16} />
              </button>
              <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/3 h-24 rounded-md overflow-hidden">
              <img src="/api/placeholder/160/96" alt="Office" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/3 h-24 rounded-md overflow-hidden">
              <img src="/api/placeholder/160/96" alt="Team" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/3 h-24 rounded-md overflow-hidden">
              <img src="/api/placeholder/160/96" alt="Workspace" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Recent Job Postings */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Job Openings</h2>
            <a href="#" className="text-teal-500 text-sm">View all jobs</a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Job Card 1 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 mr-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">UX Designer</h3>
                  <p className="text-sm text-gray-500">$95K - $120K</p>
                </div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">Remote</div>
              </div>
              <button className="border border-teal-500 text-teal-500 text-sm px-3 py-1 rounded-md w-full">
                Apply now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 mr-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Product Manager</h3>
                  <p className="text-sm text-gray-500">$120K - $140K</p>
                </div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">Remote</div>
              </div>
              <button className="border border-teal-500 text-teal-500 text-sm px-3 py-1 rounded-md w-full">
                Apply now
              </button>
            </div>

            {/* Job Card 3 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 mr-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">UI / UX Designer</h3>
                  <p className="text-sm text-gray-500">$90K - $120K</p>
                </div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">Remote</div>
              </div>
              <button className="border border-teal-500 text-teal-500 text-sm px-3 py-1 rounded-md w-full">
                Apply now
              </button>
            </div>

            {/* Job Card 4 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 mr-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Full-Stack Dev</h3>
                  <p className="text-sm text-gray-500">$100K - $130K</p>
                </div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">Remote</div>
              </div>
              <button className="border border-teal-500 text-teal-500 text-sm px-3 py-1 rounded-md w-full">
                Apply now
              </button>
            </div>
          </div>
        </div>

        {/* Employee Reviews */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Popular</h2>
          
          <div className="border border-gray-200 rounded-lg">
            {/* Review 1 */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                    <img src="/api/placeholder/32/32" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Joe Reynolds</p>
                    <p className="text-xs text-gray-500">Designer</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={12} 
                        className={star <= 3 ? "text-red-500 fill-red-500" : "text-gray-200"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                "I've been working at Laborum for a year, and I'm satisfied with everything"
              </p>
            </div>

            {/* Review 2 */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                    <img src="/api/placeholder/32/32" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Devon</p>
                    <p className="text-xs text-gray-500">Developer</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={12} 
                        className={star <= 5 ? "text-red-500 fill-red-500" : "text-gray-200"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                "The best place to work! People are awesome & management is supportive"
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex mb-8">
          <div className="flex-1">
            <h3 className="font-medium text-orange-600 mb-1">LOOKING FOR A JOB?</h3>
            <p className="text-sm text-gray-600 mb-4">Companies are hiring!</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
              Create account
            </button>
          </div>
          <div className="w-24">
            <img src="/api/placeholder/96/96" alt="Job seeker" className="w-full" />
          </div>
        </div>
      </div>
      <Footer/>
      </>
  );
}
export default CompanyProfilePage;