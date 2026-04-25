import React from 'react';
import { ShoppingCart, Phone, Calendar, Settings } from 'lucide-react';
import { UserPreferences } from '../types';
import { PreferenceSlider } from '../components/PreferenceSlider';
import { calculateRecommendationPercentages } from '../utils/recommendations';

interface ProfilePageProps {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
  onServiceOptions: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  preferences,
  onPreferencesChange,
  onServiceOptions
}) => {
  const { diyPercentage, proPercentage } = calculateRecommendationPercentages(preferences);

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Decision Preferences */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Decision Preferences</h2>
        </div>
        
        <div className="space-y-6">
          <PreferenceSlider
            label="Cost Priority"
            value={preferences.cost}
            onChange={(value) => onPreferencesChange({ ...preferences, cost: value })}
          />
          
          <PreferenceSlider
            label="Time Priority"
            value={preferences.time}
            onChange={(value) => onPreferencesChange({ ...preferences, time: value })}
          />
          
          <PreferenceSlider
            label="Effort Priority"
            value={preferences.effort}
            onChange={(value) => onPreferencesChange({ ...preferences, effort: value })}
          />

          <PreferenceSlider
            label="Price Importance (for parts)"
            value={preferences.priceImportance}
            onChange={(value) => onPreferencesChange({ ...preferences, priceImportance: value })}
          />

          <PreferenceSlider
            label="Delivery Speed Importance"
            value={preferences.deliverySpeedImportance}
            onChange={(value) => onPreferencesChange({ ...preferences, deliverySpeedImportance: value })}
          />
        </div>

        {/* Current Recommendation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Current AI Recommendation</h3>
          <div className="flex gap-4">
            <div className="flex-1 text-center">
              <div className="text-xl font-bold text-gray-900">{diyPercentage}%</div>
              <div className="text-sm text-gray-600">DIY Repair</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xl font-bold text-gray-600">{proPercentage}%</div>
              <div className="text-sm text-gray-600">Professional Help</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Easy Checkout</div>
              <div className="text-sm text-gray-500">Quick purchase for listed parts</div>
            </div>
          </button>

          <button 
            onClick={onServiceOptions}
            className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-5 h-5 text-gray-600" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Service Options</div>
              <div className="text-sm text-gray-500">Connect with service providers</div>
            </div>
          </button>
        </div>
      </div>

      {/* Service Options */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Provider Options</h2>
        
        <div className="grid grid-cols-3 gap-3">
          <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-6 h-6 text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">By Item</div>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
            <Phone className="w-6 h-6 text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">A Call</div>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors">
            <Calendar className="w-6 h-6 text-gray-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Schedule</div>
          </button>
        </div>
      </div>
    </div>
  );
};