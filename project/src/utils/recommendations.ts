import { UserPreferences } from '../types';

export const calculateRecommendationPercentages = (preferences: UserPreferences) => {
  // Normalize preferences to 0-1 scale
  const costWeight = preferences.cost / 100;
  const timeWeight = preferences.time / 100;
  const effortWeight = preferences.effort / 100;
  
  // DIY typically better for cost-conscious users
  // Professional better for time-conscious and effort-averse users
  const diyScore = (costWeight * 0.8) + (timeWeight * 0.2) + (effortWeight * 0.1);
  const proScore = (costWeight * 0.2) + (timeWeight * 0.8) + (effortWeight * 0.9);
  
  // Normalize to percentages
  const total = diyScore + proScore;
  const diyPercentage = Math.round((diyScore / total) * 100);
  const proPercentage = 100 - diyPercentage;
  
  return { diyPercentage, proPercentage };
};

export const getRecommendationText = (preferences: UserPreferences): string => {
  const { diyPercentage } = calculateRecommendationPercentages(preferences);
  
  if (diyPercentage > 60) {
    return "Based on your cost/time/effort profile we suggest DIY repair";
  } else if (diyPercentage < 40) {
    return "Based on your cost/time/effort profile we suggest professional help";
  } else {
    return "Both options are equally suitable based on your preferences";
  }
};