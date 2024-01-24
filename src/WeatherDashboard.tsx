// src/WeatherDashboard.tsx
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSearch = async () => {
    // Implement logic to fetch weather data for the entered city from the API
    // Update the 'weatherData' state with the fetched data
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default WeatherDashboard;
