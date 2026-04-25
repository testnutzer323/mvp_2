import { ServiceProvider, Component, Part } from '../types';
import { mieleServiceProviders, mieleComponents, mieleParts } from './mieleData';

// Use Miele-specific data for the demo
export const mockServiceProviders: ServiceProvider[] = mieleServiceProviders;
export const mockComponents: Component[] = mieleComponents;

// Function to get parts for a specific component
export const getPartsForComponent = (componentId: string): Part[] => {
  return mieleParts[componentId] || [];
};