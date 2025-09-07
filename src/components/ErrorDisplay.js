import React from 'react';
import SearchBar from './SearchBar';

const ErrorDisplay = ({ error, searchCity, setSearchCity, handleSearch }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center p-6">
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center max-w-md">
      <h2 className="text-2xl font-bold mb-4">Weather Dashboard</h2>
      <p className="text-red-300 mb-6">{error}</p>
      {error.includes('API key') && (
        <div className="text-left text-sm space-y-2">
          <p>To use this dashboard:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Get a free API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">OpenWeatherMap</a></li>
            <li>Replace 'YOUR_API_KEY_HERE' in the code with your actual API key</li>
          </ol>
        </div>
      )}
      <SearchBar 
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearch={handleSearch}
        className="mt-6"
      />
    </div>
  </div>
);

export default ErrorDisplay;
