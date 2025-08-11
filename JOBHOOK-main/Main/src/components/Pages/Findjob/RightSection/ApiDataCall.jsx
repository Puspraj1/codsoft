import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDataCall = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/apidata/job-102', {
          headers: {
            'Content-Type': 'application/json',
            // Add cache control headers to prevent caching
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        setData(response.data);
        // Log the data to console
        console.log('API Response:', response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    // Add event listener for page refresh
    const handleRefresh = () => {
      fetchData();
    };

    // Initial fetch
    fetchData();

    // Listen for page refresh
    window.addEventListener('beforeunload', handleRefresh);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []); // Empty dependency array for initial mount only

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && <p>Data fetched successfully! Check console for details.</p>}
    </div>
  );
};

export default ApiDataCall;
