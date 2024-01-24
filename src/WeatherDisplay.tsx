// src/WeatherDisplay.tsx
import React from 'react';

const WeatherDisplay: React.FC<{ data: any }> = ({ data }) => {
  // Extract data from the 'data' prop and display it
  // Display current weather conditions and 5-day forecast
  return (
    <div className="weather-display">
      {/* Display current weather */}
      <div className="current-weather">
        {/* City name, date, weather icon, temperature, humidity, and wind speed */}
      </div>
      {/* Display 5-day forecast */}
      <div className="forecast">
        {/* For each day: date, weather icon, temperature, humidity, and wind speed */}
      </div>
    </div>
  );
};

export default WeatherDisplay;
