import React from 'react';

interface TowerSelectorProps {
  onSelect: (tower: string) => void;
}

const TowerSelector: React.FC<TowerSelectorProps> = ({ onSelect }) => {
  const towers = ['Tower A', 'Tower B', 'Tower C'];

  return (
    <div className="selector">
      {towers.map((tower) => (
        <div key={tower} className="card" onClick={() => onSelect(tower)}>
          {tower}
        </div>
      ))}
    </div>
  );
};

export default TowerSelector;
