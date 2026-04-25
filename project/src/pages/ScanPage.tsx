import React from 'react';
import { Home, Search, Camera, User } from 'lucide-react';

interface ScanPageProps {
  onScanProduct: () => void;
}

export const ScanPage: React.FC<ScanPageProps> = ({ onScanProduct }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Main Content Area - Large empty space */}
      <div className="flex-1 flex items-end justify-center pb-12 min-h-0">
        
        {/* Scan Product Button */}
        <button
          onClick={onScanProduct}
          className="bg-gray-900 text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg"
        >
          Scan Product
        </button>
        
        {/* Small space below button */}
        <div className="h-8"></div>
      
      </div> {/* ← Closed the flex-1 container here */}

      {/* Recent Scans Section */}
      <div className="bg-white px-6 py-6 flex-shrink-0">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Scans
        </h3>
        
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xs text-gray-500">Image</span>
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-gray-900">
                Industrial Pump
              </div>
              <div className="text-sm text-gray-500">
                Scanned on May 15, 2025
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-xs text-gray-500">Image</span>
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-gray-900">
                CNC Machine
              </div>
              <div className="text-sm text-gray-500">
                Scanned on May 10, 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1 text-gray-900">
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500">
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500">
            <Camera className="w-5 h-5" />
            <span className="text-xs">Scan</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500">
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>

    </div>
  );
};
