import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings, ShoppingCart } from 'lucide-react';
import { UserPreferences, Component } from '../types';
import { mockComponents, getPartsForComponent } from '../data/mockData';
import { calculateRecommendationPercentages, getRecommendationText } from '../utils/recommendations';
import { RecommendationBadge } from '../components/RecommendationBadge';
import { PreferenceSlider } from '../components/PreferenceSlider';

interface DiagnosisPageProps {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
  onSelfRepair: () => void;
  onProfessionalHelp: () => void;
  onViewParts: (componentId: string) => void;
}

export const DiagnosisPage: React.FC<DiagnosisPageProps> = ({
  preferences,
  onPreferencesChange,
  onSelfRepair,
  onProfessionalHelp,
  onViewParts
}) => {
  const [showComponents, setShowComponents] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const { diyPercentage, proPercentage } = calculateRecommendationPercentages(preferences);
  const recommendationText = getRecommendationText(preferences);

  const getStatusColor = (status: Component['status']) => {
    switch (status) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Good': return 'bg-green-100 text-green-800';
    }
  };

  const getRecommendationBadgeColor = (recommendation: Component['recommendation']) => {
    switch (recommendation) {
      case 'Replace': return 'bg-red-500';
      case 'Monitor': return 'bg-yellow-500';
      case 'No action': return 'bg-green-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Equipment Image */}
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center relative">
        <img 
          src="/ChatGPT Image Jul 28, 2025, 09_13_37 PM.png" 
          alt="Miele PW 6080 Vario Washer with F11 Error"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
          F11 ERROR
        </div>
      </div>
      
      {/* Problem Area Banner */}
      <div className="bg-gray-700 text-white px-4 py-2">
        <span className="text-sm font-medium">Problem Area: Drain System</span>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-white p-4 space-y-4">
        {/* Problem Identification */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Problem Identified: Drain Fault F11</h2>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-600">Confidence level:</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
              90% Drain Pump | 8% Pressure Switch | 2% Hose Height
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Drain fault detected - 3 min to self-shutdown if water remains. Cycle aborted with 24 kg wet load still inside (≈ 35 l water). 
            Most likely cause is drain pump blockage or failure.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="relative">
            <button
              onClick={onSelfRepair}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors relative"
            >
              DIY Repair (est. 18 min, €0-€120 parts)
            </button>
            <RecommendationBadge percentage={diyPercentage} isRecommended={diyPercentage > proPercentage} />
          </div>

          <button
            onClick={onProfessionalHelp}
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors relative"
          >
            Book Technician (ETA 3h, from €235)
          </button>
        </div>

        {/* Additional Information */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Additional Information</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Estimated repair time: 18-24 minutes</li>
            <li>• Potential cost range: €95 - €120 (parts only)</li>
            <li>• Severity: High - Immediate attention recommended</li>
            <li>• Tools needed: Torx T20 screwdriver, drain container</li>
          </ul>
        </div>
      </div>
      
      {/* Component Health Analysis */}
      <div className="bg-white border-t border-gray-200">
        <button
          onClick={() => setShowComponents(!showComponents)}
          className="w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-gray-900">Component Health Analysis</h3>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
              1 component needs replacement
            </span>
          </div>
          {showComponents ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showComponents && (
          <div className="space-y-0">
            {mockComponents.map((component) => (
              <div key={component.id}>
                {/* Component Banner */}
                <div className="bg-gray-700 text-white px-4 py-2 border-t border-gray-600">
                  <button
                    onClick={() => onViewParts(component.id)}
                    className="text-sm font-medium hover:text-gray-200 transition-colors text-left w-full flex items-center gap-2"
                  >
                    <img 
                      src={getComponentImage(component.id)} 
                      alt={component.name}
                      className="w-4 h-4 object-cover rounded"
                    />
                    Component: {component.name}
                  </button>
                </div>
                
                {/* Component Details */}
                <div className="bg-white px-4 py-3 border-b border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">
                    {component.health}% {component.status.toLowerCase()}
                    <span className={`ml-2 font-medium ${
                      component.recommendation === 'Replace' ? 'text-red-600' : 
                      component.recommendation === 'Monitor' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {component.recommendation === 'Replace' ? '! Replace' : 
                       component.recommendation === 'Monitor' ? '? Monitor' : '✓ No action'}
                    </span>
                  </div>
                  {component.description && (
                    <div className="text-xs text-gray-500 mt-1">
                      {component.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 p-4 text-center">
        <p className="text-xs text-gray-500">Miele PW 6080 Vario | Serial: 96110231</p>
        <p className="text-xs text-gray-500">Scanned: Friday 18:10 | AI Diagnostic v2.1</p>
      </div>
    </div>
  );

  function getComponentImage(componentId: string): string {
    switch (componentId) {
      case 'drain-pump':
        return '/ventil.png';
      case 'pressure-switch':
        return '/stecker.png';
      case 'pressure-hose':
        return '/kable.png';
      case 'inlet-valve':
        return '/ventil.png';
      default:
        return '/ventil.png';
    }
  }
};