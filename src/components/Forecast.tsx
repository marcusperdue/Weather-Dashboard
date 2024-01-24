import React, { useEffect, useState } from 'react';
import './Forecast.css';
 

interface ForecastProps {
  city: string;
}

interface ForecastData {
  date: string;
  dayOfWeek: string; 
  temperature: string;
  windSpeed: string;
  humidity: string;
  icon: string;
}

const Forecast: React.FC<ForecastProps> = ({ city }) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();

          // Filter and group forecast data by date
          const filteredData: ForecastData[] = data.list.reduce(
            (acc: ForecastData[], item: any) => {
              const date = item.dt_txt.split(' ')[0];  
              const timestamp = Date.parse(date);
              const dayOfWeek = new Date(timestamp).toLocaleDateString('en-US', {
                weekday: 'short',
              });

              if (!acc.some((entry) => entry.date === date)) {
                acc.push({
                  date: date,
                  dayOfWeek: dayOfWeek,
                  temperature: item.main.temp + '°C',
                  windSpeed: item.wind.speed + ' m/s',
                  humidity: item.main.humidity + '%',
                  icon: item.weather[0].icon,
                });
              }
              return acc;
            },
            []
          ).slice(0, 5);  

          setForecastData(filteredData);
        } else {
          console.error('City not found');
          setForecastData([]);  
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (city) {
      fetchForecastData();
    }
  }, [city]);

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast for {city}</h2>
      <div className="forecast-items">
        {forecastData.map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{item.dayOfWeek}</p>
            <p>{item.date}</p>
            <p>Temperature: {item.temperature}</p>
            <p>Wind Speed: {item.windSpeed}</p>
            <p>Humidity: {item.humidity}</p>
            <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather Icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
