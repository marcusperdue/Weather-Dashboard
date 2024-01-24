import React, { useState } from 'react';
import './SearchForm.css';  
 


 

interface SearchFormProps {
  onCitySelect: (city: string) => void;
  searchHistory: string[];
  setSearchHistory: (history: string[]) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onCitySelect, searchHistory, setSearchHistory }) => {
  const [city, setCity] = useState<string>('');

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        onCitySelect(data.name);  
        if (!searchHistory.includes(data.name)) {
          const updatedHistory = [...searchHistory, data.name];
          setSearchHistory(updatedHistory);
          localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        }
        setCity('');
      } else {
        console.error('City not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="search-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          className="city-input"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
