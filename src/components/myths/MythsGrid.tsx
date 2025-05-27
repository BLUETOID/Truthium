import React from 'react';
import MythCard from './MythCard';
import { Myth } from '../../types';

interface MythsGridProps {
  myths: Myth[];
}

const MythsGrid: React.FC<MythsGridProps> = ({ myths }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {myths.map((myth) => (
        <MythCard key={myth.id} myth={myth} />
      ))}
    </div>
  );
};

export default MythsGrid;