import React, { useState } from 'react';
import { ChevronRight, Refrigerator } from 'lucide-react';
import { FridgeType, FridgeTypeCode, ApplianceSegment, ScanData } from '../types';

const FRIDGE_TYPES: FridgeType[] = [
  { code: 'RF', name: 'French Door', description: 'Double doors on top, freezer drawer on bottom' },
  { code: 'RS', name: 'Side-by-Side', description: 'Fridge and freezer side by side, full height' },
  { code: 'RT', name: 'Top-Mount', description: 'Freezer compartment on top, fridge on bottom' },
  { code: 'RZ', name: 'Bespoke / Column', description: 'Modular column-style, customizable panels' },
  { code: 'RH', name: 'French Door (Alt)', description: 'French-door style, alternative line' },
  { code: 'RM', name: 'Modular', description: 'Rare modular-style configuration' },
];

interface QuestionaryPageProps {
  scanData: ScanData | null;
  onComplete: (segment: ApplianceSegment) => void;
}

export const QuestionaryPage: React.FC<QuestionaryPageProps> = ({ scanData, onComplete }) => {
  const [selectedType, setSelectedType] = useState<FridgeTypeCode | null>(null);
  const [modelNumber, setModelNumber] = useState('');

  const handleContinue = () => {
    const fridgeType = FRIDGE_TYPES.find(t => t.code === selectedType);
    if (!fridgeType) return;
    onComplete({ fridgeType, modelNumber: modelNumber.trim() });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 p-6 space-y-6">

        {scanData?.imagePreview && (
          <div className="rounded-xl overflow-hidden border border-gray-200 max-h-36">
            <img src={scanData.imagePreview} alt="Your appliance" className="w-full h-36 object-cover" />
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">What type of Samsung fridge?</h2>
          <p className="text-sm text-gray-500 mb-4">
            Select the style that matches your refrigerator so we can find the right parts and repair guides.
          </p>

          <div className="space-y-2">
            {FRIDGE_TYPES.map((type) => (
              <button
                key={type.code}
                onClick={() => setSelectedType(type.code)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-colors text-left ${
                  selectedType === type.code
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedType === type.code ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  <Refrigerator className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{type.name}</span>
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{type.code}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{type.description}</p>
                </div>
                <ChevronRight className={`w-5 h-5 flex-shrink-0 ${
                  selectedType === type.code ? 'text-gray-900' : 'text-gray-300'
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Model number <span className="text-gray-400 font-normal text-sm">(optional)</span></h2>
          <p className="text-sm text-gray-500 mb-3">
            Usually found on a sticker inside the fridge door or on the back of the unit.
          </p>
          <input
            type="text"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            placeholder="e.g. RF28R7351SR"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm text-gray-900 placeholder-gray-400 font-mono"
          />
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={handleContinue}
          disabled={!selectedType}
          className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
            selectedType
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
