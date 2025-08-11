import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ onExperienceSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [displayText, setDisplayText] = useState('');
  const dropdownRef = useRef(null);

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Associate (2-5 years)",
    "Mid-Senior (5-8 years)",
    "Senior (8+ years)",
    "Lead/Principal (10+ years)",
    "Manager/Director",
    "Executive",
    "Internship",
    "Fresh Graduate",
    "Not Specified"
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
    if (selectedExperience.length === 0) {
      setDisplayText('Experience Level');
    } else if (selectedExperience.length === 1) {
      setDisplayText(selectedExperience[0]);
    } else {
      setDisplayText(`${selectedExperience.length} levels selected`);
    }
  }, [selectedExperience]);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleExperienceSelect = (level) => {
    const updatedLevels = selectedExperience.includes(level)
      ? selectedExperience.filter(exp => exp !== level)
      : [...selectedExperience, level];
    
    setSelectedExperience(updatedLevels);
    onExperienceSelect?.(updatedLevels);
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

  const filteredLevels = experienceLevels.filter(level =>
    level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-max" ref={dropdownRef}>
      <button 
        type="button" 
        onClick={handleDropdownToggle}
        className="flex items-center px-5 py-2.5 rounded-md cursor-pointer text-gray-700 text-sm font-medium border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="mr-2">{displayText}</span>
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
                placeholder="Search experience levels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {selectedExperience.length > 0 && searchTerm === '' && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                  {selectedExperience.map((level, index) => (
                    <span 
                      key={level}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {index < 2 ? level.split(' ')[0] : index === 2 ? `+${selectedExperience.length - 2}` : null}
                    </span>
                  )).slice(0, 3)}
                </div>
              )}
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredLevels.map((level) => (
              <label 
                key={level}
                className={`flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                  selectedExperience.includes(level) ? 'bg-blue-50' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedExperience.includes(level)}
                  onChange={() => handleExperienceSelect(level)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {highlightText(level, searchTerm)}
                </span>
              </label>
            ))}
            {filteredLevels.length === 0 && (
              <div className="px-4 py-2 text-sm text-gray-500">
                No experience levels found
              </div>
            )}
          </div>

          {selectedExperience.length > 0 && (
            <div className="p-2 border-t flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {selectedExperience.length} selected
              </span>
              <button
                onClick={() => {
                  setSelectedExperience([]);
                  onExperienceSelect?.([]);
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
