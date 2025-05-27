import React, { useState } from 'react';
import { Myth } from '../../types';

interface MythCardProps {
  myth: Myth;
}

const MythCard: React.FC<MythCardProps> = ({ myth }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      className="relative h-80 w-full perspective-1000 cursor-pointer group"
      onClick={handleFlip}
    >
      <div 
        className={`h-full w-full relative preserve-3d duration-500 rounded-xl ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front - Myth */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 transition-opacity group-hover:opacity-70"
          />
          <img 
            src={myth.imageUrl} 
            alt={myth.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-blue-600 rounded-full">
              {myth.category.charAt(0).toUpperCase() + myth.category.slice(1)}
            </div>
            <h3 className="text-xl font-bold mb-2">{myth.title}</h3>
            <p className="text-sm font-medium text-gray-200">{myth.mythText}</p>
            <div className="mt-4 text-sm text-gray-300 flex items-center justify-between">
              <span>Tap to reveal fact</span>
              <span>{new Date(myth.dateAdded).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        {/* Back - Fact */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-green-600 rounded-full">
                FACT
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{myth.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{myth.factText}</p>
            </div>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
              <span>Tap to see myth</span>
              <span>{new Date(myth.dateAdded).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythCard;