import { useState } from 'react';

export const useWeatherAPI = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [city, setCity] = useState('London');

  // Replace with your OpenWeatherMap API key
  const API_KEY = '29d104a36eaf7d80aaba21092edec0f6';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchWeatherData = async (cityName) => {
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
      setError('Please add your OpenWeatherMap API key to use this dashboard');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError('');

      // Fetch current weather
      const currentResponse = await fetch(
        `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!currentResponse.ok) {
        throw new Error('City not found');
      }
      
      const currentData = await currentResponse.json();

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      const forecastData = await forecastResponse.json();

      setWeatherData(currentData);
      setForecastData(forecastData);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    forecastData,
    loading,
    error,
    city,
    fetchWeatherData
  };
};
