import React from 'react';
import './CityHistory.css';
 

interface CityHistoryProps {
  searchHistory: string[];
  onCityClick: (city: string) => void;
  onClearSearch: () => void;  
}

const CityHistory: React.FC<CityHistoryProps> = ({ searchHistory, onCityClick, onClearSearch }) => {
  return (
    <div className="city-history">
      <h2>Search History</h2>
      {searchHistory.length === 0 ? (
        <p>No cities searched yet.</p>
      ) : (
        <>
          <ul>
            {searchHistory.map((city, index) => (
              <li key={index} onClick={() => onCityClick(city)}>
                {city}
              </li>
            ))}
          </ul>
          <button onClick={onClearSearch}>Clear Search</button>  
        </>
      )}
    </div>
  );
};

export default CityHistory;
