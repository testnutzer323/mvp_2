import React from 'react';
import { Play } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      {/* SOOLVE Logo */}
      <div className="flex justify-center mb-8 pt-8">
        <img 
          src="/logo.png" 
          alt="SOOLVE - Solutions When You Need Them"
          className="w-48 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto text-center">
        <div className="space-y-6">
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Users upload a video of the problem, and the system instantly diagnoses the 
            issue, providing tailored solutions.
          </p>

          <button
            onClick={onGetStarted}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto"
          >
            <Play className="w-5 h-5" />
            Get Started
          </button>
        </div>
      </div>

      {/* Compact Features */}
      <div className="mt-8 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-gray-600">01</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">AI Diagnostics</h3>
            <p className="text-sm text-gray-600">
              Visual recognition algorithms analyze user-uploaded images or videos to detect the exact problem.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-gray-600">02</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Problem-Product Mapping</h3>
            <p className="text-sm text-gray-600">
              Once diagnosed, the system provides immediate part recommendations or a link to a local service provider.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-gray-600">03</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Smart Decisions</h3>
            <p className="text-sm text-gray-600">
              Personalized recommendations based on your preferences and repair complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};