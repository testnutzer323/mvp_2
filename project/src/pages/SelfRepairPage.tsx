import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { mieleRepairSteps } from '../data/mieleData';

interface SelfRepairPageProps {
  onFindProfessional: () => void;
}

export const SelfRepairPage: React.FC<SelfRepairPageProps> = ({ onFindProfessional }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = mieleRepairSteps.length;
  const currentStepData = mieleRepairSteps[currentStep - 1];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gray-800 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={currentStepData.image} 
              alt={currentStepData.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900">
            {currentStepData.title}
          </h2>
          
          <p className="text-gray-600">
            {currentStepData.description}
          </p>

          {/* Step Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Duration: </span>
              <span className="text-gray-600">{currentStepData.duration}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Tools: </span>
              <span className="text-gray-600">{currentStepData.tools.join(', ')}</span>
            </div>
          </div>

          {/* Safety Warning */}
          {currentStepData.safety && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-medium">⚠️ Safety:</span>
                <span className="text-red-800 text-sm">{currentStepData.safety}</span>
              </div>
            </div>
          )}

          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
            <Play className="w-4 h-4" />
            Play Voice Guide
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <button
            onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
            disabled={currentStep === totalSteps}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Step
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Help Option */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-center">
          <p className="text-gray-900 mb-3">Too Complex? Get Professional Help</p>
          <button
            onClick={onFindProfessional}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Book Miele Technician (€235-€265)
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 p-4 text-center">
        <p className="text-xs text-gray-500">Miele PW 6080 Vario Repair Guide</p>
        <p className="text-xs text-gray-500">⚠️ High-voltage disclaimer - See full manual for complete safety instructions</p>
      </div>
    </div>
  );
};