import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Favorites = ({ favorites, onSelectFavorite, onRemoveFavorite }) => (
  <div className="favorites bg-white text-gray-800 p-6 rounded-lg shadow-md mt-8 max-w-md w-full">
    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Favorite Cities</h3>
    <ul>
      {favorites.map((city) => (
        <li key={city.id} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
          <span
            onClick={() => onSelectFavorite(city.name)}
            className="cursor-pointer text-lg text-blue-600"
          >
            {city.name}
          </span>
          <button onClick={() => onRemoveFavorite(city.id)} className="text-red-500">
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Favorites;