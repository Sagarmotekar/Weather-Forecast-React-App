import React from 'react';
import WeatherIcon from './WeatherIcon';

const ForecastCard = ({ day, index }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/10 rounded-2xl p-4 text-center">
      <p className="text-sm opacity-80 mb-2">
        {index === 0 ? 'Today' : formatDate(day.dt)}
      </p>
      <div className="flex justify-center mb-3">
        <WeatherIcon 
          weatherMain={day.weather.main} 
          description={day.weather.description} 
        />
      </div>
      <p className="text-xs capitalize mb-2 opacity-90">
        {day.weather.description}
      </p>
      <div className="flex justify-between text-sm">
        <span className="font-semibold">{Math.round(day.temp_max)}°</span>
        <span className="opacity-70">{Math.round(day.temp_min)}°</span>
      </div>
    </div>
  );
};

export default ForecastCard;
