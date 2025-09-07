import React from 'react';
import ForecastCard from './ForecastCard';

const FiveDayForecast = ({ forecastData }) => {
  const getDailyForecast = () => {
    if (!forecastData) return [];
    
    const dailyData = {};
    
    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyData[date]) {
        dailyData[date] = {
          dt: item.dt,
          temp_max: item.main.temp_max,
          temp_min: item.main.temp_min,
          weather: item.weather[0]
        };
      } else {
        dailyData[date].temp_max = Math.max(dailyData[date].temp_max, item.main.temp_max);
        dailyData[date].temp_min = Math.min(dailyData[date].temp_min, item.main.temp_min);
      }
    });

    return Object.values(dailyData).slice(0, 5);
  };

  const dailyForecast = getDailyForecast();

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => (
          <ForecastCard key={index} day={day} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;

