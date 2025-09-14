import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchCity, setSearchCity, handleSearch, className = "" }) => (
  <div className={`w-full max-w-lg mx-auto px-3 ${className}`}>
    <div className="flex flex-col sm:flex-row items-stretch gap-2">
      <input
        type="text"
        placeholder="Search for a city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
        className="flex-1 px-4 py-2 sm:py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-base sm:text-lg"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-all duration-200 hover:scale-105 flex items-center justify-center"
      >
        <Search className="w-5 h-5 text-white" />
      </button>
    </div>
  </div>
);

export default SearchBar;
