// src/api/weather.ts
import axios from 'axios';

const API_KEY = 'c87120f4f0057256f6ae9f36ae2b9c6d';

export const getWeatherData = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  return response.data;
};

