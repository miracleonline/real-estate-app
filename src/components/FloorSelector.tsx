import React from 'react';

interface FloorSelectorProps {
  tower: string;
  onSelect: (floor: number) => void;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({ tower, onSelect }) => {
  const floors = Array.from({ length: 15 }, (_, i) => 15 - i);

  return (
    <div className="selector">
      {floors.map((floor) => (
        <div key={floor} className="card" onClick={() => onSelect(floor)}>
          Floor {floor}
        </div>
      ))}
    </div>
  );
};

export default FloorSelector;
