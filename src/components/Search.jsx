// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';

// const Search = ({ onSearch }) => {
//   const [city, setCity] = useState('');

//   const handleSearch = () => {
//     if (city.trim()) {
//       onSearch(city);
//       setCity('');
//     }
//   };

//   return (
//     <div className="flex items-center w-full max-w-md mb-6">
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         className="w-full p-3 rounded-l-lg focus:outline-none shadow-md"
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-600 text-black p-3 rounded-r-lg shadow-md hover:bg-blue-700 transition"
//       >
//         <FaSearch />
//       </button>
//     </div>
//   );
// };

// export default Search;
import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const inputRef = useRef();

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
      inputRef.current.focus(); // Focus back after search
    }
  };

  return (
    <div className="flex items-center w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-4 pl-6 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        ref={inputRef}
      />
      <button
        type="button"
        onClick={handleSearch}
        className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-r-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out focus:outline-none flex items-center justify-center ${
          !city.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!city.trim()}
      >
        <FaSearch className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Search;
