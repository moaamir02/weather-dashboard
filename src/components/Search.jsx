import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex items-center w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-3 rounded-l-lg focus:outline-none shadow-md"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-black p-3 rounded-r-lg shadow-md hover:bg-blue-700 transition"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;