import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ onLocationSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [displayText, setDisplayText] = useState('');
  const dropdownRef = useRef(null);

  const locations = [
    "Remote",
    "New York, NY",
    "San Francisco, CA",
    "London, UK",
    "Berlin, DE",
    "Toronto, CA",
    "Sydney, AU",
    "Singapore, SG",
    "Tokyo, JP",
    "Hybrid"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update display text when selections change
  useEffect(() => {
    if (selectedLocations.length === 0) {
      setDisplayText('');
    } else if (selectedLocations.length === 1) {
      setDisplayText(selectedLocations[0]);
    } else {
      setDisplayText(`${selectedLocations.length} locations selected`);
    }
  }, [selectedLocations]);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationSelect = (location) => {
    const updatedLocations = selectedLocations.includes(location)
      ? selectedLocations.filter(loc => loc !== location)
      : [...selectedLocations, location];
    
    setSelectedLocations(updatedLocations);
    onLocationSelect?.(updatedLocations);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="text-blue-500 font-medium">
          {part}
        </span>
      ) : part
    );
  };

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-max" ref={dropdownRef}>
      <button 
        type="button" 
        onClick={handleDropdownToggle}
        className="flex items-center px-5 py-2.5 rounded-md cursor-pointer text-gray-700 text-sm font-medium border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="mr-2">
          {selectedLocations.length ? `${selectedLocations.length} selected` : 'Location'}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-72 bg-white rounded-md shadow-lg z-50">
          <div className="p-2">
            <div className="relative">
              <input 
                type="text"
                placeholder={selectedLocations.length ? displayText : "Search locations..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 pl-3 pr-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {selectedLocations.length > 0 && searchTerm === '' && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                  {selectedLocations.map((location, index) => (
                    <span 
                      key={location}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {index < 2 ? location : index === 2 ? `+${selectedLocations.length - 2}` : null}
                    </span>
                  )).slice(0, 3)}
                </div>
              )}
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredLocations.map((location) => (
              <label 
                key={location}
                className={`flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                  selectedLocations.includes(location) ? 'bg-blue-50' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationSelect(location)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {highlightText(location, searchTerm)}
                </span>
              </label>
            ))}
            {filteredLocations.length === 0 && (
              <div className="px-4 py-2 text-sm text-gray-500">
                No locations found
              </div>
            )}
          </div>

          {selectedLocations.length > 0 && (
            <div className="p-2 border-t flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {selectedLocations.length} selected
              </span>
              <button
                onClick={() => {
                  setSelectedLocations([]);
                  onLocationSelect?.([]);
                  setSearchTerm('');
                }}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
