import React from 'react';
import { ShoppingCart, Phone, Calendar, Clock, Video } from 'lucide-react';
import { mieleServicePackages } from '../data/mieleData';

interface ServiceOptionsPageProps {
  onConsultation: () => void;
  onBooking: () => void;
}

export const ServiceOptionsPage: React.FC<ServiceOptionsPageProps> = ({
  onConsultation,
  onBooking
}) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* By Item */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <ShoppingCart className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">By Item</h2>
        </div>
        
        <p className="text-gray-600 mb-4">Find service providers by equipment category</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <img 
                src="/ChatGPT Image Jul 28, 2025, 09_13_37 PM.png" 
                alt="Miele PW 6080"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Miele PW 6080 Vario</div>
              <div className="text-sm text-gray-500">F11 Drain Fault - Current scan</div>
            </div>
            <button className="text-gray-900 hover:text-gray-700 text-sm font-medium">Select</button>
          </div>
        </div>
      </div>

      {/* A Call */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">A Call</h2>
        </div>
        
        <p className="text-gray-600 mb-4">Get immediate expert consultation</p>
        
        <div className="space-y-3">
          <button 
            onClick={onConsultation}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-green-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Miele Factory Hotline</div>
                <div className="text-sm text-gray-500">0800 225 5705 • Free diagnosis</div>
              </div>
            </div>
            <div className="text-gray-900 text-sm font-medium">Call Free</div>
          </button>
          
          <button 
            onClick={onConsultation}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Remote Diagnosis</div>
                <div className="text-sm text-gray-500">Video support • €25/15min</div>
              </div>
            </div>
            <div className="text-gray-900 text-sm font-medium">Start Video</div>
          </button>
        </div>
      </div>

      {/* Schedule a Request */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Miele PROtect Service Plans</h2>
        </div>
        
        <div className="space-y-3 mb-4">
          {mieleServicePackages.map((pkg) => (
            <div key={pkg.id} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{pkg.name}</h3>
                <span className="text-sm font-medium text-gray-900">{pkg.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
              <ul className="text-xs text-gray-500 space-y-1">
                {pkg.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <button 
          onClick={onBooking}
          className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Book Technician (€235-€265)
        </button>
      </div>
    </div>
  );
};