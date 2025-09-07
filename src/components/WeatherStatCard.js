import React from 'react';

const WeatherStatCard = ({ icon, label, value }) => (
  <div className="bg-white/10 rounded-2xl p-4">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-sm opacity-80">{label}</span>
    </div>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

export default WeatherStatCard;

