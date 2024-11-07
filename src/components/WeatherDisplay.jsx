import React from 'react';
import { FaTemperatureLow, FaCloudSunRain } from 'react-icons/fa';

const WeatherDisplay = ({ weather, forecast, isCelsius }) => {
  const convertTemp = (temp) => (isCelsius ? temp : (temp * 1.8 + 32).toFixed(1));

  return (
    <div className="weather-display bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-8 max-w-md w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600">{weather.location.name}</h2>
        <p className="text-lg">{weather.location.region}, {weather.location.country}</p>
        <div className="flex items-center justify-center mt-4 text-2xl">
          <FaTemperatureLow className="mr-2 text-blue-500" />
          <span>{convertTemp(weather.current.temp_c)}°{isCelsius ? 'C' : 'F'}</span>
        </div>
        <p className="text-lg text-gray-500 mt-2">{weather.current.condition.text}</p>
      </div>
      
      <h3 className="mt-6 text-xl font-semibold text-blue-600">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {forecast.map((day, index) => (
          <div key={index} className="bg-blue-50 p-3 rounded-lg shadow-sm text-center">
            <h4 className="text-lg font-medium">{day.date.split('-')[2]}</h4>
            <FaCloudSunRain className="text-yellow-500 mx-auto my-2" />
            <span className="text-lg font-bold">{convertTemp(day.day.avgtemp_c)}°{isCelsius ? 'C' : 'F'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;