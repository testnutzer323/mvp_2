import React from 'react';
import { Search, Star, MapPin } from 'lucide-react';
import { mockServiceProviders } from '../data/mockData';

interface ProfessionalHelpPageProps {
  onServiceOptions: () => void;
}

export const ProfessionalHelpPage: React.FC<ProfessionalHelpPageProps> = ({ onServiceOptions }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search service providers"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filter Tags */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50">
          Location
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50">
          Availability
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50">
          Equipment Type
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50">
          Price
        </button>
      </div>

      {/* Service Providers */}
      <div className="space-y-4">
        {mockServiceProviders.map((provider, index) => (
          <div key={provider.id} className="bg-white rounded-lg p-4">
            {index > 0 && <div className="border-t border-gray-200 -mx-4 mb-4"></div>}
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                {provider.avatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                  <span className="text-sm text-gray-500">{provider.distance}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{provider.rating}</span>
                  <span className="text-sm text-gray-500">({provider.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{provider.specialization}</p>
                
                {provider.address && (
                  <p className="text-xs text-gray-500 mb-2">{provider.address}</p>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Est. repair time: {provider.estimatedTime}</span>
                  <span className="text-sm font-medium">{provider.hourlyRate}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    {provider.phone ? `Call ${provider.phone}` : 'Call Now'}
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Insurance Section */}
      <div className="bg-white rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Miele PROtect Service Plans</h3>
        <p className="text-sm text-gray-600 mb-3">Choose from Inspect (€189/yr), Prevent (€399/yr), or Complete (€699/yr) coverage.</p>
        <button 
          onClick={onServiceOptions}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          View Service Plans
        </button>
      </div>
    </div>
  );
};