import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center">
    <div className="text-white text-center">
      <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
      <p className="text-xl">Loading weather data...</p>
    </div>
  </div>
);

export default LoadingSpinner;
