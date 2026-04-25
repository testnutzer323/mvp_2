import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Send } from 'lucide-react';
import { ScanData } from '../types';

interface ScanPageProps {
  onSubmit: (data: ScanData) => void;
}

export const ScanPage: React.FC<ScanPageProps> = ({ onSubmit }) => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const handleSubmit = () => {
    if (!image) return;
    onSubmit({ image, imagePreview, description });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 p-6 space-y-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Upload a Photo</h2>
          <p className="text-sm text-gray-500 mb-4">
            Take or upload a photo of your Samsung appliance or the issue you're experiencing.
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileSelect}
          />

          {imagePreview ? (
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <img
                src={imagePreview}
                alt="Uploaded preview"
                className="w-full max-h-72 object-cover"
              />
              <button
                onClick={clearImage}
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="flex flex-col items-center gap-2 p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-colors"
              >
                <Camera className="w-8 h-8 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Take Photo</span>
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center gap-2 p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-colors"
              >
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Upload Image</span>
              </button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Describe the Issue</h2>
          <p className="text-sm text-gray-500 mb-3">
            Tell us what's going wrong — error codes, unusual sounds, or any symptoms you've noticed.
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. My Samsung washing machine is showing error code 4E and won't fill with water..."
            className="w-full h-32 px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none resize-none text-sm text-gray-900 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={handleSubmit}
          disabled={!image}
          className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
            image
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Send className="w-5 h-5" />
          Diagnose Issue
        </button>
      </div>
    </div>
  );
};
