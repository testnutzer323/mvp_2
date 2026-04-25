import React, { useState, useMemo } from 'react';
import { Star, Truck, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { UserPreferences, Part } from '../types';
import { getPartsForComponent } from '../data/mockData';
import { PreferenceSlider } from '../components/PreferenceSlider';

interface PartsComparisonPageProps {
  componentId: string;
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
}

export const PartsComparisonPage: React.FC<PartsComparisonPageProps> = ({
  componentId,
  preferences,
  onPreferencesChange
}) => {
  const [localPreferences, setLocalPreferences] = useState({
    priceImportance: preferences.priceImportance,
    deliverySpeedImportance: preferences.deliverySpeedImportance
  });
  const [showFilters, setShowFilters] = useState(false);

  const sortedParts = useMemo(() => {
    const parts = getPartsForComponent(componentId);
    
    return parts.map(part => {
      // Calculate score based on preferences
      const priceScore = (200 - part.price) / 200; // Higher score for lower price
      const deliveryScore = (7 - part.deliveryDays) / 7; // Higher score for faster delivery
      
      const totalScore = 
        (priceScore * localPreferences.priceImportance / 100) +
        (deliveryScore * localPreferences.deliverySpeedImportance / 100);
      
      return { ...part, score: totalScore };
    }).sort((a, b) => b.score - a.score).map((part, index) => ({
      ...part,
      isRecommended: index === 0
    }));
  }, [localPreferences]);

  const handlePreferenceChange = (key: string, value: number) => {
    const newPreferences = { ...localPreferences, [key]: value };
    setLocalPreferences(newPreferences);
    onPreferencesChange({ 
      ...preferences, 
      priceImportance: newPreferences.priceImportance,
      deliverySpeedImportance: newPreferences.deliverySpeedImportance
    });
  };

  const getComponentName = (id: string) => {
    switch (id) {
      case 'drain-pump': return 'Drain Pump #6239560';
      case 'pressure-switch': return 'Pressure Switch #6996821';
      case 'pressure-hose': return 'Pressure Hose #D217337';
      case 'inlet-valve': return 'Water Inlet Valve Set';
      default: return 'Component';
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header Section */}
      <div className="bg-white p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Part Needed: {getComponentName(componentId)}
        </h2>
        <p className="text-sm text-gray-600">
          Compare prices and delivery options from verified suppliers
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-white border-b border-gray-200">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between p-4"
        >
          <span className="font-medium text-gray-900">Filter Options</span>
          {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {showFilters && (
          <div className="px-4 pb-4 space-y-4 border-t border-gray-100">
            <PreferenceSlider
              label="Price Importance"
              value={localPreferences.priceImportance}
              onChange={(value) => handlePreferenceChange('priceImportance', value)}
            />
            
            <PreferenceSlider
              label="Delivery Speed Importance"
              value={localPreferences.deliverySpeedImportance}
              onChange={(value) => handlePreferenceChange('deliverySpeedImportance', value)}
            />
          </div>
        )}
      </div>

      {/* Parts List */}
      <div className="p-4 space-y-3">
        {sortedParts.map((part) => (
          <div key={part.id} className="bg-white rounded-lg relative overflow-hidden">
            {part.isRecommended && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
                Recommended
              </div>
            )}
            
            {/* Part Image */}
            <div className="w-full h-32 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src={getPartImage(componentId)} 
                alt={part.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Part Details */}
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{part.name}</h4>
              
              {/* Rating and Reviews */}
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{part.rating} ({part.reviews} reviews)</span>
              </div>
              
              {/* Delivery and Stock Info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{part.deliveryDays}-day delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span className={`text-sm ${part.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {part.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              {/* Supplier */}
              <div className="text-sm text-gray-500 mb-3">
                Sold by {part.seller}
              </div>
              
              {part.partNumber && (
                <div className="text-xs text-gray-500 mb-3">
                  Part #: {part.partNumber}
                </div>
              )}
              
              {/* Price and Buy Button */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    €{part.price}
                  </div>
                  {part.isRecommended && (
                    <div className="text-xs text-green-600">Best value</div>
                  )}
                </div>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    part.inStock
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!part.inStock}
                  onClick={() => part.url && window.open(part.url, '_blank')}
                >
                  Buy Now
                </button>
              </div>
              
              {/* Description */}
              {part.description && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{part.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function getPartImage(componentId: string): string {
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