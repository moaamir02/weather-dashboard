import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import Favorites from './components/Favorites';
import { fetchWeatherData } from './services/api';
import { getFavoriteCities, addFavoriteCity, removeFavoriteCity } from './services/jsonServer';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) handleSearch(lastCity);

    const loadFavorites = async () => {
      const favoriteCities = await getFavoriteCities();
      setFavorites(favoriteCities);
    };
    loadFavorites();
  }, []);

  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    if (data) {
      setWeather(data);
      setForecast(data.forecast.forecastday);
      localStorage.setItem('lastCity', city);
    } else {
      alert("City not found");
    }
  };

  const toggleTemperature = () => setIsCelsius(!isCelsius);

  const addToFavorites = async () => {
    if (weather) {
      const newCity = { id: weather.location.name, name: weather.location.name };
      if (await addFavoriteCity(newCity)) setFavorites([...favorites, newCity]);
    }
  };

  const removeFromFavorites = async (cityId) => {
    await removeFavoriteCity(cityId);
    setFavorites(favorites.filter(city => city.id !== cityId));
  };

  const selectFavorite = (cityName) => handleSearch(cityName);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-black flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">The Weather Forecasting</h1>
      <Search onSearch={handleSearch} />

      <div className="flex space-x-4">
        <button
          onClick={toggleTemperature}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
        </button>
        <button onClick={addToFavorites} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
          Add to Favorites
        </button>
      </div>

      {weather && (
        <WeatherDisplay weather={weather} forecast={forecast} isCelsius={isCelsius} />
      )}

      <Favorites
        favorites={favorites}
        onSelectFavorite={selectFavorite}
        onRemoveFavorite={removeFromFavorites}
      />
    </div>
  );
};

export default App;