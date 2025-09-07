// components/CurrentWeather.js
import React from 'react';
import { MapPin, Thermometer, Droplets, Wind, Eye } from 'lucide-react';
import WeatherIcon from './WeatherIcon';
import WeatherStatCard from './WeatherStatCard';

const CurrentWeather = ({ weatherData }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <h2 className="text-2xl font-bold">{weatherData.name}, {weatherData.sys.country}</h2>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-80">{formatTime(weatherData.dt)}</p>
          <p className="text-sm opacity-80">{formatDate(weatherData.dt)}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="scale-150">
              <WeatherIcon 
                weatherMain={weatherData.weather[0].main} 
                description={weatherData.weather[0].description} 
              />
            </div>
            <div className="text-6xl font-light">{Math.round(weatherData.main.temp)}°</div>
          </div>
          <p className="text-xl capitalize mb-2">{weatherData.weather[0].description}</p>
          <p className="text-sm opacity-80">
            Feels like {Math.round(weatherData.main.feels_like)}°
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <WeatherStatCard
            icon={<Thermometer className="w-5 h-5" />}
            label="Min/Max"
            value={`${Math.round(weatherData.main.temp_min)}° / ${Math.round(weatherData.main.temp_max)}°`}
          />
          <WeatherStatCard
            icon={<Droplets className="w-5 h-5" />}
            label="Humidity"
            value={`${weatherData.main.humidity}%`}
          />
          <WeatherStatCard
            icon={<Wind className="w-5 h-5" />}
            label="Wind"
            value={`${Math.round(weatherData.wind.speed)} m/s`}
          />
          <WeatherStatCard
            icon={<Eye className="w-5 h-5" />}
            label="Visibility"
            value={`${Math.round(weatherData.visibility / 1000)} km`}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
