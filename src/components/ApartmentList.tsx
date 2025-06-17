import React from 'react';
import placeholder from '../assets/placeholder.jpg';

interface Apartment {
  id: number;
  area: string;
  type: string;
  rooms: number;
}

interface ApartmentListProps {
  onSelect: (apartment: Apartment) => void;
}

const dummyData: Apartment[] = [
  { id: 1, area: '80 sqm', type: '2BHK', rooms: 3 },
  { id: 2, area: '100 sqm', type: '3BHK', rooms: 4 },
  { id: 3, area: '60 sqm', type: '1BHK', rooms: 2 },
];

const ApartmentList: React.FC<ApartmentListProps> = ({ onSelect }) => {
  return (
    <div className="apartment-list">
      {dummyData.map((apt) => (
        <div
          className="apartment-card"
          key={apt.id}
          onClick={() => onSelect(apt)}
        >
          <div className="thumbnail">
            <img src={placeholder} alt="Layout" />
          </div>
          <div className="meta">
            <div>Area: {apt.area}</div>
            <div>Type: {apt.type}</div>
            <div>Rooms: {apt.rooms}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApartmentList;
