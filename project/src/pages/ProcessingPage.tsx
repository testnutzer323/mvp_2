import React, { useState, useEffect } from 'react';

export const ProcessingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5; // Increase by 1.5% every 50ms for smooth animation
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm mx-auto w-full shadow-lg">
        <div className="text-center space-y-6">
          {/* SOOLVE Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="SOOLVE - Solutions When You Need Them"
              className="w-24 h-auto"
            />
          </div>

          {/* Loading Spinner */}
          <div className="flex justify-center mb-6">
            <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-gray-800 rounded-full"></div>
          </div>

          {/* Progress Text */}
          <div className="text-gray-800 font-medium text-base mb-4">
            Preparing Your Diagnostics...
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-300 rounded-full h-2 mb-3">
            <div 
              className="bg-gray-800 h-2 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Progress Percentage */}
          <div className="text-sm text-gray-600">
            {progress}% Complete
          </div>
        </div>
      </div>
    </div>
  );
};