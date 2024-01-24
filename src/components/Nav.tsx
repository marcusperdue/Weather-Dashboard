import React from 'react';
import './Nav.css';  

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const locales: string | string[] | undefined = undefined;  
  return date.toLocaleDateString(locales, options);
};

const Nav: React.FC = () => {
  const currentDate = formatDate(new Date());
  const currentTime = formatTime(new Date());

  return (
    <div className="nav">
      <h1>Weather Dashboard</h1>
      <div className="time-and-date">
        <p>{currentTime}</p>
        <p>{currentDate}</p>
      </div>
    </div>
  );
};

export default Nav;
