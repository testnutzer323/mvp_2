import React from 'react';
import { CheckCircle } from 'lucide-react';

interface RecommendationBadgeProps {
  percentage: number;
  isRecommended: boolean;
}

export const RecommendationBadge: React.FC<RecommendationBadgeProps> = ({ 
  percentage, 
  isRecommended 
}) => {
  if (!isRecommended) return null;

  return (
    <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
      <CheckCircle className="w-3 h-3" />
      {percentage}%
    </div>
  );
};