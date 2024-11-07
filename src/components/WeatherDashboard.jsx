import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../services/api';

function WeatherDashboard({ city }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [tempUnit, setTempUnit] = useState(localStorage.getItem('tempUnit') || 'C');

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(city, tempUnit);
      setWeather(data.current);
      setForecast(data.forecast.forecastday);
    };
    fetchWeather();
  }, [city, tempUnit]);

  const toggleUnit = () => {
    const newUnit = tempUnit === 'C' ? 'F' : 'C';
    setTempUnit(newUnit);
    localStorage.setItem('tempUnit', newUnit);
  };

  return (
    <div className="mt-6">
      {weather && (
        <div className="text-center">
          <h2 className="text-3xl">{city}</h2>
          <p className="text-xl">
            {tempUnit === 'C' ? weather.temp_c : weather.temp_f}°{tempUnit}
          </p>
          <button onClick={toggleUnit} className="mt-2 p-2 bg-green-500 text-white rounded">
            Toggle °C/°F
          </button>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {forecast.map((day) => (
            <div key={day.date} className="border p-2 rounded">
              <h3>{day.date}</h3>
              <p>
                {tempUnit === 'C' ? day.day.avgtemp_c : day.day.avgtemp_f}°{tempUnit}
              </p>
              <p>{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;