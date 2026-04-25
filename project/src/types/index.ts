export interface ServiceProvider {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  specialization: string;
  estimatedTime: string;
  hourlyRate: string;
  avatar: string;
  address?: string;
  phone?: string;
}

export interface Component {
  id: string;
  name: string;
  health: number;
  status: 'Critical' | 'Fair' | 'Good';
  recommendation: 'Replace' | 'Monitor' | 'No action';
  needsReplacement: boolean;
  partNumber?: string;
  description?: string;
}

export interface Part {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  deliveryDays: number;
  inStock: boolean;
  seller: string;
  isRecommended?: boolean;
  partNumber?: string;
  description?: string;
  url?: string;
}

export interface ScanData {
  image: File | null;
  imagePreview: string | null;
  description: string;
}

export type FridgeTypeCode = 'RF' | 'RS' | 'RT' | 'RZ' | 'RH' | 'RM';

export interface FridgeType {
  code: FridgeTypeCode;
  name: string;
  description: string;
}

export interface ApplianceSegment {
  fridgeType: FridgeType;
  modelNumber: string;
}

export interface UserPreferences {
  cost: number;
  time: number;
  effort: number;
  priceImportance: number;
  deliverySpeedImportance: number;
}

export type CurrentPage =
  | 'landing'
  | 'scan'
  | 'questionary'
  | 'processing' 
  | 'diagnosis' 
  | 'professional-help' 
  | 'self-repair' 
  | 'parts-comparison' 
  | 'profile' 
  | 'service-options' 
  | 'consultation' 
  | 'booking';