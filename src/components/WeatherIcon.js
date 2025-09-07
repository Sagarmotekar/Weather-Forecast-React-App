import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

const WeatherIcon = ({ weatherMain, description, size = 24, className = "text-white" }) => {
  const iconProps = { size, className };
  
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return <Sun {...iconProps} className="text-yellow-300" />;
    case 'clouds':
      return <Cloud {...iconProps} className="text-gray-300" />;
    case 'rain':
    case 'drizzle':
      return <CloudRain {...iconProps} className="text-blue-300" />;
    case 'snow':
      return <Cloud {...iconProps} className="text-white" />;
    default:
      return <Cloud {...iconProps} className="text-gray-300" />;
  }
};

export default WeatherIcon;
