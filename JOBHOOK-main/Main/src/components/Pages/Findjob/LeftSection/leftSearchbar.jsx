import React, { useState, useEffect, useRef } from "react";

const LeftSearchbar = ({ onSearchSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const searchRef = useRef(null);

  const data = [
    {
      "id": 101,
      "title": "Frontend Developer",
      "field": "IT",
      "company": "Google",
      "location": "New York",
      "type": "Full-time",
      "salary": "$120,000/year",
      "experience": "2+ years",
      "posted": "2 days ago"
    },
    {
      "id": 102,
      "title": "UI/UX Designer",
      "field": "Design",
      "company": "Canva",
      "location": "Remote",
      "type": "Contract",
      "salary": "$70/hour",
      "experience": "1-3 years",
      "posted": "1 day ago"
    },
    {
      "id": 103,
      "title": "Digital Marketing Executive",
      "field": "Marketing",
      "company": "HubSpot",
      "location": "Remote",
      "type": "Part-time",
      "salary": "$50,000/year",
      "experience": "1+ years",
      "posted": "4 days ago"
    },
    {
      "id": 104,
      "title": "Financial Analyst",
      "field": "Finance",
      "company": "JPMorgan Chase",
      "location": "London",
      "type": "Full-time",
      "salary": "$90,000/year",
      "experience": "3+ years",
      "posted": "3 days ago"
    },
    {
      "id": 105,
      "title": "Backend Developer",
      "field": "IT",
      "company": "Amazon",
      "location": "Berlin",
      "type": "Full-time",
      "salary": "$110,000/year",
      "experience": "2-4 years",
      "posted": "5 days ago"
    },
    {
      "id": 106,
      "title": "Nurse Practitioner",
      "field": "Healthcare",
      "company": "Pfizer",
      "location": "Boston",
      "type": "Full-time",
      "salary": "$95,000/year",
      "experience": "5+ years",
      "posted": "Today"
    },
    {
      "id": 107,
      "title": "Graphic Designer",
      "field": "Design",
      "company": "Adobe",
      "location": "San Francisco",
      "type": "Internship",
      "salary": "$25/hour",
      "experience": "0-1 year",
      "posted": "1 week ago"
    },
    {
      "id": 108,
      "title": "Cloud Engineer",
      "field": "IT",
      "company": "Microsoft",
      "location": "Seattle",
      "type": "Full-time",
      "salary": "$130,000/year",
      "experience": "3+ years",
      "posted": "3 days ago"
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };

  const handleItemSelect = (item) => {
    const isSelected = selectedItems.some(selected => selected.id === item.id);
    
    if (isSelected) {
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    
    onSearchSelect?.(selectedItems);
  };

  const clearSelections = () => {
    setSelectedItems([]);
    setSearchTerm('');
    onSearchSelect?.([]);
  };

  const filteredResults = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="text-blue-500 font-medium">{part}</span>
      ) : part
    );
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <h1 className="text-black font-medium mb-3">Search</h1>
      <div className="flex flex-col w-full">
        <div className="flex">
          <button className="bg-gray-200 hover:bg-gray-300 text-black border-transparent rounded-l-md p-2 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={selectedItems.length ? `${selectedItems.length} items selected` : "Search jobs..."}
              value={searchTerm}
              className="w-full border-2 border-transparent focus:border-emerald-500 focus:outline-none text-black rounded-r-md bg-gray-200 p-2 transition-colors"
              onChange={handleOnChange}
            />
            
            {selectedItems.length > 0 && !searchTerm && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                {selectedItems.map((item, index) => (
                  index < 2 ? (
                    <span 
                      key={item.id}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                    >
                      {item.title}
                    </span>
                  ) : index === 2 ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      +{selectedItems.length - 2}
                    </span>
                  ) : null
                ))}
              </div>
            )}
          </div>
        </div>

        {showResults && (
          <div className="absolute w-full mt-12 max-h-60 overflow-y-auto bg-white rounded-md shadow-lg border border-gray-200 z-50">
            {filteredResults.length > 0 ? (
              <>
                {filteredResults.map((item) => (
                  <label 
                    key={item.id} 
                    className={`flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer ${
                      selectedItems.some(selected => selected.id === item.id) ? 'bg-emerald-50' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.some(selected => selected.id === item.id)}
                      onChange={() => handleItemSelect(item)}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium">{highlightText(item.title, searchTerm)}</p>
                      <p className="text-sm text-gray-500">
                        {highlightText(item.company, searchTerm)} • {highlightText(item.location, searchTerm)}
                      </p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{item.type}</span>
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{item.experience}</span>
                      </div>
                    </div>
                  </label>
                ))}
                {selectedItems.length > 0 && (
                  <div className="p-2 border-t flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {selectedItems.length} selected
                    </span>
                    <button
                      onClick={clearSelections}
                      className="text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="p-3 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSearchbar;
