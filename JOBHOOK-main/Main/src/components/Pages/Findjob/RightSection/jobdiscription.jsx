import { MessageSquare } from "lucide-react";
import { useState } from "react";
import jobData from "./JobdiscApi";
import { useEffect } from "react";
import axios from "axios";
// You could move this to a separate file or fetch from an API

// const apidata = {
//   apiData: {
//     Title: "Java Full Stack",
//     JobDescription: "You have to create RESTful APIs"
//   }
// };




export default function JobPosting() {
  const [saved, setSaved] = useState(jobData.userActions.isSaved);
  const [hasApplied, setHasApplied] = useState(jobData.userActions.hasApplied);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSave = () => {
    setSaved(!saved);
    // Add API call to update saved status
};

 
 useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/apidata/job-102', {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
            withCredentials: true 
        });
        
        setData(response.data);
        console.log('Job Data:', response.data); // This will show in console
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, []);

   if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }
    


  

  const handleApply = () => {
    setHasApplied(true);
    window.location.href = jobData.userActions.applicationUrl;
  };

  return (
    <div className="max-w-fulll pt-10 mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header Image */}
      <div className="h-32 bg-blue-500 w-full"></div>
      
      {/* Job Title and Actions */}
      <div className="p-4 flex justify-between items-start">
        <div>
          <h1 className="text-xl font-medium">{data?.title || "Loading..."}</h1>
          <p className="text-green-500 font-medium mt-1">{jobData.job.salary}</p>
          
          <div className="flex items-center mt-3 text-gray-600 gap-4">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="text-sm">{jobData.company.name}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-sm">{`${jobData.job.location.city}, ${jobData.job.location.state}`}</span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{jobData.job.level}</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{jobData.job.employmentType}</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{jobData.job.locationType}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <button 
            className={`flex items-center justify-center gap-1 rounded px-4 py-1 text-sm ${saved ? 'bg-green-100 text-green-600' : 'bg-green-50 text-green-500'}`}
            onClick={handleSave}
          >
            <svg className="w-4 h-4" fill={saved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            {saved ? 'Saved' : 'Save'}
          </button>
          
          <button 
            className={`bg-green-500 text-white rounded px-4 py-1 text-sm font-medium ${hasApplied ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleApply}
            disabled={hasApplied}
          >
            {hasApplied ? 'Applied' : 'Apply Now'}
          </button>
          
          <div className="text-xs text-gray-500 text-right mt-2">
            Posted {jobData.job.postedTime}
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same, just update the data sources */}
      <div className="mx-4 mb-6 border border-purple-100 rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3">Contact recruiter</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center overflow-hidden">
              <img src={jobData.recruiter.avatarUrl} alt={jobData.recruiter.name} className="w-8 h-8 rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{jobData.recruiter.name}</span>
                {jobData.recruiter.isJobPoster && <span className="text-xs text-orange-500">Job poster</span>}
              </div>
              <p className="text-gray-500 text-xs">{jobData.recruiter.title}</p>
            </div>
          </div>
          
          <a href={jobData.recruiter.messageUrl} className="flex items-center gap-1 text-sm text-blue-500">
            <MessageSquare size={16} />
            Message
          </a>
        </div>
      </div>
      
      <div className="px-4 mb-6">
        <h3 className="font-medium mb-2">Job Description</h3>
        <p className="text-sm text-gray-600 mb-4">
          {data?.description||"Loading"}
        </p>
        
        <h3 className="font-medium mb-2">Responsibilities</h3>
        <ul className="space-y-2 mb-4">
          {jobData.job.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-baseline gap-2">
              <div className="w-4 h-4 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-600">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-4 pb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">About company</h3>
          <a href={jobData.company.profileUrl} className="text-xs text-green-500">View company profile</a>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-500 rounded flex items-center justify-center">
            <img src={jobData.company.logoUrl} alt={jobData.company.name} className="w-6 h-6 rounded" />
          </div>
          <span className="font-medium">{jobData.company.name}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          {jobData.company.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>{jobData.company.industry}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span>{jobData.company.size}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{`${jobData.company.location.city}, ${jobData.company.location.state}`}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{jobData.company.workingDays}</span>
          </div>
        </div>
      </div>
    </div>
  );
}