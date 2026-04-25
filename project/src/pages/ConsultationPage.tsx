import React, { useState } from 'react';
import { Phone, Video, Clock, User } from 'lucide-react';

export const ConsultationPage: React.FC = () => {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "HVAC Systems",
      rating: 4.9,
      reviews: 156,
      price: "$25/15min",
      available: true,
      avatar: "👩‍🔬"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialty: "Appliance Repair",
      rating: 4.8,
      reviews: 203,
      price: "$20/15min",
      available: true,
      avatar: "👨‍🔧"
    },
    {
      id: 3,
      name: "Lisa Chen",
      specialty: "Industrial Equipment",
      rating: 4.7,
      reviews: 89,
      price: "$30/15min",
      available: false,
      avatar: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Experts</h2>
        
        <div className="space-y-4">
          {experts.map((expert) => (
            <div 
              key={expert.id}
              className={`border border-gray-200 rounded-lg p-4 cursor-pointer transition-colors ${
                selectedExpert === expert.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:bg-gray-50'
              } ${!expert.available ? 'opacity-50' : ''}`}
              onClick={() => expert.available && setSelectedExpert(expert.id)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  {expert.avatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-gray-900">{expert.name}</h3>
                    <div className="flex items-center gap-2">
                      {expert.available ? (
                        <div className="flex items-center gap-1 text-green-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Busy</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{expert.specialty}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        {expert.rating} ({expert.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{expert.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExpert && (
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Start Consultation</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Phone className="w-8 h-8 text-green-600" />
              <span className="text-sm font-medium text-gray-900">Voice Call</span>
              <span className="text-sm text-gray-500">$25/15min</span>
            </button>
            
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Video className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Video Call</span>
              <span className="text-sm text-gray-500">$35/30min</span>
            </button>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> You'll be charged per minute. The consultation will automatically end when time expires or you can end it early.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};