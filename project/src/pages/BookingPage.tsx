import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const providers = [
    {
      id: 1,
      name: "John's Repair Service",
      rating: 4.8,
      price: "$80-120/hr",
      distance: "1.2 miles away"
    },
    {
      id: 2,
      name: "Quick Fix Experts",
      rating: 4.6,
      price: "$90-130/hr",
      distance: "2.5 miles away"
    }
  ];

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Service Provider Selection */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Service Provider</h2>
        
        <div className="space-y-3">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedProvider === provider.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedProvider(provider.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{provider.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      {provider.rating}
                    </span>
                    <span>{provider.price}</span>
                    <span>{provider.distance}</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedProvider === provider.id
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-300'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h2>
        
        <div className="grid grid-cols-7 gap-2">
          {dates.map((date) => {
            const dateStr = date.toISOString().split('T')[0];
            const isSelected = selectedDate === dateStr;
            const isToday = date.toDateString() === today.toDateString();
            
            return (
              <button
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                className={`p-3 rounded-lg text-center transition-colors ${
                  isSelected
                    ? 'bg-blue-500 text-white'
                    : 'border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-xs text-gray-500 mb-1">
                  {date.toLocaleDateString('en', { weekday: 'short' })}
                </div>
                <div className={`font-medium ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  {date.getDate()}
                </div>
                {isToday && (
                  <div className="text-xs text-blue-600 mt-1">Today</div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Time</h2>
          
          <div className="grid grid-cols-4 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg text-center transition-colors ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking Summary */}
      {selectedProvider && selectedDate && selectedTime && (
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <span>{providers.find(p => p.id === selectedProvider)?.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span>{new Date(selectedDate).toLocaleDateString('en', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>{selectedTime}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Service at your location</span>
            </div>
          </div>
          
          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};