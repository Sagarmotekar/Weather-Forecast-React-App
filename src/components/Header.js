import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ searchCity, setSearchCity, handleSearch }) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-white mb-6">Weather Dashboard</h1>
    <SearchBar 
      searchCity={searchCity}
      setSearchCity={setSearchCity}
      handleSearch={handleSearch}
    />
  </div>
);

export default Header;
