import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CityHistory from './components/CityHistory';
import Forecast from './components/Forecast';
import Nav from './components/Nav';
import './App.css';
 

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };
  const handleClearHistory = () => {
    // Clear the search history logic here
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <div className="app-container">
       <Nav />  
      <SearchForm
        onCitySelect={handleCitySelect}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />
   <CityHistory searchHistory={searchHistory} onCityClick={handleCitySelect} onClearSearch={handleClearHistory} />


      {selectedCity && <Forecast city={selectedCity} />}
    </div>
  );
};

export default App;
