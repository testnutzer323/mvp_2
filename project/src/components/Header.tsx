import React from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { CurrentPage } from '../types';

interface HeaderProps {
  currentPage: CurrentPage;
  onBack: () => void;
  onProfileClick: () => void;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onBack, onProfileClick, title }) => {
  const showBackButton = currentPage !== 'landing';
  const showProfileButton = currentPage !== 'profile';
  
  const getTitle = () => {
    if (title) return title;
    
    switch (currentPage) {
      case 'scan': return 'EquipScan';
      case 'processing': return 'Processing';
      case 'diagnosis': return 'Diagnosis Results';
      case 'professional-help': return 'Find Professional Help';
      case 'self-repair': return 'Self-Repair Guide';
      case 'parts-comparison': return 'Parts Comparison';
      case 'profile': return 'Profile Settings';
      case 'service-options': return 'Service Options';
      case 'consultation': return 'Expert Consultation';
      case 'booking': return 'Schedule Service';
      default: return 'SOOLVE';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        {showBackButton && (
          <button onClick={onBack} className="mr-3 p-1">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-gray-900">{getTitle()}</h1>
      </div>
      
      {showProfileButton && (
        <button onClick={onProfileClick} className="p-2 rounded-full hover:bg-gray-100">
          <User className="w-6 h-6 text-gray-600" />
        </button>
      )}
    </div>
  );
};