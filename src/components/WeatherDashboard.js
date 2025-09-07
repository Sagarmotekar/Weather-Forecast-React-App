import React, { useState, useEffect } from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import FiveDayForecast from './FiveDayForecast';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';
import { useWeatherAPI } from "../hooks/useWeatherAPI";



const WeatherDashboard = () => {
  const [searchCity, setSearchCity] = useState('');
  const {
    weatherData,
    forecastData,
    loading,
    error,
    city,
    fetchWeatherData
  } = useWeatherAPI();

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      fetchWeatherData(searchCity.trim());
      setSearchCity('');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorDisplay 
        error={error}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearch={handleSearch}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-blue-800 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <Header 
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSearch={handleSearch}
        />

        {weatherData && (
          <>
            <CurrentWeather weatherData={weatherData} />
            {forecastData && <FiveDayForecast forecastData={forecastData} />}
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;

